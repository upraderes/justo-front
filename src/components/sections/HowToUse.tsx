import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import SectionHeading from '@/components/ui/SectionHeading';
import StepItem from '@/components/ui/StepItem';

interface HowToUseProps {
  dict: Dictionary;
  locale: Locale;
}

export default function HowToUse({ dict }: HowToUseProps) {
  const steps = dict.how.steps;

  return (
    <section id="how" className="scroll-mt-24 bg-bg">
      <div className="mx-auto max-w-content px-5 py-[clamp(4rem,8vw,7rem)] sm:px-8">
        <SectionHeading
          eyebrow={dict.how.eyebrow}
          title={dict.how.title}
          lead={dict.how.lead}
        />
        <div className="mt-12 grid gap-0 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <StepItem
              key={step.title}
              index={i + 1}
              title={step.title}
              body={step.body}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
