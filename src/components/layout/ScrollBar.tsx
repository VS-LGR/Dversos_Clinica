"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PAW_SRC = "https://i.imgur.com/dqEtbXK.png";

const PAWS = [
  { size: 10, opacity: 0.22 },
  { size: 14, opacity: 0.18 },
  { size: 12, opacity: 0.26 },
  { size: 16, opacity: 0.15 },
  { size: 11, opacity: 0.2 },
  { size: 13, opacity: 0.19 },
  { size: 9, opacity: 0.24 },
  { size: 15, opacity: 0.17 },
  { size: 10, opacity: 0.21 },
  { size: 12, opacity: 0.2 },
  { size: 14, opacity: 0.18 },
  { size: 11, opacity: 0.23 },
  { size: 13, opacity: 0.19 },
  { size: 10, opacity: 0.22 },
  { size: 15, opacity: 0.16 },
  { size: 12, opacity: 0.2 },
  { size: 14, opacity: 0.17 },
  { size: 11, opacity: 0.21 },
  { size: 10, opacity: 0.23 },
  { size: 13, opacity: 0.18 },
];

const SMOOTHING = 0.09;

export default function ScrollBar() {
  const groupRef = useRef<HTMLDivElement>(null);
  const currentYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const getTargetY = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return 0;
      const progress = window.scrollY / docHeight;
      const groupHeight = group.offsetHeight;
      const maxOffset = groupHeight - window.innerHeight;
      return -progress * Math.max(0, maxOffset);
    };

    currentYRef.current = getTargetY();
    group.style.transform = `translateY(${currentYRef.current}px)`;

    const tick = () => {
      const target = getTargetY();
      const current = currentYRef.current;
      const next = current + (target - current) * SMOOTHING;

      if (Math.abs(next - current) > 0.5 || Math.abs(target - current) > 0.5) {
        currentYRef.current = next;
        group.style.transform = `translateY(${next}px)`;
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
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Sombra para fora (profundidade para a direita) */}
      <div
        className="absolute inset-0 shadow-[ 8px_0_32px_rgba(26,43,86,0.4) ]"
        aria-hidden
      />
      {/* Faixa com gradiente de profundidade no eixo X (para dentro da página) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset -14px 0 28px -8px rgba(0,0,0,0.25)",
        }}
      />
      {/* Patinhas distribuídas por toda a faixa, acompanhando o scroll */}
      <div
        ref={groupRef}
        className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-between will-change-transform py-6"
      >
        {PAWS.map((paw, i) => (
          <span
            key={i}
            className="inline-block flex-shrink-0"
            style={{ opacity: paw.opacity }}
          >
            <Image
              src={PAW_SRC}
              alt=""
              width={paw.size}
              height={paw.size}
              className="object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
