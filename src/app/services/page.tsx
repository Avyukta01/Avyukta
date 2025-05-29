
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, Smartphone, BrainCircuit, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    description: "We build responsive, scalable, and high-performance web applications tailored to your business needs. Our expertise covers front-end and back-end development, utilizing modern frameworks like Next.js, React, and Node.js to deliver seamless digital experiences. From e-commerce platforms to complex enterprise solutions, we ensure your web presence is robust, secure, and future-proof.",
    image: "https://placehold.co/600x400.png",
    aiHint: "web development code",
    learnMoreLink: "/services/web-development" // Placeholder link
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Crafting intuitive and engaging mobile applications for iOS and Android platforms. We specialize in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) development, focusing on user experience, performance, and scalability. Let us turn your mobile vision into a reality that captivates your users.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mobile app interface",
    learnMoreLink: "/services/mobile-apps" // Placeholder link
  },
  {
    title: "AI Solutions",
    icon: BrainCircuit,
    description: "Leverage the power of Artificial Intelligence to transform your business. We develop custom AI and Machine Learning models for data analysis, predictive insights, automation, natural language processing, and computer vision. Our AI solutions help you innovate, optimize processes, and gain a competitive edge.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ai abstract brain",
    learnMoreLink: "/services/ai-solutions" // Placeholder link
  },
  // You can add more services here
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Settings className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Our Comprehensive Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Innovatech provides a wide range of technology solutions to empower your business and drive digital transformation.
            </p>
          </div>
        </section>

        {/* Services List Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={service.aiHint}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.icon && <service.icon className="absolute top-4 left-4 h-10 w-10 text-white/90 bg-black/40 p-2 rounded-lg shadow-md" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/80">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary transition-colors w-full md:w-auto">
                      <Link href={service.learnMoreLink}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

         {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=ServiceInquiry">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
