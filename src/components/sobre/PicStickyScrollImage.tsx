"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PIC_SCROLL_GALLERY } from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

const SECTION_ID = "como-funciona";
const HEADER_OFFSET_PX = 112;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function PicStickyScrollImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = PIC_SCROLL_GALLERY.length;

  const updateFromScroll = useCallback(() => {
    const section = document.getElementById(SECTION_ID);
    if (!section || total <= 1) return;

    const rect = section.getBoundingClientRect();
    const scrollable = Math.max(1, section.offsetHeight - window.innerHeight + HEADER_OFFSET_PX);
    const traveled = HEADER_OFFSET_PX - rect.top;
    const progress = clamp(traveled / scrollable, 0, 1);
    const nextIndex = Math.min(total - 1, Math.floor(progress * total));
    setActiveIndex(nextIndex);
  }, [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(mq.matches);
    syncMotion();
    mq.addEventListener("change", syncMotion);
    return () => mq.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [updateFromScroll]);

  const active = PIC_SCROLL_GALLERY[activeIndex] ?? PIC_SCROLL_GALLERY[0];
  const blob = pastelByIndex(PASTEL_SURFACE_SOFT, activeIndex);

  return (
    <div className="w-full max-w-md mx-auto lg:ml-auto h-full min-h-0">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative min-w-0">
          <div
            className={`absolute -inset-2 sm:-inset-3 rounded-[2.5rem] ${blob} opacity-80 blur-[1px]`}
            aria-hidden
          />
          <div
            className="relative aspect-[4/3] rounded-[2.25rem] overflow-hidden border border-primary/[0.08] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.14)] bg-primary-pale/80"
            aria-live="polite"
          >
            {PIC_SCROLL_GALLERY.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.src}
                  className={`absolute inset-0 ${
                    reduceMotion
                      ? isActive
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                      : `transition-opacity duration-500 ease-out ${
                          isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`
                  }`}
                  aria-hidden={!isActive}
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
                  className={`block h-1.5 rounded-full transition-all ${
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
