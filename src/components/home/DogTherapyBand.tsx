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
        className="absolute inset-0 bg-gradient-to-br from-pastel-mint/55 via-pastel-aqua/45 to-primary-pale"
        aria-hidden
      />
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4 sm:pt-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 xl:gap-8 items-center">
          {/* Texto à esquerda */}
          <div className="min-w-0 order-1 text-center lg:text-left pb-2 lg:pb-6 lg:pr-4">
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

          {/* Anakin à direita — fade nas bordas para integrar ao fundo */}
          <div className="relative min-w-0 order-2 flex justify-center lg:justify-end lg:-mr-4 xl:-mr-8">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none lg:scale-[1.06] lg:origin-bottom-right">
              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, #000 12%, #000 100%), linear-gradient(0deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, #000 12%, #000 100%), linear-gradient(0deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                <Image
                  src={ANAKIN_THERAPY_DOG_IMAGE}
                  alt={ANAKIN_THERAPY_DOG_ALT}
                  width={720}
                  height={900}
                  className="w-full h-auto object-contain object-bottom"
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  priority={false}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[32%] bg-gradient-to-r from-[#dceaf4] via-[#dceaf4]/55 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[22%] bg-gradient-to-t from-primary-pale via-[#e8f2f8]/80 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[12%] bg-gradient-to-b from-pastel-mint/80 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
