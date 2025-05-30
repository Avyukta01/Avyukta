
"use client";

import { Lightbulb, Smartphone, Globe, Code2, BrainCircuit, ArrowRightCircle, Blocks, CloudCog, GitMerge } from "lucide-react"; // Replaced Cube with Blocks
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExpertiseItem {
  title: string;
  icon: React.ElementType;
  description: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: "Ideation & Design",
    icon: Lightbulb,
    description: "Our design process involves deep research, wireframing, prototyping, and user testing to ensure intuitive and engaging digital experiences. We focus on UI/UX best practices to create products that are not only beautiful but also highly functional, captivating, and convert.",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "We build high-performance native and cross-platform mobile applications for iOS and Android. Leveraging technologies like Swift, Kotlin, React Native, and Flutter, our apps are scalable, secure, and optimized for performance.",
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "From complex web applications to e-commerce platforms and corporate websites, we develop responsive and scalable solutions. Using modern frameworks like Next.js and React, we ensure optimal performance, security, and SEO-friendliness for modern businesses.",
  },
  {
    title: "Software Development",
    icon: Code2,
    description: "Our team specializes in creating bespoke software solutions tailored to your unique business requirements, including enterprise systems, SaaS products, and APIs. We follow agile methodologies to deliver high-quality software.",
  },
  {
    title: "AI Development",
    icon: BrainCircuit,
    description: "We provide AI-powered solutions including machine learning models, natural language processing, computer vision, and predictive analytics. Our AI expertise helps businesses automate processes, gain insights, and innovate to unlock new possibilities.",
  },
  {
    title: "Blockchain Development",
    icon: Blocks, // Changed from Cube to Blocks
    description: "We develop custom blockchain applications, smart contracts, and DApps for enhanced security and transparency. Our expertise covers various platforms like Ethereum, Hyperledger, and Solana, helping businesses leverage the power of distributed ledger technology.",
  },
  {
    title: "Cloud Solutions",
    icon: CloudCog,
    description: "Partner with us for cloud strategy, migration, and management services across AWS, Google Cloud, and Azure. Our solutions optimize costs, improve scalability, and enhance security for your cloud-based applications.",
  },
  {
    title: "DevOps & CI/CD",
    icon: GitMerge,
    description: "We implement robust DevOps practices, including continuous integration and continuous deployment (CI/CD) pipelines, infrastructure as code, and automated testing to accelerate your development lifecycle and improve software quality.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">
            Our Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up animation-delay-100">
            We provide a wide range of services to help your business thrive in the digital landscape. Explore our core competencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseData.map((item, index) => (
            <Card 
              key={item.title} 
              className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${(index + 2) * 100}`}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <item.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
          <Card 
            className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary text-primary-foreground animate-fade-in-up animation-delay-${(expertiseData.length + 2) * 100}`}
          >
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <ArrowRightCircle className="h-10 w-10 text-primary-foreground" />
                <CardTitle className="text-xl">Explore All Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center">
              <p className="text-sm text-primary-foreground/80 mb-4">
                Discover the full spectrum of our capabilities. We offer a comprehensive suite of services to help you achieve your goals.
              </p>
              <Button 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full mt-auto"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
