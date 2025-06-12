"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Bot, PhoneCall, MessageSquare, BrainCircuit, ArrowRight, Users, Settings, CheckCircle, BarChart3, TrendingUp, Handshake, ShieldCheck, Mail, Briefcase, Zap, FileCode, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const allProducts = [
  {
    name: "WhatsApp Ai Chat Bot",
    description: "Our flagship AI chatbot offering 24/7 intelligent customer engagement with natural language understanding and multi-platform integration.",
    icon: Bot,
    image: "/images/WhatsAppaiomni.jpg",
    features: [
      "Natural Language Understanding (NLU)",
      "Multi-platform Integration",
      "Customizable Conversation Flows",
      "Seamless Human Agent Handoff",
      "Lead Generation & Qualification",
      "Analytics & Performance Tracking"
    ],
    link: "/products/aichatbotpro"
  },
  {
    name: "AI Voice Caller",
    description: "Transform your voice communications with our AI Voice Caller, automating outbound calls and enhancing inbound interactions.",
    icon: PhoneCall,
    image: "https://placehold.co/600x450.png", // Placeholder image
    features: [
      "Intelligent Outbound Dialing",
      "Conversational IVR & Self-Service",
      "Real-time Voice Transcription",
      "Sentiment Analysis on Calls",
      "CRM Integration",
      "Automated Appointment Management"
    ],
    link: "/products/aivoicecaller"
  },
  {
    name: "AI Agent Development",
    description: "Custom AI agent development services to create intelligent virtual assistants and autonomous process agents.",
    icon: BrainCircuit,
    image: "https://placehold.co/600x450.png", // Placeholder image
    features: [
      "Intelligent Virtual Assistants",
      "Autonomous Process Agents",
      "Customer Service Agents",
      "Natural Language Processing",
      "Task Automation",
      "System Integration"
    ],
    link: "/services/ai-solutions/ai-agent-development"
  },
  {
    name: "CRM Master",
    description: "An all-in-one Customer Relationship Management platform engineered to empower your business with centralized data and automated workflows.",
    icon: Users,
    image: "https://placehold.co/600x450.png", // Placeholder image
    features: [
      "Voice-Based Notifications",
      "Omni Channelled Unified Communication",
      "Sales CRM & Lead Management",
      "Google Modules & Emails Integrations",
      "Attendance, Leave, Task, Salary, Incentive Management",
      "25+ Detailed Reporting Modules"
    ],
    link: "/products/crm"
  },
  {
    name: "DialerIndia",
    description: "An advanced call center solution for efficient outbound and inbound call management, predictive dialing, and comprehensive reporting.",
    icon: PhoneCall,
    image: "https://placehold.co/600x450.png", // Placeholder image
    features: [
      "Predictive & Progressive Dialing",
      "Reporting & Analytics (20+ Reports)",
      "Scalability & User Management",
      "Agent Efficiency Tools (HotKeys, Wrap-up times)",
      "Campaign & Lead Management",
      "CRM & API Integration (Zoho, Salesforce, etc.)"
    ],
    link: "/products/dialer-india"
  },
  {
    name: "Smart Contract Development",
    description: "Build secure, efficient, and scalable smart contracts for various blockchain platforms.",
    icon: FileCode,
    image: "https://placehold.co/600x450.png", // Placeholder image
    features: [
      "Solidity, Rust, and Vyper Development",
      "Smart Contract Auditing",
      "DeFi Protocol Development",
      "NFT & Token Standards"
    ],
    link: "/services/blockchain-development/smart-contract-development"
  }
];

const categories = [
  {
    title: "Customer Engagement",
    description: "AI-powered solutions for enhanced customer interaction and support",
    icon: MessageSquare,
    products: ["WhatsApp Ai Chat Bot", "AI Voice Caller"]
  },
  {
    title: "Process Automation",
    description: "Intelligent automation solutions to streamline business operations",
    icon: Zap,
    products: ["AI Agent Development", "CRM Master", "DialerIndia"]
  },
  {
    title: "Data & Analytics",
    description: "Solutions for gaining insights and making data-driven decisions",
    icon: BarChart3,
    products: ["CRM Master", "DialerIndia"]
  },
  {
    title: "Sales & Marketing",
    description: "Tools to optimize sales processes and marketing campaigns",
    icon: TrendingUp,
    products: ["CRM Master", "DialerIndia"]
  },
  {
    title: "Workforce Management",
    description: "Solutions for efficient employee and task management",
    icon: Briefcase,
    products: ["CRM Master"]
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions including smart contracts and token development",
    icon: Layers,
    products: ["Smart Contract Development"]
  }
];

export default function ExploreProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <BrainCircuit className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Explore All Our Products
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Discover our comprehensive suite of innovative solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={category.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <category.icon className="h-10 w-10 text-primary mr-3" />
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-foreground/90">Related Products:</h4>
                    <ul className="space-y-2">
                      {category.products.map(product => (
                        <li key={product} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Products Section */}
        <section className="section-padding bg-background/50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Full Product Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <Card key={product.name} className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <product.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {product.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0 hover:text-accent">
                      <Link href={product.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
              Ready to Discover the Right Solution for Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-100">
              Contact us today to discuss your specific needs and how our products can help you achieve your goals.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-200">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 