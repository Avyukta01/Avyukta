"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Database, GitBranch } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const iacServices = [
  {
    title: "Terraform Implementation",
    description: "Design and implement infrastructure using Terraform for multi-cloud and hybrid cloud environments.",
    icon: Code2,
    features: [
      "Infrastructure as Code Development",
      "Multi-cloud Configuration",
      "State Management",
      "Module Development"
    ]
  },
  {
    title: "AWS CloudFormation",
    description: "Create and manage AWS infrastructure using CloudFormation templates and stacks.",
    icon: Cloud,
    features: [
      "Template Development",
      "Stack Management",
      "Resource Provisioning",
      "Change Sets"
    ]
  },
  {
    title: "Azure Resource Manager",
    description: "Implement infrastructure using Azure ARM templates and Bicep for Azure environments.",
    icon: Settings,
    features: [
      "ARM Template Development",
      "Bicep Implementation",
      "Resource Deployment",
      "Policy Management"
    ]
  },
  {
    title: "Kubernetes Configuration",
    description: "Manage Kubernetes infrastructure using declarative configuration and GitOps practices.",
    icon: GitBranch,
    features: [
      "Kubernetes Manifests",
      "Helm Charts",
      "GitOps Implementation",
      "Cluster Management"
    ]
  }
];

const benefits = [
  "Automate infrastructure deployment and management",
  "Ensure consistent and repeatable infrastructure",
  "Enable version control for infrastructure",
  "Improve collaboration and code review",
  "Reduce human error and manual intervention",
  "Facilitate disaster recovery and rollback"
];

const implementationProcess = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Evaluating current infrastructure and planning the IaC implementation strategy."
  },
  {
    step: "02",
    title: "Code Development",
    description: "Developing infrastructure code using appropriate tools and best practices."
  },
  {
    step: "03",
    title: "Testing & Validation",
    description: "Testing infrastructure code and validating configurations."
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description: "Deploying infrastructure code and integrating with existing systems."
  },
  {
    step: "05",
    title: "Documentation & Training",
    description: "Creating documentation and providing training for the team."
  },
  {
    step: "06",
    title: "Maintenance & Updates",
    description: "Maintaining and updating infrastructure code as needed."
  }
];

export default function InfrastructureAsCodePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Code2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Infrastructure as Code
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Automate and manage your infrastructure using code. Implement consistent, reliable, and scalable infrastructure deployments across any cloud platform.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Start Your IaC Journey
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our IaC Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {iacServices.map((service, index) => (
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
              Benefits of Infrastructure as Code
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
              Ready to Automate Your Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how Infrastructure as Code can transform your deployment process.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Start Your Project
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 