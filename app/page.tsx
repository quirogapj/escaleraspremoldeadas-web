import {
  contactContent,
  faqContent,
  heroContent,
  modelsContent,
  stepsContent,
  benefitsContent,
} from '@/content/siteContent';
import { SectionHeading } from '@/components/section-heading';
import { WhatsappButton } from '@/components/whatsapp-button';
import { StickyWhatsapp } from '@/components/sticky-whatsapp';
import { FaqItem } from '@/components/faq-item';
import { FeatureCard } from '@/components/feature-card';
import { StepCard } from '@/components/step-card';

const heroHighlights = [
  'Diseño, fabricación e instalación con un solo equipo.',
  'Escaleras de concreto reforzado listas para acabados.',
  'Geometría precisa y tiempos de entrega controlados.',
];

const modelImages = [
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529429617124-aee65104c3cf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80',
];

export default function HomePage() {
  return (
    <main className="bg-white text-charcoal">
      <StickyWhatsapp />

      <section className="hero-grid bg-sand/20" id="inicio">
        <div className="section-shell section-block flex flex-col gap-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {heroContent.badge}
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {heroContent.headline}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                  {heroContent.subheadline}
                </p>
              </div>
              <ul className="space-y-3 text-base text-charcoal">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsappButton label={heroContent.ctaPrimary} className="w-full sm:w-auto" />
                <a href="#modelos" className="btn-secondary w-full sm:w-auto">
                  {heroContent.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-white to-accent/10" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-divider shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1505842679547-471ea66c9b60?auto=format&fit=crop&w=1200&q=80"
                  alt="Escalera premoldeada en concreto"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-divider/80 bg-white" id="beneficios">
        <div className="section-shell section-block">
          <SectionHeading
            title={benefitsContent.title}
            description="Beneficios clave para proyectos residenciales y comerciales."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsContent.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider/80 bg-sand/60" id="modelos">
        <div className="section-shell section-block">
          <SectionHeading
            title={modelsContent.title}
            description={modelsContent.description}
            align="center"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {modelsContent.models.map((model, index) => (
              <article key={model.name} className="card-surface flex h-full flex-col overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={modelImages[index % modelImages.length]}
                    alt={`Modelo ${model.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Modelo</p>
                      <h3 className="text-xl font-semibold text-charcoal">{model.name}</h3>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Listo para instalar</span>
                  </div>
                  <p className="text-base font-semibold leading-relaxed text-charcoal">{model.summary}</p>
                  <p className="text-sm text-muted leading-relaxed">{model.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider/80 bg-white" id="proceso">
        <div className="section-shell section-block">
          <SectionHeading
            title="Proceso de trabajo"
            description="Planos → Fabricación → Instalación con acompañamiento experto."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stepsContent.steps.map((step, index) => (
              <StepCard key={step.title} index={index + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider/80 bg-sand/60" id="faq">
        <div className="section-shell section-block">
          <SectionHeading title={faqContent.title} align="center" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqContent.items.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider/80 bg-white" id="contacto">
        <div className="section-shell section-block">
          <div className="grid gap-10 rounded-3xl border border-divider bg-sand/30 p-8 shadow-sm lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-4">
              <SectionHeading
                title={contactContent.title}
                description={contactContent.description}
                eyebrow="Atención directa"
              />
              <div className="grid gap-2 text-sm text-charcoal">
                <p>
                  <span className="font-semibold">Teléfono:</span> {contactContent.phone}
                </p>
                <p>
                  <span className="font-semibold">Correo:</span> {contactContent.email}
                </p>
                <p>
                  <span className="font-semibold">Dirección:</span> {contactContent.address}
                </p>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-divider/60 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-charcoal">¿Listo para cotizar?</p>
              <p className="text-sm text-muted">
                Escríbenos por WhatsApp con medidas, ubicación y fecha estimada. Respondemos en minutos.
              </p>
              <WhatsappButton label="Abrir WhatsApp" className="w-full sm:w-auto" />
              <p className="rounded-xl bg-sand/50 px-4 py-3 text-sm text-muted">
                Adjunta fotos de la zona de instalación y especifica acabados para acelerar la cotización.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
