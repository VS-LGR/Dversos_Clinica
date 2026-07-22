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
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden safe-x"
      aria-labelledby="differentials-title"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-pastel-mint/50 via-pastel-aqua/40 to-primary-pale/80"
        aria-hidden
      />
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4 sm:pt-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end lg:items-center">
          <div className="relative min-w-0 flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              <Image
                src={ANAKIN_THERAPY_DOG_IMAGE}
                alt={ANAKIN_THERAPY_DOG_ALT}
                width={720}
                height={900}
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_18px_40px_rgba(26,43,86,0.22)]"
                sizes="(max-width: 1024px) 90vw, 48vw"
                priority={false}
              />
            </div>
          </div>

          <div className="min-w-0 order-2 text-center lg:text-left pb-2 lg:pb-8">
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
        </div>
      </div>
    </section>
  );
}
