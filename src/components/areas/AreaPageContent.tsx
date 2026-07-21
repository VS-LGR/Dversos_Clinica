import { notFound } from "next/navigation";
import AreaHero from "@/components/areas/AreaHero";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SoftTextLink from "@/components/shared/SoftTextLink";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import PageShell from "@/components/shared/PageShell";
import {
  getAreaBySlug,
  DEFAULT_WHATSAPP_NUMBER,
} from "@/lib/constants/clinicAreas";
import { AREA_CARD_IMAGE, AREA_EDITORIAL_IMAGE } from "@/lib/constants/clinicMedia";

interface AreaPageContentProps {
  slug: string;
}

export default function AreaPageContent({ slug }: AreaPageContentProps) {
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const cardMedia = AREA_CARD_IMAGE[slug];
  const editorialImage = cardMedia?.src ?? AREA_EDITORIAL_IMAGE[slug];
  const editorialAlt =
    cardMedia?.alt ?? `Ilustração — ${area.shortName} na Clínica DVERSO`;
  const editorialFit = editorialImage?.includes("Therapy_ABA") ? "contain" as const : "cover" as const;

  return (
    <PageShell>
      <AreaHero area={area} />
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto min-w-0">
        <div className={`grid gap-10 items-start ${editorialImage ? "lg:grid-cols-2" : ""}`}>
          <div className="space-y-6 min-w-0">
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">Sobre o atendimento</h2>
              <p className="text-primary/90 leading-relaxed">{area.howItWorks}</p>
            </div>
            {area.detailParagraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-primary/85 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {editorialImage && (
            <div className="max-w-md mx-auto lg:mx-0 w-full">
              <CozyImageFrame
                src={editorialImage}
                alt={editorialAlt}
                variant={editorialFit === "contain" ? "landscape" : "organic"}
                index={1}
                fit={editorialFit}
              />
            </div>
          )}
        </div>
      </section>
      <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <p className="text-primary/80 text-sm mb-3">
          Conheça os ambientes terapêuticos da clínica.
        </p>
        <SoftTextLink href="/espacos">Ver nossos espaços</SoftTextLink>
      </section>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-pastel-aqua/25 to-primary-pale/40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary/85 mb-4">
            Dúvidas sobre {area.shortName}? Estamos à disposição quando você quiser conversar.
          </p>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message={area.whatsAppMessage}
            label="Falar no WhatsApp"
            variant="soft"
            className="w-full sm:w-auto px-4 py-2.5 text-sm rounded-2xl"
          />
        </div>
      </section>
    </PageShell>
  );
}
