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
      <div className="max-w-4xl mx-auto text-center min-w-0 px-1">
        <h1 id="area-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 text-balance break-words">
          {area.name}
        </h1>
        <p className="text-base sm:text-lg text-primary/90 mb-6 leading-relaxed break-words">{area.description}</p>
        <WhatsAppButton
          phoneNumber={DEFAULT_WHATSAPP_NUMBER}
          message={area.whatsAppMessage}
          label="Falar no WhatsApp"
          className="w-full sm:w-auto px-4 py-2.5 text-sm"
        />
      </div>
    </section>
  );
}
