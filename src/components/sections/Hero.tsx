import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Button from '@/components/ui/Button';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section id="top" className="bg-bg scroll-mt-24">
      <div className="mx-auto max-w-content px-5 py-20 text-center sm:px-8 md:py-28">
        <div className="fade-up mx-auto max-w-3xl">
          <span className="inline-block rounded-pill bg-green-500/10 px-4 py-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-green-600">
            {dict.hero.eyebrow}
          </span>
          <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-navy-800">
            {dict.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button as="a" href="#download">
              {dict.hero.ctaPrimary}
            </Button>
            <Button as="a" href="#about" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
