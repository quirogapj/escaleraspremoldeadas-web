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
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'text-center items-center' : ''}`}>
      {eyebrow ? <span className="badge">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-gray-700 max-w-2xl">{description}</p>
      ) : null}
      {actions}
    </div>
  );
}
