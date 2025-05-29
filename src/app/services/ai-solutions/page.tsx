
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BrainCircuit, Cpu, Speech, Eye, Lightbulb, CheckCircle, MessageSquare, TrendingUp, Zap, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const expertiseAreas = [
  {
    title: "Machine Learning (ML)",
    icon: Cpu,
    description: "Develop custom machine learning models to extract insights, automate processes, and drive predictive capabilities.",
    details: [
      "Predictive Analytics & Forecasting",
      "Recommendation Engines",
      "Anomaly Detection Systems",
      "Custom Model Development & Training",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: Speech,
    description: "Enable machines to understand, interpret, and generate human language for enhanced communication and data analysis.",
    details: [
      "Intelligent Chatbots & Virtual Assistants",
      "Sentiment Analysis & Opinion Mining",
      "Text Summarization & Generation",
      "Named Entity Recognition (NER)",
    ],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    description: "Implement advanced computer vision solutions for image recognition, object detection, and video analytics.",
    details: [
      "Object Detection & Tracking",
      "Image Classification & Tagging",
      "Facial Recognition Systems",
      "Automated Visual Inspection",
    ],
  },
  {
    title: "AI Strategy & Consulting",
    icon: Lightbulb,
    description: "Partner with us to define your AI roadmap, identify high-impact use cases, and integrate AI seamlessly into your operations.",
    details: [
      "AI Readiness Assessment",
      "Use Case Ideation & Prioritization",
      "Data Strategy for AI",
      "AI Governance & Ethics Frameworks",
    ],
  },
];

const aiBenefits = [
  { text: "Boost Operational Efficiency through Automation", icon: Zap },
  { text: "Gain Deeper Insights with Advanced Data Analytics", icon: TrendingUp },
  { text: "Enhance Customer Experiences with Personalization", icon: Lightbulb },
  { text: "Drive Innovation and Develop New Products/Services", icon: Settings },
];

const techStack = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", 
  "Google Cloud AI Platform", "AWS SageMaker", "Azure Machine Learning", 
  "OpenCV", "NLTK", "Spacy", "Docker", "Kubernetes"
];

export default function AISolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-primary text-primary-foreground text-center">
          <div className="container-max">
            <BrainCircuit className="h-16 w-16 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Intelligent AI & ML Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Empowering your business with cutting-edge Artificial Intelligence and Machine Learning technologies to unlock new potentials.
            </p>
          </div>
        </section>

        {/* Our AI Expertise Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Our AI & Machine Learning Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={area.title} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <area.icon className="h-10 w-10 text-accent mr-3" />
                      <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-foreground/90">Example Applications:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      {area.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transform Your Business Section */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Transform Your Business with AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiBenefits.map((benefit, index) => (
                <div key={benefit.text} className={`p-6 bg-card rounded-lg shadow-lg flex items-start space-x-4 animate-fade-in-up animation-delay-${index * 100 + 200}`}>
                  <benefit.icon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{benefit.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Utilize Section */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">
              Technologies & Platforms We Utilize
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-200">
              {techStack.map((tech) => (
                <span key={tech} className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-md text-sm font-medium border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4 animate-fade-in-up" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
              Let's explore how our AI and ML solutions can drive innovation and growth for your business.
            </p>
            <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up animation-delay-300">
              <Link href="/contact?subject=AISolutionInquiry">Discuss Your AI Initiative</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

