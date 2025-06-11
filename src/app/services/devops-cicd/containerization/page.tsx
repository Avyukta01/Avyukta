"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Ship, Puzzle, Cloud, Scaling, Shield, CheckCircle, MessageSquare, ArrowRight, Container, ServerCog, HardDrive, Network, GitPullRequest } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const containerizationServices = [
  {
    title: "Docker Containerization",
    icon: Container,
    description: "Packaging applications and their dependencies into lightweight, portable Docker containers.",
    features: [
      "Dockerfile Creation & Optimization",
      "Docker Image Management",
      "Container Registry Setup (Docker Hub, ECR)",
      "Legacy Application Containerization"
    ]
  },
  {
    title: "Kubernetes Orchestration",
    icon: ServerCog,
    description: "Automating the deployment, scaling, and management of containerized applications using Kubernetes.",
    features: [
      "Cluster Setup & Configuration",
      "Deployment Strategies (Rolling Updates, Canary)",
      "Service Mesh Integration (Istio, Linkerd)",
      "Helm Chart Development"
    ]
  },
  {
    title: "Container Security",
    icon: Shield,
    description: "Implementing best practices and tools to secure your containerized environments.",
    features: [
      "Image Scanning & Vulnerability Management",
      "Runtime Security (Falco, Sysdig)",
      "Network Segmentation",
      "Secrets Management"
    ]
  },
  {
    title: "Microservices Migration",
    icon: Puzzle,
    description: "Assisting with the migration of monolithic applications to a microservices architecture using containers.",
    features: [
      "Application Decomposition",
      "Containerization Strategy",
      "Data Migration Planning",
      "Phased Rollout"
    ]
  },
  {
    title: "CI/CD for Containers",
    icon: GitPullRequest,
    description: "Integrating containerization into your CI/CD pipelines for automated build, test, and deployment workflows.",
    features: [
      "Automated Image Builds",
      "Container-native Testing",
      "GitOps Implementation",
      "Blue/Green & Canary Deployments"
    ]
  }
];

const benefits = [
  "Increased application portability and consistency across environments",
  "Faster deployment cycles and improved developer productivity",
  "Enhanced scalability and resource utilization",
  "Improved resilience and fault isolation for applications",
  "Reduced infrastructure costs",
  "Simplified management of complex microservices architectures"
];

const technologies = [
  "Docker",
  "Kubernetes",
  "Helm",
  "Istio",
  "Linkerd",
  "Prometheus",
  "Grafana",
  "Argo CD",
  "Flux CD",
  "Harbor",
  "CoreDNS"
];

const process = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Evaluating your current infrastructure and applications to determine the best containerization strategy."
  },
  {
    step: "02",
    title: "Containerization (Docker)",
    description: "Packaging your applications into Docker containers and optimizing their images."
  },
  {
    step: "03",
    title: "Orchestration (Kubernetes)",
    description: "Designing and implementing Kubernetes clusters for robust container orchestration."
  },
  {
    step: "04",
    title: "CI/CD Integration",
    description: "Integrating container workflows into your existing or new CI/CD pipelines for automation."
  },
  {
    step: "05",
    title: "Security & Monitoring",
    description: "Implementing security best practices and robust monitoring solutions for your containerized environment."
  },
  {
    step: "06",
    title: "Training & Support",
    description: "Providing training for your team and ongoing support for your containerized applications."
  }
];

export default function ContainerizationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Ship className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Containerization (Docker, Kubernetes)
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Modernize your applications and infrastructure with expert Docker and Kubernetes solutions. Achieve unparalleled scalability, efficiency, and reliability.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Start Your Container Journey</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Containerization Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Benefits of Docker & Kubernetes
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

        {/* Technologies Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Key Technologies & Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {technologies.map((tech) => (
                <span key={tech} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Containerization Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={item.step} className={`p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-accent mr-4">{item.step}</span>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Containerize Your Applications?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Contact us to leverage the power of Docker and Kubernetes for your business.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Get a Free Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 