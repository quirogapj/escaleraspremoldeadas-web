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
    <main className="pb-24 md:pb-28">
      <StickyWhatsapp />
      <section className="hero-grid section-shell relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28" id="inicio">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-7">
            <span className="badge w-fit">{heroContent.badge}</span>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-700 sm:text-xl">{heroContent.subheadline}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsappButton label={heroContent.ctaPrimary} className="w-full sm:w-auto" />
              <a href="#modelos" className="btn-secondary w-full sm:w-auto">
                {heroContent.ctaSecondary}
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Plantillas repetibles para proyectos en serie
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Instalación asistida con grúa y equipo especializado
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card-surface mx-auto max-w-xl backdrop-blur p-6 sm:p-8 lg:p-9">
              <div className="grid gap-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-primary">Planos ➜ Fabricación ➜ Instalación</p>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Proceso completo</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm text-gray-700">
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="text-base font-semibold text-charcoal">72h</p>
                    <p className="text-xs">Producción rápida</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="text-base font-semibold text-charcoal">±1 mm</p>
                    <p className="text-xs">Precisión</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="text-base font-semibold text-charcoal">0</p>
                    <p className="text-xs">Desperdicio en obra</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-sand/30 p-5 text-sm text-gray-800">
                  <p className="font-semibold text-charcoal">Asesoría personalizada</p>
                  <p className="leading-relaxed">Enviamos renders, fichas técnicas y memoria de cálculo bajo solicitud.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-relaxed text-gray-700">
                    Agenda una llamada rápida para revisar medidas y tiempos de entrega.
                  </p>
                  <WhatsappButton label="Cotizar ahora" variant="secondary" className="sm:min-w-[160px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="modelos">
        <div className="section-surface space-y-10 p-7 sm:p-10">
          <SectionHeading title={modelsContent.title} description={modelsContent.description} align="center" />
          <div className="grid gap-6 sm:grid-cols-2">
            {modelsContent.models.map((model) => (
              <ModelCard key={model.name} {...model} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="proceso">
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
      </section>

      <section className="section-shell" id="beneficios">
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
      </section>

      <section className="section-shell" id="faq">
        <div className="section-surface space-y-10 p-7 sm:p-10">
          <SectionHeading title={faqContent.title} align="center" />
          <div className="grid gap-4 md:grid-cols-2">
            {faqContent.items.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="contacto">
        <div className="card-surface grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <SectionHeading
              title={contactContent.title}
              description={contactContent.description}
              eyebrow="Atención directa"
            />
            <div className="grid gap-3 text-sm text-gray-800">
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
          <div className="space-y-4 rounded-2xl bg-primary/5 p-6">
            <p className="text-lg font-semibold text-charcoal">¿Listo para cotizar?</p>
            <p className="text-sm text-gray-700">
              Escríbenos por WhatsApp con medidas, ubicación y fecha estimada. Respondemos en minutos.
            </p>
            <WhatsappButton label="Abrir WhatsApp" />
            <div className="rounded-xl border border-primary/10 bg-white p-4 text-sm text-gray-700">
              <p className="font-semibold text-charcoal">Tip</p>
              <p>Adjunta fotos de la zona de instalación y especifica acabados deseados para optimizar tiempos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
