import Link from "next/link";
import { CARE_PROCESS_STEPS } from "@/lib/constants/processFlow";

interface CareProcessTimelineProps {
  showIntro?: boolean;
  intro?: string;
  linkToFull?: boolean;
  compact?: boolean;
}

export default function CareProcessTimeline({
  showIntro = false,
  intro,
  linkToFull = false,
  compact = false,
}: CareProcessTimelineProps) {
  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      {showIntro && intro ? (
        <p className="text-primary/85 leading-relaxed max-w-3xl">{intro}</p>
      ) : null}
      <ol className="space-y-4">
        {CARE_PROCESS_STEPS.map((item) => (
          <li
            key={item.step}
            className="flex gap-4 rounded-xl border border-primary/[0.1] bg-white p-5 shadow-sm"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pastel-mint text-sm font-bold text-primary"
              aria-hidden
            >
              {item.step + 1}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-primary/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
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
