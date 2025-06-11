"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data"; // Import from the new location

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
              Avyukta Insights
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
