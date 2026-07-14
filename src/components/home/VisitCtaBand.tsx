import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { PASTEL_CTA_GRADIENT } from "@/lib/constants/pastelPalette";

export default function VisitCtaBand() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 safe-x overflow-hidden"
      aria-labelledby="visit-cta-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div
          className={`rounded-[2.5rem] bg-gradient-to-br ${PASTEL_CTA_GRADIENT} border border-primary/[0.08] px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center gap-6 shadow-[0_8px_32px_-12px_rgba(26,43,86,0.08)] min-w-0`}
        >
          <div className="max-w-xl min-w-0">
            <h2
              id="visit-cta-title"
              className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-3 text-balance break-words"
            >
              Agende sua visita
            </h2>
            <p className="text-primary/90 leading-relaxed text-sm sm:text-base">
              Conheça o espaço da Clínica DVERSO em Sorocaba e converse com nossa equipe sobre o
              melhor caminho de cuidado para sua família — com acolhimento e atuação integrada.
            </p>
          </div>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message="Olá! Gostaria de agendar uma visita à Clínica DVERSO."
            label="Agendar visita"
            variant="ghost"
            className="justify-center w-full sm:w-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}
