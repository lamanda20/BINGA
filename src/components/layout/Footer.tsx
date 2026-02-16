import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-950 pt-16 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light className="mb-4" />
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-accent text-sm font-semibold uppercase tracking-wider text-gold">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 text-gold" />
                {t('contact.info.email')}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="h-4 w-4 text-gold" />
                {t('contact.info.phone')}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t('footer.locations.milano')}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t('footer.locations.roma')}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-accent text-sm font-semibold uppercase tracking-wider text-gold">
              {t('footer.learnMore')}
            </h3>
            <ul className="space-y-3">
              {(['faq', 'about', 'blog'] as const).map((key) => (
                <li key={key}>
                  <button className="text-sm text-white/50 transition-colors hover:text-white">
                    {t(`footer.learnMoreLinks.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-accent text-sm font-semibold uppercase tracking-wider text-gold">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              {(['cookies', 'privacy', 'terms'] as const).map((key) => (
                <li key={key}>
                  <a
                    href={key === 'privacy' ? '/privacy' : '#'}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {t(`footer.legalLinks.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 py-8 text-center">
          <p className="text-sm text-white/40">{t('footer.copyright')}</p>
        </div>
      </Container>
    </footer>
  );
}
