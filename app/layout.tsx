import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Escaleras Premoldeadas | Calidad y rapidez en concreto reforzado',
  description:
    'Escaleras premoldeadas de concreto reforzado en varios modelos. Asesoría personalizada, fabricación precisa y entrega rápida en toda la región.',
  openGraph: {
    title: 'Escaleras Premoldeadas',
    description:
      'Modelos estándar, empotrada, plegada y viga central. Instalaciones rápidas, acabados perfectos y durabilidad garantizada.',
    url: 'https://escaleraspremoldeadas.com',
    siteName: 'Escaleras Premoldeadas',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
