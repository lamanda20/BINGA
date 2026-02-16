import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Settings, Target } from 'lucide-react';
import Container from '@/components/layout/Container';
import bookingLogo from '@/partenaires/Booking.com_logo2.png';

export default function Solutions() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 font-display text-3xl font-bold text-dark-950 md:text-4xl">
                {t('solutions.title')}
              </h2>
              <p className="mb-4 font-accent text-lg text-gold-600">{t('solutions.subtitle')}</p>
              <p className="mb-4 leading-relaxed text-dark-400">{t('solutions.description')}</p>
              <p className="leading-relaxed text-dark-400">{t('solutions.extra') || 'Des solutions sur mesure pour maximiser vos revenus et simplifier la gestion.'}</p>

              {/* Feature icons/cards under the text (left column) */}
              <div className="mt-6 grid gap-3">
                <div className="flex items-center gap-4 rounded-2xl bg-dark-950 p-4 max-w-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold">
                    <Target className="h-5 w-5 text-dark-950" />
                  </div>
                  <p className="font-accent text-sm font-medium text-white">{t('solutions.feature1') || "+30% d'augmentation de revenus"}</p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3 max-w-md">
                  <BarChart3 className="h-6 w-6 text-gold" />
                  <p className="font-accent text-xs font-medium text-dark-500">{t('solutions.feature2') || 'Stratégie pilotée par les données'}</p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3 max-w-md">
                  <Settings className="h-6 w-6 text-gold" />
                  <p className="font-accent text-xs font-medium text-dark-500">{t('solutions.feature3') || 'Outils modernes'}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center w-full"
            >
              {/* Image block only (use decorative photo instead of booking logo) */}
              <div className="w-full flex items-center justify-center flex-col">
                <div className="overflow-hidden h-72 w-72 md:h-80 md:w-80 lg:h-[360px] lg:w-[360px] rounded-tl-full rounded-tr-full">
                  <img src="/hero-bg.jpg" alt={t('solutions.imageAlt') || 'Solutions'} className="w-full h-full object-cover" />
                </div>

                {/* Booking.com circular badge overlay (like the other partners) */}
                <div className="absolute -right-6 bottom-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                    <img src={bookingLogo} alt="Booking.com" className="h-6 w-6 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
