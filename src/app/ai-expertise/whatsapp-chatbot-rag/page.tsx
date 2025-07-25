import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

export const metadata: Metadata = {
  title: "AI-Powered WhatsApp Chatbot for Text, Voice, Images, and PDF with RAG | Avyukta AI",
  description: "Enable advanced WhatsApp chatbots with RAG, semantic search, and document import. Supports text, voice, images, and PDF. Integrates with Google Docs, OpenAI, and MongoDB Atlas.",
  keywords: [
    "AI WhatsApp chatbot",
    "RAG chatbot",
    "semantic search",
    "OpenAI embeddings",
    "MongoDB Atlas vector store",
    "Avyukta AI"
  ],
};

export default function WhatsAppChatbotRAGPage() {
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
                  src="/aiimage/image7.png"
                  alt="WhatsApp Chatbot RAG Workflow"
                  fill
                  className="rounded-lg shadow-xl object-cover max-w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="animate-fade-in-right animation-delay-100 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
                AI-Powered WhatsApp Chatbot for Text, Voice, Images, and PDF with RAG
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in-up animation-delay-200">
                Build advanced WhatsApp chatbots that can answer questions from text, voice, images, and PDF documents. Leverage Retrieval-Augmented Generation (RAG), semantic search, and vector databases for instant, accurate responses.
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
              <li>Manually triggered to import product documentation from Google Docs.</li>
              <li>Automatically splits large documents into chunks for efficient searching.</li>
              <li>Generates vector embeddings for each chunk using OpenAI embeddings.</li>
              <li>Inserts the embedded chunks and metadata into a MongoDB Atlas vector store, enabling fast semantic search.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 