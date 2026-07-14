"use client";

import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { TAA_GALLERY } from "@/lib/constants/clinicMedia";
import { PROTECTED_CARE_COPY } from "@/lib/constants/homeAreasContent";
import WaveDivider from "@/components/shared/WaveDivider";

export default function DogTherapyBand() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden safe-x"
      aria-labelledby="differentials-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-mint/50 via-pastel-aqua/40 to-pastel-peach/45" aria-hidden />
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />

      <div className="max-w-4xl mx-auto relative z-10 min-w-0 pt-6 text-center">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
          {PROTECTED_CARE_COPY.eyebrow}
        </p>
        <h2 id="differentials-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4">
          {PROTECTED_CARE_COPY.title}
        </h2>
        <p className="text-primary/85 leading-relaxed mb-8 max-w-2xl mx-auto">
          {PROTECTED_CARE_COPY.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-8">
          <CozyImageFrame
            src={TAA_GALLERY[0]}
            alt="Terapia assistida por animais na Clínica DVERSO"
            variant="landscape"
            index={3}
            fit="contain"
          />
          <CozyImageFrame
            src={TAA_GALLERY[1] ?? TAA_GALLERY[0]}
            alt="Cão de terapia em sessão na Clínica DVERSO"
            variant="landscape"
            index={4}
            fit="contain"
          />
        </div>

        <div className="flex w-full flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <Link
            href="/areas/animal-assisted-therapy"
            className="inline-flex items-center justify-center rounded-2xl font-semibold border border-primary/25 text-primary bg-white/80 px-5 py-3 hover:bg-white transition-all duration-200 w-full sm:w-auto"
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
    </section>
  );
}
