"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, CalendarDays, Megaphone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "Avyukta Launches New AI-Powered Analytics Platform",
    date: "November 15, 2023",
    excerpt: "Our groundbreaking AI platform is set to revolutionize how businesses approach data analytics, offering unprecedented insights.",
    image: "https://placehold.co/600x400.png",
    slug: "/news/new-ai-platform-launch", // Placeholder slug
    aiHint: "ai analytics platform",
  },
  {
    title: "Avyukta Awarded 'Top Tech Innovator 2023'",
    date: "October 28, 2023",
    excerpt: "We are honored to be recognized for our contributions to technology and innovation by the Global Tech Council.",
    image: "https://placehold.co/600x400.png",
    slug: "/news/top-tech-innovator-award-2023", // Placeholder slug
    aiHint: "award ceremony tech",
  },
  {
    title: "Partnership Announced with CloudPioneers Inc.",
    date: "September 30, 2023",
    excerpt: "Avyukta and CloudPioneers Inc. join forces to deliver enhanced cloud solutions and services to a wider audience.",
    image: "https://placehold.co/600x400.png",
    slug: "/news/cloudpioneers-partnership", // Placeholder slug
    aiHint: "business handshake partnership",
  },
  {
    title: "Upcoming Webinar: The Future of Mobile Development",
    date: "September 10, 2023",
    excerpt: "Join our experts as they discuss the latest trends and future directions in mobile application development. Register now!",
    image: "https://placehold.co/600x400.png",
    slug: "/events/webinar-mobile-development-future", // Placeholder slug
    aiHint: "webinar online conference",
  },
];

export default function NewsAnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Megaphone className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Latest News & Announcements
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Stay updated with the latest happenings, breakthroughs, and important updates from Avyukta.
            </p>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Card 
                  key={item.slug} 
                  className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${(index * 100) + 200}`}
                >
                  <Link href={item.slug} className="block">
                    <div className="relative h-56 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={item.aiHint}
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={item.slug} className="block">
                      <CardTitle className="text-xl hover:text-primary transition-colors">{item.title}</CardTitle>
                    </Link>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <CalendarDays className="h-4 w-4 mr-1.5" />
                      {item.date}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{item.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0">
                      <Link href={item.slug}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* Placeholder for pagination if needed in the future */}
            {/* 
            <div className="mt-12 text-center">
              <Button variant="outline">Load More News</Button>
            </div> 
            */}
          </div>
        </section>

        {/* CTA Section for Newsletter/Contact */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Don't Miss Out!
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Subscribe to our newsletter for the latest Avyukta news, insights, and event invitations delivered directly to your inbox.
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
