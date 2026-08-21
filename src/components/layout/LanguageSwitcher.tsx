'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';

interface LanguageSwitcherProps {
  locale: Locale;
  switchLangLabel: string;
  className?: string;
}

function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split('/');
  // segments[0] is empty (leading slash), segments[1] is the current locale
  if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  return segments.join('/') || `/${target}`;
}

export default function LanguageSwitcher({
  locale,
  switchLangLabel,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  const preserveHash = (href: string) => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return `${href}${window.location.hash}`;
    }
    return href;
  };

  return (
    <div
      className={cn('flex items-center gap-1', className)}
      role="group"
      aria-label={switchLangLabel}
    >
      {locales.map((l) => {
        const isActive = l === locale;
        const href = swapLocale(pathname, l);
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            aria-current={isActive ? 'true' : undefined}
            onClick={(e) => {
              if (!isActive && typeof window !== 'undefined' && window.location.hash) {
                e.preventDefault();
                window.location.assign(preserveHash(href));
              }
            }}
            className={cn(
              'rounded-pill px-2.5 py-1 text-sm font-semibold uppercase transition-colors',
              isActive
                ? 'bg-green-500 text-white'
                : 'text-muted hover:text-navy-800',
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
