interface ModelCardProps {
  name: string;
  summary: string;
  details: string;
}

export function ModelCard({ name, summary, details }: ModelCardProps) {
  return (
    <article className="card-surface h-full p-5 sm:p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold text-charcoal">{name}</h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Modelo</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{details}</p>
    </article>
  );
}
