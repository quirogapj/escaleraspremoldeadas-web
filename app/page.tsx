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

const heroHighlights = [
  'Diseño, fabricación e instalación con un solo equipo.',
  'Escaleras de concreto reforzado listas para acabados.',
  'Geometría precisa y tiempos de entrega controlados.',
];

const benefitIcons = ['🏗️', '📐', '🧹', '🪜', '🔁'];

const modelImages = [
  'https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529429617124-aee65104c3cf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
];

const processSteps = [
  {
    title: 'Planos y asesoría',
    description: stepsContent.steps[0].description,
  },
  {
    title: 'Fabricación en planta',
    description: stepsContent.steps[1].description,
  },
  {
    title: 'Instalación en obra',
    description: stepsContent.steps[2].description,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-charcoal">
      <StickyWhatsapp />

      <section className="bg-sand/10" id="inicio">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {heroContent.badge}
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {heroContent.headline}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {heroContent.subheadline}
                </p>
              </div>
              <ul className="space-y-3 text-base text-gray-800">
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
              <div className="relative overflow-hidden rounded-3xl border border-sand/70 shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1529429617124-aee65104c3cf?auto=format&fit=crop&w=1200&q=80"
                  alt="Escalera premoldeada en concreto"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-white" id="beneficios">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            title={benefitsContent.title}
            description="Beneficios clave para proyectos residenciales y comerciales."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefitsContent.items.map((item, index) => (
              <article
                key={item.title}
                className="flex h-full items-start gap-4 rounded-2xl border border-sand/70 bg-sand/20 p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
                  {benefitIcons[index % benefitIcons.length]}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-sand/10" id="modelos">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            title={modelsContent.title}
            description={modelsContent.description}
            align="center"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {modelsContent.models.map((model, index) => (
              <article key={model.name} className="flex h-full flex-col overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-sm">
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
                  <p className="text-sm text-gray-700 leading-relaxed">{model.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-white" id="proceso">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            title="Proceso de trabajo"
            description="Planos → Fabricación → Instalación con acompañamiento experto."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-sand/70 bg-sand/20 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-sand/10" id="faq">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading title={faqContent.title} align="center" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqContent.items.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand/60 bg-white" id="contacto">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 rounded-3xl border border-sand/70 bg-sand/20 p-8 shadow-sm lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-4">
              <SectionHeading
                title={contactContent.title}
                description={contactContent.description}
                eyebrow="Atención directa"
              />
              <div className="grid gap-2 text-sm text-gray-800">
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
            <div className="space-y-4 rounded-2xl border border-white/70 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-charcoal">¿Listo para cotizar?</p>
              <p className="text-sm text-gray-700">
                Escríbenos por WhatsApp con medidas, ubicación y fecha estimada. Respondemos en minutos.
              </p>
              <WhatsappButton label="Abrir WhatsApp" className="w-full sm:w-auto" />
              <p className="rounded-xl bg-sand/20 px-4 py-3 text-sm text-gray-700">
                Adjunta fotos de la zona de instalación y especifica acabados para acelerar la cotización.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
