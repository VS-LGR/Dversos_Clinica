"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOME_MOSAIC_SLIDES } from "@/lib/constants/clinicMedia";

const AUTOPLAY_MS = 5000;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
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
  "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-md hover:bg-white/25 transition-colors backdrop-blur-sm";

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
      className="relative w-full min-w-0 max-w-5xl mx-auto"
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
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {total > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} hidden md:flex`}
            aria-label="Imagem anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        <div
          className="relative flex-1 min-w-0 w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-primary-light/20 ring-1 ring-white/20 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.5)]"
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
                className="object-cover object-center"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 960px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <button
            type="button"
            onClick={goNext}
            className={`${arrowBtnClass} hidden md:flex`}
            aria-label="Próxima imagem"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-5 min-w-0">
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} md:hidden`}
            aria-label="Imagem anterior"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-[min(100%,280px)] sm:max-w-none"
            role="tablist"
            aria-label="Selecionar imagem"
          >
            {HOME_MOSAIC_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Imagem ${index + 1} de ${total}: ${slide.alt}`}
                onClick={() => goTo(index)}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full"
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-colors ${
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
            className={`${arrowBtnClass} md:hidden`}
            aria-label="Próxima imagem"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
