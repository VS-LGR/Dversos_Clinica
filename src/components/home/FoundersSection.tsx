"use client";

import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { FOUNDERS } from "@/lib/constants/founders";

export default function FoundersSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fdfbf9]" aria-labelledby="founders-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="founders-title" className="mb-10">
          Quem somos
        </SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          Conheça as fundadoras da Clínica Dverso e um pouco da trajetória de cada uma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.id}
              className="flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-primary/5 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300"
            >
              {founder.imageUrl ? (
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-primary-pale ring-2 ring-primary/5">
                  <Image
                    src={founder.imageUrl}
                    alt=""
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex-shrink-0 w-24 h-24 rounded-full bg-accent-warm/30 flex items-center justify-center text-primary font-bold text-2xl ring-2 ring-primary/5"
                  aria-hidden
                >
                  {founder.name.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold text-lg text-primary">{founder.name}</h3>
                <p className="text-sm text-primary/70 mb-2">{founder.role}</p>
                <p className="text-primary/85 text-sm leading-relaxed">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
