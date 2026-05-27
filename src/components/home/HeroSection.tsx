"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center pt-20 pb-24 sm:pt-24 sm:pb-28 md:pb-32 px-4 sm:px-6 overflow-hidden"
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

      <div className="absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,74C60,88,120,102,180,100C240,98,300,80,360,74C420,68,480,74,540,88C600,102,660,120,720,114C780,108,840,78,900,72C960,66,1020,84,1080,96C1140,108,1200,114,1260,106C1320,98,1380,76,1440,64L1440,120L0,120Z"
            fill="rgb(255 248 242 / 0.40)"
          />
        </svg>
        <svg
          className="absolute inset-x-0 bottom-0 h-[72%] w-full opacity-55"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,84C48,94,96,104,144,104C192,104,240,94,288,84C336,74,384,64,432,66C480,68,528,82,576,94C624,106,672,116,720,114C768,112,816,98,864,88C912,78,960,72,1008,76C1056,80,1104,94,1152,102C1200,110,1248,112,1296,106C1344,100,1392,86,1440,74L1440,120L0,120Z"
            fill="rgb(255 248 242 / 0.25)"
          />
        </svg>
      </div>
    </section>
  );
}
