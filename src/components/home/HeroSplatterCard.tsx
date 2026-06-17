import type { ReactNode } from "react";

/**
 * Silhueta com bordas onduladas (topo e base) — inspirada no WaveDivider soft.
 * Coordenadas normalizadas 0–100; preserveAspectRatio="none" estica as ondas na largura.
 */
const WAVE_CARD_PATH =
  "M 3 16 " +
  "C 10 9, 18 20, 26 13 " +
  "C 34 7, 42 19, 50 12 " +
  "C 58 6, 66 18, 74 12 " +
  "C 82 7, 90 17, 97 13 " +
  "C 99 15, 99 24, 98 38 " +
  "C 99 52, 98 66, 98 78 " +
  "C 99 86, 96 92, 90 89 " +
  "C 84 93, 78 86, 72 90 " +
  "C 66 94, 58 86, 50 91 " +
  "C 42 96, 34 87, 26 91 " +
  "C 18 95, 10 88, 4 86 " +
  "C 2 80, 3 64, 3 50 " +
  "C 3 36, 2 24, 3 16 Z";

const WAVE_CARD_ACCENT =
  "M 5 18 " +
  "C 12 12, 20 21, 28 15 " +
  "C 36 10, 44 20, 52 14 " +
  "C 60 9, 68 19, 76 14 " +
  "C 84 10, 92 18, 95 16 " +
  "L 95 82 " +
  "C 92 88, 84 82, 76 86 " +
  "C 68 90, 60 83, 52 87 " +
  "C 44 91, 36 83, 28 86 " +
  "C 20 89, 12 84, 5 82 Z";

interface HeroSplatterCardProps {
  children: ReactNode;
}

export default function HeroSplatterCard({ children }: HeroSplatterCardProps) {
  return (
    <div className="relative mx-auto min-w-0 max-w-full px-1 sm:px-2 py-2">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_8px_28px_rgba(26,43,86,0.10)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        focusable="false"
      >
        <path d={WAVE_CARD_ACCENT} fill="#fff8f2" opacity={0.55} />
        <path d={WAVE_CARD_PATH} fill="#ffffff" />
      </svg>

      <div className="relative text-center px-5 sm:px-10 md:px-14 py-7 sm:py-10 md:py-12 min-w-0 max-w-full">
        {children}
      </div>
    </div>
  );
}
