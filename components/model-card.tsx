interface ModelCardProps {
  name: string;
  summary: string;
  details: string;
}

export function ModelCard({ name, summary, details }: ModelCardProps) {
  return (
    <article className="card-surface flex h-full flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Modelo</p>
          <h3 className="text-xl font-semibold text-charcoal">{name}</h3>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Listo para instalar</span>
      </div>
      <p className="text-base font-semibold leading-relaxed text-charcoal">{summary}</p>
      <p className="text-sm text-gray-700 leading-relaxed">{details}</p>
    </article>
  );
}
