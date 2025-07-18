"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const servicesList = [
  { id: "web-development", label: "Web Development" },
  { id: "mobile-apps", label: "Mobile App Development" },
  { id: "ai-solutions", label: "AI & ML Solutions" },
  { id: "ideation-design", label: "Ideation & Design" },
  { id: "software-development", label: "Software Development" },
  { id: "blockchain-development", label: "Blockchain Development" },
  { id: "cloud-solutions", label: "Cloud Solutions" },
  { id: "devops-cicd", label: "DevOps & CI/CD" },
  { id: "other", label: "Other/Not Sure" },
];

const quoteFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  companyName: z.string().min(1, {
    message: "Company name is required.",
  }),
  phoneNumber: z.string().refine((val) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val), {
    message: "Please enter a valid phone number.",
  }),
  interestedService: z.string({
    required_error: "Please select a service.",
  }),
  projectDetails: z.string().min(10, {
    message: "Project details must be at least 10 characters.",
  }).max(1000, {
    message: "Project details must not exceed 1000 characters.",
  }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormSheetProps {
  children: React.ReactNode; // This will be the trigger button
}

export function QuoteFormSheet({ children }: QuoteFormSheetProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicePopoverOpen, setServicePopoverOpen] = React.useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      interestedService: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit quote request.');
      }

      toast({
        title: 'Success',
        description: 'Your quote request has been sent successfully.',
      });
      form.reset();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send quote request. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-lg w-full p-0 flex flex-col bg-background/80 backdrop-blur-md border border-gray-200/50 shadow-lg overflow-visible">
        <SheetHeader className="p-6 pb-4 text-left flex-shrink-0">
          <SheetTitle className="text-2xl text-primary">Request a Quote</SheetTitle>
          <SheetDescription>
            Tell us about your project, and we\'ll get back to you with a personalized quote.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow max-h-[calc(100vh - 150px)]">
          <div className="p-6 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interestedService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Service of Interest</FormLabel>
                      <Popover open={servicePopoverOpen} onOpenChange={setServicePopoverOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? servicesList.find(s => s.id === field.value)?.label : <span>Select a service</span>}
                              <ChevronDown className="ml-auto h-4 w-4 opacity-60" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[320px] p-2 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col gap-2 z-[9999]">
                          {servicesList.map((service) => (
                            <Button
                              key={service.id}
                              variant={field.value === service.id ? 'default' : 'outline'}
                              className="w-full py-2 px-0 text-base font-semibold rounded-md border"
                              onClick={() => {
                                field.onChange(service.id);
                                setServicePopoverOpen(false);
                              }}
                            >
                              {service.label}
                            </Button>
                          ))}
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your project requirements, goals, and any specific features..."
                          className="resize-none min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide as much detail as possible. Max 1000 characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SheetFooter className="pt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 sticky bottom-0 bg-background pb-6 z-10 flex-shrink-0">
                  <SheetClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-40 bg-white text-black border border-black hover:bg-gray-100" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </SheetFooter>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
} 