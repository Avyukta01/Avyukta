"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GitMerge, Zap, ShieldCheck, Repeat, Settings2, MessageSquare, Code, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const devOpsServices = [
  {
    title: "CI/CD Pipeline Implementation",
    icon: Repeat,
    description: "Automate your build, test, and deployment processes with robust Continuous Integration and Continuous Delivery pipelines.",
    details: ["Jenkins, GitLab CI, GitHub Actions", "Automated Testing Integration", "Artifact Management", "Blue/Green & Canary Deployments"]
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: Code,
    description: "Manage and provision your infrastructure through code, enabling consistency, repeatability, and scalability.",
    details: ["Terraform, Ansible, CloudFormation", "Version Controlled Infrastructure", "Automated Environment Setup", "Immutable Infrastructure"]
  },
  {
    title: "Monitoring & Observability",
    icon: Gauge,
    description: "Implement comprehensive monitoring, logging, and alerting solutions to ensure system health and rapid issue detection.",
    details: ["Prometheus, Grafana, ELK Stack", "Real-time Performance Dashboards", "Log Aggregation & Analysis", "Proactive Alerting"]
  },
  {
    title: "Containerization & Orchestration",
    icon: Settings2, // More abstract for orchestration
    description: "Leverage Docker and Kubernetes to package, deploy, and manage your applications efficiently across any environment.",
    details: ["Docker Image Creation & Optimization", "Kubernetes Cluster Management (EKS, GKE, AKS)", "Service Mesh (Istio, Linkerd)", "Auto-scaling & Self-healing"]
  }
];

const toolsWeUse = ["Git", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Terraform", "Ansible", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "AWS DevOps Tools", "Azure DevOps", "Google Cloud Build"];

export default function DevOpsCICDPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <GitMerge className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Accelerate Delivery with DevOps & CI/CD
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Streamline your development lifecycle, improve software quality, and foster collaboration with our expert DevOps solutions.
            </p>
          </div>
        </section>

        {/* Why DevOps? Section */}
         <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x400.png"
                alt="DevOps infinity loop"
                fill
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="devops cycle abstract"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">The Power of DevOps</h2>
              <p className="text-muted-foreground mb-4">
                DevOps is a cultural and technical movement that emphasizes collaboration, automation, and continuous improvement to deliver software faster and more reliably. It breaks down silos between development and operations teams, leading to significant business benefits.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Zap className="h-5 w-5 text-accent mr-2" /> Faster Time-to-Market</li>
                <li className="flex items-center"><ShieldCheck className="h-5 w-5 text-accent mr-2" /> Improved Quality & Reliability</li>
                <li className="flex items-center"><Repeat className="h-5 w-5 text-accent mr-2" /> Increased Deployment Frequency</li>
                <li className="flex items-center"><Settings2 className="h-5 w-5 text-accent mr-2" /> Enhanced Collaboration & Productivity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our DevOps Services Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our DevOps & CI/CD Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devOpsServices.map((service, index) => (
                <Card key={service.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Key Offerings:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {service.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Tools & Technologies We Leverage
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {toolsWeUse.map((tool) => (
                <span key={tool} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tool}
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
              Ready to Streamline Your Development?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our DevOps experts can help you implement best practices and automate your workflows for greater efficiency and innovation.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=DevOpsInquiry">Talk to Our DevOps Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
