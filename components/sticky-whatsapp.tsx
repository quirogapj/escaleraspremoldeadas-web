import { WhatsappButton } from './whatsapp-button';

export function StickyWhatsapp() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden">
      <WhatsappButton label="Cotizar por WhatsApp" className="w-[90%]" />
    </div>
  );
}
