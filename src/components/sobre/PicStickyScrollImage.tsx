"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PIC_SCROLL_GALLERY } from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

const SECTION_ID = "como-funciona";
const HEADER_OFFSET_PX = 112;
/** Suavização do progresso (0–1). Quanto menor, mais “pesado” e fluido. */
const LERP = 0.085;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function readTargetProgress() {
  const section = document.getElementById(SECTION_ID);
  if (!section) return 0;

  const rect = section.getBoundingClientRect();
  const scrollable = Math.max(
    1,
    section.offsetHeight - window.innerHeight * 0.55,
  );
  const traveled = HEADER_OFFSET_PX - rect.top;
  return clamp(traveled / scrollable, 0, 1);
}

export default function PicStickyScrollImage() {
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const total = PIC_SCROLL_GALLERY.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(mq.matches);
    syncMotion();
    mq.addEventListener("change", syncMotion);
    return () => mq.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const syncTarget = () => {
      targetRef.current = readTargetProgress();
      if (reduceMotion) {
        currentRef.current = targetRef.current;
        setProgress(targetRef.current);
      }
    };

    syncTarget();
    window.addEventListener("scroll", syncTarget, { passive: true });
    window.addEventListener("resize", syncTarget);

    const tick = () => {
      if (!reduceMotion) {
        const diff = targetRef.current - currentRef.current;
        if (Math.abs(diff) > 0.0008) {
          currentRef.current += diff * LERP;
          setProgress(currentRef.current);
        } else if (currentRef.current !== targetRef.current) {
          currentRef.current = targetRef.current;
          setProgress(currentRef.current);
        }
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", syncTarget);
      window.removeEventListener("resize", syncTarget);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  const eased = easeInOutCubic(clamp(progress, 0, 1));
  const continuous = eased * Math.max(0, total - 1);
  const baseIndex = Math.min(total - 1, Math.floor(continuous));
  const nextIndex = Math.min(total - 1, baseIndex + 1);
  const blend = continuous - baseIndex;
  const activeIndex = blend < 0.5 ? baseIndex : nextIndex;

  const active = PIC_SCROLL_GALLERY[activeIndex] ?? PIC_SCROLL_GALLERY[0];
  const blob = pastelByIndex(PASTEL_SURFACE_SOFT, activeIndex);

  return (
    <div className="w-full max-w-md mx-auto lg:ml-auto h-full min-h-0">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative min-w-0">
          <div
            className={`absolute -inset-2 sm:-inset-3 rounded-[2.5rem] ${blob} opacity-70 blur-[1px] transition-colors duration-700`}
            aria-hidden
          />
          <div
            className="relative aspect-[4/3] rounded-[2.25rem] overflow-hidden border border-primary/[0.08] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.14)] bg-primary-pale/80"
            aria-live="polite"
          >
            {PIC_SCROLL_GALLERY.map((slide, index) => {
              let opacity = 0;
              if (reduceMotion) {
                opacity = index === activeIndex ? 1 : 0;
              } else if (index === baseIndex && index === nextIndex) {
                opacity = 1;
              } else if (index === baseIndex) {
                opacity = 1 - blend;
              } else if (index === nextIndex) {
                opacity = blend;
              }

              return (
                <div
                  key={slide.src}
                  className="absolute inset-0"
                  style={{
                    opacity,
                    zIndex: index === nextIndex ? 2 : 1,
                    transition: reduceMotion ? "none" : undefined,
                  }}
                  aria-hidden={opacity < 0.2}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className={
                      slide.fit === "contain"
                        ? "object-contain p-3 sm:p-4"
                        : "object-cover object-center"
                    }
                    sizes="(max-width: 1024px) 92vw, 448px"
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>

          {total > 1 ? (
            <div
              className="mt-3 flex justify-center gap-1.5"
              role="tablist"
              aria-label="Fotos da clínica nesta seção"
            >
              {PIC_SCROLL_GALLERY.map((slide, index) => (
                <span
                  key={slide.src}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Imagem ${index + 1} de ${total}`}
                  className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? "w-5 bg-primary"
                      : "w-1.5 bg-primary/25"
                  }`}
                />
              ))}
            </div>
          ) : null}

          <p className="sr-only">{active.alt}</p>
        </div>
      </div>
    </div>
  );
}
