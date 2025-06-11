"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LayoutTemplate, Palette, Search, Shield, Rocket, CheckCircle, Lightbulb, TrendingUp, ArrowRight, Settings, CalendarClock, Smartphone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Custom Website Design & Development",
    description: "Crafting unique, visually stunning, and highly functional websites from the ground up, tailored to your brand identity and business goals.",
    icon: Palette,
  },
  {
    title: "Responsive Web Design",
    description: "Ensuring your website provides an optimal viewing experience across all devices, from desktops to smartphones, with fluid layouts and adaptable content.",
    icon: Smartphone,
  },
  {
    title: "CMS Integration & Development",
    description: "Implementing and customizing robust Content Management Systems (CMS) like WordPress or headless CMS solutions for easy content management.",
    icon: Settings,
  },
  {
    title: "E-commerce Website Development",
    description: "Building secure and scalable online stores that drive sales, with integrated payment gateways and intuitive shopping experiences.",
    icon: ShoppingCart,
  },
  {
    title: "Website Revitalization & Migration",
    description: "Transforming outdated websites into modern, high-performing platforms or migrating existing sites to new technologies for improved functionality.",
    icon: TrendingUp,
  },
  {
    title: "SEO Optimization & Analytics",
    description: "Implementing on-page and technical SEO best practices to improve your website's search engine ranking and provide analytics for performance tracking.",
    icon: Search,
  },
];

const benefits = [
  "Establish a powerful online presence that captivates your target audience.",
  "Enhance brand credibility and trust with a professional and modern website.",
  "Improve user engagement and conversion rates through intuitive UI/UX.",
  "Gain a competitive edge with a fast, secure, and SEO-optimized website.",
  "Streamline content management with easy-to-use CMS solutions.",
  "Access comprehensive analytics to understand user behavior and optimize performance."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your vision, target audience, and business objectives to define the website's purpose and scope.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes for an engaging and visually appealing user experience.",
  },
  {
    step: "03",
    title: "Development & Coding",
    description: "Building your website with clean, efficient code using modern web technologies and agile methodologies.",
  },
  {
    step: "04",
    title: "Content Integration & SEO",
    description: "Populating your website with content and implementing SEO best practices for better search engine visibility.",
  },
  {
    step: "05",
    title: "Testing & Launch",
    description: "Rigorous testing across browsers and devices to ensure a bug-free, high-performance website before a smooth launch.",
  },
  {
    step: "06",
    title: "Post-Launch Support & Maintenance",
    description: "Providing ongoing maintenance, security updates, and performance monitoring to keep your website optimal and secure.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <LayoutTemplate className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Website Development: Crafting Your Digital Masterpiece
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Building stunning, high-performance, and user-centric websites that captivate your audience and drive measurable business results.
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
              Our Website Development Expertise
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
              Benefits of a Professional Website
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
              Our Website Development Process
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
              Ready to Launch Your Online Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your vision and build a powerful website that drives your business forward.
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