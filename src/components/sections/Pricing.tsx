import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import Container from '@/components/layout/Container';
import { scrollToSection } from '@/utils/scrollTo';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    { key: 'partial', recommended: false },
    { key: 'full', recommended: true },
  ] as const;

  return (
    <section id="pricing" className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-dark-950 md:text-4xl">
            {t('pricing.title')}
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan, index) => {
            const features = t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[];
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={cn(
                  'relative overflow-hidden rounded-2xl border-2 p-8 transition-all hover:shadow-xl',
                  plan.recommended
                    ? 'border-gold bg-dark-950 text-white'
                    : 'border-gray-200 bg-white'
                )}
              >
                {plan.recommended && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-gold px-4 py-1.5 font-accent text-xs font-bold text-white">
                    {t(`pricing.${plan.key}.badge`)}
                  </div>
                )}

                <h3 className={cn(
                  'mb-6 font-display text-2xl font-bold',
                  plan.recommended ? 'text-white' : 'text-dark-950'
                )}>
                  {t(`pricing.${plan.key}.title`)}
                </h3>

                <div className="mb-6">
                  <span className={cn(
                    'font-display text-5xl font-bold',
                    plan.recommended ? 'text-gold' : 'text-dark-950'
                  )}>
                    {t(`pricing.${plan.key}.price`)}
                  </span>
                  <p className={cn(
                    'mt-1 font-accent text-sm',
                    plan.recommended ? 'text-white/60' : 'text-dark-400'
                  )}>
                    {t(`pricing.${plan.key}.priceLabel`)}
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn(
                        'mt-0.5 h-5 w-5 shrink-0',
                        plan.recommended ? 'text-gold' : 'text-gold-600'
                      )} />
                      <span className={cn(
                        'text-sm',
                        plan.recommended ? 'text-white/80' : 'text-dark-500'
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={cn(
                    'w-full rounded-full py-3.5 font-accent text-sm font-semibold transition-all',
                    plan.recommended
                      ? 'bg-gold text-dark-950 hover:bg-gold-500'
                      : 'bg-dark-950 text-white hover:bg-dark-800'
                  )}
                >
                  {t(`pricing.${plan.key}.cta`)}
                </button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
