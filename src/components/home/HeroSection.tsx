"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#f8f6ff] via-[#fdfbf9] to-white py-16 sm:py-24 px-4 sm:px-6"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl mx-auto text-center">
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
        <p className="text-base text-primary/80 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
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
    </section>
  );
}
