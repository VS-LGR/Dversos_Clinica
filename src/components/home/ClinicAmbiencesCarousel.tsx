"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOME_MOSAIC_SLIDES } from "@/lib/constants/clinicMedia";

const AUTOPLAY_MS = 5000;

const WAVE_CLIP_PATH =
  "M 0 0.07 C 0.12 0.02 0.28 0.05 0.42 0.03 C 0.56 0.06 0.72 0.02 0.88 0.05 C 0.96 0.06 1 0.08 1 0.10 " +
  "L 1 0.90 C 0.96 0.94 0.82 0.97 0.68 0.95 C 0.54 0.98 0.38 0.94 0.24 0.96 C 0.12 0.98 0.04 0.94 0 0.90 Z";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

const arrowBtnClass =
  "flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-lg hover:bg-white/25 transition-colors backdrop-blur-sm";

export default function ClinicAmbiencesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const total = HOME_MOSAIC_SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isPaused, prefersReducedMotion, total]);

  useEffect(() => {
    const onVisibility = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div
      ref={regionRef}
      className="relative max-w-6xl mx-auto min-w-0 w-full"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria dos ambientes da clínica"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!regionRef.current?.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden focusable="false">
        <defs>
          <clipPath id="ambiences-wave-clip" clipPathUnits="objectBoundingBox">
            <path d={WAVE_CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        {total > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} hidden sm:flex`}
            aria-label="Imagem anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        <div
          className="relative flex-1 min-w-0 w-full h-[280px] min-[400px]:h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] ambiences-carousel-clip shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/20"
          aria-live="polite"
        >
          {HOME_MOSAIC_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
                priority={index === 0}
              />
            </div>
          ))}

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/25"
            aria-hidden
          />
        </div>

        {total > 1 && (
          <button
            type="button"
            onClick={goNext}
            className={`${arrowBtnClass} hidden sm:flex`}
            aria-label="Próxima imagem"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} sm:hidden`}
            aria-label="Imagem anterior"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex justify-center gap-1.5 sm:gap-2" role="tablist" aria-label="Selecionar imagem">
            {HOME_MOSAIC_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Imagem ${index + 1} de ${total}: ${slide.alt}`}
                onClick={() => goTo(index)}
                className="flex h-11 w-11 items-center justify-center rounded-full"
              >
                <span
                  className={`block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-white" : "bg-white/35 hover:bg-white/55"
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className={`${arrowBtnClass} sm:hidden`}
            aria-label="Próxima imagem"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
