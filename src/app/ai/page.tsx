"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, Bot, BarChart3, ShieldCheck, Cpu, Speech, Eye, MessageSquare, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const featuredAIProducts = [
  {
    name: "WhatsApp Ai Chat Bot",
    description: "Our flagship AI chatbot, offering 24/7 intelligent customer engagement.",
    icon: Bot,
    link: "/products/whatsapp-ai-chat-bot" // Placeholder link
  },
  {
    name: "AI Voice Caller",
    description: "Transform your voice communications with our AI Voice Caller, automating outbound calls and enhancing inbound interactions.",
    icon: PhoneCall,
    link: "/products/aivoicecaller"
  }
];

// Replace aiExpertiseAreas with new expertise list
const aiExpertiseDetails = [
  {
    title: "1. Multiple Websites Monitoring with Notifications including Phone Calls",
    description: "Automatic monitoring of multiple URLs with instant downtime alerts via notifications and phone calls.",
  },
  {
    title: "2. Automatic monitoring of multiple URLs with downtime alerts",
    description: "Stay informed about your website uptime with real-time monitoring and instant alerts for any downtime.",
  },
  {
    title: "3. Build a Voice AI Chatbot with ElevenLabs and InfraNodus Knowledge Expert",
    description: "Create advanced voice AI chatbots leveraging ElevenLabs and InfraNodus for deep knowledge integration.",
  },
  {
    title: "4. Sticky Note AI Agent (OpenAI Chat Model + More)",
    description: "Build an interactive AI agent with a chat interface, sticky notes, and multiple integrated tools.",
  },
  {
    title: "5. Build an Interactive AI Agent with Chat Interface and Multiple Tools",
    description: "Develop AI agents that can interact, assist, and automate tasks using a chat interface and various tools.",
  },
  {
    title: "6. Voice-Based Appointment Booking System with ElevenLabs AI and Cal.com",
    description: "Automate appointment bookings with a voice-based AI system integrated with ElevenLabs and Cal.com.",
  },
  {
    title: "7. AI-Powered Social Media Content Creator with Multi-Platform Publishing & Approval",
    description: "Generate, schedule, and publish content across multiple social platforms with AI-driven workflows and approval chains.",
  },
  {
    title: "8. Build a Voice AI Chatbot with ElevenLabs and InfraNodus Knowledge Experts",
    description: "Leverage ElevenLabs and InfraNodus to build voice-enabled chatbots with expert knowledge capabilities.",
  },
  {
    title: "9. AI-Powered WhatsApp Chatbot for Text, Voice, Images, and PDF with RAG",
    description: "Deploy WhatsApp chatbots that handle text, voice, images, and PDFs using Retrieval-Augmented Generation (RAG).",
  },
  {
    title: "10. Create & Upload AI-Generated ASMR YouTube Shorts with Seedance, Fal AI, and GPT-4",
    description: "Produce and upload AI-generated ASMR YouTube Shorts using Seedance, Fal AI, and GPT-4 for creative content.",
  },
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
              Avyukta AI: Itf'y your business with revolution IT solutions.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Leverage the power of Artificial Intelligence to transform your business, unlock new opportunities, and drive unprecedented growth.
            </p>
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
                    <Link href="/products/explore">Explore All Products</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Our AI Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our AI Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiExpertiseDetails.map((item, index) => (
                <Card key={item.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-bold mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-base">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              Let's discuss how Avyukta's AI expertise can revolutionize your business.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-white text-black hover:bg-gray-100 animate-fade-in-up animation-delay-300">
                <Link href="#">Talk to Our AI Experts</Link>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
