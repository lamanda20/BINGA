import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CalendarCheck, TrendingUp, Coffee } from 'lucide-react';
import Container from '@/components/layout/Container';
import airbnbLogo from '@/partenaires/Airbnb_Logo_Bélo.svg.png';
import abritelLogo from '@/partenaires/abritel-fr-logo.png';
import bookingLogo from '@/partenaires/Booking.com_logo2.png';
import expediaLogo from '@/partenaires/expedia.png';

const items = [
  { key: 'flexibility', icon: CalendarCheck },
  { key: 'profitability', icon: TrendingUp },
  { key: 'zeroStress', icon: Coffee },
];

export default function Commitments() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-dark-950 md:text-4xl">
            {t('commitments.title')}
          </h2>
          <p className="text-dark-400">{t('commitments.subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl bg-gray-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                  <Icon className="h-7 w-7 text-dark-950" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-dark-950">
                  {t(`commitments.${item.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-dark-400">
                  {t(`commitments.${item.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Ligne centrale avec logos partenaires sous les cards */}
        <div className="my-12 flex flex-col items-center">
          <hr className="w-full max-w-xl border-t border-gray-200 mb-6" />
          <div className="flex flex-row items-center justify-center gap-8">
            <img src={airbnbLogo} alt="Airbnb" className="h-8" />
            <img src={abritelLogo} alt="Abritel" className="h-8" />
            <img src={bookingLogo} alt="Booking.com" className="h-8" />
            <img src={expediaLogo} alt="Expedia" className="h-8" />
          </div>
          <hr className="w-full max-w-xl border-t border-gray-200 mt-6" />
        </div>
      </Container>
    </section>
  );
}
