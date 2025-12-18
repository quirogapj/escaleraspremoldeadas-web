interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="card-surface flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          •
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-700">{description}</p>
        </div>
      </div>
    </article>
  );
}
