
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster
import { ThemeProvider } from 'next-themes'; // Added ThemeProvider
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton'; // Import the new button

const geistSans = Geist({ // Corrected usage
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Corrected usage
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// IMPORTANT: Replace https://{YOUR_DOMAIN_HERE} with your actual domain
const siteUrl = "https://{YOUR_DOMAIN_HERE}";

export const metadata: Metadata = {
  title: "Voxaiomni : Itf'y your business with revolution IT solutions",
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
    title: "Voxaiomni : Itf'y your business with revolution IT solutions",
    description: "Itf'y your business with revolution IT solutions. Specializing in AI, web, and mobile development.",
    url: siteUrl,
    siteName: 'Voxaiomni',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // IMPORTANT: Create this image and place in /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Voxaiomni - Revolutionizing IT Solutions',
      },
    ],
    locale: 'en_US', // Default locale
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Voxaiomni : Itf'y your business with revolution IT solutions",
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
  "name": "Voxaiomni",
  "url": siteUrl,
  "logo": `${siteUrl}/companylogo/omnilogo.png`,
  "sameAs": [
    "https://www.facebook.com/Avyuktaintellicalldialer",
    "https://x.com/avyukta_ecall",
    "https://www.linkedin.com/company/avyukta-intellicall1/about/",
    "https://www.youtube.com/channel/UCAsFNU9xLxzQYixHDnronAw/videos",
    "https://www.instagram.com/avyukta_intellicall/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567", // IMPORTANT: Replace with actual primary business phone
    "contactType": "Customer Service", // Or "Sales", "Technical Support" etc.
    "email": "contact@voxaiomni.com", // IMPORTANT: Replace with actual primary contact email
    "areaServed": ["IN", "US", "KR"], // Targeting India, US, South Korea
    "availableLanguage": ["English", "Korean"] // Languages spoken
  },
  "address": { // Using US address from contact page as primary
    "@type": "PostalAddress",
    "streetAddress": "123 Voxaiomni Drive",
    "addressLocality": "Tech City",
    "addressRegion": "CA",
    "postalCode": "94000",
    "addressCountry": "US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The hreflang tags are now handled by Next.js 'alternates' in metadata */}
        {/* JSON-LD for Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
