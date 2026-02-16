import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Eye, Lightbulb } from 'lucide-react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const values = [
  { key: 'excellence', icon: Award },
  { key: 'transparency', icon: Eye },
  { key: 'innovation', icon: Lightbulb },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge={t('about.badge')}
              title={t('about.title')}
              centered={false}
              className="mb-6"
            />
            <p className="mb-4 text-lg leading-relaxed text-navy-300">
              {t('about.description1')}
            </p>
            <p className="text-lg leading-relaxed text-navy-300">
              {t('about.description2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 font-playfair text-2xl font-bold text-navy">
              {t('about.values.title')}
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.key}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-dm text-base font-semibold text-navy">
                        {t(`about.values.${value.key}.title`)}
                      </h4>
                      <p className="text-sm leading-relaxed text-navy-300">
                        {t(`about.values.${value.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
