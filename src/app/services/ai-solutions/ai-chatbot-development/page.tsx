"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, MessageSquare, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Bot, Globe } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const chatbotTypes = [
  {
    title: "Customer Service Chatbots",
    description: "Intelligent chatbots that provide instant support, handle inquiries, and resolve common customer issues 24/7.",
    icon: MessageSquare,
    features: [
      "24/7 Customer Support",
      "Multi-language Support",
      "Ticket Classification & Routing",
      "FAQ & Knowledge Base Integration"
    ]
  },
  {
    title: "Sales & Lead Generation Bots",
    description: "Engage potential customers, qualify leads, and guide them through the sales process with AI-powered conversations.",
    icon: Users,
    features: [
      "Lead Qualification",
      "Product Recommendations",
      "Appointment Scheduling",
      "Sales Process Automation"
    ]
  },
  {
    title: "Enterprise Process Bots",
    description: "Streamline internal processes and enhance employee productivity with intelligent workflow automation.",
    icon: Settings,
    features: [
      "HR & IT Support",
      "Process Automation",
      "Document Processing",
      "Internal Knowledge Management"
    ]
  },
  {
    title: "Specialized Industry Bots",
    description: "Domain-specific chatbots tailored for healthcare, finance, education, and other specialized industries.",
    icon: Globe,
    features: [
      "Industry-Specific Knowledge",
      "Compliance & Security",
      "Specialized Workflows",
      "Integration with Industry Tools"
    ]
  }
];

const benefits = [
  "Provide instant, 24/7 customer support and engagement",
  "Reduce operational costs while improving service quality",
  "Handle multiple conversations simultaneously",
  "Gather valuable customer insights and feedback",
  "Scale customer service operations efficiently",
  "Improve customer satisfaction with quick responses"
];

const developmentProcess = [
  {
    step: "01",
    title: "Requirements & Analysis",
    description: "Understanding your business needs, target audience, and chatbot objectives."
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Designing conversation flows, user experience, and technical architecture."
  },
  {
    step: "03",
    title: "Development & Training",
    description: "Building the chatbot and training it with relevant data and business rules."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing of chatbot responses, accuracy, and performance."
  },
  {
    step: "05",
    title: "Integration & Deployment",
    description: "Seamless integration with your platforms and deployment to production."
  },
  {
    step: "06",
    title: "Monitoring & Enhancement",
    description: "Continuous monitoring, performance tracking, and capability enhancement."
  }
];

export default function AIChatbotDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <BrainCircuit className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              AI Chatbot Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Create intelligent, conversational AI chatbots that enhance customer engagement, streamline operations, and drive business growth.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Start Your Chatbot Project
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Chatbot Types Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Types of AI Chatbots We Develop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chatbotTypes.map((type, index) => (
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
              Benefits of AI Chatbots
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
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how an AI chatbot can transform your customer engagement and business operations.
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