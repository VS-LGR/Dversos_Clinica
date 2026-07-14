import SectionTitle from "@/components/shared/SectionTitle";
import PageShell from "@/components/shared/PageShell";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import AreaLinkCard from "@/components/areas/AreaLinkCard";
import { AREAS_PAGE_COPY } from "@/lib/constants/homeAreasContent";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

export const metadata = buildPageMetadata({
  title: "Especialidades",
  description: AREAS_PAGE_COPY.description,
  path: "/areas",
});

export default function AreasOverviewPage() {
  return (
    <PageShell className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle as="h1" className="mb-4">Especialidades</SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          {AREAS_PAGE_COPY.description}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {CLINIC_AREAS.map((area, cardIndex) => (
            <li key={area.slug}>
              <RevealOnScroll
                delayMs={Math.min(300, (cardIndex % 6) * 60)}
                index={cardIndex}
              >
                <AreaLinkCard
                  slug={area.slug}
                  name={area.name}
                  description={area.description}
                  cardIndex={cardIndex}
                  ctaLabel="Ver detalhes →"
                />
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
