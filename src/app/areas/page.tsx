import SectionTitle from "@/components/shared/SectionTitle";
import PageShell from "@/components/shared/PageShell";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import AreaLinkCard from "@/components/areas/AreaLinkCard";
import { AREAS_BRANCHES, AREAS_PAGE_COPY } from "@/lib/constants/homeAreasContent";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

export const metadata = buildPageMetadata({
  title: "Especialidades",
  description: AREAS_PAGE_COPY.description,
  path: "/areas",
});

const GROUPS = AREAS_BRANCHES;

export default function AreasOverviewPage() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));
  let revealIndex = 0;

  return (
    <PageShell className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle as="h1" className="mb-4">Especialidades</SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          {AREAS_PAGE_COPY.description}
        </p>
        <div className="space-y-12">
          {GROUPS.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6 tracking-tight">
                {group.title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {group.slugs.map((slug, slugIndex) => {
                  const area = areaBySlug.get(slug);
                  if (!area) return null;
                  const cardIndex = revealIndex++;
                  const featured = slugIndex === 0 && group.slugs.length > 2;
                  return (
                    <li key={area.slug} className={featured ? "sm:col-span-2" : ""}>
                      <RevealOnScroll
                        delayMs={Math.min(300, (cardIndex % 6) * 60)}
                        index={cardIndex}
                      >
                        <AreaLinkCard
                          slug={area.slug}
                          name={area.name}
                          description={area.description}
                          cardIndex={cardIndex}
                          featured={featured}
                          ctaLabel="Ver detalhes →"
                        />
                      </RevealOnScroll>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
