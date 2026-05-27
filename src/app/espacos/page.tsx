import type { Metadata } from "next";
import Link from "next/link";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import { CLINIC_SPACES, SPACES_PAGE } from "@/lib/constants/spacesContent";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export const metadata: Metadata = {
  title: SPACES_PAGE.metaTitle,
  description: SPACES_PAGE.metaDescription,
  alternates: { canonical: "/espacos" },
};

export default function EspacosPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <InstitutionalPageHero
        title={SPACES_PAGE.title}
        subtitle="Ambiente terapêutico para neurodiversidade"
        lead={SPACES_PAGE.introParagraphs[0]}
      />

      <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-primary/85 leading-relaxed">
          {SPACES_PAGE.introParagraphs[1]}
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-10 min-w-0">
        {CLINIC_SPACES.map((space, index) => (
          <article
            key={space.slug}
            className={`rounded-2xl border p-6 sm:p-8 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
          >
            <h2 className="text-xl font-bold text-primary mb-4">{space.title}</h2>
            <div className="space-y-3 text-primary/85 leading-relaxed text-sm sm:text-base">
              {space.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="py-10 px-4 sm:px-6 border-t border-primary/[0.06] text-center">
        <p className="text-primary/80 mb-4">
          Quer conhecer a clínica pessoalmente?
        </p>
        <Link
          href="/sobre"
          className="text-sm font-medium text-primary hover:underline underline-offset-2"
        >
          Saiba como funciona o atendimento →
        </Link>
      </section>
    </div>
  );
}
