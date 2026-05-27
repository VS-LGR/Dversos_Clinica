import type { Metadata } from "next";
import Link from "next/link";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import CareProcessTimeline from "@/components/shared/CareProcessTimeline";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { ABOUT_CLINIC, CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

export const metadata: Metadata = {
  title: ABOUT_CLINIC.metaTitle,
  description: ABOUT_CLINIC.metaDescription,
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <InstitutionalPageHero
        title={ABOUT_CLINIC.title}
        subtitle="Clínica para neuroatípicos em Sorocaba"
        lead={ABOUT_CLINIC.originParagraphs[0]}
      />

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {ABOUT_CLINIC.originTitle}
        </h2>
        <div className="space-y-4 text-primary/85 leading-relaxed">
          {ABOUT_CLINIC.originParagraphs.slice(1).map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="py-12 px-4 sm:px-6 max-w-4xl mx-auto border-t border-primary/[0.06]"
      >
        <h2 className="text-2xl font-bold text-primary mb-2">
          Atendimento ABA com plano individualizado
        </h2>
        <p className="text-primary/80 mb-8 max-w-3xl">
          {CARE_SESSION_INFO.intro}
        </p>
        <CareProcessTimeline variant="vertical" />
      </section>

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto border-t border-primary/[0.06]">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {ABOUT_CLINIC.missionTitle}
        </h2>
        <p className="text-primary/85 leading-relaxed mb-6">
          Profissionais comprometidos com evidências, supervisão e respeito à
          neurodiversidade fazem parte da nossa cultura — {ABOUT_CLINIC.missionTagline}.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/seja-colaborador"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Seja colaborador →
          </Link>
          <Link
            href="/espacos"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Nossos espaços →
          </Link>
          <Link
            href="/areas"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Áreas de atuação →
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-pastel-peach/40 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-primary mb-4">
            Agende uma conversa com nossa equipe
          </h2>
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message="Olá! Gostaria de saber mais sobre a Clínica DVERSO."
            label="Falar no WhatsApp"
            className="w-full sm:w-auto"
          />
        </div>
      </section>
    </div>
  );
}
