import type { ClinicArea } from "@/lib/constants/clinicAreas";
import SoftTextLink from "@/components/shared/SoftTextLink";
import WaveDivider from "@/components/shared/WaveDivider";

interface AreaHeroProps {
  area: ClinicArea;
}

export default function AreaHero({ area }: AreaHeroProps) {
  return (
    <section
      className="relative bg-primary-pale/50 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="area-title"
    >
      <div className="max-w-4xl mx-auto text-center min-w-0 px-1 relative z-10">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-3">
          Área de atuação
        </p>
        <h1 id="area-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 text-balance break-words">
          {area.name}
        </h1>
        <p className="text-base sm:text-lg text-primary/90 mb-6 leading-relaxed break-words">{area.description}</p>
        <SoftTextLink href="/espacos">Conheça nossos ambientes</SoftTextLink>
      </div>
      <WaveDivider overlay className="absolute bottom-0 inset-x-0" fill="#fff8f2" variant="soft" />
    </section>
  );
}
