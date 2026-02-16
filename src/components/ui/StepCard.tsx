import { motion } from 'framer-motion';
import { Phone, Search, Settings, Rocket } from 'lucide-react';

const iconMap: Record<string, typeof Phone> = {
  Phone,
  Search,
  Settings,
  Rocket,
};

interface StepCardProps {
  number: number;
  iconName: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export default function StepCard({
  number,
  iconName,
  title,
  description,
  index,
  isLast,
}: StepCardProps) {
  const Icon = iconMap[iconName] ?? Phone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex flex-col items-center text-center"
    >
      {!isLast && (
        <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-gold/40 to-gold/10 lg:block" />
      )}

      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold">
          <Icon className="h-8 w-8" />
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold font-dm text-xs font-bold text-navy">
          {number}
        </span>
      </div>

      <h3 className="mb-3 font-playfair text-xl font-semibold text-navy">
        {title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed text-navy-300">
        {description}
      </p>
    </motion.div>
  );
}
