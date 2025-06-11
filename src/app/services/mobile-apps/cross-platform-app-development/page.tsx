"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Layers3, Rocket, Users, TrendingUp, CheckCircle, Lightbulb, Shield, Target, CalendarClock, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "React Native Development",
    description: "Building powerful and efficient cross-platform applications using React Native, leveraging JavaScript for native-like performance.",
    icon: Code2,
  },
  {
    title: "Flutter Development",
    description: "Crafting visually stunning and high-performance apps for iOS and Android from a single codebase with Google's Flutter framework.",
    icon: Layers3, // Represents layers/cross-platform
  },
  {
    title: "Xamarin Development",
    description: "Utilizing Microsoft's Xamarin to build native Android, iOS, and Windows apps with C# and .NET, ensuring strong enterprise integration.",
    icon: Smartphone, // General smartphone icon for a mobile dev platform
  },
  {
    title: "UI/UX Design for Cross-Platform",
    description: "Designing adaptive and consistent user interfaces and experiences that feel native on both iOS and Android platforms.",
    icon: Lightbulb,
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating third-party APIs and backend services to extend your app's functionality and data capabilities.",
    icon: Settings,
  },
  {
    title: "Performance Optimization",
    description: "Optimizing cross-platform apps for speed, responsiveness, and efficient resource utilization to ensure a smooth user experience.",
    icon: Rocket,
  },
];

const benefits = [
  "Develop once, deploy everywhere: significantly reduced development time and costs.",
  "Reach a wider audience across both iOS and Android platforms simultaneously.",
  "Maintain a consistent brand experience with a unified UI/UX across devices.",
  "Faster time-to-market with streamlined development and testing cycles.",
  "Simplified maintenance and updates from a single codebase.",
  "Cost-effective solution ideal for startups and businesses with budget constraints."
];

const developmentProcess = [
  {
    step: "01",
    title: "Strategy & Discovery",
    description: "We analyze your business goals and audience to define the optimal cross-platform strategy and feature set.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes for a consistent and engaging user experience on both platforms.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Our developers write efficient code in React Native, Flutter, or Xamarin, integrating all necessary APIs and backend services.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous testing on multiple devices and operating systems ensures a robust, bug-free, and high-performance application.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "We assist with publishing your app to both Google Play Store and Apple App Store, handling all submission requirements.",
  },
  {
    step: "06",
    title: "Support & Evolution",
    description: "Providing ongoing maintenance, performance monitoring, and feature enhancements to keep your app competitive.",
  },
];

export default function CrossPlatformAppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Code2 className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              Cross-Platform App Development: Maximize Your Reach
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Build a single application that seamlessly runs on both iOS and Android, accelerating your market entry and optimizing resources.
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
              Our Cross-Platform Development Expertise
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
              Advantages of Cross-Platform App Development
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
              Our Cross-Platform App Development Process
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
              Ready to Expand Your Mobile Footprint?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and build a versatile cross-platform application that reaches every user.
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