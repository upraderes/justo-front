import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  icon?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  icon,
  title,
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-border bg-surface p-6 shadow-card sm:p-8',
        hover && 'transition-transform duration-200 hover:-translate-y-1',
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bg text-green-500">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-navy-800">{title}</h3>
      )}
      {children && (
        <div className="mt-2 text-muted leading-relaxed">{children}</div>
      )}
    </div>
  );
}
