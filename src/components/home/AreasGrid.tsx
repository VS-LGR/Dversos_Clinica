"use client";

import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

export default function AreasGrid() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="areas-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="areas-title" className="mb-10">
          Nossas áreas de atuação
        </SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          Conheça cada especialidade e escolha o atendimento mais adequado para você ou sua família.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_AREAS.map((area, index) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group block p-6 rounded-xl border-2 border-primary-pale bg-white hover:border-primary hover:shadow-lg transition-all duration-200 text-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors mb-2">
                {area.name}
              </h3>
              <p className="text-sm text-primary/80 line-clamp-2">{area.description}</p>
              <span className="inline-block mt-3 text-primary font-medium text-sm group-hover:underline">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
