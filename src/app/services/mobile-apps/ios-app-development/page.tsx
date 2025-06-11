"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Apple, Code2, Shield, Users, Rocket, BarChartHorizontalBig, CheckCircle, Lightbulb, TrendingUp, ArrowRight, Settings, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const expertiseAreas = [
  {
    title: "Native iOS App Development",
    description: "Crafting high-performance and intuitive applications for iPhone and iPad using Swift and Objective-C.",
    icon: Code2,
  },
  {
    title: "iOS UI/UX Design",
    description: "Designing elegant and user-friendly interfaces that adhere to Apple's Human Interface Guidelines for a seamless experience.",
    icon: Lightbulb,
  },
  {
    title: "App Modernization & Migration",
    description: "Revitalizing existing iOS applications or migrating apps from other platforms to the Apple ecosystem.",
    icon: TrendingUp,
  },
  {
    title: "Apple Watch & tvOS App Development",
    description: "Extending your app's reach to Apple Watch and Apple TV for a holistic user experience.",
    icon: Settings,
  },
  {
    title: "QA & Testing",
    description: "Rigorous testing on all iOS devices and versions to ensure flawless performance and a bug-free application.",
    icon: CheckCircle,
  },
  {
    title: "App Store Submission & Optimization",
    description: "Guiding you through the complex App Store submission process and optimizing your app for maximum visibility.",
    icon: BarChartHorizontalBig,
  },
];

const benefits = [
  "Tap into a premium market with loyal iOS users and higher engagement rates.",
  "Deliver a superior user experience with Apple's consistent design principles.",
  "Benefit from robust security features and a secure app ecosystem.",
  "Access to cutting-edge technologies and exclusive Apple features.",
  "Gain a competitive advantage with a high-quality, well-performing iOS app.",
  "Seamless integration with other Apple devices and services."
];

const developmentProcess = [
  {
    step: "01",
    title: "Concept & Strategy",
    description: "Defining your app's purpose, target audience, and key features to lay a solid foundation.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Creating stunning and intuitive interfaces that adhere to Apple's Human Interface Guidelines for an exceptional user experience.",
  },
  {
    step: "03",
    title: "Development & Implementation",
    description: "Our expert developers build your app using Swift or Objective-C, focusing on clean code and optimal performance.",
  },
  {
    step: "04",
    title: "Quality Assurance & Testing",
    description: "Thorough testing on various iOS devices and versions ensures a bug-free, high-performance, and secure application.",
  },
  {
    step: "05",
    title: "App Store Submission",
    description: "We manage the entire App Store submission process, ensuring compliance with Apple's strict guidelines for a smooth launch.",
  },
  {
    step: "06",
    title: "Maintenance & Updates",
    description: "Providing ongoing support, updates, and optimization to keep your app compatible with new iOS versions and devices.",
  },
];

export default function IosAppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Apple className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              iOS App Development: Crafting Premium Mobile Experiences
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Building elegant, high-performance, and secure iOS applications that captivate Apple users and drive unparalleled engagement.
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
              Our iOS App Development Expertise
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
              Why Choose iOS for Your Business?
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
              Our iOS App Development Process
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
              Ready to Create Your Next iOS Innovation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and build a revolutionary iOS application that stands out.
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