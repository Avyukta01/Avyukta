"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, TrendingUp, Handshake, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const customSoftwareServices = [
  {
    title: "Web Application Development",
    description: "Building scalable and secure web applications tailored to your business needs.",
    icon: Code,
    features: [
      "Custom CRM/ERP Systems",
      "E-commerce Platforms",
      "Portals & Dashboards",
      "API Development"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive and high-performance mobile applications for iOS and Android.",
    icon: Lightbulb,
    features: [
      "Native iOS/Android Apps",
      "Cross-Platform Development (React Native, Flutter)",
      "UI/UX Design",
      "App Store Deployment"
    ]
  },
  {
    title: "Desktop Application Development",
    description: "Developing robust and efficient desktop applications for various operating systems.",
    icon: TrendingUp,
    features: [
      "Cross-Platform Desktop Apps",
      "Performance Optimization",
      "Security Integration",
      "User-Friendly Interfaces"
    ]
  },
  {
    title: "Software Product Development",
    description: "From concept to launch, we guide you through the entire software product lifecycle.",
    icon: Handshake,
    features: [
      "Market Research & Analysis",
      "Prototyping & MVP Development",
      "Iterative Development & Testing",
      "Post-Launch Support & Maintenance"
    ]
  }
];

const benefits = [
  "Tailored solutions that perfectly fit your unique business processes.",
  "Increased efficiency and productivity through automation.",
  "Scalable solutions that grow with your business.",
  "Competitive advantage with innovative and proprietary software.",
  "Enhanced security and data protection.",
  "Streamlined operations and reduced manual errors."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your vision, requirements, and defining project scope."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating intuitive UI/UX designs and interactive prototypes."
  },
  {
    step: "03",
    title: "Development & Iteration",
    description: "Building the software in agile sprints with continuous feedback."
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Rigorous testing to ensure bug-free and high-performance software."
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Seamless deployment and successful launch of your custom software."
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to ensure long-term success."
  }
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Code className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Custom Software Development
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Crafting bespoke software solutions designed to meet your unique business challenges and drive innovation.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Build Your Custom Software
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Custom Software Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customSoftwareServices.map((service, index) => (
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
              Benefits of Custom Software
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

        {/* Development Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Custom Software Development Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProcess.map((item, index) => (
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
              Ready for a Software Solution Tailored to You?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how custom software can transform your business operations.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 