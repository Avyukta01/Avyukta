"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Settings, Cloud, Database, Shield, Rocket, CheckCircle, Lightbulb, Users, ArrowRight, TrendingUp, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Custom Web Application Development",
    description: "Building bespoke web applications tailored to your unique business needs, from complex enterprise systems to innovative SaaS products.",
    icon: Code2,
  },
  {
    title: "API Development & Integration",
    description: "Designing and developing robust, secure, and scalable APIs to connect your web application with other systems and services.",
    icon: Settings,
  },
  {
    title: "Cloud-Native Web Apps",
    description: "Leveraging cloud platforms (AWS, Google Cloud, Azure) to build highly scalable, resilient, and cost-effective web applications.",
    icon: Cloud,
  },
  {
    title: "Database Design & Management",
    description: "Creating efficient and secure database architectures that support your web application's data storage and retrieval needs.",
    icon: Database,
  },
  {
    title: "Performance & Scalability Optimization",
    description: "Ensuring your web application is fast, responsive, and can handle increasing user loads without compromising performance.",
    icon: Rocket,
  },
  {
    title: "Security & Data Protection",
    description: "Implementing industry-leading security measures to protect your web application from threats and ensure data privacy.",
    icon: Shield,
  },
];

const benefits = [
  "Automate and streamline your business processes for increased efficiency.",
  "Enhance user experience with intuitive and interactive web applications.",
  "Gain a competitive edge with innovative and customized digital solutions.",
  "Achieve scalability to support future growth and evolving business demands.",
  "Ensure robust security and data protection for sensitive information.",
  "Improve collaboration and communication within your organization."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Requirement Analysis",
    description: "We work closely with you to understand your business objectives and define detailed functional and technical requirements.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Designing a robust, scalable, and secure architecture, along with intuitive UI/UX for optimal user experience.",
  },
  {
    step: "03",
    title: "Development & Coding",
    description: "Our expert developers build your web application using modern technologies and agile methodologies, focusing on clean code.",
  },
  {
    step: "04",
    title: "Quality Assurance & Testing",
    description: "Rigorous testing is performed to ensure your web application is bug-free, performs optimally, and meets all specifications.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Seamless deployment of your web application to chosen servers, ensuring a smooth and successful go-live.",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Providing ongoing support, maintenance, and performance monitoring to ensure your web application remains secure and up-to-date.",
  },
];

export default function WebAppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Code2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Web Application Development: Powering Your Business Processes
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Crafting robust, scalable, and intuitive web applications that streamline operations, enhance productivity, and deliver exceptional user experiences.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
                Request a Free Consultation
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Web Application Development Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
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
              Benefits of Custom Web Applications
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

        {/* Our Development Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 text-title-glow-primary">
              Our Web Application Development Process
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
              Ready to Optimize Your Business with a Custom Web App?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your needs and build a powerful web application tailored to your success.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get Your Free Quote
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 