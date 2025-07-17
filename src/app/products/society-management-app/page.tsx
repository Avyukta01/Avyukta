"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const features = [
  { title: "Streamlines Daily Society Operations", description: "Automate and simplify everyday management tasks for residential societies, apartments, and townships." },
  { title: "Reduces Paperwork & Manual Billing", description: "Go digital—minimize paperwork and automate billing, invoicing, and record-keeping for all residents." },
  { title: "Transparent Communication", description: "Enable clear, direct communication between residents and admins with announcements, polls, and feedback." },
  { title: "Easy Online Maintenance Payments", description: "Residents can pay maintenance fees online with automated reminders and instant receipts." },
  { title: "Enhanced Security with Visitor Tracking", description: "Track visitors, deliveries, and staff entries for improved security and peace of mind." },
  { title: "Fully Customizable", description: "Adapt the platform to fit any apartment, villa, or township with flexible modules and branding." },
];

export default function SocietyManagementAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Society Management App
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Digitize and simplify society management. Streamline operations, billing, security, and communication for apartments, villas, and townships—all in one platform.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Society?</h2>
            <p className="text-lg mb-6">Contact Avyukta today for a free consultation and see how our Society Management App can transform your community.</p>
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