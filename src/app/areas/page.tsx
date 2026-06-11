import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { AREAS_PAGE_COPY } from "@/lib/constants/homeAreasContent";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Áreas de atuação",
  description: AREAS_PAGE_COPY.description,
  path: "/areas",
});
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import PastelPageDecor from "@/components/shared/PastelPageDecor";
import { PASTEL_CARD_GRADIENTS, pastelByIndex } from "@/lib/constants/pastelPalette";

const GROUPS = [
  {
    title: "Psicologia e Desenvolvimento",
    slugs: [
      "psychology",
      "neuropsychological-assessment",
      "psychopedagogy",
      "therapeutic-companion",
      "psychomotricity",
      "neurodiversity",
    ],
  },
  {
    title: "Terapias Integradas",
    slugs: [
      "speech-therapy",
      "occupational-therapy",
      "sensory-integration",
      "music-therapy",
      "art-therapy",
      "physiotherapy",
    ],
  },
  {
    title: "Nutrição e Alimentação",
    slugs: ["nutrition", "feeding-therapy"],
  },
  {
    title: "Intervenções Assistidas",
    slugs: ["animal-assisted-therapy", "dog-therapy"],
  },
];

export default function AreasOverviewPage() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));
  let revealIndex = 0;

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 overflow-x-clip safe-x">
      <PastelPageDecor />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle as="h1" className="mb-4">Nossas áreas de atuação</SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          {AREAS_PAGE_COPY.description}
        </p>
        <div className="space-y-10">
            {GROUPS.map((group) => (
              <section key={group.title} aria-label={group.title}>
                <h2 className="text-lg sm:text-xl font-semibold text-primary mb-4">
                  {group.title}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.slugs.map((slug) => {
                    const area = areaBySlug.get(slug);
                    if (!area) return null;
                    const cardIndex = revealIndex++;
                    return (
                      <li key={area.slug}>
                        <RevealOnScroll
                          delayMs={Math.min(300, (cardIndex % 6) * 60)}
                          index={cardIndex}
                        >
                          <Link
                            href={`/areas/${area.slug}`}
                            className={`block p-6 rounded-xl border-2 border-primary/10 bg-gradient-to-br ${pastelByIndex(PASTEL_CARD_GRADIENTS, cardIndex)} hover:border-primary hover:shadow-lg transition-all`}
                          >
                            <h3 className="text-lg font-semibold text-primary mb-2">
                              {area.name}
                            </h3>
                            <p className="text-sm text-primary/80 line-clamp-2">
                              {area.description}
                            </p>
                            <span className="inline-block mt-3 text-primary font-medium text-sm">
                              Ver detalhes →
                            </span>
                          </Link>
                        </RevealOnScroll>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
      </div>
    </div>
  );
}
