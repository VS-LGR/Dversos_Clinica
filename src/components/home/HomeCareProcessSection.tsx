import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import CareProcessTimeline, {
  CareSessionCard,
} from "@/components/shared/CareProcessTimeline";

export default function HomeCareProcessSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-primary-pale/40 overflow-hidden safe-x"
      aria-labelledby="care-process-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 lg:gap-14 items-start">
          <div className="min-w-0">
            <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
              Metodologia
            </p>
            <h2
              id="care-process-title"
              className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4"
            >
              {CARE_SESSION_INFO.title}
            </h2>
            <p className="text-primary/85 leading-relaxed mb-8">
              Do primeiro contato à devolutiva: um fluxo estruturado para decisões
              clínicas seguras e plano individualizado.
            </p>
            <CareSessionCard />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/60 mb-4">
              Etapas do atendimento
            </h3>
            <CareProcessTimeline variant="compact" linkToFull />
          </div>
        </div>
      </div>
    </section>
  );
}
