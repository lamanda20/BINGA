import { cn } from '@/utils/cn';
import logoImg from '@/logo/Binga_logo.png';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light }: LogoProps) {
  return (
    <a href="#" className={cn('block', className)}>
      <img
        src={logoImg}
        alt="BINGA Management"
        className={cn(
          'h-44 w-auto object-contain transition-all duration-300',
          light ? '' : 'invert'
        )}
      />
    </a>
  );
}
