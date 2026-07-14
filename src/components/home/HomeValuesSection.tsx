import WaveDivider from "@/components/shared/WaveDivider";

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
      className="relative overflow-hidden safe-x text-white"
      aria-labelledby="values-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,28,55,0.98) 0%, rgb(26,43,86) 40%, rgb(26,43,86) 100%)",
          boxShadow: "inset 0 12px 28px -8px rgba(0,0,0,0.2)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_40%,rgba(0,0,0,0.12)_100%)]"
        aria-hidden
      />

      <WaveDivider
        overlay
        position="top"
        className="absolute top-0 inset-x-0 z-[2]"
        fill="#c9e4f0"
        variant="soft"
      />

      <div className="relative z-10 max-w-6xl mx-auto min-w-0 px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-1">
          <p className="text-white/75 text-[10px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-widest mb-2.5">
            O que nos move no cuidado
          </p>
          <h2
            id="values-title"
            className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance mb-3 sm:mb-4"
          >
            Transformando vidas com acolhimento
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-balance">
            Mais do que atender, construímos caminhos que produzem avanços reais — com ciência, humanização e respeito à neurodiversidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {VALUES.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl sm:rounded-[1.75rem] border border-white/25 bg-white/12 backdrop-blur-sm p-5 sm:p-6 min-w-0 h-full shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]"
            >
              <h3 className="font-semibold text-white mb-2 text-balance text-base">{item.title}</h3>
              <p className="text-sm text-white/88 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <WaveDivider
        overlay
        position="bottom"
        className="absolute bottom-0 inset-x-0 z-[2]"
        fill="#d4e4f7"
        variant="soft"
      />
    </section>
  );
}
