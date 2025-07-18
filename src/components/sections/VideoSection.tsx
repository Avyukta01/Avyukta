"use client";

import { Card, CardContent } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section className="section-padding bg-background" style={{paddingBottom: '0px'}}>
      <style jsx>{`
        section.section-padding {
          padding-bottom: 0px !important;
        }
      `}</style>
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          See Avyukta in Action
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Discover how our innovative solutions can transform your business. Watch our latest highlights and offerings.
        </p>
        <Card className="overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <CardContent className="p-0 aspect-video relative">
            <video
              controls // Added controls for user interaction
              autoPlay
              loop
              muted // Recommended for autoplay to work in most browsers
              playsInline
              className="w-full h-full object-cover"
              poster="/images/WhatsAppaiomni.jpg" // Ensure this poster image exists
              data-ai-hint="company showcase video"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;
