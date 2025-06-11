"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PhoneCall, Mic, Voicemail, BarChartHorizontalBig, Users, CheckCircle, Settings, Database, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Intelligent Outbound Campaigns",
    description: "Automate personalized outbound calls for promotions, reminders, surveys, and lead follow-ups with dynamic scripting.",
    icon: PhoneCall,
  },
  {
    title: "Conversational IVR & Self-Service",
    description: "Provide natural language understanding for inbound calls, enabling smart routing and efficient customer self-service options.",
    icon: Mic,
  },
  {
    title: "Real-time Voice Analytics & Transcription",
    description: "Transcribe calls instantly, analyze sentiment, identify keywords, and gain deep insights from customer conversations.",
    icon: BarChartHorizontalBig,
  },
  {
    title: "Seamless CRM Integration",
    description: "Sync call data, customer history, and outcomes with your existing CRM for a unified view and personalized interactions.",
    icon: Database,
  },
  {
    title: "Automated Call Summarization & Tagging",
    description: "Generate concise call summaries and automatically tag calls with relevant topics for easier review and follow-up.",
    icon: Voicemail,
  },
  {
    title: "Compliance & Security Focused",
    description: "Adhere to industry regulations with features like call recording consent, data encryption, and secure data handling.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Dramatically Increase Agent Efficiency and Productivity.",
  "Enhance Customer Experience with faster, personalized voice interactions.",
  "Reduce Operational Costs by automating routine call tasks.",
  "Improve Outbound Campaign Effectiveness and Reach.",
  "Gain Actionable Insights from rich voice data analytics.",
  "Ensure Scalability to handle fluctuating call volumes with ease.",
];

const useCases = [
    { name: "Appointment Reminders", description: "Automate calls to remind customers of upcoming appointments.", image: "https://placehold.co/400x300.png", aiHint: "calendar reminder call" },
    { name: "Customer Feedback Surveys", description: "Conduct voice surveys post-interaction to gather feedback.", image: "https://placehold.co/400x300.png", aiHint: "survey feedback voice" },
    { name: "Promotional Campaigns", description: "Run targeted outbound calling campaigns for new offers.", image: "https://placehold.co/400x300.png", aiHint: "marketing campaign megaphone" },
    { name: "Intelligent Call Routing", description: "Route inbound calls effectively based on caller intent.", image: "https://placehold.co/400x300.png", aiHint: "call center routing" },
];

export default function AIVoiceCallerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <PhoneCall className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              AI Voice Caller: Intelligent Voice Automation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Transform your voice communications with Avyukta's AI-powered caller that automates outbound calls, enhances inbound interactions, and provides actionable insights from every conversation.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AIVoiceCaller_Demo">Schedule a Demo</Link>
            </Button>
          </div>
        </section>

        {/* What is AI Voice Caller? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="AI Voice Caller Dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="voice analytics dashboard"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Introducing AI Voice Caller</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Avyukta's AI Voice Caller leverages the latest advancements in artificial intelligence and voice technology to revolutionize how businesses engage with customers over the phone. It's designed to handle a vast range of voice communication tasks with human-like conversational abilities.
              </p>
              <p className="text-muted-foreground text-lg">
                From intelligent outbound campaigns that feel personal, to sophisticated inbound call handling and deep voice analytics, our AI Voice Caller empowers you to optimize your operations, improve customer satisfaction, and unlock new levels of efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 animate-fade-in-up">
              Key Features:
            </h2>
            <ul className="space-y-4 text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-accent">•</span>
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Transform Your Voice Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.name} className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                   <div className="relative h-48 w-full">
                    <Image
                        src={useCase.image}
                        alt={useCase.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={useCase.aiHint}
                    />
                    </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Revolutionize Your Voice Communications?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how our AI Voice Caller can automate tasks, improve engagement, and provide critical insights.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AIVoiceCaller_Inquiry&product=AIVoiceCaller">Contact Our AI Voice Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
