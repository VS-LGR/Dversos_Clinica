import Link from "next/link";
import EditorialCollage from "@/components/shared/EditorialCollage";
import SoftTextLink from "@/components/shared/SoftTextLink";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { AreaSymbol } from "@/lib/constants/areaIcons";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import { HOME_SPECIALTIES_COLLAGE } from "@/lib/constants/clinicMedia";
import {
  AREAS_INTRO_COPY,
  PUBLIC_SPECIALTY_SLUGS,
  SPECIALTY_CHIP_LABELS,
  type PublicSpecialtySlug,
} from "@/lib/constants/homeAreasContent";

export default function AreasGrid() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));

  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-pastel-aqua/30 overflow-hidden safe-x"
      aria-labelledby="areas-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texto à esquerda / collage à direita — tamanho original restaurado */}
          <div className="min-w-0 order-1 text-center lg:text-left">
            <p className="text-primary/65 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5">
              {AREAS_INTRO_COPY.eyebrow}
            </p>
            <h2
              id="areas-title"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-primary tracking-tight leading-tight text-balance mb-6 sm:mb-8"
            >
              {AREAS_INTRO_COPY.title}
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 auto-rows-fr">
              {PUBLIC_SPECIALTY_SLUGS.map((slug, cardIndex) => {
                const area = areaBySlug.get(slug);
                if (!area) return null;
                const label = SPECIALTY_CHIP_LABELS[slug as PublicSpecialtySlug];
                return (
                  <RevealOnScroll
                    key={area.slug}
                    delayMs={Math.min(240, cardIndex * 50)}
                    index={cardIndex}
                    className="h-full"
                  >
                    <li className="h-full">
                      <Link
                        href={`/areas/${area.slug}`}
                        className="group flex h-full min-h-[3.75rem] items-center gap-3 rounded-2xl border border-primary/[0.06] bg-white/85 px-3.5 py-3 text-left shadow-[0_6px_20px_-10px_rgba(26,43,86,0.1)] hover:border-primary/15 hover:shadow-[0_12px_32px_-14px_rgba(26,43,86,0.14)] transition-all duration-300 min-w-0"
                      >
                        <span
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-pastel-mint/50 group-hover:scale-105 transition-transform"
                          aria-hidden
                        >
                          <AreaSymbol slug={area.slug} />
                        </span>
                        <span className="font-semibold text-primary text-sm leading-snug line-clamp-2 group-hover:text-primary-light transition-colors">
                          {label}
                        </span>
                      </Link>
                    </li>
                  </RevealOnScroll>
                );
              })}
            </ul>

            <SoftTextLink href="/areas" className="text-sm sm:text-base">
              {AREAS_INTRO_COPY.linkLabel}
            </SoftTextLink>
          </div>

          <div className="min-w-0 order-2">
            <EditorialCollage
              variant="classic"
              hero={HOME_SPECIALTIES_COLLAGE.hero}
              topLeft={HOME_SPECIALTIES_COLLAGE.topLeft}
              topRight={HOME_SPECIALTIES_COLLAGE.topRight}
              bottomCenter={HOME_SPECIALTIES_COLLAGE.bottomCenter}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
