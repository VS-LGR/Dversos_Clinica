"use client";

import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import WaveDivider from "@/components/shared/WaveDivider";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import {
  ANAKIN_THERAPY_DOG_ALT,
  ANAKIN_THERAPY_DOG_IMAGE,
} from "@/lib/constants/clinicMedia";
import { PROTECTED_CARE_COPY } from "@/lib/constants/homeAreasContent";

/** Cor média do fundo da foto do Anakin — seção sólida para não haver diferença de tom. */
const TAA_SECTION_BG = "#D6D8D8";

export default function DogTherapyBand() {
  return (
    <section
      className="relative overflow-hidden safe-x"
      style={{ backgroundColor: TAA_SECTION_BG }}
      aria-labelledby="differentials-title"
    >
      <WaveDivider
        overlay
        position="top"
        className="absolute top-0 inset-x-0 z-20"
        fill={TAA_SECTION_BG}
        variant="soft"
      />

      <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem]">
        {/* Texto — coluna esquerda com padding interno */}
        <div className="min-w-0 order-1 px-4 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-8 py-14 sm:py-20 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-0 lg:max-w-lg">
            <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
              {PROTECTED_CARE_COPY.eyebrow}
            </p>
            <h2
              id="differentials-title"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-primary tracking-tight mb-4 text-balance"
            >
              {PROTECTED_CARE_COPY.title}
            </h2>
            <p className="text-primary/85 leading-relaxed mb-8 text-sm sm:text-base">
              {PROTECTED_CARE_COPY.description}
            </p>

            <div className="flex w-full flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/areas/animal-assisted-therapy"
                className="inline-flex items-center justify-center rounded-2xl font-semibold border border-primary/25 text-primary bg-white/90 px-5 py-3 hover:bg-white transition-all duration-200 w-full sm:w-auto"
              >
                Conhecer TAA
              </Link>
              <WhatsAppButton
                phoneNumber={DEFAULT_WHATSAPP_NUMBER}
                message="Olá! Gostaria de saber mais sobre a Terapia Assistida por Animais da Clínica DVERSO."
                label="Falar no WhatsApp"
                variant="soft"
                className="w-full sm:w-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Anakin colado na extremidade direita da viewport — sem overlays de cor */}
        <div className="relative order-2 min-h-[22rem] sm:min-h-[26rem] lg:min-h-full lg:h-full">
          <div className="relative mx-auto w-full max-w-md sm:max-w-lg h-full min-h-[22rem] sm:min-h-[26rem] lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:max-w-none lg:mx-0">
            <Image
              src={ANAKIN_THERAPY_DOG_IMAGE}
              alt={ANAKIN_THERAPY_DOG_ALT}
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 1024px) 90vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
