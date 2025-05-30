"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CloudCog, Server, Settings, ShieldCheck, MessageSquare, TrendingUp, Zap, UploadCloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cloudServices = [
  {
    title: "Cloud Strategy & Consulting",
    icon: Settings,
    description: "Develop a tailored cloud adoption roadmap, assess readiness, and select the right cloud platforms (AWS, Azure, GCP) for your business goals.",
    details: ["Cloud Readiness Assessment", "Platform Selection (AWS, Azure, GCP)", "Cost Optimization Strategies", "Hybrid & Multi-Cloud Architectures"]
  },
  {
    title: "Cloud Migration Services",
    icon: UploadCloud,
    description: "Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal disruption and optimized performance.",
    details: ["Lift-and-Shift Migration", "Re-platforming & Re-hosting", "Database Migration", "Post-Migration Support"]
  },
  {
    title: "Cloud-Native Development",
    icon: Zap,
    description: "Build and deploy scalable, resilient, and cost-effective applications designed specifically for cloud environments using microservices and serverless architectures.",
    details: ["Microservices Architecture", "Serverless Functions (Lambda, Azure Functions)", "Containerization (Docker, Kubernetes)", "DevOps for Cloud"]
  },
  {
    title: "Cloud Management & Optimization",
    icon: TrendingUp,
    description: "Ongoing management, monitoring, and optimization of your cloud resources to ensure security, performance, and cost-efficiency.",
    details: ["Performance Monitoring & Alerting", "Security & Compliance Management", "Automated Resource Scaling", "Continuous Cost Optimization"]
  }
];

const platforms = ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"];

export default function CloudSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <CloudCog className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Scalable & Secure Cloud Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Empowering your business with flexible, robust, and cost-effective cloud services tailored to your unique needs.
            </p>
          </div>
        </section>

        {/* Benefits of Cloud Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
             <div className="animate-fade-in-left animation-delay-100">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Abstract cloud network"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="cloud network abstract"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-primary mb-6">Unlock the Power of the Cloud</h2>
              <p className="text-muted-foreground mb-6">
                Cloud computing offers transformative advantages, enabling businesses to innovate faster, scale effortlessly, and optimize operational costs. We help you harness these benefits.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Scalability & Flexibility</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Cost Efficiency & Reduced IT Overhead</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Enhanced Security & Reliability</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Disaster Recovery & Business Continuity</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-accent mr-2" /> Global Reach & Accessibility</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Our Cloud Services Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Comprehensive Cloud Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <Card key={service.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Key Focus Areas:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {service.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms We Support Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Major Cloud Platforms We Support
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {platforms.map((platform) => (
                <span key={platform} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Elevate Your Business with the Cloud?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our cloud experts are ready to help you design, implement, and manage the perfect cloud strategy for your organization.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=CloudSolutionsInquiry">Consult Our Cloud Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
