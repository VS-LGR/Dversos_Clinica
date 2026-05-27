"use client";

import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { HOME_HERO } from "@/lib/constants/siteContent";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export default function AbaInterventionSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06] overflow-hidden safe-x" aria-labelledby="aba-title">
      <div className="max-w-6xl mx-auto min-w-0">
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
          {[
            {
              title: "Plano individualizado (PIC)",
              text: "Metas definidas por avaliação, contexto familiar e necessidades de cada aprendiz.",
            },
            {
              title: "Supervisão e evidências",
              text: "Ajustes baseados em dados, supervisão ABA e tomada de decisão clínica segura.",
            },
            {
              title: "Família e escola",
              text: "Participação ativa da rede de apoio para generalizar habilidades fora da clínica.",
            },
          ].map((card, index) => (
            <article
              key={card.title}
              className={`rounded-xl border p-5 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
            >
              <h3 className="font-semibold text-primary mb-2 break-words">{card.title}</h3>
              <p className="text-sm text-primary/80">{card.text}</p>
            </article>
          ))}
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
