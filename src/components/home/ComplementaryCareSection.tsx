"use client";

import { COMPLEMENTARY_CARE_COPY } from "@/lib/constants/homeAreasContent";
import { PASTEL_CARD_BG, pastelByIndex } from "@/lib/constants/pastelPalette";

export default function ComplementaryCareSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06] relative overflow-hidden" aria-labelledby="complementary-title">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-4 sm:inset-x-8 top-8 bottom-8 rounded-3xl detail-surface-light opacity-100" />
      </div>
      <div className="max-w-6xl mx-auto relative z-[1]">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2 text-center">{COMPLEMENTARY_CARE_COPY.eyebrow}</p>
        <h2 id="complementary-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-center">
          {COMPLEMENTARY_CARE_COPY.title}
        </h2>
        <p className="text-primary/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          {COMPLEMENTARY_CARE_COPY.description}
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {COMPLEMENTARY_CARE_COPY.cards.map((card, index) => (
            <article key={card.title} className={`rounded-xl border border-primary/[0.08] ${pastelByIndex(PASTEL_CARD_BG, index)} p-6 shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className="font-semibold text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-primary/80">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
