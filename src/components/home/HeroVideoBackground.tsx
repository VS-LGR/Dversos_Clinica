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
        className="absolute inset-0 h-full w-full object-cover object-[center_28%] sm:object-[center_35%] opacity-20"
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER_SRC}
      >
        <source src={HERO_VIDEO_SRC} type="video/webm" />
      </video>

    </div>
  );
}
