"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <HeroVideoBackground />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <RevealOnScroll index={0}>
          <div className="text-center rounded-3xl bg-white/90 backdrop-blur-sm border border-primary/[0.08] shadow-lg shadow-primary/5 p-8 sm:p-10 md:p-12">
            <p className="text-primary/70 text-sm font-medium uppercase tracking-widest mb-3">
              {HOME_HERO.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-5 leading-tight"
            >
              {HOME_HERO.title}
            </h1>
            <p className="text-lg sm:text-xl text-primary/90 mb-5 max-w-2xl mx-auto leading-relaxed">
              {HOME_HERO.lead}
            </p>
            <p className="text-base text-primary/75 mb-8 max-w-2xl mx-auto">
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
    </section>
  );
}
