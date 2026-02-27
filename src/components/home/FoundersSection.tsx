"use client";

import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import GothicFrame from "@/components/shared/GothicFrame";
import { FOUNDERS } from "@/lib/constants/founders";

export default function FoundersSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-surface" aria-labelledby="founders-title">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="founders-title" className="mb-10">
          Quem somos
        </SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          Conheça as fundadoras da Clínica Dverso e um pouco da trajetória de cada uma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder) => (
            <GothicFrame key={founder.id} className="bg-white">
              <div className="flex flex-col sm:flex-row gap-4">
                {founder.imageUrl ? (
                  <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-primary-pale">
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
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl"
                    aria-hidden
                  >
                    {founder.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-primary">{founder.name}</h3>
                  <p className="text-sm text-primary/80 mb-2">{founder.role}</p>
                  <p className="text-primary/90 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            </GothicFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
