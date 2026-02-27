"use client";

import Image from "next/image";
import Link from "next/link";

const CHILD_CLOUD_WHITE = "https://i.imgur.com/hC4SDkI.png";

export default function NeurodiversityHighlight() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f8f6ff] relative overflow-hidden"
      aria-labelledby="neuro-highlight-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h2 id="neuro-highlight-title" className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Atenção à neurodivergência
          </h2>
          <p className="text-primary/90 mb-6 max-w-xl">
            Oferecemos acompanhamento especializado para crianças e famílias neurodivergentes,
            com equipe preparada para TEA, TDAH e outras condições do neurodesenvolvimento,
            em ambiente acolhedor e previsível.
          </p>
          <Link
            href="/areas/neurodiversity"
            className="inline-flex items-center rounded-xl font-semibold bg-primary text-white px-5 py-3 hover:bg-primary-light transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Conhecer a área
          </Link>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2 flex justify-center" aria-hidden>
          <Image
            src={CHILD_CLOUD_WHITE}
            alt=""
            width={180}
            height={180}
            className="max-w-[160px] sm:max-w-[180px] opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
