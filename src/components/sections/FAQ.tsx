import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import { faqItems } from '@/constants/faq';

export default function FAQ() {
  const { t } = useTranslation();

  const translatedItems = faqItems.map((item) => ({
    question: t(item.questionKey),
    answer: t(item.answerKey),
  }));

  return (
    <Section id="faq" className="bg-white">
      <Container>
        <SectionHeading
          badge={t('faq.badge')}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion items={translatedItems} />
        </motion.div>
      </Container>
    </Section>
  );
}
