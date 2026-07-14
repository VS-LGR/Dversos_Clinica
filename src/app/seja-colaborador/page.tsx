import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import PageShell from "@/components/shared/PageShell";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";
import { CAREERS_COPY } from "@/lib/constants/siteContent";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: CAREERS_COPY.metaTitle,
  description: CAREERS_COPY.metaDescription,
  path: "/seja-colaborador",
});

const VALUE_CARDS = [
  { title: "Aprendizado contínuo", text: "Supervisão clínica, grupos de estudo e formação baseada em evidências." },
  { title: "Trabalho colaborativo", text: "Equipe integrada, suporte técnico e decisões compartilhadas." },
  { title: "Cultura neuroafirmativa", text: "Respeito à singularidade e compromisso com qualidade de cuidado." },
] as const;

export default function SejaColaboradorPage() {
  return (
    <PageShell>
      <InstitutionalPageHero
        title={CAREERS_COPY.title}
        subtitle="Seja DVERSO"
        lead={CAREERS_COPY.subtitle}
      />

      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {VALUE_CARDS.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[1.5rem] border p-5 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
            >
              <h3 className="font-semibold text-primary mb-2 text-sm">{card.title}</h3>
              <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
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
            variant="soft"
            className="w-full sm:w-auto rounded-2xl"
          />
        </div>
      </section>
    </PageShell>
  );
}
