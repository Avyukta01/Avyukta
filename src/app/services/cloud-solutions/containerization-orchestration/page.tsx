"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Package, GitBranch, Cloud, Zap, Settings, CheckCircle, ArrowRight, Server, Box, Layers, HardDrive, Shield } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const containerizationServices = [
  {
    title: "Container Strategy & Design",
    description: "Develop a comprehensive containerization strategy tailored to your application landscape.",
    icon: Layers,
    features: [
      "Application Assessment",
      "Containerization Roadmap",
      "Microservices Architecture Design",
      "Security Best Practices"
    ]
  },
  {
    title: "Container Orchestration",
    description: "Implement and manage container orchestration platforms like Kubernetes for scalable deployments.",
    icon: Zap,
    features: [
      "Kubernetes Implementation",
      "Cluster Management",
      "Automated Scaling",
      "High Availability"
    ]
  },
  {
    title: "Container Image Optimization",
    description: "Optimize container images for efficiency, security, and faster deployment.",
    icon: Package,
    features: [
      "Image Size Reduction",
      "Vulnerability Scanning",
      "Performance Tuning",
      "Automated Builds"
    ]
  },
  {
    title: "Container Security",
    description: "Ensure the security of your containerized applications throughout their lifecycle.",
    icon: Shield,
    features: [
      "Runtime Protection",
      "Network Segmentation",
      "Access Control",
      "Compliance & Auditing"
    ]
  }
];

const benefits = [
  "Enhanced application portability and consistency",
  "Improved scalability and resource utilization",
  "Faster deployment cycles and rollbacks",
  "Increased operational efficiency and automation",
  "Simplified environment management",
  "Robust fault isolation and resilience"
];

const implementationProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Analyzing existing infrastructure and applications for containerization suitability."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Developing a customized containerization and orchestration roadmap."
  },
  {
    step: "03",
    title: "Platform Setup",
    description: "Setting up container runtime environments and orchestration platforms (e.g., Kubernetes)."
  },
  {
    step: "04",
    title: "Application Containerization",
    description: "Packaging applications into efficient and secure container images."
  },
  {
    step: "05",
    title: "Orchestration & Deployment",
    description: "Deploying and managing containerized applications with automated orchestration."
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Implementing monitoring tools and optimizing container performance and resource usage."
  }
];

export default function ContainerizationOrchestrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Box className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Containerization & Orchestration
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Modernize your applications with containerization and orchestrate them for scalable, resilient, and efficient deployments.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Transform Your Infrastructure
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Containerization & Orchestration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {containerizationServices.map((service, index) => (
                <Card key={service.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-title-glow-primary">
              Benefits of Containerization & Orchestration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90 text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Implementation Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationProcess.map((item, index) => (
                <div key={item.step} className={`p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-accent mr-4">{item.step}</span>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-title-glow-primary">
              Ready to Optimize with Containers?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Discover how containerization and orchestration can revolutionize your application deployment.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get Started Today
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <main className="flex-grow bg-background py-12">
        <section className="container-max">
          <h1 className="text-4xl font-bold text-primary mb-6">Containerization & Orchestration</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modernizing application deployment with Docker and Kubernetes.
          </p>
          {/* Add more specific content about containerization & orchestration here */}
          <div className="prose dark:prose-invert">
            <p>We leverage Docker for containerization and Kubernetes for orchestration to build highly scalable, resilient, and portable applications.</p>
            <ul>
              <li>Docker Containerization</li>
              <li>Kubernetes Cluster Management</li>
              <li>Microservices Architecture</li>
              <li>Automated Deployment & Scaling</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 