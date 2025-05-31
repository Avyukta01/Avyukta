
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
  companyName: z.string().optional(),
  phoneNumber: z.string().refine((val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val), {
    message: "Please enter a valid phone number.",
  }).optional(),
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

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "Avyukta",
      email: "dineshbaghel6251@gmail.com",
      companyName: "",
      phoneNumber: "+91 9588922752",
      interestedService: undefined,
      projectDetails: "",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    try {
      const response = await fetch('/api/send-quote-request', {
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

      if (result.previewUrl) { // Check if Ethereal was used (API sends previewUrl if so)
        toast({
          title: "Test Email Processed (Ethereal)!",
          description: (
            React.createElement('div', null,
              React.createElement('p', null, "Your quote request was processed using a local test service."),
              React.createElement('p', {className: "font-semibold mt-2"}, "Please check your server console (the terminal where 'npm run dev' is running) for the Ethereal preview URL to view the email content."),
              React.createElement('p', {className: "mt-1 text-xs"}, "No actual email was delivered to an inbox.")
            )
          ),
          variant: "default",
          duration: 10000, // Longer duration for this important message
        });
      } else {
        toast({
          title: "Quote Request Submitted!",
          description: result.message || "Thank you! We've received your request and will be in touch soon.",
          variant: "default",
        });
      }
      form.reset();
      setIsOpen(false); // Close the sheet after submission
    } catch (error) {
      let errorMessage = "Could not submit your quote request. Please try again later.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Error submitting quote form:", error);
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-lg w-full p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 text-left">
          <SheetTitle className="text-2xl text-primary">Request a Quote</SheetTitle>
          <SheetDescription>
            Tell us about your project, and we'll get back to you with a personalized quote.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow">
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
                        <Input placeholder="e.g., Avyukta" {...field} />
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
                        <Input type="email" placeholder="e.g., dineshbaghel6251@gmail.com" {...field} />
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
                      <FormLabel>Company Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Voxaiomni Solutions" {...field} />
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
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g., +91 9588922752" {...field} />
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {servicesList.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                <SheetFooter className="pt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 sticky bottom-0 bg-background pb-6 z-10">
                  <SheetClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
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
