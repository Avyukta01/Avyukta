"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Business Automation",
    date: "October 26, 2023",
    excerpt: "Discover how AI is reshaping industries by automating complex tasks and driving efficiency.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/future-of-ai",
    aiHint: "ai technology"
  },
  {
    title: "Top 5 Trends in Web Development for 2024",
    date: "November 5, 2023",
    excerpt: "Stay ahead of the curve with these emerging web development trends that will define the next year.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/web-dev-trends-2024",
    aiHint: "web design code"
  },
  {
    title: "Maximizing ROI with Mobile-First Strategies",
    date: "November 12, 2023",
    excerpt: "Learn why a mobile-first approach is crucial for business success in today's digital landscape.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/mobile-first-roi",
    aiHint: "mobile app analytics"
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stay informed with our latest insights, trends, and articles on technology and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={post.slug} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
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
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/blog">Visit Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
