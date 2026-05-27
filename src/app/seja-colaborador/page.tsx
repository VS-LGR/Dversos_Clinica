import type { Metadata } from "next";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { CAREERS_COPY } from "@/lib/constants/siteContent";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";

export const metadata: Metadata = {
  title: CAREERS_COPY.metaTitle,
  description: CAREERS_COPY.metaDescription,
  alternates: { canonical: "/seja-colaborador" },
};

export default function SejaColaboradorPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip safe-x">
      <InstitutionalPageHero
        title={CAREERS_COPY.title}
        subtitle="#SEJADVERSO"
        lead={CAREERS_COPY.subtitle}
      />

      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="space-y-5 text-primary/85 leading-relaxed">
          {CAREERS_COPY.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <div className="mt-10 text-center">
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            message={CAREERS_COPY.ctaMessage}
            label="Quero fazer parte da equipe"
            className="w-full sm:w-auto"
          />
        </div>
      </section>
    </div>
  );
}
