'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { navItems } from '@/lib/nav';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  dict: Dictionary;
  locale: Locale;
}

export default function MobileMenu({
  open,
  onClose,
  dict,
  locale,
}: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 max-h-full overflow-y-auto rounded-b-card bg-surface p-6 shadow-card">
        <div className="flex items-center justify-between">
          <LanguageSwitcher
            locale={locale}
            switchLangLabel={dict.a11y.switchLang}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.a11y.close}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 hover:bg-bg"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 text-lg font-semibold text-navy-800 hover:bg-bg"
                >
                  {dict.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6">
          <Button as="a" href="#download" onClick={onClose} className="w-full">
            {dict.nav.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
