"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Wallet, ShieldCheck, TrendingUp, Handshake, Code, HardDrive, LayoutDashboard, Cog, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const walletDevelopmentServices = [
  {
    title: "Custom Wallet Development",
    icon: Wallet,
    description: "Building bespoke cryptocurrency wallets tailored to your specific needs, for various platforms.",
    features: [
      "Web, Mobile (iOS/Android), Desktop Wallets",
      "Multi-currency Support",
      "Integration with DApps",
      "Hardware Wallet Integration"
    ]
  },
  {
    title: "Custodial & Non-Custodial Solutions",
    icon: ShieldCheck,
    description: "Developing secure custodial or non-custodial wallet solutions based on your project's requirements.",
    features: [
      "Advanced Security Features",
      "Key Management Solutions",
      "Multi-signature Wallets",
      "Seed Phrase Management"
    ]
  },
  {
    title: "Payment Gateway Integration",
    icon: TrendingUp,
    description: "Seamless integration of cryptocurrency payment gateways into your existing platforms.",
    features: [
      "E-commerce Platform Integration",
      "API & SDK Development",
      "Automated Payment Processing",
      "Transaction Tracking"
    ]
  },
  {
    title: "Wallet Auditing & Security",
    icon: Handshake,
    description: "Comprehensive security audits and penetration testing for existing wallet applications.",
    features: [
      "Vulnerability Assessment",
      "Smart Contract Audit for Wallets",
      "Penetration Testing",
      "Security Best Practices Implementation"
    ]
  }
];

const benefits = [
  "Highly secure and reliable wallet solutions",
  "User-friendly interfaces for seamless experience",
  "Scalable architecture to support growth",
  "Integration with various blockchain networks",
  "Dedicated support and maintenance",
  "Compliance with industry best practices"
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your vision, target audience, and functional requirements for the wallet."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating intuitive UI/UX designs and interactive prototypes for optimal user experience."
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Building the wallet using robust coding practices and integrating necessary blockchain APIs."
  },
  {
    step: "04",
    title: "Security Audits & Testing",
    description: "Rigorous security audits, penetration testing, and functional testing to ensure a secure and bug-free wallet."
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Assisting with the deployment of your wallet application to target platforms and app stores."
  },
  {
    step: "06",
    title: "Post-Launch Support",
    description: "Providing ongoing maintenance, updates, and technical support after the wallet is live."
  }
];

export default function WalletDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Wallet className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Wallet Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Securely store, send, and receive digital assets with custom-built cryptocurrency wallets. We develop robust and user-friendly wallet solutions for various platforms.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Start Your Wallet Project</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Wallet Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {walletDevelopmentServices.map((service, index) => (
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
              Why Choose Our Wallet Development Solutions?
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

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Wallet Development Process
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
              Ready to Launch Your Custom Wallet?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Connect with our experts to build a secure, feature-rich cryptocurrency wallet tailored to your vision.
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