"use client";

import { PhoneCall, CheckCircle, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export default function TelephonyServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <PhoneCall className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Telephony: Cloud Calling & Automation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Transform your business communication with our next-generation cloud telephony platform. Automate calls, enable global connectivity, and deliver seamless customer experiences—all with secure, scalable, and easy-to-integrate solutions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Key Benefits of Cloud Telephony
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up">
                <PhoneCall className="h-10 w-10 text-accent mb-3 animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Unified Communication</h3>
                <p className="text-muted-foreground">Centralize voice, SMS, and IVR on a single cloud platform for streamlined business operations.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up animation-delay-100">
                <CheckCircle className="h-10 w-10 text-green-500 mb-3 animate-spin-slow" />
                <h3 className="font-semibold text-lg mb-2">Call Automation & Routing</h3>
                <p className="text-muted-foreground">Automate outbound and inbound calls, set up smart routing, and reduce manual workload with intelligent workflows.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up animation-delay-200">
                <Info className="h-10 w-10 text-blue-500 mb-3 animate-bounce" />
                <h3 className="font-semibold text-lg mb-2">Global Reach, Local Presence</h3>
                <p className="text-muted-foreground">Connect with customers worldwide using local numbers, toll-free lines, and multi-language IVR.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up animation-delay-300">
                <CheckCircle className="h-10 w-10 text-green-500 mb-3 animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Seamless CRM Integration</h3>
                <p className="text-muted-foreground">Integrate with your CRM, helpdesk, or custom apps for real-time call tracking and analytics.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up animation-delay-400">
                <PhoneCall className="h-10 w-10 text-accent mb-3 animate-spin-slow" />
                <h3 className="font-semibold text-lg mb-2">Secure & Scalable</h3>
                <p className="text-muted-foreground">Enterprise-grade security, 99.99% uptime, and instant scalability for businesses of any size.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center animate-fade-in-up animation-delay-500">
                <Info className="h-10 w-10 text-blue-500 mb-3 animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
                <p className="text-muted-foreground">Get detailed call analytics, monitor agent performance, and optimize your communication strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section (hidden, for SEO) */}
        <section style={{ display: "none" }}>
          <h2>cloud telephony, business phone system, call automation, virtual call center, VoIP solutions, global business communication, telephony API, CRM telephony integration, IVR platform, scalable phone system, secure cloud calling, unified communications, business call analytics</h2>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Experience the Future of Business Calling
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ready to modernize your communications? Contact us for a free demo and discover how our Telephony platform can boost your business efficiency and customer satisfaction.
            </p>
            <ScheduleDemoSheet>
              <button className="bg-white text-black border border-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all">
                Request a Free Demo
              </button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 