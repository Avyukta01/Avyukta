import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Dynamically Generate a Webpage from User Request using OpenAI Structured Output | Avyukta AI",
  description: "Instantly create custom web pages from user prompts using OpenAI's structured output. Automate landing page, blog, and microsite generation for marketing, sales, and more.",
  keywords: [
    "dynamic webpage generation",
    "OpenAI structured output",
    "AI landing page creation",
    "automated web design",
    "Avyukta AI"
  ],
};

export default function DynamicWebpageGenerationPage() {
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
                  alt="Dynamic Webpage Generation Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Dynamically Generate a Webpage from User Request using OpenAI Structured Output
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Instantly create custom web pages, landing pages, or microsites from a simple user prompt. Harness the power of OpenAI's structured output to automate web design, content creation, and publishing—no coding required.
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
              <li>User submits a prompt describing the desired webpage (e.g., "Create a landing page for a new fitness app")</li>
              <li>OpenAI Structured Output parses the prompt and generates a detailed page structure (sections, headings, images, CTAs, etc.)</li>
              <li>AI generates high-quality copy, headlines, and calls-to-action for each section</li>
              <li>Relevant images and icons are selected or generated automatically</li>
              <li>The webpage is assembled and previewed in real time</li>
              <li>One-click publishing to your domain or export to HTML/React code</li>
              <li>All metadata, SEO tags, and analytics scripts are auto-included</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary mb-2">Use Cases</h3>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-1">
              <li>Marketing teams launching new campaigns or products</li>
              <li>Sales teams creating personalized landing pages for prospects</li>
              <li>Agencies and freelancers automating client microsite creation</li>
              <li>Entrepreneurs testing new business ideas quickly</li>
              <li>Anyone needing a fast, professional web presence</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 