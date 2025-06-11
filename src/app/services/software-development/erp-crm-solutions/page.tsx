"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart, Users, Globe, Shield, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const erpCrmServices = [
  {
    title: "Custom ERP Development",
    description: "Building bespoke Enterprise Resource Planning systems to integrate core business processes.",
    icon: Building2,
    features: [
      "Financial Management",
      "Human Resources Management",
      "Supply Chain Management",
      "Manufacturing Operations"
    ]
  },
  {
    title: "CRM System Implementation",
    description: "Implementing and customizing Customer Relationship Management systems to enhance customer interactions.",
    icon: Users,
    features: [
      "Sales Automation",
      "Marketing Automation",
      "Customer Service & Support",
      "Lead & Opportunity Management"
    ]
  },
  {
    title: "Integration Services",
    description: "Seamlessly integrating ERP and CRM solutions with your existing IT infrastructure.",
    icon: Globe,
    features: [
      "Third-Party API Integration",
      "Legacy System Integration",
      "Data Synchronization",
      "Cloud Service Integration"
    ]
  },
  {
    title: "Module Customization & Enhancement",
    description: "Tailoring existing ERP/CRM modules and developing new functionalities to meet unique business needs.",
    icon: BarChart,
    features: [
      "Workflow Automation",
      "Reporting & Analytics Customization",
      "User Interface Personalization",
      "Performance Optimization"
    ]
  }
];

const benefits = [
  "Centralized data for better decision-making and insights.",
  "Increased operational efficiency and automation of key processes.",
  "Improved customer satisfaction and retention.",
  "Enhanced collaboration and communication across departments.",
  "Reduced manual errors and improved data accuracy.",
  "Scalable solutions that support business growth and evolution."
];

const implementationProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business goals, current systems, and defining the scope."
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Designing the ERP/CRM architecture and customizing modules to fit your needs."
  },
  {
    step: "03",
    title: "Development & Configuration",
    description: "Building custom functionalities and configuring the system."
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing to ensure seamless performance and data integrity."
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Implementing the solution and providing comprehensive user training."
  },
  {
    step: "06",
    title: "Support & Continuous Improvement",
    description: "Ongoing support, maintenance, and system optimization."
  }
];

export default function ERPCRMSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Building2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              ERP & CRM Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Streamline your business operations and enhance customer relationships with integrated ERP & CRM solutions.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Optimize Your Business
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our ERP & CRM Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {erpCrmServices.map((service, index) => (
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
              Benefits of Integrated ERP & CRM
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

        {/* Implementation Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Implementation Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationProcess.map((item, index) => (
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
              Ready to Integrate Your Business Systems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Discover how integrated ERP & CRM solutions can revolutionize your operations.
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