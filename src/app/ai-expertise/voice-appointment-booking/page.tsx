import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Voice-Based Appointment Booking System with ElevenLabs AI and Cal.com | Avyukta AI",
  description: "Automate appointment scheduling with AI-powered voice calls, real-time calendar integration, and natural speech. Powered by ElevenLabs and Cal.com.",
  keywords: [
    "voice appointment booking",
    "AI scheduling",
    "ElevenLabs voice AI",
    "Cal.com integration",
    "AI phone booking",
    "Avyukta AI"
  ],
};

export default function VoiceAppointmentBookingPage() {
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
                  src="/aiimage/image9.png"
                  alt="Voice Appointment Booking Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Voice-Based Appointment Booking System with ElevenLabs AI and Cal.com
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Let your customers book appointments by simply speaking. This AI-powered system uses ElevenLabs for natural voice interaction and Cal.com for real-time scheduling, delivering a seamless, human-like experience.
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
              <li>Receives an inbound voice call (e.g., from a website or IVR system).</li>
              <li>Uses ElevenLabs to drive the voice interaction with natural, AI-generated speech.</li>
              <li>Checks real-time availability from your Cal.com calendar.</li>
              <li>Books a meeting if a slot is available.</li>
              <li>If not, asks the user to suggest a new time and checks availability again.</li>
              <li>Confirms the appointment with a verbal response and optional email or SMS.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 