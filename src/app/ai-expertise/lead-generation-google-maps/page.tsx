import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Lead Generation System: Google Maps to Email Scraper with Google Sheets Export | Avyukta AI",
  description: "Generate targeted lead lists by scraping Google Maps and exporting to Google Sheets. Perfect for sales, marketing, real estate, and market research teams.",
  keywords: [
    "lead generation system",
    "Google Maps scraper",
    "email scraper",
    "Google Sheets export",
    "B2B sales leads",
    "market research",
    "Avyukta AI"
  ],
};

export default function LeadGenerationGoogleMapsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left flex justify-center h-full">
              <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] flex items-center">
                <Image
                  src="/aiimage/image2.png"
                  alt="Lead Generation System Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Lead Generation System: Google Maps to Email Scraper with Google Sheets Export
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Instantly build targeted lead lists by scraping business data from Google Maps and exporting it to Google Sheets. Perfect for sales, marketing, real estate, and market research teams looking to supercharge their outreach and analysis.
              </p>
              <ScheduleDemoSheet>
                <Button
                  size="default"
                  variant="default"
                  className="bg-white text-black font-bold rounded-full shadow hover:bg-gray-100 transition border border-black mb-4"
                >
                  Schedule a Meeting
                </Button>
              </ScheduleDemoSheet>
              <Link href="/ai">
                <Button variant="link" className="text-primary">&larr; Back to AI Expertise</Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-primary mb-4">Use Cases</h2>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-2">
              <li>Local Service Providers - Find competitors and potential partners in specific geographic areas</li>
              <li>B2B Sales Teams - Generate targeted prospect lists for cold outreach campaigns</li>
              <li>Marketing Agencies - Build industry-specific lead databases for client campaigns</li>
              <li>Real Estate Professionals - Identify businesses in target neighborhoods for commercial opportunities</li>
              <li>Franchise Development - Research potential markets and existing competition</li>
              <li>Market Research - Analyze business density and contact information across regions</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 