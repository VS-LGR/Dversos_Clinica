import Link from "next/link";
import ClinicAmbiencesCarousel from "@/components/home/ClinicAmbiencesCarousel";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ClinicPreviewSection() {
  return (
    <section
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-white/70 overflow-hidden safe-x"
      aria-labelledby="clinic-preview-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle id="clinic-preview-title" className="mb-3" subtitle="Um espaço pensado para acolher">
          Nossos ambientes
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Conforto sensorial, previsibilidade e ambientes que comunicam segurança — conheça os espaços da clínica.
        </p>

        <ClinicAmbiencesCarousel />

        <p className="text-center">
          <Link
            href="/espacos"
            className="inline-flex items-center justify-center rounded-2xl border border-primary/25 text-primary font-semibold px-6 py-3 bg-white/80 hover:bg-white transition-colors"
          >
            Ver todos os espaços
          </Link>
        </p>
      </div>
      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[1]" fill="#fff8f2" variant="soft" />
    </section>
  );
}
