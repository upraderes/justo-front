import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

interface TeamProps {
  dict: Dictionary;
  locale: Locale;
}

const icons = [Sparkles, ShieldCheck, HeartHandshake];

export default function Team({ dict }: TeamProps) {
  return (
    <section id="team" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <SectionHeading
          eyebrow={dict.team.eyebrow}
          title={dict.team.title}
          lead={dict.team.lead}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.team.values.map((value, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <Card
                key={value.title}
                icon={<Icon size={24} strokeWidth={2} />}
                title={value.title}
              >
                {value.body}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
