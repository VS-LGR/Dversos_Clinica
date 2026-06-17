import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import CareProcessTimeline from "@/components/shared/CareProcessTimeline";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import SoftTextLink from "@/components/shared/SoftTextLink";
import WaveDivider from "@/components/shared/WaveDivider";
import PageShell from "@/components/shared/PageShell";
import { SOBRE_GALLERY, EDITORIAL_THERAPY_ABA } from "@/lib/constants/clinicMedia";
import { ABOUT_CLINIC, CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: ABOUT_CLINIC.metaTitle,
  description: ABOUT_CLINIC.metaDescription,
  path: "/sobre",
});

const sobreAlts = [
  "Ambiente acolhedor da Clínica DVERSO",
  "Espaços pensados para neurodiversidade",
  "Detalhe do cuidado integrado em Sorocaba",
];

export default function SobrePage() {
  return (
    <PageShell>
      <InstitutionalPageHero
        title={ABOUT_CLINIC.title}
        subtitle="Clínica DVERSO"
        lead={ABOUT_CLINIC.originParagraphs[0]}
        showBrandLogo
      />

      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {ABOUT_CLINIC.originTitle}
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed">
              {ABOUT_CLINIC.originParagraphs.slice(1).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 min-w-0">
            <div className="col-span-2">
              <CozyImageFrame
                src={SOBRE_GALLERY[0]}
                alt={sobreAlts[0]}
                index={0}
                variant="landscape"
              />
            </div>
            {SOBRE_GALLERY.slice(1).map((src, i) => (
              <CozyImageFrame
                key={src}
                src={src}
                alt={sobreAlts[i + 1] ?? sobreAlts[0]}
                index={i + 1}
                variant="mosaic"
              />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#fff8f2" variant="soft" />

      <section
        id="como-funciona"
        className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto bg-pastel-mint/25 min-w-0"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Atendimento ABA com plano individualizado
            </h2>
            <p className="text-primary/80 mb-8 max-w-3xl">{CARE_SESSION_INFO.intro}</p>
            <CareProcessTimeline variant="vertical" />
          </div>
          <div className="max-w-md mx-auto lg:ml-auto w-full">
            <CozyImageFrame
              src={EDITORIAL_THERAPY_ABA}
              alt="Intervenção baseada em ABA — metodologia da Clínica DVERSO"
              variant="landscape"
              index={2}
              fit="contain"
            />
          </div>
        </div>
      </section>

      <WaveDivider fill="#fff8f2" variant="soft" />

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto min-w-0">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {ABOUT_CLINIC.missionTitle}
        </h2>
        <p className="text-primary/85 leading-relaxed mb-6">
          Profissionais comprometidos com evidências, supervisão e respeito à
          neurodiversidade fazem parte da nossa cultura — {ABOUT_CLINIC.missionTagline}.
        </p>
        <div className="flex flex-wrap gap-6">
          <SoftTextLink href="/seja-colaborador">Seja colaborador</SoftTextLink>
          <SoftTextLink href="/espacos">Nossos espaços</SoftTextLink>
          <SoftTextLink href="/areas">Áreas de atuação</SoftTextLink>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-pastel-peach/40 to-primary-pale/30">
        <div className="max-w-2xl mx-auto text-center min-w-0">
          <h2 className="text-xl font-bold text-primary mb-4">
            Agende uma conversa com nossa equipe
          </h2>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message="Olá! Gostaria de saber mais sobre a Clínica DVERSO."
            label="Falar no WhatsApp"
            variant="ghost"
            className="justify-center"
          />
        </div>
      </section>
    </PageShell>
  );
}
