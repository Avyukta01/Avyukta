"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Settings, Database, Server, CheckCircle, ArrowRight, Lightbulb, Cloud } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const techStackAdvisoryServices = [
  {
    title: "Technology Assessment",
    description: "Evaluating your current technology landscape to identify strengths, weaknesses, and opportunities.",
    icon: Lightbulb,
    features: [
      "Current Infrastructure Review",
      "Software & Application Audit",
      "Performance Bottleneck Identification",
      "Security Vulnerability Assessment"
    ]
  },
  {
    title: "Future-State Technology Roadmap",
    description: "Developing a strategic roadmap for your technology stack aligned with your business objectives.",
    icon: Brain,
    features: [
      "Technology Gap Analysis",
      "Solution Recommendation",
      "Implementation Phasing",
      "Budget & Resource Planning"
    ]
  },
  {
    title: "Vendor & Tool Selection",
    description: "Assisting in the selection of the right software, hardware, and cloud vendors for your needs.",
    icon: Settings,
    features: [
      "Vendor Evaluation & Comparison",
      "RFP/RFQ Development",
      "Contract Negotiation Support",
      "Proof-of-Concept Guidance"
    ]
  },
  {
    title: "Cloud & Infrastructure Advisory",
    description: "Advising on optimal cloud strategies, infrastructure design, and cost optimization.",
    icon: Cloud,
    features: [
      "Cloud Adoption Strategy",
      "Infrastructure as Code (IaC) Consulting",
      "Hybrid & Multi-Cloud Solutions",
      "Cost Management & Optimization"
    ]
  }
];

const benefits = [
  "Optimized technology investments for maximum ROI.",
  "Enhanced system performance and reliability.",
  "Increased agility and adaptability to market changes.",
  "Reduced operational costs through efficient tech stack.",
  "Improved data security and compliance.",
  "Clear path for future technology innovation and growth."
];

const advisoryProcess = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "In-depth understanding of your business goals and existing IT infrastructure."
  },
  {
    step: "02",
    title: "Assessment & Gap Analysis",
    description: "Evaluating your current tech stack and identifying areas for improvement."
  },
  {
    step: "03",
    title: "Recommendation & Strategy",
    description: "Proposing optimal technologies and developing a tailored strategy."
  },
  {
    step: "04",
    title: "Implementation Guidance",
    description: "Providing expert guidance during the implementation phase of new technologies."
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Ongoing monitoring and fine-tuning to ensure continuous performance."
  },
  {
    step: "06",
    title: "Future-Proofing",
    description: "Ensuring your tech stack is robust and adaptable for future challenges."
  }
];

export default function TechStackAdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Brain className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Smart Technology Stack Advisory
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Guiding you through the complex world of technology to build a robust and future-proof tech stack.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Get Expert Advisory
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Technology Stack Advisory Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStackAdvisoryServices.map((service, index) => (
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
              Benefits of Expert Tech Stack Advisory
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

        {/* Advisory Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Tech Stack Advisory Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryProcess.map((item, index) => (
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
              Ready to Optimize Your Technology Stack?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let our experts guide you to the perfect technology foundation for your business.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Schedule Your Advisory Session
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 