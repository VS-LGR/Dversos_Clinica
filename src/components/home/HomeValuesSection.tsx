import SectionTitle from "@/components/shared/SectionTitle";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

const VALUES = [
  {
    title: "Ética e respeito",
    description:
      "Cada pessoa neuroatípica é única. Nosso cuidado parte da singularidade, com ética e respeito em cada atendimento.",
  },
  {
    title: "Acolhimento familiar",
    description:
      "Família e rede de apoio participam ativamente do processo, com orientação prática e ambiente previsível.",
  },
  {
    title: "Baseado em evidências",
    description:
      "Análise contínua de dados, supervisão clínica e protocolos reconhecidos para decisões seguras e individualizadas.",
  },
  {
    title: "Avanços na rotina",
    description:
      "Foco em autonomia, generalização de habilidades e qualidade de vida na escola, em casa e na comunidade.",
  },
] as const;

export default function HomeValuesSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-pastel-aqua/25 overflow-hidden safe-x relative"
      aria-labelledby="values-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <SectionTitle
          id="values-title"
          className="mb-3"
          subtitle="O que nos move no cuidado"
        >
          Transformando vidas com acolhimento
        </SectionTitle>
        <p className="text-center text-primary/75 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Mais do que atender, construímos caminhos que produzem avanços reais — com ciência, humanização e respeito à neurodiversidade.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {VALUES.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border p-6 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)} shadow-[0_8px_24px_-12px_rgba(26,43,86,0.08)]`}
            >
              <h3 className="font-semibold text-primary mb-2 text-balance">{item.title}</h3>
              <p className="text-sm text-primary/80 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
