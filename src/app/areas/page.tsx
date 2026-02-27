import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

export default function AreasOverviewPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle className="mb-4">Nossas áreas de atuação</SectionTitle>
        <p className="text-center text-primary/80 mb-12 max-w-2xl mx-auto">
          Escolha uma área para conhecer os profissionais, o espaço e como funciona o atendimento.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className="block p-6 rounded-xl border-2 border-primary-pale bg-white hover:border-primary hover:shadow-lg transition-all"
              >
                <h2 className="text-lg font-semibold text-primary mb-2">{area.name}</h2>
                <p className="text-sm text-primary/80 line-clamp-2">{area.description}</p>
                <span className="inline-block mt-3 text-primary font-medium text-sm">
                  Ver detalhes →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
