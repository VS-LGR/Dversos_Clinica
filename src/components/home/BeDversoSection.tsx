"use client";

import Link from "next/link";
import WaveDivider from "@/components/shared/WaveDivider";
import { BE_DVERSO_SUPPORT_IMAGE } from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export default function BeDversoSection() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden safe-x bg-gradient-to-b from-pastel-aqua/40 via-primary-pale/50 to-white"
      aria-labelledby="be-dverso-title"
    >
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 mx-auto h-64 w-[min(90%,42rem)] rounded-full bg-pastel-mint/35 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4">
        <div className="flex justify-center mb-8 sm:mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BE_DVERSO_SUPPORT_IMAGE}
            alt="#SejaDverso"
            width={960}
            height={320}
            className="w-full max-w-2xl sm:max-w-3xl h-auto object-contain object-center drop-shadow-[0_12px_28px_rgba(26,43,86,0.18)]"
            decoding="async"
          />
        </div>

        <h2
          id="be-dverso-title"
          className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-primary tracking-tight mb-4 text-center text-balance"
        >
          Por que ser DVERSO
        </h2>
        <p className="text-primary/80 leading-relaxed text-center text-base sm:text-lg max-w-3xl mx-auto mb-12">
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
