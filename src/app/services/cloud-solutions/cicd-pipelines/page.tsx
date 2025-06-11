"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GitBranch, Cloud, Zap, Settings, CheckCircle, ArrowRight, Users, Shield, Database, Workflow } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const pipelineServices = [
  {
    title: "Continuous Integration",
    description: "Implement automated build and test processes to ensure code quality and early bug detection.",
    icon: GitBranch,
    features: [
      "Automated Build Processes",
      "Unit & Integration Testing",
      "Code Quality Checks",
      "Version Control Integration"
    ]
  },
  {
    title: "Continuous Deployment",
    description: "Automate the deployment process to ensure reliable and consistent software delivery.",
    icon: Cloud,
    features: [
      "Automated Deployments",
      "Environment Management",
      "Rollback Capabilities",
      "Deployment Verification"
    ]
  },
  {
    title: "Pipeline Automation",
    description: "Create end-to-end automation workflows for your software delivery process.",
    icon: Workflow,
    features: [
      "Workflow Automation",
      "Pipeline Orchestration",
      "Environment Promotion",
      "Release Management"
    ]
  },
  {
    title: "DevOps Integration",
    description: "Integrate CI/CD pipelines with your DevOps tools and practices.",
    icon: Settings,
    features: [
      "Tool Integration",
      "Process Automation",
      "Monitoring & Logging",
      "Security Scanning"
    ]
  }
];

const benefits = [
  "Accelerate software delivery and time-to-market",
  "Improve code quality and reduce bugs",
  "Enable faster feedback and iteration",
  "Reduce manual errors and deployment risks",
  "Enhance team collaboration and productivity",
  "Ensure consistent and reliable deployments"
];

const implementationProcess = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Evaluating current development and deployment processes to identify automation opportunities."
  },
  {
    step: "02",
    title: "Pipeline Design",
    description: "Designing CI/CD pipelines that align with your development workflow and requirements."
  },
  {
    step: "03",
    title: "Implementation",
    description: "Setting up and configuring CI/CD tools and automation workflows."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Testing pipeline functionality and validating automation processes."
  },
  {
    step: "05",
    title: "Integration & Deployment",
    description: "Integrating with existing tools and deploying the CI/CD solution."
  },
  {
    step: "06",
    title: "Training & Support",
    description: "Providing training and ongoing support for the development team."
  }
];

export default function CICDPipelinesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Workflow className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              CI/CD Pipeline Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Streamline your software delivery process with automated CI/CD pipelines. Implement continuous integration and deployment to accelerate development and ensure quality.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Optimize Your Pipeline
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our CI/CD Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pipelineServices.map((service, index) => (
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
              Benefits of CI/CD Pipelines
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
              Ready to Optimize Your Development Process?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how CI/CD pipelines can transform your software delivery process.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Start Your Project
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 