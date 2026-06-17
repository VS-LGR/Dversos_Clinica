import type { ReactNode } from "react";

const SPLATTER_PATH =
  "M 0.12 0.06 C 0.28 0.01 0.48 0.04 0.64 0.10 C 0.82 0.08 0.94 0.22 0.93 0.38 " +
  "C 0.98 0.44 0.99 0.58 0.91 0.66 C 0.96 0.76 0.90 0.88 0.78 0.92 C 0.84 0.97 0.72 0.99 0.60 0.96 " +
  "C 0.48 0.99 0.36 0.94 0.28 0.86 C 0.18 0.93 0.08 0.88 0.06 0.76 C 0.02 0.68 0.04 0.56 0.10 0.46 " +
  "C 0.04 0.36 0.05 0.22 0.12 0.06 Z " +
  "M 0.88 0.72 C 0.91 0.76 0.90 0.82 0.86 0.84 C 0.82 0.86 0.78 0.82 0.80 0.77 C 0.82 0.73 0.86 0.70 0.88 0.72 Z " +
  "M 0.14 0.82 C 0.17 0.86 0.15 0.92 0.10 0.93 C 0.06 0.92 0.05 0.86 0.08 0.83 C 0.11 0.80 0.14 0.80 0.14 0.82 Z " +
  "M 0.04 0.42 C 0.07 0.45 0.06 0.50 0.03 0.51 C 0.01 0.48 0.01 0.44 0.04 0.42 Z";

interface HeroSplatterCardProps {
  children: ReactNode;
}

export default function HeroSplatterCard({ children }: HeroSplatterCardProps) {
  return (
    <div className="relative mx-auto min-w-0 max-w-full">
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden focusable="false">
        <defs>
          <clipPath id="hero-splatter" clipPathUnits="objectBoundingBox">
            <path d={SPLATTER_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div
        className="pointer-events-none absolute inset-0 bg-pastel-peach/25 scale-[1.04] blur-[1.5px] hero-splatter-clip"
        aria-hidden
      />

      <div className="relative text-center bg-white/88 backdrop-blur-sm shadow-[0_8px_32px_-12px_rgba(26,43,86,0.08)] p-5 sm:p-8 md:p-12 min-w-0 max-w-full hero-splatter-clip">
        {children}
      </div>
    </div>
  );
}
