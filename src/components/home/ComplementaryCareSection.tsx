"use client";

export default function ComplementaryCareSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#fafbfc] border-t border-primary/[0.06]" aria-labelledby="complementary-title">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2 text-center">Atendimentos complementares</p>
        <h2 id="complementary-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-center">
          Abordagem neuroafirmativa e cuidado interdisciplinar
        </h2>
        <p className="text-primary/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          O atendimento neuroafirmativo da Clínica DVERSO segue correntes atuais, respeitando singularidades e promovendo desenvolvimento com acolhimento, previsibilidade e autonomia.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="rounded-xl border border-primary/[0.08] bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-primary mb-2">Escuta ativa da família</h3>
            <p className="text-sm text-primary/80">Participação da rede de apoio no planejamento e acompanhamento dos objetivos terapêuticos.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.08] bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-primary mb-2">Integração entre áreas</h3>
            <p className="text-sm text-primary/80">Comunicação clínica entre especialidades para intervenções coerentes e objetivas.</p>
          </article>
          <article className="rounded-xl border border-primary/[0.08] bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-primary mb-2">Foco em funcionalidade</h3>
            <p className="text-sm text-primary/80">Priorização de ganhos aplicáveis à rotina da criança, adolescente, adulto e família.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
