"use client";

import Image from "next/image";
import { useState } from "react";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

type CozyVariant = "landscape" | "portrait" | "square" | "mosaic" | "organic";
type FitMode = "cover" | "contain";

interface CozyImageFrameProps {
  src: string;
  alt: string;
  variant?: CozyVariant;
  index?: number;
  priority?: boolean;
  className?: string;
  fit?: FitMode;
}

const aspect: Record<CozyVariant, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  mosaic: "aspect-[5/4]",
  organic: "aspect-square",
};

export default function CozyImageFrame({
  src,
  alt,
  variant = "landscape",
  index = 0,
  priority = false,
  className = "",
  fit = "cover",
}: CozyImageFrameProps) {
  const [failed, setFailed] = useState(false);
  const rotate = index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";
  const blob = pastelByIndex(PASTEL_SURFACE_SOFT, index);
  const isOrganic = variant === "organic";
  const roundedClass = isOrganic ? "rounded-full" : "rounded-[2.25rem]";
  const blobRounded = isOrganic ? "rounded-full" : "rounded-[2.5rem]";

  if (failed) {
    return (
      <div
        className={`relative ${aspect[variant]} ${roundedClass} ${blob} border border-primary/[0.08] flex items-center justify-center ${className}`}
      >
        <span className="text-primary/40 text-sm px-4 text-center">Imagem em breve</span>
      </div>
    );
  }

  return (
    <div className={`relative min-w-0 ${className}`}>
      <div
        className={`absolute -inset-2 sm:-inset-3 ${blobRounded} ${blob} opacity-80 blur-[1px]`}
        aria-hidden
      />
      <div
        className={`relative ${aspect[variant]} ${roundedClass} overflow-hidden border border-primary/[0.08] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.14)] ${rotate} ${fit === "contain" ? "bg-primary-pale/80" : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={fit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"}
          sizes={
            variant === "mosaic"
              ? "(max-width: 640px) 50vw, 25vw"
              : variant === "organic"
                ? "(max-width: 768px) 80vw, 300px"
                : "(max-width: 768px) 100vw, 50vw"
          }
          priority={priority}
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  );
}
