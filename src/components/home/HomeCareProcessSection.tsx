import Link from "next/link";
import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import { CARE_PROCESS_STEPS } from "@/lib/constants/processFlow";

export default function HomeCareProcessSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-t border-primary/[0.06]"
      aria-labelledby="care-process-title"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-2">
          Metodologia
        </p>
        <h2
          id="care-process-title"
          className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-4"
        >
          {CARE_SESSION_INFO.title}
        </h2>
        <p className="text-primary/85 leading-relaxed mb-8 max-w-3xl">
          {CARE_SESSION_INFO.intro}
        </p>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {CARE_PROCESS_STEPS.map((step) => (
            <li
              key={step.step}
              className="rounded-xl border border-primary/[0.1] bg-pastel-mint/40 p-4"
            >
              <span className="text-xs font-semibold text-primary/60">
                Etapa {step.step + 1}
              </span>
              <h3 className="font-semibold text-primary text-sm mt-1 mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-primary/75 leading-relaxed line-clamp-4">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <Link
          href={CARE_SESSION_INFO.linkHref}
          className="inline-flex text-sm font-medium text-primary hover:underline underline-offset-2"
        >
          {CARE_SESSION_INFO.linkLabel} →
        </Link>
      </div>
    </section>
  );
}
