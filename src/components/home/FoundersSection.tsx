"use client";

import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import LeadersGroupSection from "@/components/shared/LeadersGroupSection";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function FoundersSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06] overflow-hidden safe-x"
      aria-labelledby="founders-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle
          id="founders-title"
          className="mb-3"
          subtitle="Um histórico de transformação nos cuidados."
        >
          Lideranças DVERSO
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-14 max-w-2xl mx-auto">
          Gestão, direção clínica e compromisso com cuidado de excelência para neuroatípicos.
        </p>
        <RevealOnScroll index={0}>
          <LeadersGroupSection />
        </RevealOnScroll>
        <p className="text-center mt-10">
          <Link
            href="/liderancas"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Ver todas as lideranças →
          </Link>
        </p>
      </div>
    </section>
  );
}
