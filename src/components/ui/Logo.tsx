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
        src="/logos/voxaiomni-logo.png" // Assumes your logo is here
        alt="Voxaiomni Logo"
        width={40} // Adjust width as needed
        height={40} // Adjust height as needed
        className="h-8 w-auto md:h-10" // Responsive height, auto width
        data-ai-hint="company logo"
      />
      <span className="hidden sm:inline">Voxaiomni</span> {/* Optionally show text next to logo */}
    </Link>
  );
};

export default Logo;
