"use client"; 

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Eye, Lightbulb, Rocket, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              About Avyukta
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Itf'y your business with revolution IT solutions.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a passion for technology and a vision to empower businesses, Avyukta started as a small team of dedicated developers and strategists. Over the years, we've grown into a leading provider of digital solutions, helping clients across various industries achieve their goals.
              </p>
              <p className="text-muted-foreground mb-4">
                Our commitment to excellence, innovation, and client success remains the cornerstone of our identity. We believe in building long-lasting partnerships and delivering impactful results.
              </p>
              <p className="text-muted-foreground mb-6">
                At Avyukta, we combine technical expertise with creative thinking to deliver solutions that drive real business value. Our team of experienced professionals is dedicated to understanding your unique challenges and providing tailored solutions that help you achieve your goals.
              </p>
              <Button asChild variant="outline" className="animate-fade-in-up">
                <Link href="/company/why-choose-us">Learn More</Link>
              </Button>
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Avyukta Team Working"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="team collaboration office"
              />
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-200">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative and tailored technology solutions that drive growth, efficiency, and a competitive edge in the digital landscape.
                </p>
              </div>
              <div className="p-8 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-300">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a globally recognized leader in technology innovation, shaping the future of digital experiences and creating a positive impact through our work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Why Choose Avyukta?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-200">
                <Lightbulb className="h-12 w-12 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Innovative Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  We leverage the latest technologies to deliver creative and effective solutions tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-300">
                <Rocket className="h-12 w-12 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Client-Centric Approach</h4>
                <p className="text-muted-foreground text-sm">
                  Your success is our priority. We work closely with you to understand your goals and deliver results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg animate-fade-in-up animation-delay-400">
                <ShieldCheck className="h-12 w-12 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                <p className="text-muted-foreground text-sm">
                  Our team of experienced professionals is dedicated to providing high-quality services and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Revolutionize With Avyukta?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss how we can help your business achieve its digital ambitions.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
