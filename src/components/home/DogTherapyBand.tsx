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

export default function DogTherapyBand() {
  return (
    <section
      className="relative overflow-hidden safe-x pt-16 sm:pt-24 pb-0 lg:pb-0"
      aria-labelledby="differentials-title"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-pastel-mint/50 via-pastel-aqua/40 to-primary-pale/80"
        aria-hidden
      />
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 px-4 sm:px-6 pt-4 sm:pt-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="min-w-0 order-1 text-center lg:text-left pb-6 sm:pb-8 lg:pb-16 relative z-20">
            <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
              {PROTECTED_CARE_COPY.eyebrow}
            </p>
            <h2
              id="differentials-title"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-primary tracking-tight mb-4 text-balance"
            >
              {PROTECTED_CARE_COPY.title}
            </h2>
            <p className="text-primary/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              {PROTECTED_CARE_COPY.description}
            </p>

            <div className="flex w-full flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/areas/animal-assisted-therapy"
                className="inline-flex items-center justify-center rounded-2xl font-semibold border border-primary/25 text-primary bg-white/85 px-5 py-3 hover:bg-white transition-all duration-200 w-full sm:w-auto"
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

          {/* Reserva espaço no desktop para o Anakin absoluto */}
          <div className="hidden lg:block order-2 min-h-[32rem]" aria-hidden />
        </div>
      </div>

      {/*
        Anakin ancorado à direita da viewport em todos os breakpoints.
        Mobile: base da seção / Desktop: altura total da seção.
      */}
      <div className="pointer-events-none absolute z-10 right-0 bottom-0 w-[min(92vw,26rem)] h-[18.5rem] sm:w-[min(70vw,30rem)] sm:h-[22rem] lg:inset-y-0 lg:w-[min(48vw,34rem)] lg:h-auto">
        <Image
          src={ANAKIN_THERAPY_DOG_IMAGE}
          alt={ANAKIN_THERAPY_DOG_ALT}
          fill
          className="object-contain object-right-bottom scale-[1.08] origin-bottom-right sm:scale-100"
          sizes="(max-width: 1024px) 92vw, 48vw"
          priority={false}
        />
      </div>

      {/* Altura inferior no mobile para a imagem “encostar” sem flutuar */}
      <div className="h-44 sm:h-52 lg:hidden" aria-hidden />
    </section>
  );
}
