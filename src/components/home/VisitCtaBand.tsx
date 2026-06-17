import WhatsAppButton from "@/components/shared/WhatsAppButton";
import SoftTextLink from "@/components/shared/SoftTextLink";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { PASTEL_CTA_GRADIENT } from "@/lib/constants/pastelPalette";

export default function VisitCtaBand() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 safe-x overflow-hidden"
      aria-labelledby="visit-cta-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div className={`rounded-[2.5rem] bg-gradient-to-br ${PASTEL_CTA_GRADIENT} border border-primary/[0.06] px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-[0_8px_32px_-12px_rgba(26,43,86,0.08)] min-w-0`}>
          <div className="max-w-xl min-w-0">
            <h2
              id="visit-cta-title"
              className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-3 text-balance break-words"
            >
              Agende sua visita
            </h2>
            <p className="text-primary/85 leading-relaxed">
              Conheça o espaço da Clínica DVERSO em Sorocaba e converse com nossa equipe sobre o
              melhor caminho de cuidado para sua família — com acolhimento e atuação integrada.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <SoftTextLink
              href="/espacos"
              className="justify-center sm:justify-start text-base px-4 py-2 rounded-2xl bg-white/60 hover:bg-white/90 no-underline hover:no-underline border border-primary/10"
            >
              Conhecer os espaços
            </SoftTextLink>
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar uma visita à Clínica DVERSO."
              label="Agendar visita"
              variant="ghost"
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
