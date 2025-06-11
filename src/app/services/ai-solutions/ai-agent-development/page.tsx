"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Bot, MessageSquare, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const agentTypes = [
  {
    title: "Intelligent Virtual Assistants",
    description: "Build sophisticated AI agents that understand and respond to natural language, handle complex tasks, and provide personalized assistance.",
    icon: Bot,
    features: [
      "Natural Language Understanding",
      "Context-Aware Conversations",
      "Task Automation & Workflow Integration",
      "Personalization & Learning"
    ]
  },
  {
    title: "Autonomous Process Agents",
    description: "Develop AI agents that can independently execute business processes, make decisions, and optimize operations.",
    icon: Cpu,
    features: [
      "Process Automation & Optimization",
      "Decision-Making Capabilities",
      "Real-time Monitoring & Adaptation",
      "Integration with Existing Systems"
    ]
  },
  {
    title: "Customer Service Agents",
    description: "Create AI-powered customer service agents that provide 24/7 support and handle customer inquiries efficiently.",
    icon: MessageSquare,
    features: [
      "Multi-channel Support",
      "Ticket Classification & Routing",
      "Automated Response Generation",
      "Customer Satisfaction Analysis"
    ]
  },
  {
    title: "Specialized Domain Agents",
    description: "Build AI agents specialized in specific domains like healthcare, finance, or legal services.",
    icon: Settings,
    features: [
      "Domain-Specific Knowledge Integration",
      "Compliance & Regulatory Adherence",
      "Expert-Level Decision Support",
      "Continuous Learning & Updates"
    ]
  }
];

const benefits = [
  "Enhance operational efficiency through intelligent automation",
  "Provide 24/7 availability for customer support and services",
  "Reduce operational costs while improving service quality",
  "Enable scalable and consistent service delivery",
  "Gather valuable insights from agent interactions",
  "Improve customer satisfaction through personalized experiences"
];

const developmentProcess = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Understanding your business needs, use cases, and success criteria for the AI agent."
  },
  {
    step: "02",
    title: "Agent Architecture Design",
    description: "Designing the agent's architecture, capabilities, and integration points with existing systems."
  },
  {
    step: "03",
    title: "Development & Training",
    description: "Building and training the AI agent with relevant data and business rules."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing of agent capabilities, accuracy, and performance across various scenarios."
  },
  {
    step: "05",
    title: "Integration & Deployment",
    description: "Seamless integration with your existing systems and deployment to production."
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring, performance optimization, and capability enhancement."
  }
];

export default function AIAgentDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <BrainCircuit className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              AI Agent Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Build intelligent, autonomous AI agents that transform your business operations and enhance customer experiences.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Start Your Agent Development
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Agent Types Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Types of AI Agents We Develop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {agentTypes.map((type, index) => (
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
              Benefits of AI Agents
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
              Our Development Process
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
              Ready to Build Your AI Agent?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how AI agents can transform your business operations and customer experiences.
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