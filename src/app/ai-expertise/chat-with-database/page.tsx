import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "Chat with a Database using AI | Avyukta AI",
  description: "Query your database using natural language with AI. Supports Postgres, MySQL, SQLite, and more. Instantly get insights, automate reporting, and empower your team.",
  keywords: [
    "AI database chat",
    "natural language SQL",
    "Postgres AI",
    "MySQL AI",
    "SQLite AI",
    "database assistant",
    "Avyukta AI"
  ],
};

export default function ChatWithDatabasePage() {
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
                  src="/aiimage/image6.png"
                  alt="AI Database Chat Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                Chat with a Database using AI
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Instantly query your database using natural language. Let AI translate your questions into SQL, fetch results, and explain insights—no technical skills required. Empower your team to get answers from Postgres, MySQL, SQLite, and more.
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
              <li>User sends a chat message with a question or request</li>
              <li>AI agent interprets the message and determines the required data</li>
              <li>AI translates the request into an optimized SQL query</li>
              <li>Query is executed on the connected database (Postgres, MySQL, or SQLite)</li>
              <li>Results are returned and summarized in plain language</li>
              <li>Follow-up questions and drill-downs are supported in the same chat</li>
              <li>All interactions are logged for audit and learning</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary mb-2">Supported Databases</h3>
            <ul className="list-disc pl-6 mb-4 text-base text-foreground space-y-1">
              <li>Postgres</li>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 