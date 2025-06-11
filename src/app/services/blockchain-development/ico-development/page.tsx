"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Coins, FileText, Shield, BarChart, Users, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const icoServices = [
  {
    title: "Tokenomics Design",
    icon: Coins,
    description: "Comprehensive token economics design including supply, distribution, and utility planning.",
    features: [
      "Token Supply & Distribution Strategy",
      "Token Utility & Use Cases",
      "Vesting & Lock-up Periods",
      "Token Economics Modeling"
    ]
  },
  {
    title: "Smart Contract Development",
    icon: Shield,
    description: "Secure and audited smart contracts for token creation and ICO management.",
    features: [
      "ERC-20/ERC-721 Token Contracts",
      "ICO Smart Contract Development",
      "Multi-signature Wallet Integration",
      "Smart Contract Security Audits"
    ]
  },
  {
    title: "Whitepaper Creation",
    icon: FileText,
    description: "Professional whitepaper development with technical and business documentation.",
    features: [
      "Technical Architecture Documentation",
      "Token Economics Explanation",
      "Roadmap & Development Timeline",
      "Legal & Compliance Information"
    ]
  },
  {
    title: "Marketing & PR",
    icon: Users,
    description: "Strategic marketing and public relations support for successful ICO launch.",
    features: [
      "Community Building & Management",
      "Social Media Marketing",
      "Press Release Distribution",
      "Influencer & KOL Partnerships"
    ]
  }
];

const benefits = [
  "Comprehensive end-to-end ICO development services",
  "Expert team with successful ICO track record",
  "Security-first approach with thorough smart contract audits",
  "Compliance with international regulations",
  "Strategic marketing and community building",
  "Transparent and efficient token distribution"
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Understanding your project goals, requirements, and vision for the ICO."
  },
  {
    step: "02",
    title: "Tokenomics Design",
    description: "Developing a robust token economics model and distribution strategy."
  },
  {
    step: "03",
    title: "Technical Development",
    description: "Creating and auditing smart contracts, developing the ICO platform."
  },
  {
    step: "04",
    title: "Documentation",
    description: "Preparing comprehensive whitepaper and technical documentation."
  },
  {
    step: "05",
    title: "Marketing & Launch",
    description: "Executing marketing strategy and managing the ICO launch process."
  },
  {
    step: "06",
    title: "Post-ICO Support",
    description: "Providing ongoing support and guidance after the ICO completion."
  }
];

export default function ICODevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Coins className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              ICO Development Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Launch your Initial Coin Offering with confidence. Our comprehensive ICO development services ensure a secure, compliant, and successful token launch.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Start Your ICO Journey</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Comprehensive ICO Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {icoServices.map((service, index) => (
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
              Why Choose Our ICO Development Services?
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
              Our ICO Development Process
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
              Ready to Launch Your ICO?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project and create a successful ICO strategy together.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Schedule a Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 