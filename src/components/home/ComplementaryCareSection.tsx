"use client";

import { COMPLEMENTARY_CARE_COPY } from "@/lib/constants/homeAreasContent";

export default function ComplementaryCareSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-primary-pale/20 border-t border-primary/[0.06] relative overflow-hidden safe-x"
      aria-labelledby="complementary-title"
    >
      <div
        className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-pastel-mint/25 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 left-0 w-64 h-64 rounded-full bg-pastel-aqua/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto relative z-[1] min-w-0">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2 text-center">
          {COMPLEMENTARY_CARE_COPY.eyebrow}
        </p>
        <h2
          id="complementary-title"
          className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-center text-balance"
        >
          {COMPLEMENTARY_CARE_COPY.title}
        </h2>
        <p className="text-primary/80 leading-relaxed text-center max-w-3xl mx-auto mb-12 text-base sm:text-lg">
          {COMPLEMENTARY_CARE_COPY.description}
        </p>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {COMPLEMENTARY_CARE_COPY.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-primary/[0.08] bg-white p-6 sm:p-7 min-w-0 hover:border-primary/15 transition-colors"
            >
              <h3 className="font-semibold text-primary mb-2.5 text-balance">{card.title}</h3>
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
