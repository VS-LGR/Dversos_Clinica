"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";

export default function AbaInterventionSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06]" aria-labelledby="aba-title">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">Intervenção especializada</p>
          <h2 id="aba-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4">
            Intervenção ABA com supervisão clínica
          </h2>
          <p className="text-primary/85 leading-relaxed mb-4">
            {HOME_HERO.paragraph2}
          </p>
          <p className="text-primary/80 leading-relaxed mb-6 text-sm">
            Trabalhamos com análise contínua de dados, supervisão clínica, registros sistemáticos e integração com família, escola e rede de apoio — com foco em autonomia e avanços funcionais na rotina.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-peach/70 p-5">
            <h3 className="font-semibold text-primary mb-2">Plano individualizado (PIC)</h3>
            <p className="text-sm text-primary/80">Metas definidas por avaliação, contexto familiar e necessidades de cada aprendiz.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-mint/60 p-5">
            <h3 className="font-semibold text-primary mb-2">Supervisão e evidências</h3>
            <p className="text-sm text-primary/80">Ajustes baseados em dados, supervisão ABA e tomada de decisão clínica segura.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-aqua/60 p-5">
            <h3 className="font-semibold text-primary mb-2">Família e escola</h3>
            <p className="text-sm text-primary/80">Participação ativa da rede de apoio para generalizar habilidades fora da clínica.</p>
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
