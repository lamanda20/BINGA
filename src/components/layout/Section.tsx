import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, children, className, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        dark ? 'gradient-navy text-white' : 'bg-ivory',
        className
      )}
    >
      {children}
    </section>
  );
}
