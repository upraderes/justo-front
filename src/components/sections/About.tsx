import { Receipt, ShieldCheck, Users, Lock } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

interface AboutProps {
  dict: Dictionary;
  locale: Locale;
}

const icons = [Receipt, ShieldCheck, Users, Lock];

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
          lead={dict.about.lead}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.features.map((feature, i) => {
            const Icon = icons[i] ?? Receipt;
            return (
              <Card
                key={feature.title}
                icon={<Icon size={24} strokeWidth={2} />}
                title={feature.title}
              >
                {feature.body}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
