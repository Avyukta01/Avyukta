"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Zap, Users, CheckCircle, BarChartHorizontalBig, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const features = [
  { title: "Instant Customer Engagement 24/7", description: "Engage customers instantly at any time of day, providing answers and support around the clock." },
  { title: "Reduces Support Cost & Wait Time", description: "Automate responses to common queries, reducing the need for large support teams and minimizing customer wait times." },
  { title: "Boosts Sales with Real-Time Interaction", description: "Convert more leads and close sales faster by interacting with customers in real time." },
  { title: "Personalized and Multilingual", description: "Deliver tailored responses in multiple languages to serve a diverse customer base." },
  { title: "Integrates with CRM, Website, and ERP", description: "Seamlessly connect with your CRM, website, and ERP systems for unified customer management." },
  { title: "Scales Without Adding Team Members", description: "Handle unlimited conversations simultaneously without increasing your support staff." },
  { title: "Automated Greetings & Welcome Messages", description: "Greet every customer with automated, customizable welcome messages." },
  { title: "Keyword-Based Responses", description: "Respond instantly to specific keywords or phrases for efficient query handling." },
  { title: "Product / Service Showcase", description: "Showcase your products or services directly in the chat to drive interest and conversions." },
  { title: "Collect User Information", description: "Gather leads and customer details automatically during conversations." },
  { title: "Chat History & Logging", description: "Maintain a complete log of all chats for quality assurance and future reference." },
];

const benefits = [
  "Enhanced Customer Satisfaction with instant, accurate responses.",
  "Increased Lead Conversion Rates through proactive engagement.",
  "Significant Reduction in Customer Support Costs.",
  "Improved Agent Productivity by handling routine queries.",
  "Scalable Customer Service to manage peak demand effortlessly.",
  "Deeper Customer Insights from interaction data.",
];

const useCases = [
    { name: "E-commerce Assistance", description: "Product recommendations, order tracking, returns processing.", image: "/productimage/e-c.png", aiHint: "e-commerce online shopping" },
    { name: "Customer Support Automation", description: "Answering FAQs, troubleshooting, guiding users.", image: "/productimage/auto.png", aiHint: "customer support headset" },
    { name: "Sales & Lead Nurturing", description: "Qualifying leads, scheduling demos, follow-ups.", image: "/productimage/lead.png", aiHint: "sales team meeting" },
    { name: "Appointment Booking", description: "Scheduling and managing appointments for services.", image: "/productimage/image.png", aiHint: "calendar appointment booking" },
];

export default function WhatsAppAiChatBotPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <Bot className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100 text-title-glow-primary">
              WhatsApp Ai Chat Bot: Revolutionize Your Customer Engagement
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Intelligent, 24/7 AI-powered chatbots to elevate customer support, drive sales, streamline operations, and deliver exceptional user experiences.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="outline" className="bg-white text-black border border-gray-300 hover:bg-gray-200 animate-fade-in-up animation-delay-300">
                <span>Request a Demo</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What is WhatsApp Ai Chat Bot? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left flex justify-center">
              <Image
                src="/images/WhatsAppaiomni.jpg"
                alt="WhatsApp Ai Chat Bot Interface"
                width={400}
                height={400}
                className="rounded-lg shadow-xl object-cover max-w-full h-auto"
                data-ai-hint="chatbot interface conversation"
                priority
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100 space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-6 text-title-glow-primary">Meet WhatsApp AI Chatbot Pro</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                WhatsApp AI Chatbot Pro is a powerful solution designed to automate, personalize, and scale your business communications on WhatsApp. Whether you need verified business messaging, global outreach, or unlimited messaging capabilities, our flexible plans ensure you have the right tools to engage your customers and grow your business.
              </p>
              <p className="text-muted-foreground text-lg">
                Explore our tailored WhatsApp solutions below to find the perfect fit for your marketing, support, and automation needs.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section (Brochure Content) */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 text-title-glow-primary">
              WhatsApp AI Chatbot Pro: Brochure Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Meta WhatsApp API Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">META WhatsApp API (Official)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>Verified Business Messaging (Green Tick)</div>
                  <div>₹0.95/msg (Promotional – India)</div>
                  <div>₹0.19/msg (Transactional – India)</div>
                  <div>International Pricing: <a href="https://bit.ly/AICMWA" target="_blank" rel="noopener noreferrer" className="text-primary underline">View Rates</a></div>
                  <div>Panel Charges: ₹8000/month</div>
                  <div>Min Recharge: As per Meta Policy</div>
                  <div>Includes: Flow Builder + API/DB Triggers (as per scope)</div>
                  <div>Ideal For: Verified businesses, regulated campaigns, CRM workflows</div>
                  <div>Optional Add-ons: Bot, CRM Integration, Custom Dashboard</div>
                </CardContent>
              </Card>
              {/* Virtual WhatsApp Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">VIRTUAL WhatsApp (R-CLI)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>Non-Official Gateway via Registered CLI</div>
                  <div>Flat ₹0.17/msg – Global Pricing</div>
                  <div>Min Recharge: ₹10,000</div>
                  <div className="text-warning">Random numbers will appear while sending messages</div>
                  <div>Includes: Flow Builder + API/DB Triggers (as per scope)</div>
                  <div>Ideal For: Fast & affordable marketing without green tick</div>
                  <div>Setup: Quick activation, no approval required</div>
                </CardContent>
              </Card>
              {/* WhatsApp Panel Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">WhatsApp Panel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div>₹60,000/year (One-Time Setup, No Warranty)</div>
                  <div>Unlimited WhatsApp Messaging (Any Country)</div>
                  <div>Includes:</div>
                  <ul className="list-disc pl-5">
                    <li>Flow Builder + API/DB Triggers</li>
                    <li>WA API Access</li>
                    <li>Bulk Messaging</li>
                    <li>Auto-Responder + Smart Replies</li>
                    <li>Export Group Participants Contacts</li>
                    <li>Up to 25 Phone Instances / Scans (More on Request)</li>
                  </ul>
                  <div>Great for marketing teams, resellers, or self-hosting</div>
                  <div>Free Demo Available</div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <a href="/public/brochures/avyukta_brouchre.pdf" download className="inline-block px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-100 transition border border-gray-300">Download Brochure PDF</a>
            </div>
          </div>
        </section>

        {/* Benefits Section (Website Proposal PDF Content) */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-title-glow-primary">WhatsApp Solutions & Proposal</h2>
            <p className="mb-4 text-lg text-muted-foreground">Download our detailed website proposal for WhatsApp solutions and explore all features, pricing, and technical details.</p>
            <a href="https://bit.ly/AICWAMS" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-100 transition border border-gray-300">Download Website Proposal PDF</a>
          </div>
        </section>

        {/* Ratesheet Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 text-title-glow-primary">WhatsApp Solutions Ratesheet</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="min-w-full text-sm text-gray-900">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left font-semibold border-b border-primary/20">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-primary/20">META WhatsApp API (Official)</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-primary/20">VIRTUAL WhatsApp (R-CLI)</th>
                    <th className="px-6 py-4 text-left font-semibold border-b border-primary/20">Broadcast WhatsApp Panel</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900">
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Business Verification</td>
                    <td className="px-6 py-4">Verified by Meta</td>
                    <td className="px-6 py-4">Not Verified</td>
                    <td className="px-6 py-4">Not Verified</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Promotional (India)</td>
                    <td className="px-6 py-4">₹0.95/msg</td>
                    <td className="px-6 py-4">Not Available</td>
                    <td className="px-6 py-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Transactional (India)</td>
                    <td className="px-6 py-4">₹0.19/msg</td>
                    <td className="px-6 py-4">Not Available</td>
                    <td className="px-6 py-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Global Messaging Rate</td>
                    <td className="px-6 py-4">
                      <a href="https://bit.ly/AICMWA" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        WhatsApp Meta Ratesheet
                      </a>
                    </td>
                    <td className="px-6 py-4">₹0.17/msg</td>
                    <td className="px-6 py-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Panel Charges</td>
                    <td className="px-6 py-4">₹8000/month</td>
                    <td className="px-6 py-4">Included</td>
                    <td className="px-6 py-4">₹60,000/year</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Minimum Recharge</td>
                    <td className="px-6 py-4">As per Meta policy</td>
                    <td className="px-6 py-4">₹10,000/month</td>
                    <td className="px-6 py-4">Not Applicable</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sender Numbers</td>
                    <td className="px-6 py-4">Official Number Only</td>
                    <td className="px-6 py-4">Random Numbers</td>
                    <td className="px-6 py-4">Up to 25 Instances</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Green Tick / Branding</td>
                    <td className="px-6 py-4">Supported</td>
                    <td className="px-6 py-4">Not Supported</td>
                    <td className="px-6 py-4">Not Supported</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Automation / Flow Builder</td>
                    <td className="px-6 py-4">Included (scope-based)</td>
                    <td className="px-6 py-4">Included (scope-based)</td>
                    <td className="px-6 py-4">Included</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">API & DB Trigger Integration</td>
                    <td className="px-6 py-4">Supported (as per scope)</td>
                    <td className="px-6 py-4">Supported (as per scope)</td>
                    <td className="px-6 py-4">Included</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Bulk Messaging</td>
                    <td className="px-6 py-4">As per Meta rules</td>
                    <td className="px-6 py-4">Allowed</td>
                    <td className="px-6 py-4">Fully Supported</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Auto-Reply & Group Export</td>
                    <td className="px-6 py-4">Supported via Flow</td>
                    <td className="px-6 py-4">Supported</td>
                    <td className="px-6 py-4">Supported</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Demo Availability</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up text-title-glow-primary">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Discover how WhatsApp Ai Chat Bot can empower your business. Schedule a personalized demo with our experts today.
            </p>
            <Button asChild size="lg" variant="neon" className="animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=WhatsApp_Ai_Chat_Bot_Inquiry&product=WhatsApp_Ai_Chat_Bot">Get Started with WhatsApp Ai Chat Bot</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}