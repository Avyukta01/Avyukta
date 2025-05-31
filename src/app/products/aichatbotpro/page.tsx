
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Zap, Users, CheckCircle, BarChartHorizontalBig, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Advanced Natural Language Understanding (NLU)",
    description: "Our chatbot comprehends complex queries, user intent, and sentiment, ensuring natural and effective conversations.",
    icon: MessageSquare,
  },
  {
    title: "Multi-Platform Seamless Integration",
    description: "Deploy AIChatBotPro across your website, mobile apps, WhatsApp, Facebook Messenger, and other key customer touchpoints.",
    icon: Zap,
  },
  {
    title: "Customizable Conversation Flows",
    description: "Tailor chatbot interactions to your specific business needs, branding, and customer journeys with an intuitive flow builder.",
    icon: Settings,
  },
  {
    title: "Intelligent Lead Generation & Qualification",
    description: "Automate lead capture, qualify prospects based on predefined criteria, and seamlessly pass hot leads to your sales team.",
    icon: Users,
  },
  {
    title: "24/7 Instant Customer Support",
    description: "Provide round-the-clock assistance, answer FAQs instantly, and resolve common issues without human intervention, improving satisfaction.",
    icon: CheckCircle,
  },
  {
    title: "Comprehensive Analytics & Reporting",
    description: "Gain valuable insights into customer interactions, chatbot performance, and popular queries to continuously optimize your strategy.",
    icon: BarChartHorizontalBig,
  },
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


export default function AIChatBotProPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Bot className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              AIChatBotPro: Revolutionize Your Customer Engagement
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Intelligent, 24/7 AI-powered chatbots to elevate customer support, drive sales, streamline operations, and deliver exceptional user experiences.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AIChatBotPro_Demo">Request a Demo</Link>
            </Button>
          </div>
        </section>

        {/* What is AIChatBotPro? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="AIChatBotPro Interface"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="chatbot interface conversation"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Meet AIChatBotPro</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                AIChatBotPro is more than just a chatbot; it's your AI-powered customer engagement specialist. Designed to understand and respond to your customers' needs with human-like precision, it automates interactions, provides instant support, and helps you build stronger customer relationships, all while reducing operational overhead.
              </p>
              <p className="text-muted-foreground text-lg">
                Whether you're looking to boost sales, improve customer service, or gather valuable feedback, AIChatBotPro offers a versatile and powerful solution.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Core Features of AIChatBotPro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <feature.icon className="h-10 w-10 text-accent mr-3" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Versatile Applications Across Industries
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
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how AIChatBotPro can empower your business. Schedule a personalized demo with our experts today.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AIChatBotPro_Inquiry&product=AIChatBotPro">Get Started with AIChatBotPro</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
