import Link from "next/link";
import { CARE_PROCESS_STEPS } from "@/lib/constants/processFlow";
import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";
import {
  PASTEL_STEP_MARKER,
  PASTEL_SURFACE_SOFT,
  pastelByIndex,
} from "@/lib/constants/pastelPalette";

type TimelineVariant = "vertical" | "compact" | "session";

interface CareProcessTimelineProps {
  variant?: TimelineVariant;
  showIntro?: boolean;
  intro?: string;
  linkToFull?: boolean;
}

export function CareSessionCard() {
  return (
    <article className="rounded-[2rem] border border-primary/[0.1] bg-pastel-mint/25 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-2">
        Cada sessão
      </p>
      <h3 className="text-lg font-bold text-primary mb-3">
        Consultas de 1 hora
      </h3>
      <p className="text-sm text-primary/80 leading-relaxed">
        {CARE_SESSION_INFO.intro}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-primary/75">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pastel-aqua" aria-hidden />
          TAA (cão de terapia) quando indicado clinicamente
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pastel-mint" aria-hidden />
          AT - Acompanhamento Terapêutico integrado ao plano
        </li>
      </ul>
    </article>
  );
}

function StepMarker({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-2 ring-white ${pastelByIndex(PASTEL_STEP_MARKER, index)} ${className}`}
      aria-hidden
    >
      {index + 1}
    </span>
  );
}

export default function CareProcessTimeline({
  variant = "vertical",
  showIntro = false,
  intro,
  linkToFull = false,
}: CareProcessTimelineProps) {
  if (variant === "session") {
    return <CareSessionCard />;
  }

  if (variant === "compact") {
    return (
      <div className="min-w-0">
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 md:contents">
          <ol className="flex gap-4 overflow-x-auto overscroll-x-contain pb-2 snap-x snap-mandatory scrollbar-thin md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:overscroll-auto">
            {CARE_PROCESS_STEPS.map((item, index) => (
              <li
                key={item.step}
                className={`w-[85vw] max-w-[280px] shrink-0 snap-start rounded-xl border p-4 md:w-auto md:max-w-none md:min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
              >
                <div className="flex items-start gap-3 mb-2 min-w-0">
                  <StepMarker index={index} className="h-8 w-8 text-xs shrink-0" />
                  <h3 className="font-semibold text-primary text-sm leading-snug break-words min-w-0">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-primary/75 leading-relaxed break-words">
                  {item.shortDescription}
                </p>
              </li>
            ))}
          </ol>
        </div>
        {linkToFull ? (
          <p className="mt-4">
            <Link
              href={CARE_SESSION_INFO.linkHref}
              className="text-sm font-medium text-primary hover:underline underline-offset-2"
            >
              {CARE_SESSION_INFO.linkLabel} →
            </Link>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {showIntro && intro ? (
        <p className="text-primary/85 leading-relaxed max-w-3xl mb-8">{intro}</p>
      ) : null}
      <ol className="relative space-y-0">
        {CARE_PROCESS_STEPS.map((item, index) => {
          const isLast = index === CARE_PROCESS_STEPS.length - 1;
          return (
            <li key={item.step} className="relative flex gap-4 pb-8">
              {!isLast ? (
                <span
                  className="absolute left-[18px] top-9 bottom-0 w-0.5 bg-primary/15"
                  aria-hidden
                />
              ) : null}
              <StepMarker index={index} className="relative z-10" />
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-semibold text-primary mb-1 break-words">{item.title}</h3>
                <p className="text-sm text-primary/80 leading-relaxed break-words">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      {linkToFull ? (
        <p>
          <Link
            href="/sobre#como-funciona"
            className="text-sm font-medium text-primary hover:underline underline-offset-2"
          >
            Ver todas as etapas na página Sobre →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
