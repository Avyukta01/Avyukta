"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";

const aiInnovations = [
  {
    title: "AIChatBotPro",
    icon: Bot,
    description: "Revolutionize customer engagement with our intelligent, 24/7 AI chatbot.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai chatbot interface",
    features: ["Natural Language Understanding", "Multi-platform Integration", "Customizable Workflows", "Analytics Dashboard"]
  },
  {
    title: "AnalyticsMaster",
    icon: BarChart3,
    description: "Unlock actionable insights from your data with our advanced AI-driven analytics platform.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data analytics dashboard",
    features: ["Predictive Modeling", "Real-time Data Visualization", "Automated Reporting", "Anomaly Detection"]
  }
];

const FeaturedAISection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured AI Innovations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our groundbreaking AI solutions designed to drive efficiency and growth for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {aiInnovations.map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
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
                <Button variant="link" className="text-primary p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Explore All AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAISection;
