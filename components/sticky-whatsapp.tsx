import { WhatsappButton } from './whatsapp-button';

export function StickyWhatsapp() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <WhatsappButton label="Cotizar por WhatsApp" className="rounded-full px-5 py-3 text-sm shadow-lg md:text-base" />
    </div>
  );
}
