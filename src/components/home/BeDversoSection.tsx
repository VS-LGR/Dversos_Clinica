"use client";

import Link from "next/link";
import WaveDivider from "@/components/shared/WaveDivider";
import { BE_DVERSO_SUPPORT_IMAGE } from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export default function BeDversoSection() {
  return (
    <section
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06] overflow-hidden safe-x"
      aria-labelledby="be-dverso-title"
    >
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#ffffff" />
      <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-lg sm:max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_14px_40px_-18px_rgba(26,43,86,0.32)] ring-1 ring-primary/10 bg-white">
            {/* SVG via img — evita falha do optimizer do next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BE_DVERSO_SUPPORT_IMAGE}
              alt="Seja Dverso"
              width={800}
              height={260}
              className="w-full h-auto object-contain object-center"
              decoding="async"
            />
          </div>
        </div>

        <h2
          id="be-dverso-title"
          className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-center"
        >
          Por que ser DVERSO
        </h2>
        <p className="text-primary/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          Mais do que uma clínica, construímos uma cultura de cuidado, aprendizado e pertencimento — para famílias, aprendizes e profissionais que acreditam em evidências e respeito à neurodiversidade.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className={`rounded-xl border p-6 ${pastelByIndex(PASTEL_SURFACE_SOFT, 0)}`}>
            <h3 className="text-lg font-semibold text-primary mb-2">Para famílias e aprendizes</h3>
            <p className="text-sm text-primary/80 mb-4">
              Conheça nossa história, metodologia de atendimento, espaços terapêuticos e áreas de atuação integradas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/sobre" className="text-sm font-medium text-primary hover:underline underline-offset-2">
                Sobre a clínica
              </Link>
              <Link href="/espacos" className="text-sm font-medium text-primary hover:underline underline-offset-2">
                Nossos espaços
              </Link>
            </div>
          </article>
          <article className={`rounded-xl border p-6 ${pastelByIndex(PASTEL_SURFACE_SOFT, 1)}`}>
            <h3 className="text-lg font-semibold text-primary mb-2">Para profissionais</h3>
            <p className="text-sm text-primary/80 mb-4">
              Supervisão clínica contínua, formação baseada em evidências e equipe colaborativa. Faça parte da DVERSO.
            </p>
            <Link href="/seja-colaborador" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Seja colaborador
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
