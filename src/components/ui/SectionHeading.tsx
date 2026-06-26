import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      <p
        className={cn(
          'text-[0.8125rem] font-semibold uppercase tracking-[0.08em]',
          invert ? 'text-green-400' : 'text-green-500',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight',
          invert ? 'text-white' : 'text-navy-800',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            invert ? 'text-white/80' : 'text-muted',
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
