"use client";

import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

export default function DogTherapyBand() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 text-white relative overflow-hidden"
      aria-labelledby="differentials-title"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset 0 14px 28px -8px rgba(0,0,0,0.25), 0 8px 32px rgba(26,43,86,0.35)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,215,170,0.1)_0%,transparent_50%)]" aria-hidden />
      <div className="absolute top-0 right-0 bottom-0 w-2 sm:w-3 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 100%)",
            boxShadow: "inset -8px 0 16px -4px rgba(0,0,0,0.25)",
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10 pr-1">
        <div className="flex-1 text-center md:text-left">
          <p className="text-white/80 text-xs font-medium uppercase tracking-widest mb-2">
            Diferenciais DVERSO
          </p>
          <h2 id="differentials-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Cuidado protegido com manejo especializado
          </h2>
          <p className="text-white/90 leading-relaxed mb-6 max-w-2xl">
            A Clínica DVERSO conta com estrutura para acolhimento de casos de risco com contenção antecipada,
            sala de regulação emocional e atendimento protegido. Nossa equipe atua com manejo comportamental,
            supervisão ABA e vigilância 24h para garantir segurança e previsibilidade.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-7 text-sm text-white/95 max-w-3xl">
            <li className="rounded-lg border border-white/20 bg-white/10 px-4 py-3">Espaço de regulação emocional para controle de crise e risco.</li>
            <li className="rounded-lg border border-white/20 bg-white/10 px-4 py-3">Acolhimento com regulação emocional e manejo comportamental.</li>
            <li className="rounded-lg border border-white/20 bg-white/10 px-4 py-3">Supervisão ABA contínua e plano terapêutico integrado.</li>
            <li className="rounded-lg border border-white/20 bg-white/10 px-4 py-3">Atendimentos protegidos com vigilância 24h.</li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/areas/animal-assisted-therapy" className="inline-flex items-center rounded-xl font-semibold border-2 border-white px-5 py-3 hover:bg-white hover:text-primary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Conhecer TAA
            </Link>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de saber mais sobre os diferenciais de acolhimento e segurança da Clínica DVERSO."
              label="Falar no WhatsApp"
              variant="outline"
              className="!border-2 !border-white !text-white !bg-white/15 hover:!bg-white hover:!text-primary focus:!ring-white/50"
            />
          </div>
        </div>
        <div className="w-full md:w-[360px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-left">
          <p className="text-xs uppercase tracking-widest text-white/80 mb-2">Diferencial clínico</p>
          <h3 className="text-xl font-semibold mb-3">Protocolo Anakin</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Fluxo de acolhimento para situações de maior sensibilidade, com equipe treinada para antecipação de risco, organização de ambiente e suporte familiar.
          </p>
        </div>
      </div>
    </section>
  );
}
