"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Cloud, Server, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Database, Globe } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const migrationServices = [
  {
    title: "Lift and Shift Migration",
    description: "Move your existing applications to the cloud with minimal modifications, ensuring quick migration while maintaining current functionality.",
    icon: Server,
    features: [
      "Application Rehosting",
      "Infrastructure Migration",
      "Data Transfer",
      "Performance Optimization"
    ]
  },
  {
    title: "Replatforming",
    description: "Optimize your applications for the cloud by making necessary modifications to take advantage of cloud-native features.",
    icon: Cloud,
    features: [
      "Application Modernization",
      "Cloud-Native Optimization",
      "Database Migration",
      "Service Integration"
    ]
  },
  {
    title: "Refactoring & Re-architecting",
    description: "Completely redesign your applications to be cloud-native, leveraging the full potential of cloud services.",
    icon: Settings,
    features: [
      "Microservices Architecture",
      "Serverless Implementation",
      "Cloud-Native Design",
      "Scalability Optimization"
    ]
  },
  {
    title: "Hybrid Cloud Solutions",
    description: "Create a seamless integration between on-premises and cloud environments for optimal flexibility and performance.",
    icon: Globe,
    features: [
      "Hybrid Architecture Design",
      "Cross-Platform Integration",
      "Data Synchronization",
      "Security Management"
    ]
  }
];

const benefits = [
  "Reduce infrastructure costs and improve resource utilization",
  "Enhance scalability and performance of your applications",
  "Improve business continuity and disaster recovery",
  "Enable faster innovation and time-to-market",
  "Strengthen security and compliance posture",
  "Gain access to advanced cloud services and features"
];

const migrationProcess = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Evaluating your current infrastructure, applications, and business requirements to create a comprehensive migration strategy."
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Designing the target cloud architecture and creating detailed migration plans for each component."
  },
  {
    step: "03",
    title: "Migration Execution",
    description: "Executing the migration plan with careful coordination and minimal disruption to business operations."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Thorough testing of migrated applications and infrastructure to ensure everything works as expected."
  },
  {
    step: "05",
    title: "Optimization",
    description: "Fine-tuning the cloud environment for optimal performance, cost, and security."
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Providing ongoing support and maintenance to ensure smooth operation in the cloud."
  }
];

export default function CloudMigrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Cloud className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Cloud Migration Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Seamlessly migrate your applications and infrastructure to the cloud with our expert migration services. We ensure a smooth transition while optimizing for performance, cost, and security.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Start Your Migration
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Migration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {migrationServices.map((service, index) => (
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
              Benefits of Cloud Migration
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

        {/* Migration Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {migrationProcess.map((item, index) => (
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help you migrate your applications and infrastructure to the cloud.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Start Your Migration
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 