import type { ReactNode } from "react";

/** Silhueta orgânica ampla — decoração de fundo, sem recortar o conteúdo. */
const SPLATTER_PATH =
  "M 0.06 0.10 C 0.18 0.03 0.38 0.05 0.55 0.08 C 0.72 0.04 0.90 0.12 0.94 0.28 " +
  "C 0.98 0.40 0.96 0.55 0.92 0.68 C 0.97 0.78 0.90 0.90 0.78 0.94 C 0.66 0.98 0.52 0.96 0.40 0.92 " +
  "C 0.28 0.97 0.14 0.94 0.08 0.82 C 0.03 0.72 0.04 0.58 0.08 0.46 C 0.02 0.34 0.03 0.20 0.06 0.10 Z " +
  "M 0.90 0.74 C 0.93 0.78 0.91 0.83 0.87 0.84 C 0.83 0.85 0.80 0.81 0.82 0.77 C 0.84 0.73 0.88 0.72 0.90 0.74 Z " +
  "M 0.10 0.78 C 0.13 0.82 0.11 0.87 0.07 0.88 C 0.04 0.86 0.04 0.81 0.07 0.79 C 0.09 0.77 0.10 0.77 0.10 0.78 Z";

interface HeroSplatterCardProps {
  children: ReactNode;
}

export default function HeroSplatterCard({ children }: HeroSplatterCardProps) {
  return (
    <div className="relative mx-auto min-w-0 max-w-full px-1 sm:px-2 py-2">
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden focusable="false">
        <defs>
          <clipPath id="hero-splatter" clipPathUnits="objectBoundingBox">
            <path d={SPLATTER_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* Fundo splatter branco — apenas decoração, conteúdo fica por cima sem clip */}
      <div
        className="pointer-events-none absolute inset-0 bg-white shadow-[0_8px_32px_-12px_rgba(26,43,86,0.10)] hero-splatter-clip"
        aria-hidden
      />

      <div className="relative text-center px-5 sm:px-10 md:px-14 py-7 sm:py-10 md:py-12 min-w-0 max-w-full">
        {children}
      </div>
    </div>
  );
}
