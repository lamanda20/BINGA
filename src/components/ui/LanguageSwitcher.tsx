import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { Language } from '@/types';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'it', label: 'Italiano', flag: 'IT' },
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'fr', label: 'Français', flag: 'FR' },
];

interface LanguageSwitcherProps {
  light?: boolean;
}

export default function LanguageSwitcher({ light }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors',
          light ? 'text-white/80 hover:text-white' : 'text-dark-500 hover:text-dark-950'
        )}
      >
        <Globe className="h-4 w-4" />
        <span className="font-accent">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl bg-white shadow-xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setIsOpen(false); }}
              className={cn(
                'flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-gray-50',
                i18n.language === lang.code ? 'bg-gold/10 font-semibold text-dark-950' : 'text-dark-500'
              )}
            >
              <span className="font-accent font-bold">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
