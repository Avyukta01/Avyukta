
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Re-using the blog post structure and data for demonstration
// In a real app, this would likely come from a CMS or database
const blogPosts = [
  {
    title: "The Future of AI in Business Automation",
    date: "October 26, 2023",
    excerpt: "Discover how AI is reshaping industries by automating complex tasks and driving efficiency across various sectors.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/future-of-ai",
    aiHint: "ai technology abstract"
  },
  {
    title: "Top 5 Trends in Web Development for 2024",
    date: "November 5, 2023",
    excerpt: "Stay ahead of the curve with these emerging web development trends that will define the next year, from new frameworks to design philosophies.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/web-dev-trends-2024",
    aiHint: "web design code"
  },
  {
    title: "Maximizing ROI with Mobile-First Strategies",
    date: "November 12, 2023",
    excerpt: "Learn why a mobile-first approach is crucial for business success in today's digital landscape and how to implement it effectively.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/mobile-first-roi",
    aiHint: "mobile app analytics"
  },
  {
    title: "Cybersecurity in the Age of Remote Work",
    date: "November 18, 2023",
    excerpt: "Exploring the evolving challenges and best practices for maintaining robust cybersecurity postures in distributed work environments.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/cybersecurity-remote-work",
    aiHint: "cybersecurity shield"
  },
  {
    title: "The Rise of Sustainable Tech: Innovation for a Greener Future",
    date: "November 25, 2023",
    excerpt: "How technology is playing a pivotal role in addressing environmental challenges and fostering sustainability.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/sustainable-tech",
    aiHint: "green technology nature"
  },
  {
    title: "Navigating Data Privacy Regulations: A Guide for Businesses",
    date: "December 2, 2023",
    excerpt: "Understanding and complying with complex data privacy laws like GDPR, CCPA, and others is crucial for modern businesses.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/data-privacy-guide",
    aiHint: "data privacy lock"
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <Newspaper className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Innovatech Insights
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Explore our latest articles, trends, and expert opinions on technology, innovation, and digital transformation.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.slug} 
                  className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${(index * 100) + 200}`}
                >
                  <Link href={post.slug} className="block">
                    <div className="relative h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={post.aiHint}
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={post.slug} className="block">
                      <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                    </Link>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <CalendarDays className="h-4 w-4 mr-1.5" />
                      {post.date}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="text-primary p-0">
                      <Link href={post.slug}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* Placeholder for pagination controls if needed in the future */}
            {/* 
            <div className="mt-12 text-center">
              <Button variant="outline">Load More Posts</Button>
            </div> 
            */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
