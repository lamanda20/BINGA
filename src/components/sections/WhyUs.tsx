import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Activity, Eye, Check } from 'lucide-react';
import Container from '@/components/layout/Container';

const reasons = [
  { key: '1', icon: Clock },
  { key: '2', icon: Activity },
  { key: '3', icon: Eye },
];

export default function WhyUs() {
  const { t } = useTranslation();
  const features = t('whyUs.transparency.features', { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-dark-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {t('whyUs.title')}{' '}
            <span className="text-gold">{t('whyUs.brand')}</span>
          </h2>
        </motion.div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-gold/30"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold">
                  <Icon className="h-6 w-6 text-dark-950" />
                </div>
                <h3 className="mb-3 font-accent text-lg font-semibold text-white">
                  {t(`whyUs.reasons.${reason.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t(`whyUs.reasons.${reason.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm"
        >
          <h3 className="mb-3 font-display text-2xl font-bold text-gold">
            {t('whyUs.transparency.title')}
          </h3>
          <p className="mb-6 text-sm text-white/60">
            {t('whyUs.transparency.subtitle')}
          </p>
          <ul className="space-y-3 text-left">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
