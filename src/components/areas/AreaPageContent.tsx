import Image from "next/image";
import { notFound } from "next/navigation";
import AreaHero from "@/components/areas/AreaHero";
import ProfessionalsList from "@/components/areas/ProfessionalsList";
import LocationGallery from "@/components/areas/LocationGallery";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import {
  getAreaBySlug,
  DEFAULT_WHATSAPP_NUMBER,
} from "@/lib/constants/clinicAreas";
import { PROFESSIONALS_BY_AREA } from "@/lib/constants/professionals";

const DOG_PAW_SRC = "https://i.imgur.com/dqEtbXK.png";

interface AreaPageContentProps {
  slug: string;
}

export default function AreaPageContent({ slug }: AreaPageContentProps) {
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const professionals = PROFESSIONALS_BY_AREA[slug] ?? [];
  const isDogTherapy = slug === "dog-therapy";

  return (
    <div className="min-h-screen">
      <AreaHero area={area} />
      {isDogTherapy && (
        <div className="flex justify-center gap-2 py-6 bg-primary-pale/30" aria-hidden>
          <Image src={DOG_PAW_SRC} alt="" width={28} height={28} />
          <Image src={DOG_PAW_SRC} alt="" width={28} height={28} />
          <Image src={DOG_PAW_SRC} alt="" width={28} height={28} />
        </div>
      )}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-primary mb-4">Como funciona o atendimento</h2>
        <p className="text-primary/90 leading-relaxed">{area.howItWorks}</p>
      </section>
      <ProfessionalsList
        professionals={professionals}
        title="Profissionais desta área"
      />
      <LocationGallery images={[]} title="Nosso espaço de atendimento" />
      <section className="py-12 px-4 sm:px-6 bg-primary-pale/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-4">
            Quer agendar ou tirar dúvidas sobre {area.shortName}?
          </p>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message={area.whatsAppMessage}
            label={`Falar no WhatsApp sobre ${area.shortName}`}
          />
        </div>
      </section>
    </div>
  );
}
