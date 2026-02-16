import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/constants/navigation';
import { scrollToSection } from '@/utils/scrollTo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white"
          >
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <span className="font-display text-xl font-bold text-dark-950">Menu</span>
              <button onClick={onClose} className="rounded-lg p-2 text-dark-400 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 p-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full rounded-lg px-4 py-3 text-left font-accent text-base font-medium text-dark-600 hover:bg-gray-50 hover:text-dark-950"
                    >
                      {t(item.label)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-gray-100 p-6">
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-primary w-full"
              >
                {t('nav.cta')}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
