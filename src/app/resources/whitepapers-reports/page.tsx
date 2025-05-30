
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollText, Download, CalendarDays, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whitepapersAndReports = [
  {
    title: "The Impact of AI on Modern Enterprises",
    date: "August 15, 2023",
    category: "Whitepaper",
    excerpt: "An in-depth analysis of how artificial intelligence is revolutionizing business operations, decision-making, and customer engagement across various industries.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/whitepapers/ai-impact-on-enterprises.pdf", // Placeholder for actual PDF link
    aiHint: "ai technology abstract",
    icon: BookOpen,
  },
  {
    title: "Navigating the Future of Cloud Computing",
    date: "September 5, 2023",
    category: "Report",
    excerpt: "A comprehensive report on emerging trends in cloud technology, security considerations, and strategies for optimizing cloud infrastructure.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/reports/future-of-cloud-computing.pdf", // Placeholder
    aiHint: "cloud computing data",
    icon: ScrollText,
  },
  {
    title: "Cybersecurity Best Practices for Remote Teams",
    date: "September 20, 2023",
    category: "Whitepaper",
    excerpt: "Essential guidelines and strategies for maintaining robust cybersecurity while supporting a distributed workforce in the new era of work.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/whitepapers/cybersecurity-remote-teams.pdf", // Placeholder
    aiHint: "cybersecurity lock",
    icon: BookOpen,
  },
  {
    title: "Annual Tech Trends Report 2024",
    date: "October 10, 2023",
    category: "Report",
    excerpt: "Our flagship report covering the most significant technology trends anticipated to shape the landscape in the upcoming year.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/reports/annual-tech-trends-2024.pdf", // Placeholder
    aiHint: "technology trends chart",
    icon: ScrollText,
  }
];

export default function WhitepapersReportsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <ScrollText className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Our Knowledge Hub
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Explore in-depth whitepapers and insightful reports from Voxaiomni's experts.
            </p>
          </div>
        </section>

        {/* Whitepapers & Reports Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapersAndReports.map((item, index) => (
                <Card 
                  key={item.slug} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={item.aiHint}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                     <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                        {item.category}
                     </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{item.title}</CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <CalendarDays className="h-4 w-4 mr-1.5" />
                      {item.date}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{item.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary transition-colors w-full md:w-auto">
                      {/* In a real app, this would link to the PDF or a details page */}
                      <Link href={item.slug} target="_blank" rel="noopener noreferrer"> 
                        Download <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* Placeholder for pagination if needed */}
          </div>
        </section>

         {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Stay Ahead with Voxaiomni Insights
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Subscribe to our newsletter to get the latest research, reports, and technology news delivered to your inbox.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/resources/newsletter">Subscribe Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
