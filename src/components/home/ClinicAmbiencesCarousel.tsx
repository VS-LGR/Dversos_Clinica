"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
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
  "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-sm hover:bg-primary-pale transition-colors";

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
      className="relative max-w-2xl mx-auto mb-10 min-w-0"
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
            className={`${arrowBtnClass} hidden sm:flex`}
            aria-label="Imagem anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        <div
          className="relative flex-1 min-w-0 h-[200px] min-[400px]:h-[220px] sm:h-[280px] md:h-[320px]"
          aria-live="polite"
        >
          {HOME_MOSAIC_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <CozyImageFrame
                src={slide.src}
                alt={slide.alt}
                variant="landscape"
                index={index}
                priority={index === 0}
                fit="contain"
                fillContainer
                className="h-full w-full max-w-full"
              />
            </div>
          ))}
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
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4">
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
                    index === activeIndex ? "bg-primary" : "bg-primary/25 hover:bg-primary/40"
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
