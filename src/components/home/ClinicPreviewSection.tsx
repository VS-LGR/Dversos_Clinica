import Link from "next/link";
import { HOME_MOSAIC_IMAGES } from "@/lib/constants/clinicMedia";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import WaveDivider from "@/components/shared/WaveDivider";
import SectionTitle from "@/components/shared/SectionTitle";

const mosaicAlts = [
  "Brinquedoteca da Clínica DVERSO",
  "Espaço Conforto para famílias",
  "Horta terapêutica",
  "Terapia assistida por animais",
  "Sala de integração sensorial",
  "Espaço de gameterapia",
  "Ambiente acolhedor da clínica",
];

export default function ClinicPreviewSection() {
  return (
    <section
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden safe-x"
      aria-labelledby="clinic-preview-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle id="clinic-preview-title" className="mb-3" subtitle="Um espaço pensado para acolher">
          Nossos ambientes
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Conforto sensorial, previsibilidade e ambientes que comunicam segurança — conheça os espaços da clínica.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="col-span-2 row-span-2">
            <CozyImageFrame
              src={HOME_MOSAIC_IMAGES[0]}
              alt={mosaicAlts[0]}
              variant="mosaic"
              index={0}
              className="h-full"
            />
          </div>
          {HOME_MOSAIC_IMAGES.slice(1, 5).map((src, i) => (
            <CozyImageFrame
              key={src}
              src={src}
              alt={mosaicAlts[i + 1] ?? "Ambiente da Clínica DVERSO"}
              variant="mosaic"
              index={i + 1}
            />
          ))}
        </div>

        <p className="text-center">
          <Link
            href="/espacos"
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary text-primary font-semibold px-6 py-3 hover:bg-primary-pale transition-colors"
          >
            Ver todos os espaços
          </Link>
        </p>
      </div>
      <WaveDivider overlay className="absolute bottom-0 inset-x-0 z-[1]" fill="#ffffff" />
    </section>
  );
}
