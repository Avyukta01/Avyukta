"use client";

import { Info, CheckCircle, ShieldCheck, PhoneOff } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DNDServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="py-8 bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Info className="h-14 w-14 text-accent mx-auto mb-2 animate-bounce" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              DND Management Service
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-2">
              Ensure your communications are always compliant and customer-friendly. Our DND (Do Not Disturb) management platform helps you respect user preferences, avoid penalties, and build trust with your audience.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-6">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <ShieldCheck className="h-8 w-8 text-green-500 mb-2" />
                <h3 className="font-semibold text-base mb-1">Regulatory Compliance</h3>
                <p className="text-xs text-muted-foreground">Automatically filter DND numbers to comply with telecom and privacy regulations.</p>
              </div>
              <div className="p-4 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <PhoneOff className="h-8 w-8 text-accent mb-2" />
                <h3 className="font-semibold text-base mb-1">Customer Respect</h3>
                <p className="text-xs text-muted-foreground">Protect your brand by honoring user opt-outs and preferences for calls and SMS.</p>
              </div>
              <div className="p-4 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <CheckCircle className="h-8 w-8 text-blue-500 mb-2" />
                <h3 className="font-semibold text-base mb-1">Easy Integration</h3>
                <p className="text-xs text-muted-foreground">Seamlessly connect DND checks to your campaigns, APIs, and CRM for real-time validation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section (hidden, for SEO) */}
        <section style={{ display: "none" }}>
          <h2>DND management, Do Not Disturb compliance, telecom regulations, customer opt-out, SMS DND filter, call DND checker, privacy compliance, DND API, real-time DND validation, brand trust, communication compliance</h2>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-primary">
          <div className="container-max text-center">
            <Info className="h-12 w-12 text-accent mx-auto mb-2 animate-bounce" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Stay Compliant, Build Trust
            </h2>
            <p className="text-base text-primary-foreground/80 mb-4 max-w-xl mx-auto">
              Ready to protect your business and your customers? Contact us to see how our DND management service can simplify compliance and enhance your reputation.
            </p>
            <a href="/contact?subject=DND_Inquiry&product=DND">
              <button className="bg-white text-black border border-black hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-base shadow-md transition-all">
                Request a Demo
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 