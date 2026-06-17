"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import SoftTextLink from "@/components/shared/SoftTextLink";
import AreaLinkCard from "@/components/areas/AreaLinkCard";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import { AREAS_FILTER_COPY, AREAS_INTRO_COPY } from "@/lib/constants/homeAreasContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const BRANCHES = [
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

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
        active
          ? "bg-pastel-mint/60 text-primary border-primary/25 shadow-sm"
          : "bg-white/70 text-primary/80 border-primary/15 hover:border-primary/30 hover:bg-pastel-aqua/30"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

export default function AreasGrid() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));
  const [selectedBranch, setSelectedBranch] = useState("all");

  const visibleBranches = useMemo(() => {
    if (selectedBranch === "all") return BRANCHES;
    return BRANCHES.filter((branch) => branch.title === selectedBranch);
  }, [selectedBranch]);

  return (
    <section
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-pastel-aqua/20 border-t border-primary/[0.06] overflow-hidden safe-x"
      aria-labelledby="areas-title"
    >
      <div
        className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-pastel-peach/25 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto min-w-0 relative z-10">
        <SectionTitle
          id="areas-title"
          className="mb-3"
          subtitle={AREAS_INTRO_COPY.subtitle}
        >
          Nossas áreas de atuação
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
          {AREAS_INTRO_COPY.description}
        </p>

        <div className="max-w-3xl mx-auto mb-8 md:hidden">
          <label htmlFor="areas-branch-select" className="block text-sm font-medium text-primary/80 mb-2">
            {AREAS_FILTER_COPY.mobileLabel}
          </label>
          <select
            id="areas-branch-select"
            value={selectedBranch}
            onChange={(event) => setSelectedBranch(event.target.value)}
            className="w-full rounded-2xl border border-primary/15 bg-white/80 px-4 py-3 text-primary text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">{AREAS_FILTER_COPY.allOption}</option>
            {BRANCHES.map((branch) => (
              <option key={branch.title} value={branch.title}>
                {branch.title}
              </option>
            ))}
          </select>
        </div>

        <div
          className="hidden md:flex md:flex-wrap md:justify-center gap-2 mb-12"
          role="tablist"
          aria-label={AREAS_FILTER_COPY.tabAriaLabel}
        >
          <FilterPill active={selectedBranch === "all"} onClick={() => setSelectedBranch("all")}>
            {AREAS_FILTER_COPY.allOption}
          </FilterPill>
          {BRANCHES.map((branch) => (
            <FilterPill
              key={branch.title}
              active={selectedBranch === branch.title}
              onClick={() => setSelectedBranch(branch.title)}
            >
              {branch.title}
            </FilterPill>
          ))}
        </div>

        <div className="space-y-12 sm:space-y-14">
          {(() => {
            let revealIndex = 0;
            return visibleBranches.map((branch) => (
              <section key={branch.title} aria-label={branch.title} className="min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight break-words">
                    {branch.title}
                  </h3>
                  <SoftTextLink href="/areas" className="text-sm shrink-0">
                    Ver todas as áreas
                  </SoftTextLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {branch.slugs.map((slug, slugIndex) => {
                    const area = areaBySlug.get(slug);
                    if (!area) return null;
                    const cardIndex = revealIndex++;
                    const featured = slugIndex === 0 && branch.slugs.length > 2;
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
                          featured={featured}
                        />
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </section>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
