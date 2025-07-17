"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Zap, Users, CheckCircle, BarChartHorizontalBig, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const features = [
  { title: "Instant Customer Engagement 24/7", description: "Engage customers instantly at any time of day, providing answers and support around the clock." },
  { title: "Reduces Support Cost & Wait Time", description: "Automate responses to common queries, reducing the need for large support teams and minimizing customer wait times." },
  { title: "Boosts Sales with Real-Time Interaction", description: "Convert more leads and close sales faster by interacting with customers in real time." },
  { title: "Personalized and Multilingual", description: "Deliver tailored responses in multiple languages to serve a diverse customer base." },
  { title: "Integrates with CRM, Website, and ERP", description: "Seamlessly connect with your CRM, website, and ERP systems for unified customer management." },
  { title: "Scales Without Adding Team Members", description: "Handle unlimited conversations simultaneously without increasing your support staff." },
  { title: "Automated Greetings & Welcome Messages", description: "Greet every customer with automated, customizable welcome messages." },
  { title: "Keyword-Based Responses", description: "Respond instantly to specific keywords or phrases for efficient query handling." },
  { title: "Product / Service Showcase", description: "Showcase your products or services directly in the chat to drive interest and conversions." },
  { title: "Collect User Information", description: "Gather leads and customer details automatically during conversations." },
  { title: "Chat History & Logging", description: "Maintain a complete log of all chats for quality assurance and future reference." },
];

const benefits = [
  "Enhanced Customer Satisfaction with instant, accurate responses.",
  "Increased Lead Conversion Rates through proactive engagement.",
  "Significant Reduction in Customer Support Costs.",
  "Improved Agent Productivity by handling routine queries.",
  "Scalable Customer Service to manage peak demand effortlessly.",
  "Deeper Customer Insights from interaction data.",
];

const useCases = [
    { name: "E-commerce Assistance", description: "Product recommendations, order tracking, returns processing.", image: "https://placehold.co/400x300.png", aiHint: "e-commerce online shopping" },
    { name: "Customer Support Automation", description: "Answering FAQs, troubleshooting, guiding users.", image: "https://placehold.co/400x300.png", aiHint: "customer support headset" },
    { name: "Sales & Lead Nurturing", description: "Qualifying leads, scheduling demos, follow-ups.", image: "https://placehold.co/400x300.png", aiHint: "sales team meeting" },
    { name: "Appointment Booking", description: "Scheduling and managing appointments for services.", image: "https://placehold.co/400x300.png", aiHint: "calendar appointment booking" },
];


export default function WhatsAppAiChatBotPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Bot className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              WhatsApp Ai Chat Bot: Revolutionize Your Customer Engagement
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Intelligent, 24/7 AI-powered chatbots to elevate customer support, drive sales, streamline operations, and deliver exceptional user experiences.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="outline" className="bg-white text-black border border-black hover:bg-gray-100 animate-fade-in-up animation-delay-300">
                <span>Request a Demo</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What is WhatsApp Ai Chat Bot? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left flex justify-center">
              <Image
                src="/images/WhatsAppaiomni.jpg"
                alt="WhatsApp Ai Chat Bot Interface"
                width={400}
                height={400}
                className="rounded-lg shadow-xl object-cover max-w-full h-auto"
                data-ai-hint="chatbot interface conversation"
                priority
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6 text-title-glow-primary">Meet WhatsApp Ai Chat Bot</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                WhatsApp Ai Chat Bot is more than just a chatbot; it's your AI-powered customer engagement specialist. Designed to understand and respond to your customers' needs with human-like precision, it automates interactions, provides instant support, and helps you build stronger customer relationships, all while reducing operational overhead.
              </p>
              <p className="text-muted-foreground text-lg">
                Whether you're looking to boost sales, improve customer service, or gather valuable feedback, WhatsApp Ai Chat Bot offers a versatile and powerful solution.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up text-title-glow-primary">
              Core Features of WhatsApp Ai Chat Bot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <MessageSquare className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up text-title-glow-primary">
              Unlock Tangible Business Benefits
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up text-title-glow-primary">
              Versatile Applications Across Industries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.name} className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="relative h-48 w-full">
                    <Image
                        src={useCase.image}
                        alt={useCase.name}
                        fill
                        className="object-cover"
                        data-ai-hint={useCase.aiHint}
                    />
                    </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{useCase.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up text-title-glow-primary">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how WhatsApp Ai Chat Bot can empower your business. Schedule a personalized demo with our experts today.
            </p>
            <Button asChild size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=WhatsApp_Ai_Chat_Bot_Inquiry&product=WhatsApp_Ai_Chat_Bot">Get Started with WhatsApp Ai Chat Bot</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}