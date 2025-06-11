"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CloudCog, GitMerge, Settings, Workflow, Gauge, CheckCircle, MessageSquare, ArrowRight, Server, Code, Layers, LayoutTemplate, Shield, Bolt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const automationServices = [
  {
    title: "Infrastructure as Code (IaC)",
    icon: Code,
    description: "Implementing IaC principles using tools like Terraform and Ansible to manage infrastructure.",
    features: [
      "Terraform for Cloud Provisioning",
      "Ansible for Configuration Management",
      "CloudFormation for AWS",
      "Puppet & Chef Implementations"
    ]
  },
  {
    title: "Automated Provisioning & Deployment",
    icon: Bolt,
    description: "Automating the setup and deployment of servers, applications, and services across various environments.",
    features: [
      "Zero-touch Provisioning",
      "Blue/Green Deployments",
      "Canary Deployments",
      "Rollback Automation"
    ]
  },
  {
    title: "Configuration Management",
    icon: Settings,
    description: "Ensuring consistent configuration across all servers and environments to prevent drift.",
    features: [
      "Ansible Playbooks",
      "Chef Cookbooks",
      "Puppet Modules",
      "Desired State Configuration (DSC)"
    ]
  },
  {
    title: "Cloud Resource Optimization",
    icon: CloudCog,
    description: "Automating resource scaling, cost management, and performance tuning in cloud environments.",
    features: [
      "Auto-scaling Policies",
      "Cost Management Automation",
      "Serverless Deployments",
      "Resource Tagging & Governance"
    ]
  },
  {
    title: "Scripting & Custom Automation",
    icon: Workflow,
    description: "Developing custom scripts and automation workflows for unique operational challenges.",
    features: [
      "Python, Bash, PowerShell Scripting",
      "API Integrations",
      "Custom Workflow Orchestration",
      "Event-driven Automation"
    ]
  }
];

const benefits = [
  "Reduced manual errors and increased reliability",
  "Faster deployment cycles and time-to-market",
  "Consistent environments across development, staging, and production",
  "Cost optimization through efficient resource utilization",
  "Enhanced security and compliance through automated policies",
  "Improved scalability and elasticity of infrastructure"
];

const technologies = [
  "Terraform",
  "Ansible",
  "Chef",
  "Puppet",
  "AWS CloudFormation",
  "Azure Resource Manager (ARM)",
  "Google Cloud Deployment Manager",
  "Docker Compose",
  "Kubernetes Operators"
];

const process = [
  {
    step: "01",
    title: "Assessment & Strategy",
    description: "Analyzing current infrastructure, identifying automation opportunities, and defining a roadmap."
  },
  {
    step: "02",
    title: "Tool Selection & Setup",
    description: "Choosing the right automation tools and setting up the necessary environments."
  },
  {
    step: "03",
    title: "Scripting & Development",
    description: "Developing IaC templates, configuration scripts, and automation workflows."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorously testing automation scripts and infrastructure deployments."
  },
  {
    step: "05",
    title: "Integration & Deployment",
    description: "Integrating automation into CI/CD pipelines and deploying automated infrastructure."
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Continuously monitoring automated infrastructure and optimizing for performance and cost."
  }
];

export default function InfrastructureAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Server className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Infrastructure Automation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Streamline your IT operations with robust infrastructure automation. From provisioning to configuration, we help you build efficient, scalable, and resilient systems.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Automate Your Infrastructure</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Infrastructure Automation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
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
              Benefits of Infrastructure Automation
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
              Our Infrastructure Automation Process
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
              Ready to Automate Your Infrastructure?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Contact us to discuss how infrastructure automation can transform your operations.
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