"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, Code2, Shield, Users, Rocket, BarChartHorizontalBig, CheckCircle, Lightbulb, TrendingUp, ArrowRight, Settings, CalendarClock, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Custom Android App Development",
    description: "Building bespoke Android applications from the ground up, tailored to your specific business requirements and user needs.",
    icon: Code2,
  },
  {
    title: "Android UI/UX Design",
    description: "Crafting intuitive, engaging, and visually stunning user interfaces and experiences that resonate with Android users.",
    icon: Lightbulb,
  },
  {
    title: "App Modernization & Migration",
    description: "Updating legacy Android apps to modern standards or migrating existing applications to the Android platform.",
    icon: TrendingUp,
  },
  {
    title: "Android Wearables & IoT Apps",
    description: "Developing applications for Android-based wearables, smart devices, and IoT solutions.",
    icon: Settings,
  },
  {
    title: "QA & Testing",
    description: "Rigorous testing across various Android devices and versions to ensure a bug-free and high-performance application.",
    icon: CheckCircle,
  },
  {
    title: "Post-Launch Support & Maintenance",
    description: "Providing continuous support, updates, and optimization to ensure your app remains robust and relevant.",
    icon: Wrench,
  },
];

const benefits = [
  "Access to the largest mobile market with Android's extensive user base.",
  "Flexible and customizable solutions tailored to your unique business logic.",
  "Faster deployment cycles and cost-effective development.",
  "Enhanced user engagement through intuitive and high-performance apps.",
  "Robust security features to protect user data and privacy.",
  "Seamless integration with other Google services and platforms."
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by thoroughly understanding your vision, target audience, and business objectives to define the project scope.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Our designers create engaging and intuitive interfaces, focusing on Material Design guidelines for a native Android feel.",
  },
  {
    step: "03",
    title: "Development & Coding",
    description: "Our expert developers build your app using clean, efficient code with Kotlin or Java, ensuring scalability and performance.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Rigorous testing is conducted across various devices and Android versions to guarantee a bug-free and smooth user experience.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "We assist with Google Play Store submission, ensuring your app meets all requirements for a successful launch.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    description: "Ongoing maintenance, updates, and performance monitoring keep your app optimized and up-to-date.",
  },
];

export default function AndroidAppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Bot className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Android App Development: Powering Your Mobile Presence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Crafting innovative, high-performance, and secure Android applications that deliver exceptional user experiences and drive business growth.
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
              Our Android App Development Expertise
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
              Why Choose Android for Your Business?
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
              Our Android App Development Process
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
              Ready to Launch Your Android App?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and build a powerful Android application that drives success.
            </p>
            <ScheduleDemoSheet>
              <Button size="lg" variant="neon">
                Get a Free Quote
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 