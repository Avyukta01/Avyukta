import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Generate AI Viral Videos with Seedance and Upload to YouTube & Instagram | Avyukta AI",
  description: "Automate viral video creation and publishing with Seedance, OpenAI, Fal AI, and more. Generate, edit, and upload videos to YouTube, Instagram, TikTok, and other platforms.",
  keywords: [
    "AI viral video generation",
    "Seedance AI",
    "YouTube automation",
    "Instagram automation",
    "video publishing AI",
    "Avyukta AI"
  ],
};

export default function AIViralVideosPage() {
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
                  src="/aiimage/image5.png"
                  alt="AI Viral Video Generation Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Generate AI Viral Videos with Seedance and Upload to YouTube & Instagram
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Automate the entire process of viral video creation, editing, and publishing using the latest AI tools. From creative ideation to multi-platform publishing, streamline your video marketing with Avyukta AI.
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
              <li>Generates a creative idea using OpenAI and LangChain</li>
              <li>Creates detailed video prompts with Seedance AI</li>
              <li>Generates video clips via Wavespeed AI</li>
              <li>Generates sound effects with Fal AI</li>
              <li>Stitches the final video using Fal AI’s ffmpeg API</li>
              <li>Logs metadata and video links to Google Sheets</li>
              <li>Uploads the video to Blotato</li>
              <li>Auto-publishes to TikTok, YouTube, Instagram, and other platforms</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 