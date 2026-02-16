import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholderText?: string;
}

export default function Select({
  label,
  error,
  options,
  placeholderText,
  className,
  id,
  ...props
}: SelectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-dm text-sm font-medium text-navy"
      >
        {label}
      </label>
      <select
        id={id}
        className={cn(
          'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-inter text-sm text-navy transition-colors',
          'focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20',
          error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
          !props.value && 'text-gray-400',
          className
        )}
        {...props}
      >
        {placeholderText && (
          <option value="">{placeholderText}</option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
