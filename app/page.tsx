import { contactContent, faqContent, heroContent, modelsContent, stepsContent, benefitsContent } from '@/content/siteContent';
import { SectionHeading } from '@/components/section-heading';
import { WhatsappButton } from '@/components/whatsapp-button';
import { ModelCard } from '@/components/model-card';
import { StepCard } from '@/components/step-card';
import { FaqItem } from '@/components/faq-item';
import { StickyWhatsapp } from '@/components/sticky-whatsapp';

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-12">
      <StickyWhatsapp />
      <section className="hero-grid section-shell relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24" id="inicio">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="badge w-fit">{heroContent.badge}</span>
            <h1 className="text-4xl font-semibold text-charcoal sm:text-5xl leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">{heroContent.subheadline}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsappButton label={heroContent.ctaPrimary} />
              <a href="#modelos" className="btn-secondary">
                {heroContent.ctaSecondary}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
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
            <div className="card-surface p-6 sm:p-8 lg:p-10 backdrop-blur">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">Planos ➜ Fabricación ➜ Instalación</p>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Proceso completo</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm text-gray-700">
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="font-semibold text-charcoal">72h</p>
                    <p>Producción rápida</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="font-semibold text-charcoal">±1 mm</p>
                    <p>Precisión</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4">
                    <p className="font-semibold text-charcoal">0</p>
                    <p>Desperdicio en obra</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-sand/30 p-5 text-sm text-gray-800">
                  <p className="font-semibold text-charcoal">Asesoría personalizada</p>
                  <p>Enviamos renders, fichas técnicas y memoria de cálculo bajo solicitud.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-700">
                    Agenda una llamada rápida para revisar medidas y tiempos de entrega.
                  </p>
                  <WhatsappButton label="Cotizar ahora" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10 py-12" id="modelos">
        <SectionHeading title={modelsContent.title} description={modelsContent.description} align="center" />
        <div className="grid gap-6 sm:grid-cols-2">
          {modelsContent.models.map((model) => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10 py-12" id="proceso">
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
      </section>

      <section className="section-shell space-y-8 py-12" id="beneficios">
        <SectionHeading
          title={benefitsContent.title}
          description="Menos obra húmeda, más control y precisión para tus proyectos residenciales o comerciales."
          align="center"
        />
        <div className="card-surface grid gap-4 p-6 sm:p-8">
          {benefitsContent.items.map((item) => (
            <div key={item} className="flex items-start gap-3 text-gray-800">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10 py-12" id="faq">
        <SectionHeading title={faqContent.title} align="center" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqContent.items.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-8" id="contacto">
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
