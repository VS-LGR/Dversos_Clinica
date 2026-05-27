"use client";

import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { TEAM_LEADERS } from "@/lib/constants/teamLeaders";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export default function FoundersSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06]" aria-labelledby="founders-title">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_LEADERS.map((founder, index) => (
            <RevealOnScroll
              key={founder.id}
              delayMs={Math.min(300, (index % 6) * 60)}
              index={index}
            >
              <article
                className={`flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
              >
                {founder.imageUrl ? (
                  <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-pastel-coral to-pastel-peach ring-2 ring-primary/5">
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
                    className="flex-shrink-0 w-20 h-20 rounded-full bg-pastel-peach flex items-center justify-center text-primary font-bold text-xl ring-2 ring-primary/5"
                    aria-hidden
                  >
                    {founder.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg text-primary tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary/65 font-medium mb-2">
                    {founder.role}
                  </p>
                  <p className="text-primary/85 text-sm leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
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
