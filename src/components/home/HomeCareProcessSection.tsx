import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import CareProcessInfographicCard from "@/components/shared/CareProcessInfographicCard";

export default function HomeCareProcessSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-primary-pale/50 overflow-hidden safe-x"
      aria-labelledby="care-process-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <header className="mb-8 sm:mb-10 max-w-3xl">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
            Metodologia
          </p>
          <h2
            id="care-process-title"
            className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-balance"
          >
            {CARE_SESSION_INFO.title}
          </h2>
          <p className="text-primary/85 leading-relaxed text-sm sm:text-base">
            Do primeiro contato à devolutiva: um fluxo estruturado para decisões
            clínicas seguras e plano individualizado.
          </p>
        </header>

        <CareProcessInfographicCard />
      </div>
    </section>
  );
}
