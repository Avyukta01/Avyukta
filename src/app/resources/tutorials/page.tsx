"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpen, ArrowRight, Bot, BarChart3, Code2, Lightbulb, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tutorials = [
  {
    title: "Getting Started with AI Voice Caller",
    excerpt: "Learn how to effectively use AI Voice Caller for automated voice communications and enhanced customer interactions.",
    date: "2024-03-15",
    slug: "/resources/tutorials/ai-voice-caller",
    category: "AI Solutions",
    readTime: "8 min read",
    author: "AI Team",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai voice call interface"
  },
  {
    title: "Mastering Data Visualization in AnalyticsMaster",
    excerpt: "Unlock powerful insights by effectively visualizing your data with AnalyticsMaster's advanced charting tools.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/tutorials/analyticsmaster-charts", // Placeholder slug
    aiHint: "dashboard chart data",
    icon: BarChart3,
    category: "Advanced Techniques",
  },
  {
    title: "Integrating Our API with Your Application",
    excerpt: "A step-by-step guide to seamlessly integrate Avyukta's API into your existing software stack.",
    image: "https://placehold.co/600x400.png",
    slug: "/resources/tutorials/api-integration-guide", // Placeholder slug
    aiHint: "api integration code",
    icon: Code2,
    category: "Developer Guide",
  },
];

export default function TutorialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <BookOpen className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Avyukta Tutorials & How-tos
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Learn how to make the most of our products and services with our step-by-step guides and expert tips.
            </p>
          </div>
        </section>

        {/* Tutorials Grid Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <Card 
                  key={tutorial.slug} 
                  className={`flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-${(index * 100) + 200} group`}
                >
                  <Link href={tutorial.slug} className="block">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={tutorial.aiHint}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                       {tutorial.icon && <tutorial.icon className="absolute top-4 left-4 h-10 w-10 text-white/90 bg-black/40 p-2 rounded-lg shadow-md" />}
                       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                         <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-primary/80 px-2 py-1 rounded">
                           {tutorial.category}
                         </span>
                       </div>
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={tutorial.slug} className="block">
                      <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{tutorial.title}</CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{tutorial.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      variant="default" 
                      className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-full md:w-auto"
                    >
                      <Link href={tutorial.slug}>
                        View Tutorial <PlayCircle className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {tutorials.length === 0 && (
                <p className="text-center text-muted-foreground animate-fade-in-up animation-delay-300">
                    No tutorials available at the moment. Please check back soon!
                </p>
            )}
          </div>
        </section>

         {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max text-center">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-100">
              Need More Help or Have a Tutorial Request?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Our team is here to assist you. If you have a specific topic you'd like us to cover, please let us know!
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=TutorialRequest">Contact Support</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
