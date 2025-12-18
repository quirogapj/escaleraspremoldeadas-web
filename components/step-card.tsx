interface StepCardProps {
  index: number;
  title: string;
  description: string;
}

export function StepCard({ index, title, description }: StepCardProps) {
  return (
    <article className="card-surface p-5 sm:p-6 flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
          {index}
        </span>
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </article>
  );
}
