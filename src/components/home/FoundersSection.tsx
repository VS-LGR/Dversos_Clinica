"use client";

import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { FOUNDERS } from "@/lib/constants/founders";

export default function FoundersSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fdfbf9] border-t border-primary/[0.06]" aria-labelledby="founders-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          id="founders-title"
          className="mb-3"
          subtitle="Conheça as fundadoras e a trajetória de cada uma."
        >
          Quem somos
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-14 max-w-2xl mx-auto">
          Profissionais dedicadas à saúde integrada e ao acolhimento familiar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.id}
              className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-xl bg-white border border-primary/[0.08] shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300"
            >
              {founder.imageUrl ? (
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-primary-pale ring-2 ring-primary/5">
                  <Image
                    src={founder.imageUrl}
                    alt=""
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-warm/30 flex items-center justify-center text-primary font-bold text-xl ring-2 ring-primary/5"
                  aria-hidden
                >
                  {founder.name.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold text-lg text-primary tracking-tight">{founder.name}</h3>
                <p className="text-sm text-primary/65 font-medium mb-2">{founder.role}</p>
                <p className="text-primary/85 text-sm leading-relaxed">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
