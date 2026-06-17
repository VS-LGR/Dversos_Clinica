"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SoftTextLink from "@/components/shared/SoftTextLink";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import WaveDivider from "@/components/shared/WaveDivider";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden safe-x px-4 sm:px-6 py-6 pb-14 sm:py-0 sm:min-h-[85vh] sm:flex sm:items-center sm:pt-24 sm:pb-28 md:pb-32"
      aria-labelledby="hero-title"
    >
      <HeroVideoBackground />

      <div className="relative z-10 max-w-3xl mx-auto w-full min-w-0">
        <RevealOnScroll index={0}>
          <div className="flex flex-col items-center justify-center text-center min-w-0 max-w-full [text-shadow:0_1px_14px_rgba(255,255,255,0.9)]">
            <p className="text-primary text-[10px] min-[360px]:text-xs font-semibold uppercase tracking-wide sm:tracking-widest mb-2.5 sm:mb-3 leading-snug text-balance">
              {HOME_HERO.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-[1.2rem] min-[360px]:text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6 sm:mb-8 leading-[1.25] sm:leading-snug text-balance break-words max-w-3xl mx-auto"
            >
              {HOME_HERO.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              <SoftTextLink href="/espacos" className="text-sm sm:text-base font-semibold">
                Conheça nossos ambientes
              </SoftTextLink>
              <WhatsAppButton
                phoneNumber={DEFAULT_WHATSAPP_NUMBER}
                message={HOME_HERO.ctaMessage}
                label="Fale conosco quando quiser"
                variant="soft"
                className="w-full sm:w-auto max-w-[420px] text-sm sm:text-base px-5 py-3 rounded-2xl bg-white/90 shadow-sm"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[5]" fill="#fff8f2" variant="soft" />
    </section>
  );
}
