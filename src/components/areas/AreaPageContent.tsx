import Link from "next/link";
import { notFound } from "next/navigation";
import AreaHero from "@/components/areas/AreaHero";
import ProfessionalsList from "@/components/areas/ProfessionalsList";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import {
  getAreaBySlug,
  DEFAULT_WHATSAPP_NUMBER,
} from "@/lib/constants/clinicAreas";
import { PROFESSIONALS_BY_AREA } from "@/lib/constants/professionals";

interface AreaPageContentProps {
  slug: string;
}

export default function AreaPageContent({ slug }: AreaPageContentProps) {
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const professionals = PROFESSIONALS_BY_AREA[slug] ?? [];

  return (
    <div className="min-h-screen overflow-x-clip">
      <AreaHero area={area} />
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-6 min-w-0">
        <div>
          <h2 className="text-xl font-bold text-primary mb-4">Sobre o atendimento</h2>
          <p className="text-primary/90 leading-relaxed">{area.howItWorks}</p>
        </div>
        {area.detailParagraphs?.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-primary/85 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>
      <ProfessionalsList
        professionals={professionals}
        title="Profissionais desta área"
      />
      <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="text-primary/80 text-sm mb-3">
          Conheça os ambientes terapêuticos da clínica.
        </p>
        <Link
          href="/espacos"
          className="text-sm font-medium text-primary hover:underline underline-offset-2"
        >
          Ver nossos espaços →
        </Link>
      </section>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-[#fdfbf9] to-primary-pale/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium mb-4">
            Quer agendar ou tirar dúvidas sobre {area.shortName}?
          </p>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message={area.whatsAppMessage}
            label="Falar no WhatsApp"
            className="w-full sm:w-auto px-4 py-2.5 text-sm"
          />
        </div>
      </section>
    </div>
  );
}
