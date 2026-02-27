"use client";

import Image from "next/image";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

const HERO_PLACEHOLDER_SRC =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col lg:flex-row lg:items-center lg:min-h-0 lg:py-20 py-16 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background layers for depth */}
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
        <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 animate-slide-up"
          >
            Bem-vindo à Clínica Dverso
          </h1>
          <p className="text-lg sm:text-xl text-primary/90 mb-6 animate-slide-up animate-delay-100">
            Cuidado integrado em Sorocaba e região: psicologia, neurodivergência,
            psicoterapia musical, nutrição e terapia assistida por cão.
          </p>
          <p className="text-base text-primary/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up animate-delay-200">
            Um espaço pensado para acolher você e sua família, com profissionais
            preparados para cada etapa do desenvolvimento e do bem-estar.
          </p>
          <div className="animate-slide-up animate-delay-300">
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
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent-warm/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              aria-hidden
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
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
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </div>
          <p className="text-center text-primary/60 text-sm mt-3">
            Nosso espaço — em breve foto oficial
          </p>
        </div>
      </div>
    </section>
  );
}
