import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { cn } from '@/utils/cn';
import { navItems } from '@/constants/navigation';
import { scrollToSection } from '@/utils/scrollTo';
import Container from './Container';
import MobileMenu from './MobileMenu';
import Logo from '@/components/ui/Logo';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-30 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo light={!isScrolled} />

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'font-accent text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-dark-600 hover:text-dark-950'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {t(item.label)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher light={!isScrolled} />

              <button
                onClick={() => scrollToSection('contact')}
                className="hidden rounded-full bg-dark-950 px-6 py-2.5 font-accent text-sm font-semibold text-white transition-all hover:bg-dark-800 lg:inline-flex"
              >
                {t('nav.cta')}
              </button>

              <button
                className={cn(
                  'rounded-lg p-2 transition-colors lg:hidden',
                  isScrolled
                    ? 'text-dark-950 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                )}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
