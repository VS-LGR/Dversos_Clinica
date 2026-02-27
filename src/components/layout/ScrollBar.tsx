"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PAW_SRC = "https://i.imgur.com/dqEtbXK.png";

function makePaws(count: number, sizeRange: [number, number], opacityRange: [number, number]) {
  return Array.from({ length: count }, (_, i) => {
    const t = count > 1 ? i / (count - 1) : 0.5;
    const size = Math.round(sizeRange[0] + t * (sizeRange[1] - sizeRange[0]));
    const opacity = opacityRange[0] + t * (opacityRange[1] - opacityRange[0]);
    return { size, opacity, delay: (i * 180) % 2000 };
  });
}

const COLUMN_1 = makePaws(8, [9, 14], [0.2, 0.26]);
const COLUMN_2 = makePaws(10, [10, 16], [0.15, 0.22]);
const COLUMN_3 = makePaws(7, [8, 13], [0.18, 0.24]);

const COLUMNS = [COLUMN_1, COLUMN_2, COLUMN_3];
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
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden hidden sm:block"
      aria-hidden
    >
      <div
        className="absolute inset-0 shadow-[ 8px_0_32px_rgba(26,43,86,0.4) ]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset -14px 0 28px -8px rgba(0,0,0,0.25)",
        }}
      />
      {/* 3 colunas de patinhas com movimento, acompanhando o scroll */}
      <div
        ref={groupRef}
        className="absolute inset-0 flex flex-row items-stretch justify-between will-change-transform px-1 py-6 gap-0.5"
      >
        {COLUMNS.map((paws, colIndex) => (
          <div
            key={colIndex}
            className="flex-1 flex flex-col items-center justify-between min-h-0"
          >
            {paws.map((paw, i) => (
              <span
                key={`${colIndex}-${i}`}
                className="inline-block flex-shrink-0 animate-paw-float"
                style={{
                  opacity: paw.opacity,
                  animationDelay: `${paw.delay}ms`,
                }}
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
        ))}
      </div>
    </div>
  );
}
