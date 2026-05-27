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
          Mais do que uma clínica, construímos uma cultura de cuidado, aprendizado e pertencimento — para famílias, aprendizes e profissionais que acreditam em evidências e respeito à neurodiversidade.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-aqua/80 p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Para famílias e aprendizes</h3>
            <p className="text-sm text-primary/80 mb-4">
              Conheça nossa história, metodologia de atendimento, espaços terapêuticos e áreas de atuação integradas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/sobre" className="text-sm font-medium text-primary hover:underline underline-offset-2">
                Sobre a clínica
              </Link>
              <Link href="/espacos" className="text-sm font-medium text-primary hover:underline underline-offset-2">
                Nossos espaços
              </Link>
            </div>
          </article>
          <article className="rounded-xl border border-primary/[0.1] bg-pastel-peach/80 p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Para profissionais — #SEJADVERSO</h3>
            <p className="text-sm text-primary/80 mb-4">
              Supervisão clínica contínua, formação baseada em evidências e equipe colaborativa. Faça parte da DVERSO.
            </p>
            <Link href="/seja-colaborador" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Seja colaborador
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
