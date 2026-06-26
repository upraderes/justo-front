import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HowToUse from '@/components/sections/HowToUse';
import Team from '@/components/sections/Team';
import Download from '@/components/sections/Download';
import Support from '@/components/sections/Support';
import Partner from '@/components/sections/Partner';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <main>
      <Hero dict={dict} locale={locale} />
      <About dict={dict} locale={locale} />
      <HowToUse dict={dict} locale={locale} />
      <Team dict={dict} locale={locale} />
      <Download dict={dict} locale={locale} />
      <Support dict={dict} locale={locale} />
      <Partner dict={dict} locale={locale} />
    </main>
  );
}
