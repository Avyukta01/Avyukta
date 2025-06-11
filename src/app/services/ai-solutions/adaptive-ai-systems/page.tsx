"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Cpu, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Bot, LineChart } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const systemTypes = [
  {
    title: "Self-Learning Systems",
    description: "AI systems that continuously learn and adapt from new data and experiences to improve performance over time.",
    icon: BrainCircuit,
    features: [
      "Continuous Learning & Adaptation",
      "Performance Optimization",
      "Pattern Recognition",
      "Predictive Analytics"
    ]
  },
  {
    title: "Adaptive Process Automation",
    description: "Intelligent systems that optimize and adapt business processes based on changing conditions and requirements.",
    icon: Settings,
    features: [
      "Dynamic Process Optimization",
      "Real-time Adaptation",
      "Resource Allocation",
      "Workflow Automation"
    ]
  },
  {
    title: "Intelligent Decision Support",
    description: "AI systems that provide adaptive decision-making support based on evolving business conditions and data.",
    icon: LineChart,
    features: [
      "Real-time Decision Analysis",
      "Scenario Planning",
      "Risk Assessment",
      "Performance Monitoring"
    ]
  },
  {
    title: "Adaptive Customer Experience",
    description: "Systems that personalize and adapt customer interactions based on behavior patterns and preferences.",
    icon: Users,
    features: [
      "Personalized Recommendations",
      "Behavioral Analysis",
      "Dynamic Content Delivery",
      "Customer Journey Optimization"
    ]
  }
];

const benefits = [
  "Improve system performance through continuous learning",
  "Adapt to changing business conditions and requirements",
  "Optimize resource utilization and efficiency",
  "Enhance decision-making with real-time insights",
  "Provide personalized experiences at scale",
  "Reduce operational costs through automation"
];

const implementationProcess = [
  {
    step: "01",
    title: "System Assessment",
    description: "Evaluating current systems and identifying opportunities for adaptive AI implementation."
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Designing flexible and scalable system architecture to support adaptive capabilities."
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Building and integrating adaptive AI components with existing systems."
  },
  {
    step: "04",
    title: "Training & Calibration",
    description: "Training the system with historical data and calibrating adaptive parameters."
  },
  {
    step: "05",
    title: "Testing & Validation",
    description: "Rigorous testing of system adaptability and performance across various scenarios."
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization of system performance and adaptation."
  }
];

export default function AdaptiveAISystemsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <BrainCircuit className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Adaptive AI Systems
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Build intelligent systems that learn, adapt, and evolve to meet your changing business needs and drive continuous improvement.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Explore Adaptive AI Solutions
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* System Types Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Types of Adaptive AI Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemTypes.map((type, index) => (
                <Card key={type.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <type.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
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
              Benefits of Adaptive AI Systems
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
              Ready to Build Adaptive AI Systems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how adaptive AI systems can transform your business operations and drive continuous improvement.
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