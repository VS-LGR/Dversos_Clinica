"use client";

import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import PawDeco from "@/components/shared/PawDeco";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

const DOG_PLAYFUL_SRC = "https://i.imgur.com/4GbjPCG.png";

export default function DogTherapyBand() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary to-primary-light text-white relative overflow-hidden"
      aria-labelledby="dog-therapy-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,215,170,0.12)_0%,transparent_50%)]" aria-hidden />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <PawDeco count={4} size={36} className="justify-center md:justify-start mb-4" />
          <h2 id="dog-therapy-title" className="text-2xl sm:text-3xl font-bold mb-3">
            Terapia Assistida por Cão
          </h2>
          <p className="text-white/90 mb-6 max-w-xl">
            Um diferencial da nossa clínica: sessões com o auxílio de cão terapeuta,
            potencializando vínculo, motivação e ganhos emocionais e sociais.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/areas/dog-therapy"
              className="inline-flex items-center rounded-xl font-semibold border-2 border-white px-5 py-3 hover:bg-white hover:text-primary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Conhecer a área
            </Link>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de informações sobre Terapia Assistida por Cão na Clínica Dverso."
              label="Falar no WhatsApp"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-primary"
            />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center" aria-hidden>
          <Image
            src={DOG_PLAYFUL_SRC}
            alt=""
            width={200}
            height={200}
            className="max-w-[180px] sm:max-w-[200px] animate-paw-float drop-shadow-lg"
            style={{ animationDelay: "200ms" }}
          />
        </div>
      </div>
    </section>
  );
}
