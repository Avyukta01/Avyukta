"use client";

import { Globe, CheckCircle, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HLRLookupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HLR Lookup & Mobile Number Verification Service
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Instantly verify mobile numbers worldwide with our real-time HLR Lookup API. Improve SMS delivery, reduce fraud, and optimize your communications with accurate, up-to-date telecom data. Trusted by telecoms, fintech, e-commerce, and enterprises for global number validation and carrier detection.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose Our HLR Lookup Solution?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>Real-Time Number Status:</strong> Instantly check if a mobile number is active, inactive, or invalid before sending SMS or making calls.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>Global Carrier & Country Detection:</strong> Identify the current network operator and country for any phone number, supporting over 200 countries and 1000+ carriers.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>Roaming & Ported Number Insights:</strong> Detect if a user is roaming or has ported their number to another network, ensuring accurate routing and compliance.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>Bulk Number Validation:</strong> Effortlessly verify large lists of phone numbers for marketing, CRM, or compliance purposes.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>Optimized SMS & Voice Routing:</strong> Avoid undelivered messages and failed calls by filtering out unreachable or non-existent numbers.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-foreground/90"><strong>API Integration:</strong> Simple, secure REST API for seamless integration with your existing systems, apps, or platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Who Benefits from HLR Lookup?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📲</span>
                <h3 className="font-semibold text-lg mb-2">Telecom & SMS Providers</h3>
                <p className="text-muted-foreground">Clean your lists and maximize SMS delivery rates by verifying numbers before sending.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🧾</span>
                <h3 className="font-semibold text-lg mb-2">CRM & Lead Management</h3>
                <p className="text-muted-foreground">Validate customer numbers at entry to prevent fake registrations and improve data quality.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🔐</span>
                <h3 className="font-semibold text-lg mb-2">Fintech & Security</h3>
                <p className="text-muted-foreground">Verify user identity and reduce fraud with real-time phone number validation.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🛍️</span>
                <h3 className="font-semibold text-lg mb-2">E-commerce & Logistics</h3>
                <p className="text-muted-foreground">Confirm delivery numbers before dispatch to reduce failed deliveries and returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section (hidden, for SEO) */}
        <section style={{ display: "none" }}>
          <h2>HLR lookup service, mobile number verification API, real-time number status check, global phone number validation, carrier detection, SMS delivery optimization, telecom verification tool, bulk number checker, phone number validation, number lookup API, mobile carrier lookup, reduce SMS bounce, improve delivery rates, anti-fraud telecom</h2>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Start Verifying Numbers Instantly
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ready to improve your communication, reduce costs, and protect your business? Contact us for a free consultation and see how our HLR Lookup API can transform your number validation process.
            </p>
            <a href="/contact?subject=HLR_Lookup_Inquiry&product=HLR_Lookup">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all">
                Get a Free Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 