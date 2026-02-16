import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { scrollToSection } from '@/utils/scrollTo';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[95vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10 flex min-h-[95vh] items-end pb-24 md:items-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 font-display text-xl italic text-gold md:text-2xl"
          >
            {t('hero.title')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-8 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {t('hero.subtitle')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-gold text-base"
            >
              {t('hero.cta')}
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
