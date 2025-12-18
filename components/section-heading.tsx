import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  actions,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {eyebrow ? <span className="badge">{eyebrow}</span> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">{description}</p>
      ) : null}
      {actions}
    </div>
  );
}
