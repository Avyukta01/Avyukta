import type {Metadata} from 'next';
import { Poppins, Roboto_Mono } from 'next/font/google'; // Changed to Poppins and Roboto_Mono
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster
import { ThemeProvider } from 'next-themes'; // Added ThemeProvider
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton'; // Import the new button

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Specify weights you need
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

// IMPORTANT: Replace https://{YOUR_DOMAIN_HERE} with your actual domain
const siteUrl = "https://{YOUR_DOMAIN_HERE}";

export const metadata: Metadata = {
  title: "Avyukta",
  description: "Itf'y your business with revolution IT solutions. Specializing in AI, web, and mobile development for India, US, and South Korea markets.",
  metadataBase: new URL(siteUrl), // Set base URL for resolving relative asset paths
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'en-IN': '/',
      'en-US': '/',
      'ko-KR': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Avyukta",
    description: "Itf'y your business with revolution IT solutions. Specializing in AI, web, and mobile development.",
    url: siteUrl,
    siteName: 'Avyukta',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // IMPORTANT: Create this image and place in /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Avyukta - Revolutionizing IT Solutions',
      },
    ],
    locale: 'en_US', // Default locale
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Avyukta",
    description: "Itf'y your business with revolution IT solutions. Specializing in AI, web, and mobile development.",
    // siteId: '@yourTwitterHandle', // Optional: Add your Twitter handle ID
    // creator: '@creatorTwitterHandle', // Optional: Add creator's Twitter handle
    images: [`${siteUrl}/twitter-image.png`], // IMPORTANT: Create this image and place in /public/twitter-image.png
  },
  robots: { // Basic robots directives
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avyukta",
  "url": siteUrl,
  "logo": `${siteUrl}/companylogo/voxaiomni_logonew.png`, // Ensure this path is correct for your live site
  "sameAs": [
    "https://www.facebook.com/Avyuktaintellicalldialer",
    "https://x.com/avyukta_ecall",
    "https://www.linkedin.com/company/avyukta-intellicall1/about/",
    "https://www.youtube.com/channel/UCAsFNU9xLxzQYixHDnronAw/videos",
    "https://www.instagram.com/avyukta_intellicall/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 856-00-00-600", 
    "contactType": "Customer Service", 
    "email": "sales@dialerindia.com", 
    "areaServed": ["IN", "US", "PH", "KR"], 
    "availableLanguage": ["English", "Korean"] 
  },
  "address": { 
    "@type": "PostalAddress",
    "streetAddress": "A-26, Laxminarayan Vihar, Between Mahadev Mandir and Kirana, Near Kotecha Building, Vande Mataram Road, Bharat Mata Circle, Jaipur, 302020 Rajasthan, India.",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302020",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cacheBuster = new Date().getTime();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The hreflang tags are now handled by Next.js 'alternates' in metadata */}
        {/* JSON-LD for Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${poppins.variable} ${roboto_mono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <Toaster />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
