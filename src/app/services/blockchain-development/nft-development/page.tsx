"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Gem, GalleryVertical, Store, Gamepad2, Shield, CheckCircle, MessageSquare, ArrowRight, Palette, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const nftDevelopmentServices = [
  {
    title: "Custom NFT Creation",
    icon: Palette,
    description: "Design and creation of unique Non-Fungible Tokens for various use cases, including art, collectibles, and gaming assets.",
    features: [
      "Generative Art & 3D Models",
      "PFP Collections",
      "Animation & Motion Graphics",
      "High-Quality Digital Art"
    ]
  },
  {
    title: "NFT Marketplace Development",
    icon: Store,
    description: "Building decentralized NFT marketplaces with advanced features for buying, selling, and trading digital assets.",
    features: [
      "Minting & Listing Functionality",
      "Auction & Bidding Systems",
      "Royalty Management",
      "Wallet Integration"
    ]
  },
  {
    title: "NFT Gaming Development",
    icon: Gamepad2,
    description: "Integrating NFTs into gaming ecosystems to create play-to-earn models, in-game assets, and unique gaming experiences.",
    features: [
      "In-Game NFT Integration",
      "Blockchain-based Game Mechanics",
      "Tokenized Game Assets",
      "Decentralized Gaming Platforms"
    ]
  },
  {
    title: "Tokenization & Smart Contracts",
    icon: Layers,
    description: "Development of robust smart contracts for secure NFT minting, ownership transfer, and royalty distribution.",
    features: [
      "ERC-721/ERC-1155 Standards",
      "Custom Smart Contracts",
      "IPFS Integration for Metadata",
      "Cross-chain Compatibility"
    ]
  },
  {
    title: "NFT Staking & Lending Platforms",
    icon: Sparkles,
    description: "Creating platforms that allow users to stake their NFTs for rewards or use them as collateral for loans.",
    features: [
      "Yield-Bearing NFTs",
      "NFT-Backed Loans",
      "Staking Pool Mechanisms",
      "Liquidity Provision"
    ]
  }
];

const benefits = [
  "Expert team with deep knowledge in NFT ecosystem",
  "End-to-end development from concept to deployment",
  "Focus on security and smart contract auditing",
  "Scalable solutions for growing communities",
  "Integration with leading blockchain networks",
  "Post-launch support and maintenance"
];

const platforms = [
  "Ethereum",
  "Polygon",
  "Solana",
  "BNB Smart Chain",
  "Cardano",
  "Flow",
  "Immutable X"
];

const process = [
  {
    step: "01",
    title: "Concept & Strategy",
    description: "Defining your NFT project vision, target audience, and monetization strategy."
  },
  {
    step: "02",
    title: "Design & Art Creation",
    description: "Crafting unique digital assets and an intuitive UI/UX for your NFT platform."
  },
  {
    step: "03",
    title: "Smart Contract Development",
    description: "Writing secure and efficient smart contracts for NFT minting and management."
  },
  {
    step: "04",
    title: "Platform Development",
    description: "Building the decentralized marketplace or gaming platform for your NFTs."
  },
  {
    step: "05",
    title: "Auditing & Testing",
    description: "Rigorous security audits and comprehensive testing to ensure a flawless launch."
  },
  {
    step: "06",
    title: "Deployment & Marketing",
    description: "Launching your NFT project and implementing marketing strategies for community engagement."
  }
];

export default function NftDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Gem className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              NFT Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Unlock the power of Non-Fungible Tokens with our end-to-end NFT development services. From unique digital assets to robust marketplaces, we bring your vision to life.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Start Your NFT Project</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our NFT Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nftDevelopmentServices.map((service, index) => (
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
              Why Choose Our NFT Development Solutions?
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
              Supported NFT Platforms & Standards
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
              Our NFT Development Process
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
              Ready to Create Your Own NFTs?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Partner with us to build groundbreaking NFT projects, from conceptualization to launch.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Get an NFT Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 