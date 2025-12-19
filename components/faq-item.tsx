'use client';

import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="faq-item">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h3 className="text-base font-semibold text-charcoal">{question}</h3>
        <span className="text-primary text-xl" aria-hidden>
          {open ? '–' : '+'}
        </span>
      </button>
      {open ? <p className="mt-3 text-sm text-muted leading-relaxed">{answer}</p> : null}
    </article>
  );
}
