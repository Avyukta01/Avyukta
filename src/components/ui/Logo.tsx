import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 ease-in-out",
        className
      )}
    >
      <Image
        src="/logos/voxaiomni-logo.png" 
        alt="Voxaiomni Logo"
        width={40} 
        height={40} 
        className="h-8 w-auto md:h-10" 
        data-ai-hint="company logo"
      />
      <span className="hidden sm:inline">Voxaiomni</span>
    </Link>
  );
};

export default Logo;
