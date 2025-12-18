import { contactContent, faqContent, heroContent, modelsContent, stepsContent, benefitsContent } from '@/content/siteContent';
import { SectionHeading } from '@/components/section-heading';
import { WhatsappButton } from '@/components/whatsapp-button';
import { ModelCard } from '@/components/model-card';
import { StepCard } from '@/components/step-card';
import { FaqItem } from '@/components/faq-item';
import { StickyWhatsapp } from '@/components/sticky-whatsapp';
import { FeatureCard } from '@/components/feature-card';

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-32">
      <StickyWhatsapp />
      <section className="section-block relative" id="inicio">
        <div className="hero-grid absolute inset-0 opacity-80" aria-hidden />
        <div className="section-shell relative">
          <div className="section-surface border-primary/15 p-7 sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <div className="flex flex-col gap-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge">{heroContent.badge}</span>
                  <span className="chip">Proceso completo</span>
                </div>
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                  {heroContent.headline}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl">{heroContent.subheadline}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <WhatsappButton label={heroContent.ctaPrimary} className="w-full sm:w-auto" />
                  <a href="#modelos" className="btn-secondary w-full sm:w-auto">
                    {heroContent.ctaSecondary}
                  </a>
                </div>
                <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    Plantillas repetibles para proyectos en serie
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-accent/10 bg-accent/5 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    Instalación asistida con grúa y equipo especializado
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="card-surface mx-auto max-w-xl space-y-6 border-primary/15 bg-white/90 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-primary">Planos ➜ Fabricación ➜ Instalación</p>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      Equipo experto
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm text-gray-700">
                    {[{ label: 'Producción', value: '72h' }, { label: 'Precisión', value: '±1 mm' }, { label: 'Desperdicio', value: '0' }].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-primary/10 bg-primary/5 px-3 py-4 sm:px-4"
                      >
                        <p className="text-lg font-semibold text-charcoal sm:text-xl">{item.value}</p>
                        <p className="text-[11px] sm:text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-4 rounded-2xl border border-sand/70 bg-sand/30 p-5 text-sm text-gray-800 sm:grid-cols-2 sm:items-center">
                    <div className="space-y-2">
                      <p className="font-semibold text-charcoal">Asesoría personalizada</p>
                      <p className="leading-relaxed text-gray-700">
                        Renders, fichas técnicas y memoria de cálculo bajo solicitud.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-primary/10 bg-white/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Lista de chequeo</p>
                      <p className="text-sm leading-relaxed text-gray-700">
                        Revisa medidas, cargas y acabados antes de confirmar tu pedido.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="font-semibold text-charcoal">Agenda una llamada rápida</p>
                      <p>Revisamos medidas y tiempos de entrega en minutos.</p>
                    </div>
                    <WhatsappButton label="Cotizar ahora" variant="secondary" className="sm:min-w-[170px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block border-t border-b border-sand/70 bg-white/70" id="modelos">
        <div className="section-shell">
          <div className="section-surface space-y-10 p-7 sm:p-10">
            <SectionHeading title={modelsContent.title} description={modelsContent.description} align="center" />
            <div className="grid gap-6 sm:grid-cols-2">
              {modelsContent.models.map((model) => (
                <ModelCard key={model.name} {...model} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-sand/20" id="proceso">
        <div className="section-shell">
          <div className="section-surface space-y-10 p-7 sm:p-10">
            <SectionHeading
              title={stepsContent.title}
              description="Acompañamiento de principio a fin con un equipo experto en prefabricados."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {stepsContent.steps.map((step, index) => (
                <StepCard key={step.title} index={index + 1} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block border-t border-b border-sand/70 bg-white/80" id="beneficios">
        <div className="section-shell">
          <div className="section-surface space-y-10 p-7 sm:p-10">
            <SectionHeading
              title={benefitsContent.title}
              description="Menos obra húmeda, más control y precisión para tus proyectos residenciales o comerciales."
              align="center"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {benefitsContent.items.map((item) => (
                <FeatureCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-sand/25" id="faq">
        <div className="section-shell">
          <div className="section-surface space-y-10 p-7 sm:p-10">
            <SectionHeading title={faqContent.title} align="center" />
            <div className="grid gap-4 md:grid-cols-2">
              {faqContent.items.map((item) => (
                <FaqItem key={item.question} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="contacto">
        <div className="section-shell">
          <div className="card-surface grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                title={contactContent.title}
                description={contactContent.description}
                eyebrow="Atención directa"
              />
              <div className="grid gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm text-gray-800">
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
            <div className="space-y-4 rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-soft">
              <p className="text-lg font-semibold text-charcoal">¿Listo para cotizar?</p>
              <p className="text-sm text-gray-700">
                Escríbenos por WhatsApp con medidas, ubicación y fecha estimada. Respondemos en minutos.
              </p>
              <WhatsappButton label="Abrir WhatsApp" />
              <div className="rounded-xl border border-white/60 bg-white/80 p-4 text-sm text-gray-700">
                <p className="font-semibold text-charcoal">Tip</p>
                <p>Adjunta fotos de la zona de instalación y especifica acabados deseados para optimizar tiempos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
