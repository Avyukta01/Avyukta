"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export default function MonitoringLoggingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Activity className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Monitoring & Logging
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Gain real-time insights into your applications and infrastructure with our robust monitoring and logging solutions. Ensure high performance and quick issue resolution.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Get a Consultation</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* Add more sections here for detailed services, benefits, process, etc. */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Why Effective Monitoring & Logging Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              In today's fast-paced digital environment, proactive monitoring and comprehensive logging are crucial for maintaining application health, identifying bottlenecks, and ensuring a seamless user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Proactive Issue Detection</h3>
                <p className="text-muted-foreground">Identify and resolve issues before they impact users, minimizing downtime and improving reliability.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Performance Optimization</h3>
                <p className="text-muted-foreground">Pinpoint performance bottlenecks and optimize your systems for maximum efficiency and speed.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Enhanced Security</h3>
                <p className="text-muted-foreground">Monitor for unusual activities and security threats, ensuring the integrity and safety of your data.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Compliance & Auditing</h3>
                <p className="text-muted-foreground">Maintain detailed logs for compliance requirements and simplify auditing processes.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Improved User Experience</h3>
                <p className="text-muted-foreground">By ensuring high availability and performance, you deliver a consistently positive experience to your users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's implement a robust monitoring and logging strategy for your business.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
                <span>Schedule a Demo</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
} 