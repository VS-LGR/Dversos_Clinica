"use client";

import Image from "next/image";
import Link from "next/link";

const CHILD_CLOUD_WHITE = "https://i.imgur.com/hC4SDkI.png";
// Substitua pela URL da ilustração em versão preta quando tiver o asset.
const CHILD_CLOUD_BLACK = "https://i.imgur.com/hC4SDkI.png";

export default function NeurodiversityHighlight() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden border-t border-primary/[0.06]"
      aria-labelledby="neuro-highlight-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
            Saúde e bem-estar familiar
          </p>
          <h2 id="neuro-highlight-title" className="text-2xl sm:text-3xl font-bold text-primary mb-4 tracking-tight">
            Atenção à neurodivergência
          </h2>
          <p className="text-primary/85 leading-relaxed mb-7 max-w-xl">
            Acompanhamento especializado para crianças e famílias neurodivergentes,
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
        <div
          className="flex-shrink-0 order-1 md:order-2 flex justify-center w-[220px] sm:w-[280px] md:w-[300px] cursor-default"
          aria-hidden
        >
          <div className="relative w-full aspect-square max-w-[300px] group">
            <Image
              src={CHILD_CLOUD_BLACK}
              alt=""
              width={320}
              height={320}
              className="absolute inset-0 w-full h-full object-contain object-center opacity-0 drop-shadow-xl transition-opacity duration-500 ease-out group-hover:opacity-100"
            />
            <Image
              src={CHILD_CLOUD_WHITE}
              alt=""
              width={320}
              height={320}
              className="absolute inset-0 w-full h-full object-contain object-center opacity-95 drop-shadow-xl transition-opacity duration-500 ease-out group-hover:opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
