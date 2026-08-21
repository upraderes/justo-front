'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/nav';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-surface/80 backdrop-blur transition-shadow',
        scrolled && 'border-b border-border shadow-soft',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold text-navy-800"
        >
          <Image
            src="/logo.png"
            alt="Justo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
            priority
          />
          <span className="text-lg">Justo</span>
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-pill px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-green-600"
                >
                  {dict.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher
            locale={locale}
            switchLangLabel={dict.a11y.switchLang}
          />
          <Button as="a" href="#download">
            {dict.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 hover:bg-bg md:hidden"
          aria-label={dict.a11y.menu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        dict={dict}
        locale={locale}
      />
    </header>
  );
}
