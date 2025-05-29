"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const VideoSection = () => {
  // In a real app, you'd use a YouTube embed iframe or a video player component.
  // For this placeholder, we'll simulate a video thumbnail.
  const videoId = "dQw4w9WgXcQ"; // Example YouTube video ID

  return (
    <section className="section-padding bg-background">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          See Innovatech in Action
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Discover how our innovative solutions can transform your business. Watch our latest highlights and offerings.
        </p>
        <Card className="overflow-hidden shadow-2xl group transform hover:scale-105 transition-transform duration-500 ease-out">
          <CardContent className="p-0 aspect-video relative">
            {/* Replace with actual YouTube embed for functionality */}
            <a 
              href={`https://www.youtube.com/watch?v=${videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Watch video on YouTube"
              className="block w-full h-full"
            >
              <Image
                src={`https://placehold.co/1280x720.png`} // Placeholder for video thumbnail
                alt="Video placeholder"
                layout="fill"
                objectFit="cover"
                data-ai-hint="video player interface"
                className="group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <PlayCircle className="h-16 w-16 md:h-24 md:w-24 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;
