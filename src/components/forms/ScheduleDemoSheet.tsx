"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const products = [
  "WhatsApp Ai Chat Bot",
  "AI Voice Caller",
  "CRM",
  "DialerIndia"
];

const scheduleDemoSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  product: z.string().min(1, "Please select a product"),
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
});

interface ScheduleDemoSheetProps {
  children: React.ReactNode;
}

export function ScheduleDemoSheet({ children }: ScheduleDemoSheetProps) {
  const [open, setOpen] = React.useState(false);
  const [timeDialogOpen, setTimeDialogOpen] = React.useState(false);
  const [productPopoverOpen, setProductPopoverOpen] = React.useState(false);
  const form = useForm<z.infer<typeof scheduleDemoSchema>>({
    resolver: zodResolver(scheduleDemoSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      product: "",
      timeSlot: "",
    },
  });

  async function onSubmit(data: z.infer<typeof scheduleDemoSchema>) {
    try {
      const response = await fetch("/api/schedule-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to schedule demo");
      }

      toast({
        title: "Demo Scheduled!",
        description: "We'll contact you shortly to confirm your demo appointment.",
      });
      
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule demo. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-background/80 backdrop-blur-md border border-gray-200/50 shadow-lg z-[9998]">
        <SheetHeader className="p-6 pb-4 text-left flex-shrink-0">
          <SheetTitle className="text-2xl font-bold">Schedule a Demo</SheetTitle>
          <SheetDescription>
            Fill out the form below to schedule a personalized demo of our products.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="sales@dialerindia.com" {...field} />
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
                    <Input placeholder="+91 856-00-00-600" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Product</FormLabel>
                  <Popover open={productPopoverOpen} onOpenChange={setProductPopoverOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? field.value : <span>Select a product</span>}
                          <ChevronDown className="ml-auto h-4 w-4 opacity-60" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[320px] p-2 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col gap-2 z-[9999]">
                      {products.map((product) => (
                        <Button
                          key={product}
                          variant={field.value === product ? 'default' : 'outline'}
                          className="w-full py-2 px-0 text-base font-semibold rounded-md border"
                          onClick={() => {
                            field.onChange(product);
                            setProductPopoverOpen(false);
                          }}
                        >
                          {product}
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
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Date</FormLabel>
                  <Dialog>
                    <DialogTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </DialogTrigger>
                    <DialogContent className="w-[320px] max-w-xs p-4 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col items-center justify-center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                        }}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0 || date.getDay() === 6
                        }
                        initialFocus
                        className="mx-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time Slot</FormLabel>
                  <Dialog open={timeDialogOpen} onOpenChange={setTimeDialogOpen}>
                    <DialogTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? field.value : <span>Select a time slot</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </DialogTrigger>
                    <DialogContent className="w-[280px] max-w-xs pt-8 pb-4 px-4 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 w-full mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={field.value === time ? 'default' : 'outline'}
                            className="w-full py-2 px-0 text-sm font-semibold rounded-md"
                            onClick={() => {
                              field.onChange(time);
                              setTimeDialogOpen(false);
                            }}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Schedule Demo</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
} 