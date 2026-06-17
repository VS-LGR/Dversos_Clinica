"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SoftTextLink from "@/components/shared/SoftTextLink";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";
import HeroSplatterCard from "@/components/home/HeroSplatterCard";
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
          <HeroSplatterCard>
            <p className="text-primary/70 text-[10px] min-[360px]:text-xs font-medium uppercase tracking-wide sm:tracking-widest mb-2.5 sm:mb-3 leading-snug text-balance">
              {HOME_HERO.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="text-[1.35rem] min-[360px]:text-2xl min-[400px]:text-[1.65rem] sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4 sm:mb-5 leading-[1.2] sm:leading-tight text-balance break-words"
            >
              {HOME_HERO.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-primary/90 mb-3 sm:mb-5 max-w-2xl mx-auto leading-relaxed">
              {HOME_HERO.lead}
            </p>
            <p className="text-xs sm:text-base text-primary/75 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {HOME_HERO.paragraph}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SoftTextLink href="/espacos" className="text-sm sm:text-base">
                Conheça nossos ambientes
              </SoftTextLink>
              <WhatsAppButton
                phoneNumber={DEFAULT_WHATSAPP_NUMBER}
                message={HOME_HERO.ctaMessage}
                label="Fale conosco quando quiser"
                variant="soft"
                className="w-full sm:w-auto max-w-[420px] text-sm sm:text-base px-4 py-3 rounded-2xl"
              />
            </div>
          </HeroSplatterCard>
        </RevealOnScroll>
      </div>

      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[5]" fill="#fff8f2" variant="soft" />
    </section>
  );
}
