import { Apple, Smartphone } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';

interface DownloadProps {
  dict: Dictionary;
  locale: Locale;
}

const storeButton =
  'inline-flex items-center justify-center gap-3 rounded-pill bg-white px-6 py-3.5 font-semibold text-navy-800 transition-all duration-200 hover:-translate-y-px hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800';

export default function Download({ dict }: DownloadProps) {
  return (
    <section id="download" className="scroll-mt-24 bg-bg">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <div className="rounded-card bg-navy-800 px-6 py-14 text-center shadow-card sm:px-12 sm:py-16">
          <span className="inline-block rounded-pill bg-green-500/20 px-4 py-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-green-400">
            {dict.download.eyebrow}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-white">
            {dict.download.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            {dict.download.lead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {/* TODO: replace # with the real App Store URL */}
            <a href="#" className={storeButton}>
              <Apple size={22} strokeWidth={2} aria-hidden="true" />
              {dict.download.appStore}
            </a>
            {/* TODO: replace # with the real Google Play URL */}
            <a href="#" className={storeButton}>
              <Smartphone size={22} strokeWidth={2} aria-hidden="true" />
              {dict.download.googlePlay}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">{dict.download.note}</p>
        </div>
      </div>
    </section>
  );
}
