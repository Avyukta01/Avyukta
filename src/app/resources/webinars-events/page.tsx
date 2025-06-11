"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarClock, Video, Ticket, ArrowRight, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "AI in 2024: Beyond the Hype Cycle",
    date: "December 10, 2023",
    time: "2:00 PM EST",
    type: "Webinar",
    excerpt: "Join our experts as they dissect the real-world applications and future trajectory of AI technologies.",
    image: "https://placehold.co/600x400.png",
    slug: "/events/ai-in-2024-webinar", 
    aiHint: "ai technology future",
    icon: Lightbulb,
  },
  {
    title: "Avyukta Annual Tech Summit 2024",
    date: "January 15-17, 2024",
    time: "Full Day Event",
    type: "Conference",
    excerpt: "Our flagship conference bringing together industry leaders, innovators, and developers. Keynotes, workshops, and networking.",
    image: "https://placehold.co/600x400.png",
    slug: "/events/tech-summit-2024",
    aiHint: "tech conference stage",
    icon: CalendarClock,
  },
];

const pastEvents = [
 {
    title: "Mastering Mobile-First Design",
    date: "October 5, 2023",
    type: "Webinar Recording",
    excerpt: "Explore best practices and innovative strategies for creating impactful mobile-first user experiences.",
    image: "https://placehold.co/600x400.png",
    slug: "/events/mastering-mobile-first-recording", 
    aiHint: "mobile design blueprint",
    icon: Video,
  },
   {
    title: "Cybersecurity Essentials for Modern Business",
    date: "September 20, 2023",
    type: "Workshop Recording",
    excerpt: "Learn how to protect your business from evolving cyber threats with practical tips and expert insights.",
    image: "https://placehold.co/600x400.png",
    slug: "/events/cybersecurity-workshop-recording",
    aiHint: "cybersecurity shield lock",
    icon: Video,
  }
];

export default function WebinarsEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <CalendarClock className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Avyukta Webinars &amp; Events
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Join us for insightful discussions, workshops, and conferences. Stay ahead with the latest trends and innovations.
            </p>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.slug} 
                  className={`
                    flex flex-col overflow-hidden shadow-xl hover:shadow-2xl 
                    transition-all duration-300 ease-in-out 
                    animate-fade-in-up animation-delay-${(index * 100) + 200} 
                    group 
                    bg-gradient-to-r from-card via-secondary/70 to-card 
                    group-hover:from-secondary/50 group-hover:via-primary group-hover:to-secondary/50 group-hover:text-primary-foreground
                    focus-within:from-secondary/50 focus-within:via-primary focus-within:to-secondary/50 focus-within:text-primary-foreground
                    bg-[length:200%_auto] animate-background-pan
                  `}
                >
                  <Link href={event.slug} className="block group-focus-within:ring-2 group-focus-within:ring-ring group-focus-within:ring-offset-2 rounded-t-lg">
                    <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="group-hover:scale-105 transition-transform duration-500 object-cover"
                        data-ai-hint={event.aiHint}
                      />
                       <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded flex items-center">
                        {event.icon && <event.icon className="h-4 w-4 mr-1.5" />}
                        {event.type}
                     </div>
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={event.slug} className="block group-focus-within:underline">
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{event.title}</CardTitle>
                    </Link>
                    <CardDescription className="text-sm font-medium text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                      {event.date} {event.time && `| ${event.time}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80 group-hover:text-primary-foreground/90 transition-colors">{event.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 group-hover:bg-background group-hover:text-primary transition-colors w-full md:w-auto">
                      <Link href={event.slug}>
                        Register Now <Ticket className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {upcomingEvents.length === 0 && (
                <p className="text-center text-muted-foreground animate-fade-in-up animation-delay-300">
                    No upcoming events scheduled at the moment. Please check back soon!
                </p>
            )}
          </div>
        </section>

        {/* Past Event Recordings Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Past Event Recordings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <Card 
                  key={event.slug} 
                  className={`
                    flex flex-col overflow-hidden shadow-xl hover:shadow-2xl 
                    transition-all duration-300 ease-in-out 
                    animate-fade-in-up animation-delay-${(index * 100) + 200} 
                    group 
                    bg-gradient-to-r from-card via-muted/70 to-card 
                    group-hover:from-muted/50 group-hover:via-secondary group-hover:to-muted/50 group-hover:text-foreground
                    focus-within:from-muted/50 focus-within:via-secondary focus-within:to-muted/50 focus-within:text-foreground
                    bg-[length:200%_auto] animate-background-pan
                  `}
                >
                   <Link href={event.slug} className="block group-focus-within:ring-2 group-focus-within:ring-ring group-focus-within:ring-offset-2 rounded-t-lg">
                    <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="group-hover:scale-105 transition-transform duration-500 object-cover"
                        data-ai-hint={event.aiHint}
                      />
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded flex items-center">
                            {event.icon && <event.icon className="h-4 w-4 mr-1.5" />}
                            {event.type}
                        </div>
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={event.slug} className="block group-focus-within:underline">
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{event.title}</CardTitle>
                    </Link>
                    <CardDescription className="text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80 group-hover:text-foreground/90 transition-colors">{event.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-accent hover:text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground w-full md:w-auto">
                      <Link href={event.slug}>
                        Watch Recording <Video className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
             {pastEvents.length === 0 && (
                <p className="text-center text-muted-foreground animate-fade-in-up animation-delay-300">
                    No past event recordings available yet.
                </p>
            )}
          </div>
        </section>

         {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Have a Topic Suggestion or Want to Collaborate?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              We're always looking for new ideas and opportunities to engage with the community.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=EventSuggestion">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
