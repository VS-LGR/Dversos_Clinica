import type { Metadata } from "next";
import Link from "next/link";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import { LEADERS_PAGE, TEAM_LEADERS } from "@/lib/constants/teamLeaders";

export const metadata: Metadata = {
  title: LEADERS_PAGE.metaTitle,
  description: LEADERS_PAGE.metaDescription,
  alternates: { canonical: "/liderancas" },
};

export default function LiderancasPage() {
  return (
    <div className="min-h-screen bg-white">
      <InstitutionalPageHero
        title={LEADERS_PAGE.title}
        subtitle="Clínica DVERSO"
        lead={LEADERS_PAGE.subtitle}
      />

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_LEADERS.map((leader, index) => (
            <li key={leader.id}>
              <article
                className={`h-full rounded-xl border border-primary/[0.1] p-6 sm:p-8 ${
                  index % 2 === 0 ? "bg-pastel-mint/40" : "bg-pastel-peach/40"
                }`}
              >
                <h2 className="text-lg font-bold text-primary mb-1">
                  {leader.name}
                </h2>
                <p className="text-sm font-medium text-primary/65 mb-3">
                  {leader.role}
                </p>
                <p className="text-sm text-primary/85 leading-relaxed">
                  {leader.bio}
                </p>
              </article>
            </li>
          ))}
        </ul>
        <p className="text-center mt-10">
          <Link
            href="/sobre"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Conheça a clínica →
          </Link>
        </p>
      </section>
    </div>
  );
}
