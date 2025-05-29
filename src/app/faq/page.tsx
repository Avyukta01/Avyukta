
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "What services does Innovatech offer?",
    answer: "Innovatech offers a wide range of technology solutions including custom software development, AI and machine learning services, web and mobile application development, cloud consulting, and IT strategy services. We tailor our solutions to meet the unique needs of each client.",
  },
  {
    question: "How can I get a quote for my project?",
    answer: "You can request a quote by visiting our 'Contact Us' page and filling out the inquiry form with details about your project. Alternatively, you can call us directly. We aim to respond to all inquiries within 24-48 business hours.",
  },
  {
    question: "What industries does Innovatech specialize in?",
    answer: "While we have experience across various sectors, Innovatech has particular expertise in FinTech, Healthcare, Retail, and SaaS. Our adaptable approach allows us to deliver impactful solutions for businesses of all sizes in diverse industries.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on the scope, complexity, and specific requirements. After an initial consultation and requirement gathering, we provide a detailed project plan with estimated timelines. We prioritize transparent communication throughout the project lifecycle.",
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we offer various post-launch support and maintenance packages to ensure your solution continues to perform optimally. We believe in building long-term partnerships with our clients.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <HelpCircle className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Help Center & Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Find answers to common questions about Innovatech, our services, and products.
            </p>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  value={`item-${index + 1}`} 
                  key={item.question} 
                  className={`bg-card shadow-lg rounded-lg animate-fade-in-up animation-delay-${(index * 100) + 200}`}
                >
                  <AccordionTrigger className="p-6 text-lg font-medium text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Still Need Help? CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <Card className="max-w-2xl mx-auto text-center shadow-xl animate-fade-in-up animation-delay-300">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Still Have Questions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you can't find the answer you're looking for in our FAQs, please don't hesitate to reach out to our support team. We're here to help!
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact?subject=SupportInquiry">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
