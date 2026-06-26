import { Check, Handshake } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface PartnerProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Partner({ dict }: PartnerProps) {
  return (
    <section id="partner" className="scroll-mt-24 bg-bg">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <SectionHeading
          eyebrow={dict.partner.eyebrow}
          title={dict.partner.title}
          lead={dict.partner.lead}
        />
        <div className="mx-auto mt-12 max-w-2xl">
          <Card icon={<Handshake size={24} strokeWidth={2} />} hover={false}>
            <ul className="space-y-3">
              {dict.partner.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-navy-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button as="a" href={`mailto:${dict.partner.email}`}>
                {dict.partner.cta}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
