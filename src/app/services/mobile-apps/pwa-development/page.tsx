"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Smartphone, Cloud, Gauge, CheckCircle, Lightbulb, Users, Target, ArrowRight, TrendingUp, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "PWA Strategy & Consulting",
    description: "Defining your PWA roadmap, identifying key features, and ensuring alignment with your business objectives.",
    icon: Lightbulb,
  },
  {
    title: "Responsive UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces that adapt seamlessly across all devices and screen sizes.",
    icon: Target,
  },
  {
    title: "Offline Capabilities & Service Workers",
    description: "Implementing robust service workers to provide reliable performance even in offline or low-connectivity environments.",
    icon: Cloud,
  },
  {
    title: "Push Notifications Integration",
    description: "Enabling re-engagement with users through timely and relevant push notifications, enhancing user retention.",
    icon: Zap,
  },
  {
    title: "Performance Optimization",
    description: "Optimizing your PWA for lightning-fast loading times and smooth interactions to deliver a superior user experience.",
    icon: Gauge,
  },
  {
    title: "Deployment & Maintenance",
    description: "Assisting with seamless deployment and providing ongoing support, updates, and performance monitoring.",
    icon: CheckCircle,
  },
];

const benefits = [
  "Enhanced user experience with fast, reliable, and engaging interactions.",
  "Increased reach and accessibility, bypassing app store downloads and installations.",
  "Lower development and maintenance costs compared to native mobile apps.",
  "Improved conversion rates and user retention through push notifications and offline access.",
  "Seamless updates and new features delivered instantly without user intervention.",
  "Better SEO and discoverability as PWAs are indexed by search engines."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Understanding your business needs, target audience, and feature requirements to define the PWA scope.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating a responsive and intuitive UI/UX design that provides a native-like experience.",
  },
  {
    step: "03",
    title: "Development & Service Workers",
    description: "Building the PWA with modern web technologies and implementing service workers for offline capabilities and push notifications.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing across various devices and network conditions to ensure reliability, speed, and responsiveness.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Assisting with deployment, including setting up manifest files and service worker registration for installability.",
  },
  {
    step: "06",
    title: "Post-Launch Support & Analytics",
    description: "Providing ongoing maintenance, performance monitoring, and analytics to continuously improve your PWA.",
  },
];

export default function PwaDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Rocket className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Progressive Web App (PWA) Development: The Future of Mobile Web
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Deliver instant, reliable, and engaging app-like experiences directly through the web, bypassing app store complexities.
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
              Our PWA Development Expertise
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
              Why Choose PWAs for Your Business?
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
              Our PWA Development Process
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
              Ready to Transform Your Web Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how a Progressive Web App can revolutionize your customer engagement and reach.
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