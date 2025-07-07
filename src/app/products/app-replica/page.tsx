"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, CheckCircle, Info } from "lucide-react";
import Image from "next/image";

const features = [
  "Custom-built mobile app solutions tailored to your business needs",
  "Replicate the core features and user experience of popular apps",
  "Cross-platform development for iOS and Android",
  "Modern UI/UX design with branding customization",
  "Secure authentication, real-time notifications, and cloud integration",
  "Scalable architecture for future growth and feature expansion"
];

const benefits = [
  "Accelerate your go-to-market with proven app models",
  "Reduce development costs by leveraging existing app blueprints",
  "Own your codebase and customize every aspect",
  "Deliver a familiar, intuitive experience to your users",
  "Ongoing support and maintenance for long-term success"
];

const useCases = [
  {
    title: "Startup MVPs",
    desc: "Quickly launch a minimum viable product by replicating successful app concepts.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Business Apps",
    desc: "Digitize operations with custom apps for sales, support, or internal workflows.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Niche Marketplaces",
    desc: "Create specialized platforms for local services, events, or communities.",
    img: "https://placehold.co/400x300.png"
  },
  {
    title: "Educational Platforms",
    desc: "Build e-learning, coaching, or school management apps with proven features.",
    img: "https://placehold.co/400x300.png"
  }
];

export default function AppReplicaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Smartphone className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              App Replica Development Solution
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Bring your app idea to life by replicating the best features of top apps. Our App Replica solution delivers a robust, scalable, and fully customizable mobile app tailored to your vision.
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
              Why Choose Our App Replica Solution?
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
              Ready to Launch Your App?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss how our App Replica solution can help you build, customize, and scale your mobile app idea with confidence.
            </p>
            <a href="/contact?subject=AppReplica_Inquiry&product=AppReplica">
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