"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, CheckCircle, Info } from "lucide-react";
import Image from "next/image";

const features = [
  "User-friendly classified ads platform for buying and selling goods locally",
  "Advanced search and filtering for quick discovery of relevant listings",
  "Secure user authentication, profile management, and chat system",
  "Image uploads, price negotiation, and location-based services",
  "Admin dashboard for moderation, analytics, and revenue management",
  "Mobile responsive design for seamless experience on any device"
];

const benefits = [
  "Launch your own marketplace with proven business model",
  "Attract local buyers and sellers with easy onboarding",
  "Monetize via featured ads, subscriptions, or commissions",
  "Scalable architecture to support growing user base",
  "Customizable branding and feature set to fit your niche"
];

const useCases = [
  {
    title: "Local Marketplaces",
    desc: "Enable communities to buy and sell used goods, vehicles, electronics, and more.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Niche Classifieds",
    desc: "Create specialized platforms for real estate, jobs, services, or automotive.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Business Directories",
    desc: "Connect local businesses with customers through listings and promotions.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Community Portals",
    desc: "Foster engagement and commerce within residential societies or alumni groups.",
    img: "https://placehold.co/400x300.png"
  }
];

export default function OLXReplicaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OLX Replica Marketplace Solution
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Launch your own online classified ads platform inspired by OLX. Connect buyers and sellers, manage listings, and grow your local marketplace with a robust, scalable, and customizable solution.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose Our OLX Replica?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Ideal Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, idx) => (
                <Card key={useCase.title} className="flex flex-col overflow-hidden shadow-lg">
                  <div className="relative h-40 w-full">
                    <Image
                      src={useCase.img}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Build Your Marketplace?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss how our OLX Replica solution can help you launch, grow, and monetize your own online classifieds platform.
            </p>
            <a href="/contact?subject=OLXReplica_Inquiry&product=OLXReplica">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all">
                Get a Free Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 