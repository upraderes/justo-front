import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';

interface LegalLayoutProps {
  locale: Locale;
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export default function LegalLayout({
  locale,
  title,
  updatedAt,
  children,
}: LegalLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <Link
        href={`/${locale}`}
        className="text-sm font-medium text-green-600 transition-colors hover:text-green-700"
      >
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-navy-800 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted">
        Dernière mise à jour : {updatedAt}
      </p>

      <div className="mt-8 space-y-8 rounded-card bg-surface p-6 shadow-card sm:p-10">
        {children}
      </div>
    </main>
  );
}
