
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, Bot, BarChart3, ShieldCheck, Cpu, Speech, Eye, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const aiExpertiseAreas = [
  {
    title: "Machine Learning Solutions",
    icon: Cpu,
    description: "Develop custom machine learning models to solve complex business problems, from predictive analytics to anomaly detection.",
    details: [
      "Predictive Maintenance",
      "Customer Churn Prediction",
      "Fraud Detection Systems",
      "Recommendation Engines",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: Speech,
    description: "Enable intelligent text and speech understanding with our NLP services for chatbots, sentiment analysis, and more.",
    details: [
      "Intelligent Chatbots & Virtual Assistants",
      "Sentiment Analysis & Opinion Mining",
      "Automated Text Summarization",
      "Named Entity Recognition (NER)",
    ],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    description: "Implement advanced computer vision solutions for image recognition, object detection, and video analytics.",
    details: [
      "Object Detection & Tracking",
      "Image Classification & Tagging",
      "Facial Recognition Systems",
      "Automated Quality Control",
    ],
  },
    {
    title: "AI Strategy & Consulting",
    icon: Lightbulb,
    description: "Partner with us to define your AI roadmap, identify high-impact use cases, and integrate AI seamlessly into your operations.",
    details: [
      "AI Readiness Assessment",
      "Use Case Ideation & Prioritization",
      "Data Strategy for AI",
      "AI Governance & Ethics Frameworks",
    ],
  },
];

const featuredAIProducts = [
  {
    name: "AIChatBotPro",
    description: "Our flagship AI chatbot, offering 24/7 intelligent customer engagement.",
    icon: Bot,
    link: "/products/aichatbotpro" // Placeholder link
  },
  {
    name: "AnalyticsMaster",
    description: "Advanced AI-driven analytics platform for deep data insights.",
    icon: BarChart3,
    link: "/products/analyticsmaster" // Placeholder link
  }
];

export default function AIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <BrainCircuit className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Innovatech AI: Engineering the Future, Intelligently
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Leverage the power of Artificial Intelligence to transform your business, unlock new opportunities, and drive unprecedented growth.
            </p>
          </div>
        </section>

        {/* Our AI Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our AI Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiExpertiseAreas.map((area, index) => (
                <Card key={area.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Example Applications:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {area.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Products Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Featured AI Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredAIProducts.map((product, index) => (
                <Card key={product.name} className={`p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <product.icon className="h-10 w-10 text-primary mr-4" />
                    <h3 className="text-2xl font-semibold text-primary">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="link" className="text-accent p-0">
                    <Link href={product.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/products">Explore All Products</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Ethical AI Section */}
        <section className="section-padding">
          <div className="container-max text-center">
            <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-100">
              Ethical & Responsible AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              At Innovatech, we are committed to developing AI solutions that are fair, transparent, and accountable. We prioritize ethical considerations throughout the AI lifecycle, ensuring our technology serves humanity responsibly.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Unlock Your AI Potential?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss how Innovatech's AI expertise can revolutionize your business.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AIProjectInquiry">Talk to Our AI Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
