import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Automate Multi-Platform Social Media Content Creation with AI | Avyukta AI",
  description: "Streamline your social media strategy with AI-powered content creation, scheduling, and publishing across all major platforms. Save time, boost engagement, and grow your brand.",
  keywords: [
    "AI social media automation",
    "multi-platform content creation",
    "content scheduling AI",
    "social media publishing",
    "Avyukta AI"
  ],
};

export default function MultiPlatformContentCreationPage() {
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
                  src="/aiimage/image.png"
                  alt="Multi-Platform Social Media Content Creation Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Automate Multi-Platform Social Media Content Creation with AI
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Effortlessly create, schedule, and publish engaging content across all your social media channels. Let AI handle ideation, copywriting, image generation, and analytics—so you can focus on growing your brand.
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
              <li>AI analyzes your brand, audience, and trending topics to suggest content ideas</li>
              <li>Generates post copy, hashtags, and calls-to-action tailored for each platform</li>
              <li>Creates or selects images and videos using generative AI or your asset library</li>
              <li>Schedules posts for optimal engagement times across all selected platforms</li>
              <li>Publishes content automatically to Facebook, Instagram, Twitter, LinkedIn, TikTok, and more</li>
              <li>Monitors engagement and collects analytics in real time</li>
              <li>Suggests improvements and next steps based on performance data</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary mb-2">Key Features</h3>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-1">
              <li>Unified dashboard for all social channels</li>
              <li>AI-powered content ideation and copywriting</li>
              <li>Automatic image and video generation</li>
              <li>Bulk scheduling and calendar view</li>
              <li>Platform-specific optimization (hashtags, formats, timing)</li>
              <li>Approval workflows for teams</li>
              <li>Real-time analytics and reporting</li>
              <li>Integration with Canva, Google Drive, Dropbox, and more</li>
              <li>Multi-language support</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 