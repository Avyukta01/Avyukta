"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MailOpen, Send } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

const defaultValues: Partial<NewsletterFormValues> = {
  email: "",
};

export default function NewsletterPage() {
  const { toast } = useToast();
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: NewsletterFormValues) {
    // Simulate API call for newsletter subscription
    console.log("Subscribing email:", data.email);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to the Avyukta newsletter.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <MailOpen className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Get the latest news, product updates, and exclusive insights from Avyukta directly to your inbox.
            </p>
          </div>
        </section>

        {/* Newsletter Signup Form Section */}
        <section className="section-padding">
          <div className="container-max flex justify-center">
            <Card className="w-full max-w-lg shadow-xl animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  Join Our Mailing List
                </CardTitle>
                <CardDescription className="text-center">
                  Stay informed and ahead of the curve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="flex space-x-2">
                              <Input 
                                type="email" 
                                placeholder="sales@dialerindia.com" 
                                {...field} 
                                className="flex-grow"
                              />
                              <Button 
                                type="submit" 
                                className="bg-accent text-accent-foreground hover:bg-accent/90" 
                                disabled={form.formState.isSubmitting}
                                aria-label="Subscribe"
                              >
                                <Send className="h-5 w-5 md:mr-2" />
                                <span className="hidden md:inline">Subscribe</span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                <p className="text-xs text-muted-foreground mt-6 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
