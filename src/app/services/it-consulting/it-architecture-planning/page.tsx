"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, Layers, CheckCircle, Brain, Server, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import Image from "next/image";

const itArchitectureServices = [
  {
    title: "Enterprise Architecture Design",
    description: "Designing a holistic IT architecture that aligns with your business strategy and future goals.",
    icon: Layers,
    features: [
      "Business Architecture Mapping",
      "Application Architecture Design",
      "Data Architecture Design",
      "Technology Architecture Planning"
    ]
  },
  {
    title: "Cloud Architecture Planning",
    description: "Developing robust and scalable cloud architectures for various cloud platforms (AWS, Azure, GCP).",
    icon: Server,
    features: [
      "Cloud-Native Design",
      "Hybrid & Multi-Cloud Strategies",
      "Microservices Architecture",
      "Cost Optimization in Cloud"
    ]
  },
  {
    title: "Solution Architecture",
    description: "Creating detailed architectural blueprints for specific software solutions and systems.",
    icon: Brain,
    features: [
      "System Integration Design",
      "Performance & Scalability Planning",
      "Security Architecture Integration",
      "Technology Selection"
    ]
  },
  {
    title: "Architecture Review & Optimization",
    description: "Assessing existing IT architectures to identify areas for improvement, modernization, and cost efficiency.",
    icon: TrendingUp,
    features: [
      "Architecture Gap Analysis",
      "Technical Debt Reduction Strategies",
      "Performance Tuning",
      "Security Posture Enhancement"
    ]
  }
];

const benefits = [
  "Future-proof IT infrastructure that supports long-term growth.",
  "Improved system performance, reliability, and scalability.",
  "Reduced operational costs through optimized architecture.",
  "Enhanced security and compliance across all IT systems.",
  "Streamlined decision-making with clear architectural guidelines.",
  "Increased agility to adapt to technological advancements."
];

const planningProcess = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "In-depth understanding of your business objectives and existing IT landscape."
  },
  {
    step: "02",
    title: "Architectural Assessment",
    description: "Evaluating current architecture to identify strengths, weaknesses, and opportunities."
  },
  {
    step: "03",
    title: "Design & Blueprinting",
    description: "Developing detailed architectural designs and roadmaps."
  },
  {
    step: "04",
    title: "Technology Selection",
    description: "Advising on the best technologies and platforms for your architectural needs."
  },
  {
    step: "05",
    title: "Implementation Guidance",
    description: "Providing expert oversight during the implementation of new architectures."
  },
  {
    step: "06",
    title: "Optimization & Governance",
    description: "Establishing governance frameworks and continuous optimization strategies."
  }
];

export default function ITArchitecturePlanningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Building2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              IT Architecture Planning
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Strategize and design robust, scalable, and secure IT architectures that align with your business objectives and drive innovation.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Schedule a Free Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What is IT Architecture Planning? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="IT Architecture Diagram"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="network diagram"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
                Key Aspects of Our IT Architecture Planning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itArchitectureServices.map((service, index) => (
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Benefits of Strategic IT Architecture
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

        {/* Planning Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Approach & Methodologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {planningProcess.map((item, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Architect Your Future?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's build a resilient and innovative IT foundation for your business success.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Get a Free Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 