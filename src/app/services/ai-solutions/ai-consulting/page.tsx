"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, TrendingUp, Zap, Settings, CheckCircle, ArrowRight, Users, BarChart, Shield } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const consultingServices = [
  {
    title: "AI Strategy Development",
    description: "Create a comprehensive roadmap for AI implementation aligned with your business objectives.",
    icon: BrainCircuit,
    details: [
      "AI Readiness Assessment",
      "Technology Stack Selection",
      "ROI Analysis & Business Case Development",
      "Implementation Roadmap Creation"
    ]
  },
  {
    title: "AI Use Case Identification",
    description: "Identify and prioritize high-impact AI opportunities within your organization.",
    icon: Lightbulb,
    details: [
      "Process Analysis & Opportunity Mapping",
      "Value Proposition Development",
      "Technical Feasibility Assessment",
      "Implementation Priority Setting"
    ]
  },
  {
    title: "Data Strategy & Governance",
    description: "Develop robust data management frameworks to support AI initiatives.",
    icon: BarChart,
    details: [
      "Data Quality Assessment",
      "Data Governance Framework Design",
      "Data Pipeline Architecture",
      "Compliance & Security Planning"
    ]
  },
  {
    title: "AI Ethics & Responsible AI",
    description: "Implement ethical AI practices and ensure responsible AI deployment.",
    icon: Shield,
    details: [
      "Ethical AI Framework Development",
      "Bias Detection & Mitigation",
      "Transparency & Explainability Planning",
      "AI Governance Structure"
    ]
  }
];

const benefits = [
  "Accelerate AI adoption with expert guidance and proven methodologies",
  "Minimize risks and maximize ROI through strategic planning",
  "Build internal AI capabilities and knowledge transfer",
  "Ensure ethical and responsible AI implementation",
  "Align AI initiatives with business objectives",
  "Stay ahead of AI trends and best practices"
];

const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Understanding your current state, business objectives, and AI readiness through comprehensive analysis."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Creating a tailored AI strategy aligned with your business goals and technical capabilities."
  },
  {
    step: "03",
    title: "Use Case Prioritization",
    description: "Identifying and prioritizing high-impact AI opportunities based on business value and feasibility."
  },
  {
    step: "04",
    title: "Implementation Planning",
    description: "Developing detailed implementation plans, including technology selection and resource allocation."
  },
  {
    step: "05",
    title: "Capability Building",
    description: "Building internal AI capabilities through training, knowledge transfer, and best practices."
  },
  {
    step: "06",
    title: "Continuous Support",
    description: "Providing ongoing guidance and support to ensure successful AI implementation and optimization."
  }
];

export default function AIConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <BrainCircuit className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              AI Strategy & Consulting
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Transform your business with expert AI consulting services. We help you navigate the complex world of artificial intelligence and implement solutions that drive real business value.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Schedule a Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our AI Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
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
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{detail}</span>
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
              Benefits of AI Consulting
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

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Consulting Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingProcess.map((item, index) => (
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how our AI consulting services can help you achieve your business objectives.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Get Started Today
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 