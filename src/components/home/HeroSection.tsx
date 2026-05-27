"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center pt-20 pb-24 sm:pt-24 sm:pb-28 px-4 sm:px-6 overflow-hidden"
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

      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          fill="rgb(255 248 242 / 0.40)"
        />
      </svg>
    </section>
  );
}
