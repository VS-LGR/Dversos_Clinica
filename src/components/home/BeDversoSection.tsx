"use client";

import Link from "next/link";

export default function BeDversoSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06]" aria-labelledby="be-dverso-title">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2 text-center">Seja DVERSO</p>
        <h2 id="be-dverso-title" className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4 text-center">
          Por que ser DVERSO
        </h2>
        <p className="text-primary/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          A DVERSO conecta acolhimento clínico e desenvolvimento profissional. Atendemos pacientes e famílias com cuidado objetivo e amigável, e também oferecemos formação para profissionais.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-primary/[0.1] bg-[#fdfbf9] p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Para clientes e famílias</h3>
            <p className="text-sm text-primary/80 mb-4">
              Atendimento integrado, equipe multiprofissional e orientação clara em cada etapa do acompanhamento.
            </p>
            <Link href="/areas" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Ver áreas de atendimento
            </Link>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-[#fdfbf9] p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Para profissionais</h3>
            <p className="text-sm text-primary/80 mb-4">
              Cursos, formação e palestras com foco em prática clínica atual, manejo de casos e atuação interdisciplinar.
            </p>
            <span className="text-sm font-medium text-primary/75">Programação em breve</span>
          </article>
        </div>
      </div>
    </section>
  );
}
