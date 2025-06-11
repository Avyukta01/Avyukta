"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  const [clientCacheBuster, setClientCacheBuster] = React.useState<string | null>(null);

  React.useEffect(() => {
    setClientCacheBuster(new Date().getTime().toString());
  }, []);

  const logoSrc = "/logos/Avyuktalogo.png";
  const finalSrc = clientCacheBuster ? `${logoSrc}?v=${clientCacheBuster}` : logoSrc;

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 ease-in-out",
        className
      )}
      aria-label="Avyukta Home"
    >
      <Image
        src={finalSrc} 
        alt="Avyukta Logo"
        width={40} 
        height={40} 
        className="h-8 w-auto md:h-10" 
        data-ai-hint="company logo"
        key={finalSrc} // Adding key to help React differentiate if src changes
      />
    </Link>
  );
};

export default Logo;
