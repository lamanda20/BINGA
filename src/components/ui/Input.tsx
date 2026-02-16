import type { InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-dm text-sm font-medium text-navy"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-inter text-sm text-navy transition-colors',
          'placeholder:text-gray-400',
          'focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20',
          error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
