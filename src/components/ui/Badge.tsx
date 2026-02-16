import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-gold/10 px-4 py-1.5 font-dm text-sm font-semibold text-gold',
        className
      )}
    >
      {children}
    </span>
  );
}
