import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Quote className="mb-4 h-8 w-8 text-gold/30" />

      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-navy-300 italic">
        &ldquo;{content}&rdquo;
      </p>

      <div className="border-t border-gray-100 pt-4">
        <p className="font-dm font-semibold text-navy">{name}</p>
        <p className="text-xs text-navy-300">{role}</p>
      </div>
    </div>
  );
}
