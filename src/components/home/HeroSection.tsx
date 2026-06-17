"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO, SITE_TAGLINE } from "@/lib/constants/siteContent";
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
            <h1
              id="hero-title"
              className="text-[1.2rem] min-[360px]:text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight leading-[1.25] sm:leading-snug text-balance break-words max-w-3xl mx-auto"
            >
              {SITE_TAGLINE}
            </h1>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message={HOME_HERO.ctaMessage}
              label="Fale conosco quando quiser"
              variant="soft"
              className="mt-6 sm:mt-8 w-full sm:w-auto max-w-[420px] text-sm sm:text-base px-5 py-3 rounded-2xl bg-white/90 shadow-sm"
            />
          </div>
        </RevealOnScroll>
      </div>

      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[5]" fill="#fff8f2" variant="soft" />
    </section>
  );
}
