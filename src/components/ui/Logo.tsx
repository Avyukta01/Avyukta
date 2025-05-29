import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`text-2xl font-bold text-primary ${className}`}>
      Innovatech
    </Link>
  );
};

export default Logo;
