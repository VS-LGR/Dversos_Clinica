import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import CareProcessTimeline from "@/components/shared/CareProcessTimeline";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import SoftTextLink from "@/components/shared/SoftTextLink";
import WaveDivider from "@/components/shared/WaveDivider";
import PageShell from "@/components/shared/PageShell";
import LeadersGroupSection from "@/components/shared/LeadersGroupSection";
import PicStickyScrollImage from "@/components/sobre/PicStickyScrollImage";
import Image from "next/image";
import { BE_DVERSO_SUPPORT_IMAGE, SOBRE_GALLERY } from "@/lib/constants/clinicMedia";
import { ABOUT_CLINIC, CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import { CARE_SUPERVISION_INTRO } from "@/lib/constants/processFlow";
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
        subtitle="Sobre nós"
        lead={ABOUT_CLINIC.originParagraphs[0]}
      />

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-pastel-mint/30 min-w-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-end">
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

      <WaveDivider fill="#f4f7fb" variant="soft" />

      <section
        id="como-funciona"
        className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto bg-pastel-aqua/25 min-w-0"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="order-2 lg:order-1 min-w-0">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Atendimento com Plano Individualizado Comportamental (PIC)
            </h2>
            <p className="text-primary/80 mb-4 max-w-3xl">{CARE_SUPERVISION_INTRO}</p>
            <p className="text-primary/80 mb-8 max-w-3xl">{CARE_SESSION_INFO.intro}</p>
            <CareProcessTimeline variant="vertical" />
          </div>
          <div className="order-1 lg:order-2 min-w-0 lg:h-auto">
            <PicStickyScrollImage />
          </div>
        </div>
      </section>

      <WaveDivider fill="#f4f7fb" variant="soft" />

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-pastel-mint/25 min-w-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center tracking-tight mb-10">
            Lideranças DVERSO
          </h2>
          <LeadersGroupSection expandedCards />
          <p className="text-center mt-8">
            <SoftTextLink href="/liderancas">Ver página de lideranças</SoftTextLink>
          </p>
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

      <section
        className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06] overflow-hidden"
        aria-labelledby="ser-dverso-title"
      >
        <div className="max-w-4xl mx-auto text-center min-w-0">
          <p className="text-primary/55 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Cultura DVERSO
          </p>
          <div className="mx-auto mb-8 sm:mb-10 w-full max-w-2xl sm:max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_18px_50px_-20px_rgba(26,43,86,0.28)] ring-1 ring-primary/10">
            <Image
              src={BE_DVERSO_SUPPORT_IMAGE}
              alt="#SejaDverso — Clínica DVERSO"
              width={960}
              height={320}
              className="w-full h-auto object-contain object-center bg-white"
              sizes="(max-width: 768px) 92vw, 768px"
            />
          </div>
          <h2
            id="ser-dverso-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-5 text-balance"
          >
            {ABOUT_CLINIC.missionTagline}
          </h2>
          <p className="text-primary/85 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {ABOUT_CLINIC.missionTitle}. Profissionais comprometidos com evidências,
            supervisão e respeito à neurodiversidade fazem parte da nossa cultura.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <SoftTextLink href="/seja-colaborador">Seja colaborador</SoftTextLink>
            <SoftTextLink href="/espacos">Nossos espaços</SoftTextLink>
            <SoftTextLink href="/areas">Especialidades</SoftTextLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
