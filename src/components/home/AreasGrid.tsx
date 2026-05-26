"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import { AREAS_FILTER_COPY, AREAS_INTRO_COPY } from "@/lib/constants/homeAreasContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const CARD_PASTELS = [
  "from-accent-mint/30 via-white to-accent-lavender/15",
  "from-accent-lavender/30 via-white to-accent-mint/15",
  "from-accent-warm/25 via-white to-accent-lavender/15",
  "from-accent-mint/20 via-white to-accent-warm/20",
] as const;

const BRANCHES = [
  {
    title: "Psicologia e Desenvolvimento",
    slugs: [
      "psychology",
      "neuropsychological-assessment",
      "therapeutic-companion",
      "psychomotricity",
    ],
  },
  {
    title: "Terapias Integradas",
    slugs: [
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
    slugs: ["animal-assisted-therapy"],
  },
];

export default function AreasGrid() {
  const areaBySlug = new Map(CLINIC_AREAS.map((area) => [area.slug, area]));
  const [selectedBranch, setSelectedBranch] = useState("all");

  const visibleBranches = useMemo(() => {
    if (selectedBranch === "all") return BRANCHES;
    return BRANCHES.filter((branch) => branch.title === selectedBranch);
  }, [selectedBranch]);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-accent-mint/30" aria-labelledby="areas-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          id="areas-title"
          className="mb-3"
          subtitle={AREAS_INTRO_COPY.subtitle}
        >
          Nossas áreas de atuação
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-14 max-w-2xl mx-auto">
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
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-primary text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">{AREAS_FILTER_COPY.allOption}</option>
            {BRANCHES.map((branch) => (
              <option key={branch.title} value={branch.title}>
                {branch.title}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:flex md:flex-wrap md:justify-center gap-2 mb-10" role="tablist" aria-label={AREAS_FILTER_COPY.tabAriaLabel}>
          <button
            type="button"
            onClick={() => setSelectedBranch("all")}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              selectedBranch === "all"
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-primary/80 border-primary/20 hover:border-primary/40 hover:bg-primary-pale/40"
            }`}
            aria-pressed={selectedBranch === "all"}
          >
            {AREAS_FILTER_COPY.allOption}
          </button>
          {BRANCHES.map((branch) => (
            <button
              key={branch.title}
              type="button"
              onClick={() => setSelectedBranch(branch.title)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedBranch === branch.title
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-primary/80 border-primary/20 hover:border-primary/40 hover:bg-primary-pale/40"
              }`}
              aria-pressed={selectedBranch === branch.title}
            >
              {branch.title}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {(() => {
            let revealIndex = 0;
            return visibleBranches.map((branch, index) => (
            <details
              key={branch.title}
              className="group rounded-2xl border border-primary/[0.1] bg-white shadow-sm open:shadow-md transition-shadow"
              open={selectedBranch !== "all" || index === 0}
            >
              <summary className="list-none cursor-pointer select-none px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-primary">{branch.title}</h3>
                <span className="text-primary/60 text-sm group-open:rotate-180 transition-transform">v</span>
              </summary>
              <div className="px-5 sm:px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                        <Link
                          href={`/areas/${area.slug}`}
                          className={`group block p-5 rounded-2xl border border-primary/[0.08] bg-gradient-to-br ${CARD_PASTELS[cardIndex % CARD_PASTELS.length]} hover:border-primary/25 hover:shadow-md transition-all duration-300 text-left`}
                        >
                          <h4 className="text-base font-semibold text-primary group-hover:text-primary-light transition-colors mb-2">
                            {area.name}
                          </h4>
                          <p className="text-sm text-primary/80 leading-relaxed line-clamp-2">
                            {area.description}
                          </p>
                          <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:underline underline-offset-2">
                            Saiba mais →
                          </span>
                        </Link>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            </details>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
