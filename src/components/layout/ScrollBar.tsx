"use client";

import { useEffect, useRef } from "react";

const SHINE_HEIGHT_VH = 35;

export default function ScrollBar() {
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shine = shineRef.current;
    if (!shine) return;

    let rafId: number;

    const updateShine = () => {
      const y = window.scrollY + window.innerHeight / 2 - (window.innerHeight * SHINE_HEIGHT_VH) / 100 / 2;
      shine.style.transform = `translateY(${y}px)`;
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateShine);
    };

    updateShine();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 right-0 bottom-0 w-20 sm:w-24 bg-primary z-30 pointer-events-none overflow-hidden shadow-[ -8px_0_32px_rgba(26,43,86,0.4) ]"
      aria-hidden
    >
      <div
        ref={shineRef}
        className="absolute left-0 right-0 h-[35vh] will-change-transform"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.09) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
