
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Building, MessageSquareQuote } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
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
            <Mail className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </div>
        </section>

        {/* Contact Form and Details Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <Card className="shadow-xl animate-fade-in-left animation-delay-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Send className="mr-3 h-7 w-7" /> Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Inquiry about..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your needs..."
                                className="resize-none"
                                {...field}
                                rows={5}
                              />
                            </FormControl>
                            <FormDescription>
                              Max 500 characters.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-8 animate-fade-in-right animation-delay-300">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Building className="mr-3 h-7 w-7" /> Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                      <span>123 Voxaiomni Drive, Tech City, CA 94000, USA</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                      <span>contact@voxaiomni.com</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <MessageSquareQuote className="mr-3 h-7 w-7" /> Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <Button variant="link" asChild className="p-0 text-muted-foreground hover:text-primary">
                       <Link href="/faq">Frequently Asked Questions</Link>
                     </Button>
                     <br />
                     <Button variant="link" asChild className="p-0 text-muted-foreground hover:text-primary">
                       <Link href="/company/careers?subject=CareerInquiry&message=I'm interested in career opportunities at Voxaiomni.">Explore Careers</Link>
                     </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in-up">
              Find Us Here
            </h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden animate-fade-in-up animation-delay-200">
              <Image
                src="https://placehold.co/1200x675.png" 
                alt="Map placeholder showing Voxaiomni office location"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                data-ai-hint="city map office"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
