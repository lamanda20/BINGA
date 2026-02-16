import { useTranslation } from 'react-i18next';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StepCard from '@/components/ui/StepCard';

const steps = [
  { number: 1, key: 'contact', iconName: 'Phone' },
  { number: 2, key: 'evaluation', iconName: 'Search' },
  { number: 3, key: 'onboarding', iconName: 'Settings' },
  { number: 4, key: 'management', iconName: 'Rocket' },
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <Section id="how-it-works" className="bg-white">
      <Container>
        <SectionHeading
          badge={t('howItWorks.badge')}
          title={t('howItWorks.title')}
          subtitle={t('howItWorks.subtitle')}
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.key}
              number={step.number}
              iconName={step.iconName}
              title={t(`howItWorks.steps.${step.key}.title`)}
              description={t(`howItWorks.steps.${step.key}.description`)}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
