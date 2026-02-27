import type { ClinicArea } from "@/lib/constants/clinicAreas";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

interface AreaHeroProps {
  area: ClinicArea;
}

export default function AreaHero({ area }: AreaHeroProps) {
  return (
    <section
      className="bg-gradient-to-b from-primary-pale/40 to-white py-12 sm:py-16 px-4 sm:px-6"
      aria-labelledby="area-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 id="area-title" className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {area.name}
        </h1>
        <p className="text-lg text-primary/90 mb-6">{area.description}</p>
        <WhatsAppButton
          phoneNumber={DEFAULT_WHATSAPP_NUMBER}
          message={area.whatsAppMessage}
          label={`Falar no WhatsApp sobre ${area.shortName}`}
        />
      </div>
    </section>
  );
}
