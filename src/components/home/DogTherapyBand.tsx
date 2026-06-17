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
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#fff8f2" variant="soft" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10 min-w-0 pt-6">
        <div className="w-full lg:w-[340px] shrink-0">
          <CozyImageFrame
            src={TAA_GALLERY[0]}
            alt="Terapia assistida por animais na Clínica DVERSO"
            variant="landscape"
            index={3}
          />
        </div>
        <div className="flex-1 min-w-0 text-center lg:text-left">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
            {PROTECTED_CARE_COPY.eyebrow}
          </p>
          <h2 id="differentials-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4">
            {PROTECTED_CARE_COPY.title}
          </h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-2xl">
            {PROTECTED_CARE_COPY.description}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-7 text-sm text-primary/90 max-w-3xl">
            {PROTECTED_CARE_COPY.bullets.map((item, index) => (
              <li
                key={item}
                className={`rounded-2xl border border-primary/10 bg-white/70 px-4 py-3 ${index % 2 === 0 ? "" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-[2rem] border border-primary/10 bg-white/75 backdrop-blur-sm p-6 text-left mb-7 max-w-xl mx-auto lg:mx-0">
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-2">{PROTECTED_CARE_COPY.highlightEyebrow}</p>
            <h3 className="text-xl font-semibold text-primary mb-3">{PROTECTED_CARE_COPY.highlightTitle}</h3>
            <p className="text-primary/85 text-sm leading-relaxed">
              {PROTECTED_CARE_COPY.highlightDescription}
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/areas/animal-assisted-therapy"
              className="inline-flex items-center justify-center rounded-2xl font-semibold border border-primary/25 text-primary bg-white/80 px-5 py-3 hover:bg-white transition-all duration-200 w-full sm:w-auto"
            >
              Conhecer TAA
            </Link>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de saber mais sobre os diferenciais de acolhimento e segurança da Clínica DVERSO."
              label="Falar no WhatsApp"
              variant="soft"
              className="w-full sm:w-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
