import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Camera, Search, DollarSign, LogIn, Sparkles, Wrench,
  Gift, Headset, KeyRound, Wifi,
} from 'lucide-react';
import Container from '@/components/layout/Container';

const icons = [Camera, Search, DollarSign, LogIn, Sparkles, Wrench, Gift, Headset, KeyRound, Wifi];

export default function Services() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? 10 : 6;

  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-dark-950 md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="text-dark-400">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: visibleCount }).map((_, index) => {
            const num = index + 1;
            const Icon = icons[index];
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-accent text-sm font-bold text-white">
                  {num}
                </div>
                <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-dark-400 transition-colors group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-accent text-base font-semibold text-dark-950">
                  {t(`services.items.${num}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-dark-400">
                  {t(`services.items.${num}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              Voir tous les services
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
