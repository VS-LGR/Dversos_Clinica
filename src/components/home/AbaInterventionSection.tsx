"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

export default function AbaInterventionSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06]" aria-labelledby="aba-title">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">Intervenção especializada</p>
          <h2 id="aba-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4">
            Intervenção ABA com supervisão clínica
          </h2>
          <p className="text-primary/85 leading-relaxed mb-6">
            Atuação estruturada em Análise do Comportamento Aplicada (ABA), com metas claras, monitoramento de evolução e alinhamento multiprofissional para desenvolvimento funcional e qualidade de vida.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-peach/70 p-5">
            <h3 className="font-semibold text-primary mb-2">Plano Individual</h3>
            <p className="text-sm text-primary/80">Objetivos definidos por necessidade clínica e contexto familiar.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-mint/60 p-5">
            <h3 className="font-semibold text-primary mb-2">Supervisão Contínua</h3>
            <p className="text-sm text-primary/80">Ajustes técnicos periódicos para manter efetividade terapêutica.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-aqua/60 p-5">
            <h3 className="font-semibold text-primary mb-2">Integração com Família</h3>
            <p className="text-sm text-primary/80">Orientações práticas para generalização de habilidades no cotidiano.</p>
          </article>
        </div>
        <WhatsAppButton
          phoneNumber={DEFAULT_WHATSAPP_NUMBER}
          message="Olá! Gostaria de saber mais sobre a intervenção ABA da Clínica DVERSO."
          label="Quero saber sobre ABA"
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
