"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Shield, Layers, Users, Handshake, CheckCircle, MessageSquare, ArrowRight, Building, Computer, Brain, Zap, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const itConsultingServices = [
  {
    title: "Digital Transformation Strategy",
    icon: TrendingUp,
    description: "Guiding your business through digital adoption to enhance efficiency and competitiveness.",
    link: "/services/it-consulting/digital-transformation"
  },
  {
    title: "Technology Stack Advisory",
    icon: Computer,
    description: "Advising on the optimal technology stack to meet your business objectives and future growth.",
    link: "/services/it-consulting/tech-stack-advisory"
  },
  {
    title: "IT Architecture Planning",
    icon: Building,
    description: "Designing robust and scalable IT architectures that support your current and future business needs.",
    link: "/services/it-consulting/it-architecture-planning"
  },
  {
    title: "Cybersecurity Consulting",
    icon: Shield,
    description: "Protecting your digital assets with expert strategies and robust defense mechanisms against threats.",
    link: "/services/it-consulting/cybersecurity-consulting"
  },
  {
    title: "Cloud Migration & Strategy",
    icon: Layers,
    description: "Seamless migration to cloud environments and development of effective cloud strategies for scalability.",
    link: "/services/cloud-solutions/cloud-migration" // Linking to existing cloud migration page
  },
  {
    title: "Data Analytics & Business Intelligence",
    icon: Brain,
    description: "Leveraging data to provide actionable insights and drive informed business decisions.",
    link: "/services/ai-solutions/ai-consulting" // Linking to AI consulting for now, could be its own page
  }
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Access to experienced IT consultants with diverse industry knowledge."
  },
  {
    icon: Handshake,
    title: "Tailored Solutions",
    description: "Customized strategies that align with your unique business goals."
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "Staying ahead with cutting-edge technologies and best practices."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient project management ensuring on-time and on-budget execution."
  }
];

const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Understanding your current IT landscape, challenges, and business objectives."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Crafting a comprehensive IT strategy and roadmap tailored to your needs."
  },
  {
    step: "03",
    title: "Implementation & Support",
    description: "Guiding the execution of the strategy and providing ongoing support."
  }
];

export default function ITConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Lightbulb className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              IT Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Unlock your business potential with expert IT consulting. We provide strategic guidance to optimize your technology, enhance efficiency, and drive innovation.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Get a Free Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our Core IT Consulting Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itConsultingServices.map((service, index) => (
                <Card key={service.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.link} className="text-accent hover:underline flex items-center mt-4">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Why Partner with Avyukta for IT Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={item.title} className={`p-6 bg-card rounded-lg shadow-lg text-center animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our IT Consulting Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingProcess.map((item, index) => (
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
              Transform Your Business with Strategic IT
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to take your technology infrastructure to the next level? Contact us for a personalized consultation.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Request a Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 