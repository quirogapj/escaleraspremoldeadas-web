import { WhatsappButton } from './whatsapp-button';

export function StickyWhatsapp() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden">
        <WhatsappButton label="Cotizar por WhatsApp" className="w-[90%]" />
      </div>
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <WhatsappButton label="WhatsApp" className="px-4 py-2 text-sm shadow-lg" />
      </div>
    </>
  );
}
