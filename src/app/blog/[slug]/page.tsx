
// No "use client" directive here
import type { Metadata } from 'next';
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import BlogPostClientPage from '@/components/blog/BlogPostClientPage';

// Optional: You can uncomment and use generateMetadata if needed, as this is a Server Component.
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
    slug: post.slug.replace("/blog/", ""), // Extract just the slug part
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === `/blog/${params.slug}`);

  if (!post) {
    notFound();
  }

  return <BlogPostClientPage post={post} />;
}
