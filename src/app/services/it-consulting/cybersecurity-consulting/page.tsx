"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Lock, Activity, BarChart, CheckCircle, ArrowRight, Scan, GitBranch, Cloud } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const cybersecurityServices = [
  {
    title: "Security Assessment & Audit",
    description: "Comprehensive evaluation of your current security posture and identification of vulnerabilities.",
    icon: Scan,
    features: [
      "Vulnerability Assessments",
      "Penetration Testing",
      "Security Audits & Compliance Checks",
      "Risk Analysis"
    ]
  },
  {
    title: "Security Strategy & Roadmapping",
    description: "Developing a tailored cybersecurity strategy to protect your assets and align with business goals.",
    icon: Shield,
    features: [
      "Cybersecurity Framework Implementation (NIST, ISO 27001)",
      "Security Architecture Design",
      "Incident Response Planning",
      "Security Policy Development"
    ]
  },
  {
    title: "Cloud Security Consulting",
    description: "Ensuring the security of your cloud environments (AWS, Azure, Google Cloud) and cloud-native applications.",
    icon: Cloud,
    features: [
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection",
      "Identity and Access Management (IAM) in Cloud",
      "Cloud Data Protection"
    ]
  },
  {
    title: "Data Privacy & Compliance",
    description: "Assisting with adherence to data privacy regulations (GDPR, CCPA) and industry-specific compliance.",
    icon: Lock,
    features: [
      "GDPR/CCPA Compliance",
      "HIPAA, PCI DSS Compliance",
      "Data Minimization Strategies",
      "Privacy Impact Assessments"
    ]
  }
];

const benefits = [
  "Robust protection against cyber threats and data breaches.",
  "Compliance with industry regulations and standards.",
  "Reduced financial and reputational risks.",
  "Improved business continuity and resilience.",
  "Enhanced trust with customers and partners.",
  "Proactive threat detection and rapid incident response."
];

const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Risk Assessment",
    description: "Understanding your business, IT infrastructure, and identifying potential security risks."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Developing a customized cybersecurity strategy and actionable plan."
  },
  {
    step: "03",
    title: "Implementation & Integration",
    description: "Assisting with the deployment of security controls and integration with existing systems."
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Setting up continuous monitoring and refining security measures."
  },
  {
    step: "05",
    title: "Training & Awareness",
    description: "Educating your team on best security practices and threat awareness."
  },
  {
    step: "06",
    title: "Compliance & Reporting",
    description: "Ensuring regulatory adherence and providing regular security posture reports."
  }
];

export default function CybersecurityConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Shield className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Cybersecurity Consulting
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Protecting your digital assets with expert cybersecurity strategies and robust defense mechanisms.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Secure Your Business
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Cybersecurity Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cybersecurityServices.map((service, index) => (
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
              Benefits of Robust Cybersecurity
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

        {/* Consulting Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Cybersecurity Consulting Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingProcess.map((item, index) => (
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
              Ready to Strengthen Your Cybersecurity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with us to build a resilient and secure digital environment.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Schedule a Security Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 