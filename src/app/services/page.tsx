
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, Smartphone, BrainCircuit, ArrowRight, Settings, Lightbulb, Code2, Blocks, CloudCog, GitMerge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    description: "We craft exceptional digital experiences. Our web development services include building responsive e-commerce platforms, custom enterprise portals, dynamic single-page applications (SPAs), and content management systems (CMS). We leverage modern technologies like Next.js, React, and Node.js to create scalable, high-performance, and secure web solutions tailored to your specific business goals. Whether you need a Progressive Web App (PWA) or a complex data-driven application, we deliver excellence.",
    image: "https://placehold.co/600x400.png",
    aiHint: "web development code",
    learnMoreLink: "/services/web-development" 
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Turn your ideas into engaging mobile applications. We specialize in native iOS (Swift) and Android (Kotlin) development, as well as cross-platform solutions using React Native and Flutter. Our team builds a wide range of apps, including e-commerce, utility tools, social networking platforms, and enterprise mobility solutions, all focusing on intuitive UX/UI, robust performance, and scalability to captivate your users.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mobile app interface",
    learnMoreLink: "/services/mobile-apps"
  },
  {
    title: "AI & ML Solutions",
    icon: BrainCircuit,
    description: "Unlock the power of Artificial Intelligence and Machine Learning. We develop custom AI models for predictive analytics, natural language processing (NLP), computer vision, and intelligent automation. Our solutions help businesses gain deep insights from data, optimize complex processes, enhance customer experiences, and drive innovation to achieve a significant competitive edge.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ai abstract brain",
    learnMoreLink: "/services/ai-solutions"
  },
  {
    title: "Ideation & Design",
    icon: Lightbulb,
    description: "Transforming innovative ideas into impactful digital products. Our process involves deep research, user journey mapping, wireframing, prototyping, and user testing. We focus on creating intuitive, accessible, and aesthetically pleasing UI/UX designs that align with your brand and captivate your target audience, ensuring a seamless user experience from start to finish.",
    image: "https://placehold.co/600x400.png",
    aiHint: "design thinking lightbulb",
    learnMoreLink: "/services/ideation-design"
  },
  {
    title: "Software Development",
    icon: Code2,
    description: "Delivering custom software solutions tailored to your unique business needs. We specialize in enterprise systems, SaaS products, and robust API development. Our agile methodologies ensure high-quality software that is scalable, secure, and perfectly aligned with your strategic objectives, driving efficiency and growth.",
    image: "https://placehold.co/600x400.png",
    aiHint: "software code screen",
    learnMoreLink: "/services/software-development"
  },
  {
    title: "Blockchain Development",
    icon: Blocks,
    description: "Leveraging distributed ledger technology to build secure, transparent, and transformative solutions. We develop custom blockchain applications, smart contracts, and DApps on platforms like Ethereum and Hyperledger. Our expertise helps businesses enhance security, traceability, and efficiency through decentralized systems.",
    image: "https://placehold.co/600x400.png",
    aiHint: "blockchain network abstract",
    learnMoreLink: "/services/blockchain-development"
  },
  {
    title: "Cloud Solutions",
    icon: CloudCog,
    description: "Empowering your business with flexible, robust, and cost-effective cloud services. We offer cloud strategy, migration, cloud-native development, and management services across AWS, Google Cloud, and Azure. Our solutions optimize costs, improve scalability, and enhance security for your cloud infrastructure.",
    image: "https://placehold.co/600x400.png",
    aiHint: "cloud computing servers",
    learnMoreLink: "/services/cloud-solutions"
  },
  {
    title: "DevOps & CI/CD",
    icon: GitMerge,
    description: "Streamlining your development lifecycle with expert DevOps solutions. We implement CI/CD pipelines, infrastructure as code (IaC), automated testing, and comprehensive monitoring to accelerate delivery, improve software quality, and foster collaboration between development and operations teams.",
    image: "https://placehold.co/600x400.png",
    aiHint: "devops pipeline cycle",
    learnMoreLink: "/services/devops-cicd"
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Settings className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Our Comprehensive Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Voxaiomni provides a wide range of technology solutions to empower your business and drive digital transformation.
            </p>
          </div>
        </section>

        {/* Services List Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={service.aiHint}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.icon && <service.icon className="absolute top-4 left-4 h-10 w-10 text-accent bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-md" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/80">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary transition-colors w-full md:w-auto">
                      <Link href={service.learnMoreLink}>
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
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=ServiceInquiry">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
