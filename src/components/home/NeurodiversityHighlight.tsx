import SoftTextLink from "@/components/shared/SoftTextLink";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import { EDITORIAL_KID_PAINTING } from "@/lib/constants/clinicMedia";
import { NEURODIVERSITY_PAGE } from "@/lib/constants/siteContent";

export default function NeurodiversityHighlight() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-pastel-peach/20 relative overflow-hidden border-t border-primary/[0.06] safe-x"
      aria-labelledby="neuro-highlight-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 min-w-0">
        <div className="flex-1 min-w-0 order-2 md:order-1 text-center md:text-left">
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
            Saúde e bem-estar familiar
          </p>
          <h2 id="neuro-highlight-title" className="text-2xl sm:text-3xl font-bold text-primary mb-4 tracking-tight text-balance break-words">
            {NEURODIVERSITY_PAGE.title}
          </h2>
          <p className="text-primary/85 leading-relaxed mb-7 max-w-xl">
            {NEURODIVERSITY_PAGE.description}
          </p>
          <SoftTextLink href="/areas/neurodiversity">
            Conhecer atendimentos
          </SoftTextLink>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2 w-full max-w-[280px] sm:max-w-[300px] mx-auto">
          <CozyImageFrame
            src={EDITORIAL_KID_PAINTING}
            alt="Criança em atividade lúdica — cuidado neuroafirmativo na Clínica DVERSO"
            variant="organic"
            index={0}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
