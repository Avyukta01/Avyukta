import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Social Media Analysis and Automated Email Generation | Avyukta AI",
  description: "Automate your lead generation and outreach with AI-powered social media analysis and email generation. Integrate Google Sheets, RapidAPI, and OpenAI for a seamless workflow.",
  keywords: [
    "AI social media analysis",
    "automated email generation",
    "lead generation AI",
    "Google Sheets integration",
    "OpenAI email automation",
    "Avyukta AI"
  ],
};

export default function SocialMediaAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta property="og:title" content="Social Media Analysis and Automated Email Generation | Avyukta AI" />
        <meta property="og:description" content="Automate your lead generation and outreach with AI-powered social media analysis and email generation. Integrate Google Sheets, RapidAPI, and OpenAI for a seamless workflow." />
        <meta property="og:image" content="/aiimage/gmail.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Analysis and Automated Email Generation | Avyukta AI" />
        <meta name="twitter:description" content="Automate your lead generation and outreach with AI-powered social media analysis and email generation. Integrate Google Sheets, RapidAPI, and OpenAI for a seamless workflow." />
        <meta name="twitter:image" content="/aiimage/gmail.png" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Avyukta AI",
          "image": "/aiimage/gmail.png",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "url": "https://avyukta.ai/ai-expertise/social-media-analysis",
          "description": "Automate your lead generation and outreach with AI-powered social media analysis and email generation. Integrate Google Sheets, RapidAPI, and OpenAI for a seamless workflow."
        }) }} />
      </Head>
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left flex justify-center h-full">
              <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] flex items-center">
                <Image
                  src="/aiimage/gmail.png"
                  alt="Social Media Analysis Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Social Media Analysis and Automated Email Generation
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Supercharge your lead generation and outreach with a fully automated workflow that integrates Google Sheets, RapidAPI, and OpenAI. Extract social media data, generate personalized emails, and track your progress—all in one seamless solution.
              </p>
              <ScheduleDemoSheet>
                <Button
                  size="lg"
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
              <li>Google Sheets Integration: Start with a Google Sheet containing lead information such as LinkedIn URL, Twitter handle, name, and email.</li>
              <li>Social Media Data Extraction: Automatically fetch profile and activity data from Twitter and LinkedIn using RapidAPI integrations.</li>
              <li>AI-Powered Content Generation: Use OpenAI's Chat Model to analyze the extracted data and generate personalized email subject lines and cover letters.</li>
              <li>Automated Email Dispatch: Send the generated email directly to the lead, with a copy sent to yourself for tracking purposes.</li>
              <li>Progress Tracking: Update the Google Sheet to indicate completed actions.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 