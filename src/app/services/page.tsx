"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, Smartphone, BrainCircuit, ArrowRight, Settings, Lightbulb, Code2, Blocks, CloudCog, GitMerge, Layers3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Ideation & Design",
    icon: Lightbulb,
    points: [
      "Deep research and user journey mapping",
      "Wireframing, prototyping, and user testing",
      "Intuitive, accessible, and aesthetically pleasing UI/UX designs",
      "Seamless user experience from start to finish"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/ideation-design"
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    points: [
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform solutions (React Native, Flutter)",
      "E-commerce, utility tools, social networking, enterprise apps",
      "Focus on UX/UI, performance, and scalability"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/mobile-apps"
  },
  {
    title: "Web Development",
    icon: Globe,
    points: [
      "Responsive e-commerce platforms and custom portals",
      "Dynamic single-page applications (SPAs)",
      "Content management systems (CMS)",
      "Modern technologies: Next.js, React, Node.js"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/web-development"
  },
  {
    title: "Software Development",
    icon: Layers3,
    points: [
      "Custom software solutions tailored to unique business needs",
      "Enterprise systems and SaaS products",
      "Robust API development",
      "Agile methodologies for quality, scalability, and security"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/software-development"
  },
  {
    title: "AI & ML Solutions",
    icon: BrainCircuit,
    points: [
      "Custom AI models for predictive analytics",
      "Natural Language Processing (NLP)",
      "Computer vision and intelligent automation",
      "Gain insights, optimize processes, enhance customer experiences"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/ai-solutions"
  },
  {
    title: "Blockchain Development",
    icon: Blocks,
    points: [
      "Secure, transparent, and transformative solutions",
      "Custom blockchain applications and smart contracts",
      "DApps on Ethereum and Hyperledger",
      "Enhance security, traceability, and efficiency"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/blockchain-development"
  },
  {
    title: "Cloud Solutions",
    icon: CloudCog,
    points: [
      "Flexible, robust, and cost-effective cloud services",
      "Cloud strategy, migration, and cloud-native development",
      "Management across AWS, Google Cloud, and Azure",
      "Optimize costs, improve scalability, enhance security"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/cloud-solutions"
  },
  {
    title: "DevOps & CI/CD",
    icon: GitMerge,
    points: [
      "Streamlining development lifecycle with DevOps",
      "CI/CD pipelines and infrastructure as code (IaC)",
      "Automated testing and comprehensive monitoring",
      "Accelerate delivery, improve quality, foster collaboration"
    ],
    image: "https://placehold.co/600x400.png",
    learnMoreLink: "/services/devops-cicd"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Settings className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Comprehensive Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto p-4 rounded-lg border border-primary/10">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="flex flex-col w-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group"
                >
                  <div className="relative h-[150px] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 object-cover"
                    />
                    {service.icon && <service.icon className="absolute top-2 left-2 h-7 w-7 text-accent bg-background/80 backdrop-blur-sm p-1 rounded-lg shadow-md" />}
                  </div>
                  <CardHeader className="pb-1">
                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow max-h-[80px] overflow-y-auto text-foreground/80">
                    <ul className="list-disc pl-4 space-y-0.5 text-xs">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-1">
                    <Button asChild variant="link" className="text-primary text-sm p-0 hover:text-accent">
                      <Link href={service.learnMoreLink}>
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact?subject=ServiceInquiry">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
