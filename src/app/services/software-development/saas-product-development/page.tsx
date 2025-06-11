"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Cloud, Zap, Package, Users, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const saasDevelopmentServices = [
  {
    title: "SaaS Product Strategy",
    description: "Defining a clear product vision, market analysis, and feature roadmap for your SaaS.",
    icon: Lightbulb,
    features: [
      "Market Research & Validation",
      "Business Model & Monetization Strategy",
      "Feature Prioritization",
      "MVP Definition"
    ]
  },
  {
    title: "Custom SaaS Development",
    description: "Building scalable, secure, and multi-tenant SaaS applications from the ground up.",
    icon: Cloud,
    features: [
      "Cloud-Native Architecture",
      "Scalable Backend Development",
      "Intuitive Frontend Development",
      "API Development & Integration"
    ]
  },
  {
    title: "SaaS Migration & Modernization",
    description: "Migrating existing applications to a SaaS model or modernizing legacy SaaS platforms.",
    icon: Package,
    features: [
      "Legacy System Assessment",
      "Cloud Migration Strategy",
      "Application Refactoring",
      "Data Migration & Synchronization"
    ]
  },
  {
    title: "SaaS Integration & APIs",
    description: "Integrating your SaaS solution with third-party services and developing robust APIs.",
    icon: Zap,
    features: [
      "Third-Party Integrations (CRM, ERP, Marketing)",
      "Custom API Development",
      "Webhooks & Notifications",
      "Secure Data Exchange"
    ]
  }
];

const benefits = [
  "Faster time-to-market with agile development methodologies.",
  "Scalability to handle growing user bases and data volumes.",
  "Reduced infrastructure costs with cloud-native solutions.",
  "Enhanced security and compliance for sensitive data.",
  "Improved user experience with intuitive and responsive interfaces.",
  "Continuous innovation and updates for competitive advantage."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Ideation",
    description: "Deep dive into your concept, target market, and define key functionalities."
  },
  {
    step: "02",
    title: "Prototyping & Design",
    description: "Creating wireframes, mockups, and interactive prototypes for user validation."
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative development in sprints, with continuous feedback and testing."
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Thorough testing (functional, performance, security) to ensure a robust product."
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Seamless deployment to cloud environments and strategic launch planning."
  },
  {
    step: "06",
    title: "Post-Launch Support & Optimization",
    description: "Ongoing maintenance, feature enhancements, and performance monitoring."
  }
];

export default function SaaSProductDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Cloud className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              SaaS Product Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Bringing your innovative software-as-a-service ideas to life with scalable, secure, and user-centric solutions.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Launch Your SaaS Product
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our SaaS Product Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasDevelopmentServices.map((service, index) => (
                <Card key={service.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
            </ul>
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
              Benefits of SaaS Product Development
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

        {/* Development Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our SaaS Product Development Process
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
              Ready to Build Your Next SaaS Success?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with us to transform your SaaS vision into a market-ready product.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Start Your SaaS Journey
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 