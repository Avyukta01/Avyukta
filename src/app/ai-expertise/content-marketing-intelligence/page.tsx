import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Automated Content Marketing Intelligence with OpenAI, Ahrefs & Multi-platform Integration | Avyukta AI",
  description: "Monitor competitor changes, track messaging, and build business intelligence databases with AI-powered content marketing intelligence. Integrate OpenAI, Ahrefs, and more.",
  keywords: [
    "content marketing intelligence",
    "AI competitor monitoring",
    "OpenAI marketing tools",
    "Ahrefs integration",
    "business intelligence",
    "Avyukta AI"
  ],
};

export default function ContentMarketingIntelligencePage() {
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
                  src="/aiimage/image4.png"
                  alt="Content Marketing Intelligence Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Automated Content Marketing Intelligence with OpenAI, Ahrefs & Multi-platform Integration
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Gain a competitive edge by monitoring competitor changes, tracking messaging, and building comprehensive business intelligence databases. Integrate OpenAI, Ahrefs, and multi-platform tools for smarter content marketing.
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
            <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-2">
              <li>Automatic retry for failed API calls</li>
              <li>Data validation before storage</li>
              <li>Error notifications via Slack</li>
              <li>Multi-region support (US, UK, DE, FR, JP)</li>
              <li>Batch processing for large competitor lists</li>
              <li>Rate limiting to respect API quotas</li>
              <li>Modular design - disable unused APIs</li>
              <li>Industry templates - forex, ecommerce, SaaS</li>
              <li>Custom scoring algorithms</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 