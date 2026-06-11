"use client";

import Image from "next/image";
import { useState } from "react";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

type CozyVariant = "landscape" | "portrait" | "square" | "mosaic";

interface CozyImageFrameProps {
  src: string;
  alt: string;
  variant?: CozyVariant;
  index?: number;
  priority?: boolean;
  className?: string;
}

const aspect: Record<CozyVariant, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  mosaic: "aspect-[5/4]",
};

export default function CozyImageFrame({
  src,
  alt,
  variant = "landscape",
  index = 0,
  priority = false,
  className = "",
}: CozyImageFrameProps) {
  const [failed, setFailed] = useState(false);
  const rotate = index % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]";
  const blob = pastelByIndex(PASTEL_SURFACE_SOFT, index);

  if (failed) {
    return (
      <div
        className={`relative ${aspect[variant]} rounded-2xl sm:rounded-3xl ${blob} border border-primary/[0.08] flex items-center justify-center ${className}`}
      >
        <span className="text-primary/40 text-sm px-4 text-center">Imagem em breve</span>
      </div>
    );
  }

  return (
    <div className={`relative min-w-0 ${className}`}>
      <div
        className={`absolute -inset-2 sm:-inset-3 rounded-[1.75rem] ${blob} opacity-80 blur-[1px]`}
        aria-hidden
      />
      <div
        className={`relative ${aspect[variant]} rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/[0.08] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.18)] ${rotate}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={
            variant === "mosaic"
              ? "(max-width: 640px) 50vw, 25vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          priority={priority}
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  );
}
