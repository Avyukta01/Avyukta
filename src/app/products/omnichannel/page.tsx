"use client";

import { Globe, CheckCircle, MessageCircle, Smartphone, Zap, PhoneCall, Code2, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export default function OmniChannelProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="py-8 bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-14 w-14 text-accent mx-auto mb-2" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              OmniChannel
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-2">
              Connect with your customers everywhere—Virtual, Meta, WhatsApp, API, SMS, RCS, OBD, and more. One platform, every channel.
            </p>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-6">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <MessageCircle className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">Virtual</h3>
                <p className="text-xs text-muted-foreground">Engage users with virtual agents and chatbots for instant support.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <Zap className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">Meta</h3>
                <p className="text-xs text-muted-foreground">Connect on Facebook, Instagram, and Messenger for social engagement.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <Smartphone className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">WhatsApp</h3>
                <p className="text-xs text-muted-foreground">Automate and personalize conversations on WhatsApp Business.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <Code2 className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">API</h3>
                <p className="text-xs text-muted-foreground">Integrate messaging, notifications, and more with robust APIs.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <MessageCircle className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">SMS</h3>
                <p className="text-xs text-muted-foreground">Send fast, reliable SMS for alerts, OTPs, and marketing.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <MessageCircle className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">RCS</h3>
                <p className="text-xs text-muted-foreground">Deliver rich, interactive messages with next-gen RCS technology.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <PhoneCall className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">OBD</h3>
                <p className="text-xs text-muted-foreground">Automate outbound voice calls for reminders, surveys, and campaigns.</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow flex flex-col items-center text-center">
                <Info className="h-7 w-7 text-accent mb-1" />
                <h3 className="font-semibold text-base mb-1">Prod</h3>
                <p className="text-xs text-muted-foreground">Productivity tools to streamline and monitor all channel activity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section (hidden, for SEO) */}
        <section style={{ display: "none" }}>
          <h2>omnichannel platform, virtual agent, meta messaging, WhatsApp business API, SMS gateway, RCS messaging, OBD calls, customer engagement, unified communication, multi-channel marketing, business messaging, API integration</h2>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-primary">
          <div className="container-max text-center">
            <Info className="h-12 w-12 text-accent mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Start Your OmniChannel Journey
            </h2>
            <p className="text-base text-primary-foreground/80 mb-4 max-w-xl mx-auto">
              Ready to connect everywhere? Contact us for a quick demo and see how OmniChannel can transform your customer experience.
            </p>
            <ScheduleDemoSheet>
              <button className="bg-white text-black border border-black hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-base shadow-md transition-all">
                Request a Demo
              </button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 