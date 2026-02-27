"use client";

import { useEffect, useRef } from "react";

const SHINE_HEIGHT_VH = 38;
const SMOOTHING = 0.09; // quanto menor, mais suave (0.05–0.15)

export default function ScrollBar() {
  const shineRef = useRef<HTMLDivElement>(null);
  const currentYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const shine = shineRef.current;
    if (!shine) return;

    const getTargetY = () =>
      window.scrollY + window.innerHeight / 2 - (window.innerHeight * SHINE_HEIGHT_VH) / 100 / 2;

    currentYRef.current = getTargetY();
    shine.style.transform = `translateY(${currentYRef.current}px)`;

    const tick = () => {
      const target = getTargetY();
      const current = currentYRef.current;
      const next = current + (target - current) * SMOOTHING;

      if (Math.abs(next - current) > 0.5 || Math.abs(target - current) > 0.5) {
        currentYRef.current = next;
        shine.style.transform = `translateY(${next}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 right-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Sombra para fora (profundidade para a esquerda) */}
      <div
        className="absolute inset-0 shadow-[ -8px_0_32px_rgba(26,43,86,0.4) ]"
        aria-hidden
      />
      {/* Faixa com gradiente de profundidade no eixo X (para dentro da página) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset 14px 0 28px -8px rgba(0,0,0,0.25)",
        }}
      />
      {/* Brilho suave que acompanha o scroll */}
      <div
        ref={shineRef}
        className="absolute left-0 right-0 h-[38vh] will-change-transform"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.07) 55%, transparent 100%)",
        }}
      />
    </div>
  );
}
