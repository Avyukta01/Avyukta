"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Blocks, ShieldCheck, Link2, FileJson, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blockchainServices = [
  {
    title: "Smart Contract Development",
    icon: FileJson,
    description: "Design, develop, and deploy secure and efficient smart contracts for various platforms like Ethereum, Polygon, and Solana.",
    details: ["Solidity, Rust, Vyper", "Token Standards (ERC20, ERC721, ERC1155)", "Contract Auditing (via partners)", "Upgradable Contracts"]
  },
  {
    title: "Decentralized Application (DApp) Development",
    icon: Zap,
    description: "Build robust and user-friendly DApps that leverage blockchain technology for transparency, security, and decentralization.",
    details: ["Frontend (React, Vue, Next.js)", "Wallet Integration (MetaMask, WalletConnect)", "IPFS for Decentralized Storage", "Cross-Chain Solutions"]
  },
  {
    title: "Custom Blockchain Solutions",
    icon: Blocks,
    description: "Develop private or permissioned blockchain networks tailored to specific industry needs, enhancing security and operational efficiency.",
    details: ["Hyperledger Fabric/Besu", "Corda", "Consortium Blockchains", "Proof-of-Authority/Stake"]
  },
  {
    title: "Tokenization & NFT Marketplaces",
    icon: Link2,
    description: "Create and manage digital assets through tokenization and build custom NFT marketplaces with comprehensive features.",
    details: ["Security Tokens (STOs)", "Utility Tokens", "Non-Fungible Tokens (NFTs)", "Marketplace Development"]
  }
];

const platforms = ["Ethereum", "Polygon", "Solana", "BNB Smart Chain", "Hyperledger Fabric", "Corda", "Avalanche"];

export default function BlockchainDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Blocks className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Innovative Blockchain Development Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Leveraging the power of decentralized ledger technology to build secure, transparent, and transformative solutions.
            </p>
          </div>
        </section>

        {/* Why Blockchain? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Abstract blockchain network"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="blockchain network abstract"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Blockchain Technology?</h2>
              <p className="text-muted-foreground mb-4">
                Blockchain offers unparalleled benefits for businesses seeking enhanced security, transparency, and efficiency. Its decentralized nature eliminates single points of failure, making systems more resilient. Immutable records ensure data integrity and auditability, crucial for various industries.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><ShieldCheck className="h-5 w-5 text-accent mr-2" /> Enhanced Security & Immutability</li>
                <li className="flex items-center"><ShieldCheck className="h-5 w-5 text-accent mr-2" /> Increased Transparency & Traceability</li>
                <li className="flex items-center"><ShieldCheck className="h-5 w-5 text-accent mr-2" /> Improved Efficiency & Reduced Costs</li>
                <li className="flex items-center"><ShieldCheck className="h-5 w-5 text-accent mr-2" /> Decentralization & Trust</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Blockchain Services Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Blockchain Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => (
                <Card key={service.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Key Aspects:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {service.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms We Work With Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Platforms & Technologies
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

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Explore Blockchain Solutions?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Our experts are here to guide you through the possibilities of blockchain and develop a solution tailored to your needs.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=BlockchainInquiry">Discuss Your Blockchain Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
