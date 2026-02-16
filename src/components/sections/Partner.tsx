import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import airbnbLogo from '@/partenaires/Airbnb_Logo_Bélo.svg.png';
import expediaLogo from '@/partenaires/expedia.png';

export default function Partner() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="grid gap-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-sm font-accent italic text-dark-600">
                {t('partner.lead') || 'Un partenaire fiable'}
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold text-dark-950 md:text-4xl">
                {t('partner.title')}
              </h2>
              <p className="mb-4 leading-relaxed text-dark-400">
                {t('partner.description')}
              </p>
              <p className="leading-relaxed text-dark-400">
                {t('partner.extra') ||
                  'Nous travaillons avec des partenaires reconnus pour vous garantir sérénité et visibilité.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="overflow-hidden h-80 w-72 md:w-80 md:h-96 lg:w-[380px] lg:h-[420px]">
                <img
                  src="/hero-bg.jpg"
                  alt={t('partner.imageAlt') || 'Partenaire'}
                  className="w-full h-full object-cover rounded-tr-full"
                />
              </div>

              {/* Circular partner logo overlay */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-300 shadow-lg">
                  <img
                    src={airbnbLogo}
                    alt="Airbnb"
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>

              {/* Small partner badge bottom-right */}
              <div className="absolute -right-6 bottom-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                  <img
                    src={expediaLogo}
                    alt="Partenaire"
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
