import { cn } from '@/utils/cn';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      {badge && (
        <Badge className={cn(light && 'bg-white/10 text-gold-200', 'mb-4')}>
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          'font-playfair text-3xl font-bold md:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg',
            centered && 'mx-auto',
            light ? 'text-gray-300' : 'text-navy-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
