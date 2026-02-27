"use client";

import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

export default function AreasGrid() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLINIC_AREAS.map((area, index) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group block p-6 sm:p-7 rounded-xl border border-primary/[0.08] bg-white hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-left"
            >
              <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors mb-2">
                {area.name}
              </h3>
              <p className="text-sm text-primary/80 leading-relaxed line-clamp-2">
                {area.description}
              </p>
              <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:underline underline-offset-2">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
