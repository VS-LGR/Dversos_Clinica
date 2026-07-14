import SoftTextLink from "@/components/shared/SoftTextLink";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import ClinicTourPlayer from "@/components/shared/ClinicTourPlayer";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import WaveDivider from "@/components/shared/WaveDivider";
import PageShell from "@/components/shared/PageShell";
import SpacesCarousel from "@/components/espacos/SpacesCarousel";
import { CLINIC_SPACES, SPACES_PAGE } from "@/lib/constants/spacesContent";
import { ESPACOS_HERO_IMAGE } from "@/lib/constants/clinicMedia";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: SPACES_PAGE.metaTitle,
  description: SPACES_PAGE.metaDescription,
  path: "/espacos",
});

export default function EspacosPage() {
  return (
    <PageShell>
      <InstitutionalPageHero
        title={SPACES_PAGE.title}
        subtitle="Ambiente terapêutico para neurodiversidade"
        lead={SPACES_PAGE.introParagraphs[0]}
      />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-4">
          <CozyImageFrame
            src={ESPACOS_HERO_IMAGE}
            alt="Recepção e ambiente acolhedor da Clínica DVERSO"
            index={0}
            priority
          />
          <p className="text-primary/85 leading-relaxed text-base sm:text-lg">
            {SPACES_PAGE.introParagraphs[1]}
          </p>
        </div>
      </section>

      <section
        className="relative py-16 sm:py-20 px-4 sm:px-6 bg-pastel-aqua/25 overflow-hidden"
        aria-labelledby="spaces-carousel-title"
      >
        <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />
        <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4">
          <h2
            id="spaces-carousel-title"
            className="text-2xl sm:text-3xl font-bold text-primary text-center mb-3"
          >
            Ambientes da clínica
          </h2>
          <p className="text-primary/80 text-center mb-10 max-w-2xl mx-auto">
            Conheça cada espaço — {CLINIC_SPACES.length} ambientes pensados para conforto sensorial, previsibilidade e acolhimento.
          </p>
          <SpacesCarousel />
        </div>
        <WaveDivider overlay className="absolute bottom-0 inset-x-0" fill="#f4f7fb" variant="soft" />
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-pastel-mint/25 overflow-hidden">
        <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#f4f7fb" variant="soft" />
        <div className="relative z-10 max-w-4xl mx-auto min-w-0 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-3">
            Tour pela clínica
          </h2>
          <p className="text-primary/80 text-center mb-8 max-w-2xl mx-auto">
            Veja os ambientes onde cuidado, previsibilidade e acolhimento se encontram.
          </p>
          <ClinicTourPlayer />
        </div>
        <WaveDivider overlay className="absolute bottom-0 inset-x-0" fill="#f4f7fb" variant="soft" />
      </section>

      <section className="py-14 sm:py-16 px-4 sm:px-6 border-t border-primary/[0.06]">
        <div className="max-w-2xl mx-auto text-center rounded-[2rem] border border-primary/10 bg-pastel-mint/30 px-6 py-10 sm:px-10 shadow-[0_12px_40px_-20px_rgba(26,43,86,0.12)]">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
            Quer conhecer a clínica pessoalmente?
          </h2>
          <p className="text-primary/80 text-sm sm:text-base mb-6 leading-relaxed">
            Agende uma visita ou converse com nossa equipe — estamos prontos para acolher sua família.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <WhatsAppButton
              phoneNumber={DEFAULT_WHATSAPP_NUMBER}
              message="Olá! Gostaria de agendar uma visita à Clínica DVERSO."
              label="Agendar visita no WhatsApp"
              variant="soft"
              className="w-full sm:w-auto rounded-2xl"
            />
            <SoftTextLink href="/sobre#como-funciona" className="text-sm sm:text-base">
              Como funciona o atendimento
            </SoftTextLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
