import EditorialCollage from "@/components/shared/EditorialCollage";
import SoftTextLink from "@/components/shared/SoftTextLink";
import AreaLinkCard from "@/components/areas/AreaLinkCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import { HOME_SPECIALTIES_COLLAGE } from "@/lib/constants/clinicMedia";
import { AREAS_BRANCHES, AREAS_INTRO_COPY } from "@/lib/constants/homeAreasContent";

export default function AreasGrid() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));
  let revealIndex = 0;

  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-pastel-aqua/30 overflow-hidden safe-x"
      aria-labelledby="areas-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
          <div className="min-w-0 order-2 lg:order-1">
            <EditorialCollage
              hero={HOME_SPECIALTIES_COLLAGE.hero}
              topLeft={HOME_SPECIALTIES_COLLAGE.topLeft}
              topRight={HOME_SPECIALTIES_COLLAGE.topRight}
              bottomCenter={HOME_SPECIALTIES_COLLAGE.bottomCenter}
            />
          </div>

          <div className="min-w-0 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-primary/65 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5">
              {AREAS_INTRO_COPY.eyebrow}
            </p>
            <h2
              id="areas-title"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-primary tracking-tight leading-tight text-balance mb-4 sm:mb-5"
            >
              {AREAS_INTRO_COPY.title}
            </h2>
            <p className="text-sm sm:text-base text-primary/85 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              {AREAS_INTRO_COPY.description}
            </p>
            <SoftTextLink href="/areas" className="text-sm sm:text-base">
              {AREAS_INTRO_COPY.linkLabel}
            </SoftTextLink>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-14">
          {AREAS_BRANCHES.map((branch) => (
            <section key={branch.title} aria-label={branch.title} className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight mb-5 sm:mb-6 text-center lg:text-left">
                {branch.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {branch.slugs.map((slug) => {
                  const area = areaBySlug.get(slug);
                  if (!area) return null;
                  const cardIndex = revealIndex++;
                  return (
                    <RevealOnScroll
                      key={area.slug}
                      delayMs={Math.min(300, (cardIndex % 6) * 60)}
                      index={cardIndex}
                    >
                      <AreaLinkCard
                        slug={area.slug}
                        name={area.name}
                        description={area.description}
                        cardIndex={cardIndex}
                        variant="cozy"
                      />
                    </RevealOnScroll>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
