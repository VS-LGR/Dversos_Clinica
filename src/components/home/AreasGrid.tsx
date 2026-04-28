"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

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
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafbfc]" aria-labelledby="areas-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          id="areas-title"
          className="mb-3"
          subtitle="Cuidado especializado para você e sua família, em um único espaço."
        >
          Nossas áreas de atuação
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-14 max-w-2xl mx-auto">
          Conheça cada especialidade e escolha o atendimento mais adequado ao momento de vida.
        </p>
        <div className="max-w-3xl mx-auto mb-8">
          <label htmlFor="areas-branch-select" className="block text-sm font-medium text-primary/80 mb-2">
            Filtrar por galho de atendimento
          </label>
          <select
            id="areas-branch-select"
            value={selectedBranch}
            onChange={(event) => setSelectedBranch(event.target.value)}
            className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-primary text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">Todos os galhos</option>
            {BRANCHES.map((branch) => (
              <option key={branch.title} value={branch.title}>
                {branch.title}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-4">
          {visibleBranches.map((branch, index) => (
            <details
              key={branch.title}
              className="group rounded-2xl border border-primary/[0.1] bg-white shadow-sm open:shadow-md transition-shadow"
              open={index === 0}
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
                    return (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="group block p-5 rounded-xl border border-primary/[0.08] bg-[#fdfbf9] hover:border-primary/25 hover:shadow-sm transition-all duration-300 text-left"
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
                    );
                  })}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
