interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="card-surface flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
