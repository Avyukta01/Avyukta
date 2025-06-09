
"use client";

import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, UserCircle, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// This function is not directly used for metadata in client components in App Router
// but can be a helper if you decide to fetch metadata separately or move to server components.
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = blogPosts.find(p => p.slug === `/blog/${params.slug}`);
//   if (!post) {
//     return {
//       title: "Post Not Found",
//     }
//   }
//   return {
//     title: `${post.title} | Voxaiomni Blog`,
//     description: post.excerpt,
//     openGraph: {
//         title: post.title,
//         description: post.excerpt,
//         images: post.image ? [{ url: post.image }] : [],
//     }
//   }
// }


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug.replace("/blog/", ""), // Extract just the slug part, e.g., "future-of-ai"
  }));
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === `/blog/${params.slug}`);
  const pathname = usePathname();


  if (!post) {
    notFound();
  }

  // For now, using excerpt as full content with a placeholder message.
  const fullContent = `${post.excerpt} \n\n(This is currently a placeholder using the post's excerpt. In a real application, this section would contain the complete blog post content, potentially formatted with Markdown or a rich text editor.)`;

  const shareOnSocialMedia = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://yourdomain.com${pathname}`;
    const text = `Check out this article: ${post.title}`;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary section-padding">
        <div className="container-max">
          <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl max-w-4xl mx-auto">
            <header className="mb-8">
              <Button variant="outline" asChild className="mb-6 animate-fade-in-up">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-100">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm animate-fade-in-up animation-delay-200">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1.5 text-accent" />
                  <span>{post.date}</span>
                </div>
                {/* Optional: Author section if available 
                <div className="flex items-center">
                  <UserCircle className="h-4 w-4 mr-1.5 text-accent" />
                  <span>Author Name</span>
                </div>
                */}
              </div>
            </header>

            {post.image && (
              <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={post.aiHint}
                  priority // Prioritize loading of the main blog image
                />
              </div>
            )}

            <div 
              className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 animate-fade-in-up animation-delay-400"
              // If Tailwind Typography plugin (@tailwindcss/typography) is installed,
              // this will provide nice default styling for blog content.
              // Otherwise, paragraphs, headings, lists etc. within fullContent will be unstyled.
            >
              {fullContent.split('\n').map((paragraph, index) => (
                paragraph.trim() !== "" && <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>

            <hr className="my-8 border-border animate-fade-in-up animation-delay-500" />

            <div className="flex flex-col sm:flex-row justify-between items-center animate-fade-in-up animation-delay-600">
              <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                Found this article helpful? Share it!
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={() => shareOnSocialMedia('twitter')} aria-label="Share on Twitter">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Twitter</title><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07A4.37 4.37 0 0 0 16.3 4a4.27 4.27 0 0 0-4.27 4.27 4.18 4.18 0 0 0 .11.95C8.23 9.09 4.61 7.19 2.21 4.24a4.27 4.27 0 0 0-1.22 4.99h.01A4.21 4.21 0 0 0 3 10.82a4.27 4.27 0 0 1-1.94-.53v.05A4.27 4.27 0 0 0 4.5 14.3a4.33 4.33 0 0 1-1.1.17 4.14 4.14 0 0 1-.83-.08 4.27 4.27 0 0 0 3.98 2.96A8.56 8.56 0 0 1 1 18.84a12.05 12.05 0 0 0 6.52 1.91A11.91 11.91 0 0 0 20.3 8.94c0-.18 0-.36-.03-.53.84-.6 1.56-1.36 2.13-2.21z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" onClick={() => shareOnSocialMedia('linkedin')} aria-label="Share on LinkedIn">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" onClick={() => shareOnSocialMedia('facebook')} aria-label="Share on Facebook">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Facebook</title><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg>
                </Button>
              </div>
            </div>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

