# Escaleras Premoldeadas - Landing en Next.js 14

Landing page de una sola página para Escaleras Premoldeadas, construida con Next.js 14 (App Router) y Tailwind CSS. Todo el contenido está en español y listo para desplegar sin backend.

## Requisitos
- Node.js 18+
- npm

## Instalación local
1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias con `npm install`.
3. Ejecuta `npm run dev` para levantar el entorno de desarrollo.

> Si tu red restringe el acceso al registro de npm, configura el proxy o utiliza un mirror antes de instalar dependencias.

## Scripts
- `npm run dev`: iniciar el entorno de desarrollo.
- `npm run build`: compilar para producción.
- `npm run start`: servir la compilación de producción.
- `npm run lint`: ejecutar las reglas de ESLint.

> Nota: si el entorno restringe el acceso al registro de npm, configura el proxy o el mirror requerido antes de instalar dependencias.

## Estructura de carpetas
```
app/
  layout.tsx        # Layout raíz y metadatos
  page.tsx          # Página principal con secciones
  globals.css       # Tailwind + estilos globales
components/
  section-heading.tsx
  whatsapp-button.tsx
  sticky-whatsapp.tsx
  model-card.tsx
  step-card.tsx
  faq-item.tsx
content/
  siteContent.ts    # Copia de contenido en español
public/
  (activos estáticos opcionales)
```

## Contenido
Todo el texto y etiquetas se administran desde `content/siteContent.ts` para facilitar traducción y ajustes rápidos.

## Diseño y UX
- Mobile-first, layout de una página.
- CTA de WhatsApp destacado (fijo en móvil).
- Secciones: héroe, modelos, proceso, beneficios, FAQ y contacto.
- Estilo minimalista y profesional inspirado en sitios de manufactura/industrial.
