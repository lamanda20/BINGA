import { motion } from 'framer-motion';
import {
  Camera,
  Headset,
  Sparkles,
  TrendingUp,
  Shield,
  BarChart3,
} from 'lucide-react';
import { cn } from '@/utils/cn';

const iconMap: Record<string, typeof Camera> = {
  Camera,
  HeadsetIcon: Headset,
  Sparkles,
  TrendingUp,
  Shield,
  BarChart3,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] ?? Camera;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn(
        'group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300',
        'hover:-translate-y-1 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5'
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-playfair text-lg font-semibold text-navy">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-navy-300">{description}</p>
    </motion.div>
  );
}
