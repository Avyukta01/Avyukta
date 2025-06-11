"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, PhoneCall, ArrowRight } from "lucide-react"; // Changed BarChart3 to PhoneCall
import Image from "next/image";
import Link from "next/link"; // Added Link

const aiInnovations = [
  {
    title: "WhatsApp Ai Chat Bot",
    icon: Bot,
    description: "Elevate customer interactions and automate support with our intelligent, 24/7 AI-powered chatbot solution.",
    image: "/images/WhatsAppaiomni.jpg",
    imageHint: "ai chatbot interface",
    features: [
      "Natural Language Understanding (NLU)", 
      "Multi-platform Integration (Web, Mobile, Social)", 
      "Customizable Conversation Flows", 
      "Seamless Human Agent Handoff",
      "Lead Generation & Qualification Tools",
      "Analytics & Performance Tracking"
    ],
    learnMoreLink: "/products/aichatbotpro"
  },
  {
    title: "AI Voice Caller",
    icon: PhoneCall, // Changed from BarChart3
    description: "Transform your voice communications with our AI Voice Caller, automating outbound calls and enhancing inbound interactions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai voice call dashboard",
    features: [
      "Intelligent Outbound Dialing Campaigns", 
      "Conversational IVR & Self-Service", 
      "Real-time Voice Transcription & Analytics", 
      "Sentiment Analysis on Calls",
      "CRM Integration for Personalized Interactions",
      "Automated Appointment Reminders & Follow-ups"
    ],
    learnMoreLink: "/products/aivoicecaller"
  }
];

const FeaturedAISection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured AI Innovations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our groundbreaking AI solutions designed to drive efficiency, enhance engagement, and unlock new growth opportunities for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {aiInnovations.map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-ai-hint={item.imageHint}
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <item.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2 text-foreground/90">Key Features:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  {item.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0 hover:text-accent">
                  <Link href={item.learnMoreLink}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/ai">
             Explore All AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAISection;
