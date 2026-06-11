import Link from "next/link";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import LeadersGroupSection from "@/components/shared/LeadersGroupSection";
import WaveDivider from "@/components/shared/WaveDivider";
import { LEADERS_PAGE } from "@/lib/constants/teamLeaders";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: LEADERS_PAGE.metaTitle,
  description: LEADERS_PAGE.metaDescription,
  path: "/liderancas",
});

export default function LiderancasPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip safe-x">
      <InstitutionalPageHero
        title={LEADERS_PAGE.title}
        subtitle="Clínica DVERSO"
        lead={LEADERS_PAGE.subtitle}
        showBrandLogo
      />

      <section className="relative py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto min-w-0">
        <LeadersGroupSection showLogo expandedCards />
        <p className="text-center mt-10">
          <Link
            href="/sobre"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Conheça a clínica →
          </Link>
        </p>
      </section>

      <WaveDivider fill="#fff8f2" />
    </div>
  );
}
