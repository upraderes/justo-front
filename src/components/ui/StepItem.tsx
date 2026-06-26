import { cn } from '@/lib/cn';

interface StepItemProps {
  index: number;
  title: string;
  body: string;
  isLast?: boolean;
}

export default function StepItem({
  index,
  title,
  body,
  isLast = false,
}: StepItemProps) {
  return (
    <div className="relative flex gap-4 md:flex-col md:gap-0">
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white shadow-soft">
          {index}
        </div>
        <div
          className={cn(
            'w-px flex-1 bg-border md:h-px md:w-full',
            isLast && 'hidden',
          )}
          aria-hidden="true"
        />
      </div>
      <div className="pb-8 md:pb-0 md:pt-6">
        <h3 className="text-xl font-bold text-navy-800">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}
