"use client";

import Image from "next/image";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

const HERO_PLACEHOLDER_SRC =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col lg:flex-row lg:items-center lg:min-h-0 lg:py-24 py-20 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#f8f6ff] via-[#fdfbf9] to-white"
        aria-hidden
      />
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-accent-warm/20 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-center">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <p className="text-primary/70 text-sm font-medium uppercase tracking-widest mb-3 animate-slide-up">
            Saúde integrada · Sorocaba e região
          </p>
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-primary tracking-tight mb-5 animate-slide-up animate-delay-100 leading-tight"
          >
            Cuidado com sua família em primeiro lugar
          </h1>
          <p className="text-lg sm:text-xl text-primary/90 mb-5 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-200 leading-relaxed">
            Psicologia, neurodivergência, psicoterapia musical, nutrição e terapia assistida por cão:
            um espaço pensado para o bem-estar de crianças, jovens e adultos.
          </p>
          <p className="text-base text-primary/75 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-300">
            Profissionais preparados para cada etapa do desenvolvimento e da saúde emocional.
          </p>
          <div className="animate-slide-up animate-delay-400">
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar ou saber mais sobre os atendimentos da Clínica Dverso."
              label="Agendar ou tirar dúvidas pelo WhatsApp"
            />
          </div>
        </div>

        <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-primary/15 to-accent-warm/25 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              aria-hidden
            />
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 ring-1 ring-black/5">
              <Image
                src={HERO_PLACEHOLDER_SRC}
                alt=""
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </div>
          <p className="text-center text-primary/50 text-xs mt-3 tracking-wide">
            Nosso espaço — em breve foto oficial
          </p>
        </div>
      </div>
    </section>
  );
}
