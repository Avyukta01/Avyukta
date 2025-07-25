import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Automate Sales Cold Calling Pipeline with Apify, GPT-4o, and WhatsApp | Avyukta AI",
  description: "Automate your sales cold calling pipeline with Apify prospect scraping, GPT-4o research, WhatsApp automation, and AI-powered follow-up. Boost engagement and optimize your campaigns.",
  keywords: [
    "AI sales automation",
    "cold calling pipeline",
    "Apify prospect scraping",
    "GPT-4o research",
    "WhatsApp automation",
    "AI follow-up",
    "Avyukta AI"
  ],
};

export default function SalesColdCallingPage() {
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
                  src="/aiimage/image1.png"
                  alt="Automate Sales Cold Calling Pipeline Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Automate Sales Cold Calling Pipeline with Apify, GPT-4o, and WhatsApp
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Transform your sales outreach with a fully automated cold calling pipeline. Leverage Apify for prospect scraping, GPT-4o for intelligent research, and WhatsApp automation for personalized engagement—all powered by AI.
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
        {/* Workflow Steps Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-primary mb-4">Workflow Overview</h2>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-2">
              <li>Prospect Scraping: Uses Apify to automatically scrape and identify high-quality prospects based on your target criteria.</li>
              <li>Intelligent Research: Employs RAG technology to research each prospect and gather relevant business intelligence.</li>
              <li>Personalized Content: Automatically generates custom messages, scripts, and talking points for each prospect.</li>
              <li>WhatsApp Integration: Delivers personalized messages through WhatsApp automation for maximum engagement.</li>
              <li>Performance Tracking: Monitors response rates, engagement metrics, and conversion data for continuous optimization.</li>
              <li>AI-Powered Follow-up: Automatically handles initial responses and schedules appropriate follow-up actions.</li>
              <li>Campaign Analytics: Provides detailed insights on campaign performance and ROI metrics.</li>
              <li>Continuous Learning: Improves message effectiveness and targeting based on campaign results.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 