import Link from "next/link";
import ClinicAmbiencesCarousel from "@/components/home/ClinicAmbiencesCarousel";
import WaveDivider from "@/components/shared/WaveDivider";

export default function ClinicPreviewSection() {
  return (
    <section
      className="relative overflow-hidden safe-x text-white"
      aria-labelledby="clinic-preview-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,28,55,0.98) 0%, rgb(26,43,86) 40%, rgb(26,43,86) 100%)",
          boxShadow: "inset 0 12px 28px -8px rgba(0,0,0,0.2)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_40%,rgba(0,0,0,0.12)_100%)]"
        aria-hidden
      />

      <WaveDivider
        overlay
        position="top"
        className="absolute top-0 inset-x-0 z-[2]"
        fill="#c9f0f0"
        variant="soft"
      />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 px-4 sm:px-6 py-20 sm:py-28 md:py-32">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5">
            Um espaço pensado para acolher
          </p>
          <h2
            id="clinic-preview-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4"
          >
            Nossos ambientes
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Conforto sensorial, previsibilidade e ambientes que comunicam segurança — conheça os espaços da clínica.
          </p>
        </div>

        <ClinicAmbiencesCarousel />

        <p className="text-center mt-10 sm:mt-12">
          <Link
            href="/espacos"
            className="inline-flex items-center justify-center rounded-2xl border border-white/35 text-white font-semibold px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            Ver todos os espaços
          </Link>
        </p>
      </div>

      <WaveDivider
        overlay
        position="bottom"
        className="absolute bottom-0 inset-x-0 z-[2]"
        fill="#cff5d2"
        variant="soft"
      />
    </section>
  );
}
