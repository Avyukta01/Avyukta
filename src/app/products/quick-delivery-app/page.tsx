"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const features = [
  { title: "Manage Users & Delivery Agents", description: "Easily onboard, manage, and monitor users and delivery agents from a unified dashboard." },
  { title: "Track All Orders (Live, Completed, Scheduled)", description: "Monitor every order in real time—see live, completed, and scheduled deliveries at a glance." },
  { title: "Set Service Areas & Zones", description: "Define and manage delivery zones and service areas for efficient operations and coverage." },
  { title: "Payment & Commission Management", description: "Automate payments, manage commissions, and ensure transparent financial operations for all stakeholders." },
  { title: "Support Ticket Management", description: "Handle customer and agent issues efficiently with an integrated support ticket system." },
  { title: "Coupons & Promo Code Management", description: "Create, distribute, and track coupons and promo codes to boost engagement and retention." },
  { title: "Analytics & Exportable Reports", description: "Gain actionable insights with analytics and exportable reports for business growth and compliance." },
  { title: "Android/iOS app for Users", description: "Offer a seamless ordering experience with dedicated mobile apps for your customers." },
  { title: "Android/iOS app for Delivery Partners", description: "Empower delivery agents with a robust app for order management, navigation, and earnings tracking." },
  { title: "Admin Web Dashboard", description: "Control every aspect of your delivery business from a powerful, intuitive web dashboard." },
  { title: "API documentation (if applicable)", description: "Integrate with third-party systems using clear, comprehensive API documentation." },
  { title: "Deployment support", description: "Get expert assistance for smooth deployment and go-live." },
  { title: "Basic training (if needed)", description: "Receive basic training for your team to ensure a successful launch and ongoing operations." },
];

export default function QuickDeliveryAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quick Delivery App
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Launch your own scalable, real-time delivery platform. Manage users, agents, orders, payments, and analytics—all in one place, with dedicated apps for users and delivery partners.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Delivery Business?</h2>
            <p className="text-lg mb-6">Contact Avyukta today for a free consultation and see how our Quick Delivery App can transform your operations.</p>
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