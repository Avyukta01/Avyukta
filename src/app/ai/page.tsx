"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, Bot, BarChart3, ShieldCheck, Cpu, Speech, Eye, MessageSquare, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";
import { aiExpertiseDetails } from "@/app/ai/aiExpertiseData";
import { useRef, useState, RefObject } from "react";

const featuredAIProducts = [
  {
    name: "WhatsApp Ai Chat Bot",
    description: "Our flagship AI chatbot, offering 24/7 intelligent customer engagement.",
    icon: Bot,
    link: "/products/whatsapp-ai-chat-bot" // Placeholder link
  },
  {
    name: "AI Voice Caller",
    description: "Transform your voice communications with our AI Voice Caller, automating outbound calls and enhancing inbound interactions.",
    icon: PhoneCall,
    link: "/products/aivoicecaller"
  }
];

export default function AIPage() {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [highlighted, setHighlighted] = useState<{ [key: string]: boolean }>({});
  const sectionRefs: Record<string, RefObject<HTMLDivElement>> = {
    sales: useRef<HTMLDivElement>(null),
    marketing: useRef<HTMLDivElement>(null),
    support: useRef<HTMLDivElement>(null),
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCategory && sectionRefs[searchCategory]) {
      sectionRefs[searchCategory].current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Highlight matching cards
      const matches: { [key: string]: boolean } = {};
      aiExpertiseDetails.forEach(item => {
        if (
          item.category === searchCategory &&
          (item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.shortDescription.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          matches[item.title] = true;
        }
      });
      setHighlighted(matches);
      setTimeout(() => setHighlighted({}), 2000); // Remove highlight after 2s
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <BrainCircuit className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Avyukta AI: Itf'y your business with revolution IT solutions.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Leverage the power of Artificial Intelligence to transform your business, unlock new opportunities, and drive unprecedented growth.
            </p>
            {/* Product Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 mb-10">
              <Link href="/products/aichatbotpro">
                <Button className="bg-white text-black rounded-md px-8 py-4 font-bold text-lg shadow hover:bg-gray-200 transition border border-gray-300 w-full md:w-auto">
                  WhatsApp Ai Chat Bot
                </Button>
              </Link>
              <Link href="/products/aivoicecaller">
                <Button className="bg-white text-black rounded-md px-8 py-4 font-bold text-lg shadow hover:bg-gray-200 transition border border-gray-300 w-full md:w-auto">
                  AI Voice Caller
                </Button>
              </Link>
            </div>
            {/* Search Bar for AI Expertise by Category */}
            <div className="flex flex-col items-center mb-12">
              <form onSubmit={handleSearch} className="w-full max-w-xl flex gap-0 bg-white/30 backdrop-blur border border-white/30 rounded-full shadow-lg overflow-hidden">
                <select
                  className="rounded-l-full px-5 py-3 bg-gray-100 text-black border-none focus:ring-0 focus:outline-none min-w-[140px]"
                  value={searchCategory}
                  onChange={e => setSearchCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="support">Support</option>
                </select>
                <div className="flex items-center flex-grow relative">
                  <span className="absolute left-3 text-gray-400">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search in selected category..."
                    className="w-full pl-10 pr-4 py-3 bg-white text-black border-none focus:ring-0 focus:outline-none"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-r-full bg-black text-white px-7 py-3 font-bold hover:bg-gray-900 transition"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Our AI Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our AI Expertise
            </h2>
            {/* Category Filter (optional, for future) */}
            {/* <div className="flex justify-center mb-8 gap-4">
              <Button>CRM</Button>
              <Button>Sales</Button>
              <Button>Marketing</Button>
              <Button>AI</Button>
            </div> */}
            {["sales", "marketing", "support"].map((cat) => (
              <div key={cat} className="mb-8" ref={sectionRefs[cat]}>
                <h3 className="text-lg font-bold mb-4 capitalize text-primary">{cat}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {aiExpertiseDetails.filter(item => item.category === cat &&
                    (!searchCategory || searchCategory !== cat || searchText.trim() === "" ||
                      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                      item.shortDescription.toLowerCase().includes(searchText.toLowerCase())
                    )
                  ).map(item => (
                    <div
                      key={item.title}
                      className={`bg-[#181828] rounded-2xl p-0 flex flex-col min-h-[300px] max-h-[340px] w-full shadow-md overflow-hidden ${highlighted[item.title] ? "ring-4 ring-yellow-400" : ""}`}
                    >
                      <div className="relative w-full h-48 md:h-56 bg-[#23233a]">
                        <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                      </div>
                      <div className="flex flex-col flex-grow px-4 py-3">
                        <div className="text-sm font-semibold text-white mb-1 line-clamp-2">{item.title}</div>
                        <span className="text-xs text-gray-400 mb-2 line-clamp-2">{item.shortDescription}</span>
                        <div className="flex justify-end mt-auto">
                          <Link href={item.link}>
                            <button className="bg-white text-black rounded-full px-4 py-1 text-xs font-bold hover:bg-gray-200 transition">Know More</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Unlock Your AI Potential?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss how Avyukta's AI expertise can revolutionize your business.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="default" className="bg-white text-black border border-gray-300 hover:bg-gray-200 animate-fade-in-up animation-delay-300">
                <Link href="#">Talk to Our AI Experts</Link>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
