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
      className="relative min-h-[78vh] sm:min-h-[85vh] flex items-center pt-20 pb-20 sm:pt-24 sm:pb-28 md:pb-32 px-4 sm:px-6 overflow-hidden safe-x"
      aria-labelledby="hero-title"
    >
      <HeroVideoBackground />

      <div className="relative z-10 max-w-3xl mx-auto w-full min-w-0">
        <RevealOnScroll index={0}>
          <div className="text-center rounded-3xl bg-white/90 backdrop-blur-sm border border-primary/[0.08] shadow-[0_8px_32px_-12px_rgba(26,43,86,0.1)] p-6 sm:p-8 md:p-12 min-w-0 max-w-full">
            <p className="text-primary/70 text-xs font-medium uppercase tracking-wide sm:tracking-widest mb-3">
              {HOME_HERO.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-5 leading-tight text-balance break-words"
            >
              {HOME_HERO.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary/90 mb-5 max-w-2xl mx-auto leading-relaxed">
              {HOME_HERO.lead}
            </p>
            <p className="text-sm sm:text-base text-primary/75 mb-8 max-w-2xl mx-auto leading-relaxed">
              {HOME_HERO.paragraph}
            </p>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message={HOME_HERO.ctaMessage}
              label="Agendar pelo WhatsApp"
              className="w-full sm:w-auto max-w-[420px] mx-auto"
            />
          </div>
        </RevealOnScroll>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 z-[5]" fill="#ffffff" />
    </section>
  );
}
