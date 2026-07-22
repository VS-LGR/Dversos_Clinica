import SoftTextLink from "@/components/shared/SoftTextLink";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import LeadersGroupSection from "@/components/shared/LeadersGroupSection";
import WaveDivider from "@/components/shared/WaveDivider";
import PageShell from "@/components/shared/PageShell";
import { LEADERS_PAGE } from "@/lib/constants/teamLeaders";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: LEADERS_PAGE.metaTitle,
  description: LEADERS_PAGE.metaDescription,
  path: "/liderancas",
});

export default function LiderancasPage() {
  return (
    <PageShell>
      <InstitutionalPageHero
        title={LEADERS_PAGE.title}
        subtitle="Clínica DVERSO"
        lead={LEADERS_PAGE.subtitle}
        showBrandLogo
      />

      <section className="relative py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto min-w-0 bg-pastel-mint/20">
          <LeadersGroupSection expandedCards />
        <p className="text-center mt-10">
          <SoftTextLink href="/sobre">Conheça a clínica</SoftTextLink>
        </p>
      </section>

      <WaveDivider fill="#f4f7fb" variant="soft" />
    </PageShell>
  );
}
