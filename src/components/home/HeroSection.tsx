"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import WaveDivider from "@/components/shared/WaveDivider";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden safe-x px-4 sm:px-6 pt-12 pb-24 sm:pt-24 sm:pb-28 md:pb-32 min-h-[min(100svh,920px)] sm:min-h-[85vh] flex items-center"
      aria-labelledby="hero-title"
    >
      <HeroVideoBackground />

      <div className="relative z-10 w-full max-w-3xl mx-auto min-w-0 py-4 sm:py-0">
        <RevealOnScroll index={0}>
          <div className="flex flex-col items-center justify-center text-center min-w-0 w-full [text-shadow:0_1px_14px_rgba(255,255,255,0.9)]">
            <p className="text-primary text-[10px] min-[360px]:text-xs font-semibold uppercase tracking-wide sm:tracking-widest mb-2.5 sm:mb-3 leading-snug text-balance max-w-full">
              {HOME_HERO.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-[1.15rem] min-[360px]:text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6 sm:mb-8 leading-[1.3] sm:leading-snug text-balance break-words w-full max-w-3xl mx-auto px-0.5"
            >
              {HOME_HERO.title}
            </h1>
            <div className="flex justify-center w-full">
              <WhatsAppButton
                phoneNumber={DEFAULT_WHATSAPP_NUMBER}
                message={HOME_HERO.ctaMessage}
                label="Fale conosco quando quiser"
                variant="soft"
                className="w-full max-w-[280px] sm:max-w-[320px] text-sm px-4 py-2.5 rounded-2xl bg-white/90 shadow-sm mx-auto"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[5]" fill="#f4f7fb" variant="soft" />
    </section>
  );
}
