interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="card-surface flex h-full flex-col gap-3 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </article>
  );
}
