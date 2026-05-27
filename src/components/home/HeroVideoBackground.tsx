"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/video/hero-bg.webm";
const HERO_POSTER_SRC = "/images/hero-poster.webp";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      el.pause();
      return;
    }

    const play = () => {
      el.play().catch(() => {
        /* autoplay bloqueado — poster permanece visível */
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(play, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = setTimeout(play, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
      >
        <source src={HERO_VIDEO_SRC} type="video/webm" />
      </video>

      {/* Camada base quase imperceptivel para profundidade. */}
      <div className="absolute inset-0 bg-black/[0.045]" />
      {/* Gradiente escuro sutil para tirar aspecto chapado sem pesar. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_0%,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.02)_58%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/84 to-primary-pale/92" />
    </div>
  );
}
