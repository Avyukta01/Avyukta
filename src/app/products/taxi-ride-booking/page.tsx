"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const features = [
  {
    title: "Instant Ride Fare Estimation",
    description: "Get transparent, upfront fare estimates before booking your ride—no surprises, just clarity.",
  },
  {
    title: "Real-time GPS Ride Tracking",
    description: "Track your ride live on an interactive map for safety, convenience, and peace of mind.",
  },
  {
    title: "Comprehensive Ride & Trip History",
    description: "Access your complete ride and trip history for easy reference, expense tracking, and rebooking.",
  },
  {
    title: "Secure Payment Gateway Integration",
    description: "Pay seamlessly and securely with integrated payment gateways supporting cards, wallets, and UPI.",
  },
  {
    title: "Driver Registration & Document Upload",
    description: "Drivers can register and upload required documents directly in the app for fast onboarding.",
  },
  {
    title: "Accept/Reject Ride Requests",
    description: "Drivers have full control to accept or reject ride requests instantly from the app.",
  },
  {
    title: "Trip Navigation via Google Maps",
    description: "Integrated Google Maps ensures accurate, real-time navigation for every trip.",
  },
  {
    title: "Earnings Dashboard for Drivers",
    description: "Drivers can view real-time earnings, completed trips, and payout summaries in one place.",
  },
  {
    title: "Driver Availability Toggle",
    description: "Drivers can easily set their status to online or offline with a single tap.",
  },
  {
    title: "In-app Chat & Call",
    description: "Riders and drivers can communicate securely via in-app chat or call for smooth coordination.",
  },
];

export default function TaxiRideBookingAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Taxi/Ride Booking App
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Launch your own modern, scalable, and user-friendly taxi or ride booking platform. Empower your business with real-time tracking, seamless payments, and a superior experience for both drivers and passengers.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <Card key={feature.title} className="p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg font-semibold mb-1">{feature.title}</CardTitle>
                    <CardContent className="p-0 text-base text-foreground/90">{feature.description}</CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <h2 className="text-3xl font-bold mb-4">Ready to Drive Your Business Forward?</h2>
            <p className="text-lg mb-6">Contact Avyukta today for a free consultation and see how our Taxi/Ride Booking App can accelerate your business success.</p>
            <ScheduleDemoSheet>
              <button className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold text-lg shadow border border-white transition hover:bg-black hover:text-white">Request a Demo</button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 