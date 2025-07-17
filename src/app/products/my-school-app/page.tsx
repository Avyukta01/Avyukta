"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, BookOpen, Users, Calendar, Bell, BarChart3, Shield, Smartphone, 
  MessageSquare, FileText, Clock, CheckCircle, Info, ArrowRight, Globe, 
  Video, Award, Settings, Database, Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScheduleDemoSheet } from "@/components/forms/ScheduleDemoSheet";

const schoolAppFeatures = [
  {
    title: "Student Management System",
    description: "Comprehensive student profiles with academic records, attendance tracking, and performance analytics to monitor individual progress effectively.",
    icon: Users,
  },
  {
    title: "Digital Learning Platform",
    description: "Interactive learning modules, video lectures, and digital textbooks accessible on any device for seamless remote and hybrid learning experiences.",
    icon: BookOpen,
  },
  {
    title: "Attendance & Timetable",
    description: "Automated attendance tracking with QR codes, digital timetables, and real-time notifications for parents and teachers about student presence.",
    icon: Calendar,
  },
  {
    title: "Communication Hub",
    description: "Integrated messaging system connecting teachers, parents, and students with instant notifications, announcements, and progress updates.",
    icon: MessageSquare,
  },
  {
    title: "Assignment & Assessment",
    description: "Digital assignment submission, automated grading, and comprehensive assessment tools with detailed performance analytics and feedback.",
    icon: FileText,
  },
  {
    title: "Parent Portal",
    description: "Dedicated parent dashboard with real-time access to academic progress, attendance records, fee management, and direct communication with teachers.",
    icon: Shield,
  },
  {
    title: "Live Classes & Video Conferencing",
    description: "Built-in video conferencing tools for virtual classrooms, recorded sessions, and interactive online learning with screen sharing capabilities.",
    icon: Video,
  },
  {
    title: "Fee Management System",
    description: "Automated fee collection, payment tracking, and financial reporting with multiple payment gateway integrations for convenient transactions.",
    icon: BarChart3,
  },
  {
    title: "Performance Analytics",
    description: "Advanced analytics dashboard with detailed reports on student performance, class statistics, and predictive insights for academic improvement.",
    icon: Award,
  },
  {
    title: "Mobile App Access",
    description: "Cross-platform mobile applications for iOS and Android with offline capabilities, push notifications, and seamless synchronization.",
    icon: Smartphone,
  },
];

const schoolAppBenefits = [
  "Enhanced Learning Experience with interactive digital content and multimedia resources.",
  "Improved Communication between teachers, parents, and students in real-time.",
  "Better Academic Performance through personalized learning paths and analytics.",
  "Streamlined Administrative Tasks with automated processes and digital workflows.",
  "Increased Parental Involvement with transparent access to child's progress.",
  "Cost-Effective Solution reducing paper usage and administrative overhead.",
  "Scalable Platform that grows with your institution's needs.",
  "24/7 Accessibility for learning and communication from anywhere.",
];

const useCases = [
    { name: "K-12 Schools", description: "Complete digital transformation for primary and secondary education with comprehensive student and parent engagement.", image: "https://placehold.co/400x300.png", aiHint: "school building students" },
    { name: "Higher Education", description: "Advanced learning management for colleges and universities with research tools and academic collaboration.", image: "https://placehold.co/400x300.png", aiHint: "university campus" },
    { name: "Online Academies", description: "Virtual learning environments for distance education and skill development programs.", image: "https://placehold.co/400x300.png", aiHint: "online learning platform" },
    { name: "Corporate Training", description: "Employee training and development with progress tracking and certification management.", image: "https://placehold.co/400x300.png", aiHint: "corporate training room" },
];

const statistics = [
  { number: "500+", label: "Schools Using Our Platform" },
  { number: "50,000+", label: "Active Students" },
  { number: "95%", label: "Parent Satisfaction Rate" },
  { number: "40%", label: "Improvement in Academic Performance" },
];

export default function MySchoolAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max text-center">
            <GraduationCap className="h-20 w-20 text-accent mx-auto mb-6 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              School App: Revolutionizing Education
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              A comprehensive digital learning platform that transforms traditional education into an interactive, engaging, and efficient learning experience for students, teachers, and parents.
            </p>
            <ScheduleDemoSheet>
              <Button asChild size="lg" variant="outline" className="bg-white text-black border border-black hover:bg-gray-100 animate-fade-in-up animation-delay-300">
                <span>Request a Demo</span>
              </Button>
            </ScheduleDemoSheet>
          </div>
        </section>

        {/* What is School App? Section */}
        <section className="section-padding">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="https://placehold.co/600x450.png"
                alt="School App Dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="school app dashboard interface"
              />
            </div>
            <div className="animate-fade-in-right animation-delay-100">
              <h2 className="text-3xl font-bold text-primary mb-6">Introducing School App</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                School App by Avyukta is a modern, intuitive educational technology platform designed to seamlessly connect schools, students, and parents. Our user-friendly solution empowers educational institutions to enhance communication, streamline administration, and foster a collaborative learning environment.
              </p>
              <p className="text-muted-foreground text-lg">
                From kindergarten to higher education, our platform provides the tools and features needed to enhance academic performance, improve communication, and streamline administrative processes in the modern educational landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Trusted by Educational Institutions Worldwide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={stat.label} className={`text-center animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Comprehensive Features for Modern Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schoolAppFeatures.map((feature, index) => (
                <Card key={feature.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <feature.icon className="h-8 w-8 text-accent mr-3" />
                      <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Transform Your Educational Institution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schoolAppBenefits.map((benefit, index) => (
                <div key={index} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-3 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Perfect for Every Educational Setting
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={useCase.name} className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                   <div className="relative h-48 w-full">
                    <Image
                        src={useCase.image}
                        alt={useCase.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={useCase.aiHint}
                    />
                    </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <Info className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Join hundreds of educational institutions already using School App to enhance learning outcomes.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=SchoolApp_Inquiry&product=MySchoolApp">Contact Our Education Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 