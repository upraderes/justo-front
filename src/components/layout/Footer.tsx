import Image from 'next/image';
import { navItems } from '@/lib/nav';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-bold">
              <Image
                src="/logo.png"
                alt="Justo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-lg">Justo</span>
            </a>
            <p className="mt-4 text-white/70">{dict.footer.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm text-white/60">
                {dict.footer.language}
              </span>
              <LanguageSwitcher
                locale={locale}
                switchLangLabel={dict.a11y.switchLang}
              />
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/70 transition-colors hover:text-green-400"
                  >
                    {dict.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <a
                  href={`/${locale}/mentions-legales`}
                  className="transition-colors hover:text-green-400"
                >
                  {dict.footer.legal.mentions}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/politique-de-confidentialite`}
                  className="transition-colors hover:text-green-400"
                >
                  {dict.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/cgu`}
                  className="transition-colors hover:text-green-400"
                >
                  {dict.footer.legal.terms}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Justo. {dict.footer.rights}
            </p>
            <p className="flex gap-4">
              <a
                href="https://justodot.com"
                className="transition-colors hover:text-green-400"
              >
                justodot.com
              </a>
              <a
                href="https://justodot.fr"
                className="transition-colors hover:text-green-400"
              >
                justodot.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
