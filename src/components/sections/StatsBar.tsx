import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import CounterAnimation from '@/components/ui/CounterAnimation';
import { stats } from '@/constants/stats';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

export default function StatsBar() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateOnScroll(0.3);

  return (
    <section id="stats" className="relative -mt-1 bg-navy py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-2 font-playfair text-4xl font-bold text-gold md:text-5xl">
                <CounterAnimation
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-dm text-sm text-gray-400 md:text-base">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
