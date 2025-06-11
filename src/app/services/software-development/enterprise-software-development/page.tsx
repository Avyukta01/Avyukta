"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Layers, HardDrive, Shield, CheckCircle, ArrowRight, TrendingUp, Handshake } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const enterpriseSoftwareServices = [
  {
    title: "ERP Solutions",
    description: "Developing and integrating robust Enterprise Resource Planning systems for streamlined operations.",
    icon: Building2,
    features: [
      "Custom ERP Development",
      "Module Integration (Finance, HR, Supply Chain)",
      "Data Migration & Analytics",
      "Legacy System Modernization"
    ]
  },
  {
    title: "CRM Systems",
    description: "Building Customer Relationship Management platforms to enhance customer engagement and sales.",
    icon: Handshake,
    features: [
      "Sales & Marketing Automation",
      "Customer Service & Support",
      "Lead Management",
      "Customizable Dashboards"
    ]
  },
  {
    title: "Supply Chain Management (SCM)",
    description: "Optimizing your supply chain with advanced software solutions for logistics and inventory.",
    icon: Layers,
    features: [
      "Inventory Management Systems",
      "Logistics & Transportation Software",
      "Supplier Relationship Management",
      "Demand Forecasting"
    ]
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Leveraging data to provide actionable insights and improve decision-making.",
    icon: TrendingUp,
    features: [
      "Data Warehousing",
      "Reporting & Dashboards",
      "Predictive Analytics",
      "Real-time Monitoring"
    ]
  }
];

const benefits = [
  "Streamlined operations and improved efficiency across departments.",
  "Enhanced data visibility and informed decision-making.",
  "Increased productivity and reduced operational costs.",
  "Scalable solutions that adapt to business growth.",
  "Improved customer relationships and satisfaction.",
  "Stronger security and compliance posture."
];

const developmentProcess = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "In-depth analysis of your business processes and strategic goals."
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Designing a robust, scalable, and secure enterprise software architecture."
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Building modules and integrating with existing systems in an agile manner."
  },
  {
    step: "04",
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing to ensure reliability, performance, and security."
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Seamless deployment and thorough user training for smooth adoption."
  },
  {
    step: "06",
    title: "Support & Optimization",
    description: "Ongoing support, maintenance, and performance optimization."
  }
];

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Building2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Enterprise Software Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Building robust and scalable enterprise software solutions to optimize operations and drive business growth.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Transform Your Enterprise
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Enterprise Software Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseSoftwareServices.map((service, index) => (
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
              Benefits of Enterprise Software
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
              Our Enterprise Software Development Process
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
              Ready to Elevate Your Enterprise Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how our enterprise software solutions can drive your business forward.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 