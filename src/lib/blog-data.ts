
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  aiHint: string;
  category?: string; // Optional category for tutorials page
  icon?: React.ElementType; // Optional icon for tutorials page
}

export const blogPosts: BlogPost[] = [
  {
    title: "Maximizing Cost-Effectiveness: Strategies for Optimal Phone System Investments",
    date: "December 10, 2023",
    excerpt: "In the realm of business operations, cost-effectiveness is a critical factor in decision-making processes, especially when it comes to investing in phone system solutions. This comprehensive guide explores strategic approaches and best practices for maximizing cost-effectiveness...",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/phone-system-investments",
    aiHint: "business woman headset"
  },
  {
    title: "Navigating the Future: Key Trends Shaping the BPO Industry",
    date: "December 05, 2023",
    excerpt: "In the ever-evolving landscape of Business Process Outsourcing (BPO), staying ahead of emerging trends is essential for driving innovation, enhancing service delivery, and maintaining a competitive edge in the market. This insightful guide explores the transformative trends...",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/bpo-industry-trends",
    aiHint: "call center agent"
  },
  {
    title: "The Future of AI in Business Automation",
    date: "October 26, 2023",
    excerpt: "Discover how AI is reshaping industries by automating complex tasks and driving efficiency across various sectors.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/future-of-ai",
    aiHint: "ai technology abstract"
  },
  {
    title: "Top 5 Trends in Web Development for 2024",
    date: "November 5, 2023",
    excerpt: "Stay ahead of the curve with these emerging web development trends that will define the next year, from new frameworks to design philosophies.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/web-dev-trends-2024",
    aiHint: "web design code"
  },
  {
    title: "Maximizing ROI with Mobile-First Strategies",
    date: "November 12, 2023",
    excerpt: "Learn why a mobile-first approach is crucial for business success in today's digital landscape and how to implement it effectively.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/mobile-first-roi",
    aiHint: "mobile app analytics"
  },
  {
    title: "Cybersecurity in the Age of Remote Work",
    date: "November 18, 2023",
    excerpt: "Exploring the evolving challenges and best practices for maintaining robust cybersecurity postures in distributed work environments.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/cybersecurity-remote-work",
    aiHint: "cybersecurity shield"
  },
  {
    title: "The Rise of Sustainable Tech: Innovation for a Greener Future",
    date: "November 25, 2023",
    excerpt: "How technology is playing a pivotal role in addressing environmental challenges and fostering sustainability.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/sustainable-tech",
    aiHint: "green technology nature"
  },
  {
    title: "Navigating Data Privacy Regulations: A Guide for Businesses",
    date: "December 2, 2023",
    excerpt: "Understanding and complying with complex data privacy laws like GDPR, CCPA, and others is crucial for modern businesses.",
    image: "https://placehold.co/600x400.png",
    slug: "/blog/data-privacy-guide",
    aiHint: "data privacy lock"
  },
];
