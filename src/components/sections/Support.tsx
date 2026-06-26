import { Mail, LifeBuoy, Clock } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface SupportProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Support({ dict }: SupportProps) {
  return (
    <section id="support" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <SectionHeading
          eyebrow={dict.support.eyebrow}
          title={dict.support.title}
          lead={dict.support.lead}
        />
        <div className="mx-auto mt-12 max-w-2xl">
          <Card icon={<LifeBuoy size={24} strokeWidth={2} />} hover={false}>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href={`mailto:${dict.support.email}`}>
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
                {dict.support.emailLabel}
              </Button>
              <Button as="a" href="#" variant="secondary">
                {dict.support.faqLabel}
              </Button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <Clock size={16} strokeWidth={2} aria-hidden="true" />
              {dict.support.responseTime}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
