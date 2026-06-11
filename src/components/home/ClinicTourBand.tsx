import ClinicTourPlayer from "@/components/shared/ClinicTourPlayer";
import WaveDivider from "@/components/shared/WaveDivider";

export default function ClinicTourBand() {
  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 bg-primary-pale/30 overflow-hidden safe-x"
      aria-labelledby="clinic-tour-title"
    >
      <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#ffffff" />
      <div className="relative z-10 max-w-4xl mx-auto min-w-0 pt-6">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2 text-center">
          Tour virtual
        </p>
        <h2
          id="clinic-tour-title"
          className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-3 text-center text-balance"
        >
          Conheça a Clínica DVERSO
        </h2>
        <p className="text-primary/80 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
          Um passeio pelos ambientes terapêuticos, salas e espaços de acolhimento em Sorocaba.
        </p>
        <ClinicTourPlayer />
      </div>
      <WaveDivider overlay className="absolute bottom-0 inset-x-0" fill="#ffffff" />
    </section>
  );
}
