"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CLINIC_SPACES } from "@/lib/constants/spacesContent";
import { spaceImageAlt, spaceMediaFor } from "@/lib/constants/clinicMedia";

const AUTOPLAY_MS = 7000;

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
  "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm hover:bg-pastel-mint/40 transition-colors";

export default function SpacesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const total = CLINIC_SPACES.length;

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
      aria-label="Ambientes da clínica"
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
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 mb-6">
        {total > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} hidden md:flex`}
            aria-label="Ambiente anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        <div className="relative flex-1 min-w-0">
          {CLINIC_SPACES.map((space, index) => {
            const media = spaceMediaFor(space);
            const isActive = index === activeIndex;
            return (
              <article
                key={space.slug}
                className={isActive ? "block" : "hidden"}
                aria-hidden={!isActive}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-pastel-mint/30 ring-1 ring-primary/10 shadow-[0_12px_40px_-16px_rgba(26,43,86,0.2)] mb-5">
                  <Image
                    src={media.cover}
                    alt={spaceImageAlt(space, 0)}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 960px"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-3 text-center sm:text-left">
                  {space.title}
                </h3>
                <div className="space-y-3 text-primary/85 leading-relaxed text-sm sm:text-base text-center sm:text-left max-w-3xl">
                  {space.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {total > 1 && (
          <button
            type="button"
            onClick={goNext}
            className={`${arrowBtnClass} hidden md:flex`}
            aria-label="Próximo ambiente"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 min-w-0">
          <button
            type="button"
            onClick={goPrev}
            className={`${arrowBtnClass} md:hidden`}
            aria-label="Ambiente anterior"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-[min(100%,320px)] sm:max-w-none"
            role="tablist"
            aria-label="Selecionar ambiente"
          >
            {CLINIC_SPACES.map((space, index) => (
              <button
                key={space.slug}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`${space.title} (${index + 1} de ${total})`}
                onClick={() => goTo(index)}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full"
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-primary/25 hover:bg-primary/45"
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
            aria-label="Próximo ambiente"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}

      <ul className="sr-only">
        {CLINIC_SPACES.map((space) => (
          <li key={`seo-${space.slug}`}>
            <h3>{space.title}</h3>
            {space.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
