"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, DatabaseZap, Cloud, Container, Cpu, TerminalSquare, Zap, GitFork } from "lucide-react"; // Using more generic icons

// For specific tech, text is often clearer than generic icons unless custom SVGs are used.
const techStack = [
  { name: "Next.js", icon: Code },
  { name: "React", icon: Code }, // No direct Atom icon, use generic code
  { name: "TypeScript", icon: TerminalSquare },
  { name: "Node.js", icon: Cpu },
  { name: "Python", icon: Code },
  { name: "Firebase", icon: DatabaseZap },
  { name: "Google Cloud", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "JavaScript", icon: Code},
  { name: "HTML5", icon: Code},
  { name: "CSS3", icon: Code},
  { name: "GraphQL", icon: GitFork},
  { name: "Kubernetes", icon: Container},
  { name: "Serverless", icon: Zap}
];

const TechStackSection = () => {
  return (
    <section className="section-padding bg-secondary" style={{paddingBottom: '0px'}}>
      <style jsx>{`
        section.section-padding {
          padding-bottom: 0px !important;
        }
      `}</style>
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We leverage a robust and modern technology stack to build high-quality, scalable, and innovative solutions.
          </p>
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">Core Technologies & Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {techStack.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="outline"
                  className="text-sm md:text-base px-4 py-2 border-primary text-primary bg-background hover:bg-primary/10 transition-colors duration-200 cursor-default shadow-md rounded-full"
                >
                  <tech.icon className="h-5 w-5 mr-2 opacity-80" />
                  {tech.name}
                </Badge>
              ))}
              <Badge
                variant="default"
                className="text-sm md:text-base px-4 py-2 bg-accent text-accent-foreground shadow-md rounded-full"
              >
                And More...
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStackSection;
