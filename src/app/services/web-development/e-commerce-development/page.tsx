"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ShoppingCart, Shield, DollarSign, Rocket, Users, CheckCircle, Lightbulb, TrendingUp, ArrowRight, Settings, CalendarClock, CreditCard, PiggyBank, Truck, Zap, Smartphone, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Custom E-commerce Store Development",
    description: "Building bespoke online stores from scratch, tailored to your brand, products, and target audience, ensuring a unique shopping experience.",
    icon: ShoppingCart,
  },
  {
    title: "Payment Gateway Integration",
    description: "Seamlessly integrating secure and diverse payment gateways (e.g., Stripe, PayPal, Razorpay) to provide a smooth checkout process for your customers.",
    icon: CreditCard,
  },
  {
    title: "Inventory & Order Management",
    description: "Implementing robust systems to efficiently manage your product inventory, orders, and shipping processes, reducing manual effort and errors.",
    icon: Truck,
  },
  {
    title: "Mobile Commerce (M-commerce) Solutions",
    description: "Optimizing your online store for mobile devices, or developing dedicated mobile shopping apps to reach customers on the go.",
    icon: Smartphone,
  },
  {
    title: "E-commerce SEO & Analytics",
    description: "Enhancing your store's visibility on search engines and providing detailed analytics to track performance, sales, and customer behavior.",
    icon: BarChart,
  },
  {
    title: "Platform Migration & Upgrades",
    description: "Assisting with migrating your existing e-commerce store to a new, more robust platform or upgrading your current system for better performance and security.",
    icon: TrendingUp,
  },
];

const benefits = [
  "Expand your market reach globally with an accessible online storefront.",
  "Increase sales and revenue through a seamless and engaging shopping experience.",
  "Automate inventory, order, and customer management for operational efficiency.",
  "Enhance brand loyalty with a personalized and secure e-commerce platform.",
  "Gain valuable insights into customer behavior and sales trends through analytics.",
  "Ensure robust security for transactions and customer data protection."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business model, target market, and specific e-commerce requirements to devise a tailored strategy.",
  },
  {
    step: "02",
    title: "Design & User Experience (UX)",
    description: "Crafting intuitive, visually appealing, and conversion-focused designs for your online store, emphasizing seamless user journeys.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Building the e-commerce platform with robust code, integrating necessary features, payment gateways, and third-party tools.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing of all functionalities, security aspects, and performance across devices and browsers to ensure a flawless shopping experience.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Careful deployment of your e-commerce store to the live environment, ensuring smooth go-live and minimal downtime.",
  },
  {
    step: "06",
    title: "Post-Launch Support & Optimization",
    description: "Providing ongoing maintenance, security updates, performance monitoring, and optimization to keep your store competitive and thriving.",
  },
];

export default function EcommerceDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <ShoppingCart className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              E-Commerce Development: Powering Your Online Sales
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Creating robust, secure, and user-friendly online stores that drive sales, enhance customer experience, and scale with your business.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Request a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our E-Commerce Development Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-title-glow-primary">
              Benefits of a Professional E-commerce Store
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90 text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Development Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our E-commerce Development Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProcess.map((item, index) => (
                <div key={item.step} className={`p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-accent mr-4">{item.step}</span>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-title-glow-primary">
              Ready to Boost Your Online Sales?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your e-commerce project and build a powerful online store that converts.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get Your Free Quote
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 