"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileCode, Shield, Zap, Layers, CheckCircle, MessageSquare, ArrowRight, Code2, Lock, Bug } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const smartContractServices = [
  {
    title: "Smart Contract Development",
    icon: FileCode,
    description: "Custom smart contract development for various blockchain platforms with a focus on security and efficiency.",
    features: [
      "Solidity, Rust, and Vyper Development",
      "Gas Optimization",
      "Upgradable Contract Patterns",
      "Cross-chain Compatibility"
    ]
  },
  {
    title: "Smart Contract Auditing",
    icon: Shield,
    description: "Comprehensive security audits to identify and fix vulnerabilities in smart contracts.",
    features: [
      "Static & Dynamic Analysis",
      "Formal Verification",
      "Gas Optimization Review",
      "Security Best Practices"
    ]
  },
  {
    title: "DeFi Protocol Development",
    icon: Zap,
    description: "Development of decentralized finance protocols and applications.",
    features: [
      "Lending & Borrowing Protocols",
      "DEX Development",
      "Yield Farming Contracts",
      "Staking Mechanisms"
    ]
  },
  {
    title: "NFT & Token Standards",
    icon: Layers,
    description: "Implementation of various token standards and NFT contracts.",
    features: [
      "ERC-20 Token Development",
      "ERC-721/ERC-1155 NFTs",
      "Custom Token Standards",
      "Metadata Management"
    ]
  }
];

const benefits = [
  "Expert team with extensive blockchain experience",
  "Comprehensive security-first approach",
  "Support for multiple blockchain platforms",
  "Thorough testing and auditing process",
  "Gas optimization for cost efficiency",
  "Post-deployment support and maintenance"
];

const platforms = [
  "Ethereum",
  "Polygon",
  "Solana",
  "BNB Smart Chain",
  "Avalanche",
  "Arbitrum",
  "Optimism"
];

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Understanding your project needs and technical requirements."
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Designing the smart contract architecture and system flow."
  },
  {
    step: "03",
    title: "Development",
    description: "Implementing secure and efficient smart contracts."
  },
  {
    step: "04",
    title: "Testing & Auditing",
    description: "Comprehensive testing and security auditing."
  },
  {
    step: "05",
    title: "Deployment",
    description: "Deploying contracts to the target blockchain network."
  },
  {
    step: "06",
    title: "Maintenance",
    description: "Ongoing support and contract maintenance."
  }
];

export default function SmartContractDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Code2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Smart Contract Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Build secure, efficient, and scalable smart contracts with our expert development team. From DeFi protocols to NFT marketplaces, we deliver robust blockchain solutions.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Start Your Project</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Smart Contract Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {smartContractServices.map((service, index) => (
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
              Why Choose Our Smart Contract Development?
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

        {/* Platforms Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Supported Platforms
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

        {/* Process Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Development Process
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
              Ready to Build Your Smart Contract?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss your project and create secure, efficient smart contracts together.
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