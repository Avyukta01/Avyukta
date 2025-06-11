"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, DollarSign, HelpCircle, Star, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    frequency: "/month",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 10 users",
      "Basic AI analytics",
      "Standard support",
      "5GB Storage",
    ],
    cta: "Get Started",
    href: "/contact?plan=starter",
    icon: Zap,
    featured: false,
  },
  {
    name: "Professional",
    price: "$79",
    frequency: "/month",
    description: "Ideal for growing businesses needing more power and features.",
    features: [
      "Up to 50 users",
      "Advanced AI analytics",
      "Priority support",
      "50GB Storage",
      "API Access",
      "Custom Branding",
    ],
    cta: "Choose Pro",
    href: "/contact?plan=professional",
    icon: Star,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "Tailored solutions for large organizations with specific needs.",
    features: [
      "Unlimited users",
      "Dedicated AI models",
      "24/7 Premium support",
      "Unlimited Storage",
      "SSO Integration",
      "Dedicated Account Manager",
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    icon: ShieldCheck,
    featured: false,
  },
];

const faqItems = [
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can easily upgrade or downgrade your plan at any time from your account settings. Prorated charges or credits will be applied.",
  },
  {
    question: "Is there a free trial available?",
    answer: "We occasionally offer free trials for our Professional plan. Please check our homepage or contact sales for current promotions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also support bank transfers.",
  },
  {
    question: "Do you offer discounts for non-profits or annual billing?",
    answer: "Yes, we offer a discount for registered non-profit organizations and a discount for annual billing on our Starter and Professional plans. Please contact us for more details.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <DollarSign className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Flexible Pricing for Every Business
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Choose the plan that's right for you and unlock your potential with Avyukta.
            </p>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">
                Our Pricing Plans
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up animation-delay-100">
                Simple, transparent pricing. No hidden fees. Ever.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200} ${
                    plan.featured ? "border-2 border-accent ring-4 ring-accent/20" : ""
                  }`}
                >
                  <CardHeader className={`pb-4 ${plan.featured ? "bg-accent/10" : ""}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold text-primary">{plan.name}</h3>
                      {plan.icon && <plan.icon className={`h-8 w-8 ${plan.featured ? "text-accent" : "text-primary/70"}`} />}
                    </div>
                    <p className="text-4xl font-bold">
                      {plan.price}
                      {plan.frequency && <span className="text-lg font-normal text-muted-foreground">{plan.frequency}</span>}
                    </p>
                    <CardDescription className="text-sm h-12">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6">
                    <Button asChild size="lg" className={`w-full ${plan.featured ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-100">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={item.question} className="bg-card shadow-sm rounded-lg mb-3">
                  <AccordionTrigger className="p-6 text-lg font-medium hover:no-underline">
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

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Still Have Questions or Need a Custom Plan?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our team is here to help you find the perfect solution tailored to your unique business needs.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
