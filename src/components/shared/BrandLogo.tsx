import Image from "next/image";
import {
  BRAND_LOGO_PRIMARY,
  BRAND_LOGO_SOLO,
} from "@/lib/constants/clinicMedia";

type LogoVariant = "primary" | "solo";
type LogoSize = "sm" | "md" | "lg";

interface BrandLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

const heights: Record<LogoSize, number> = {
  sm: 36,
  md: 48,
  lg: 72,
};

const maxWidths: Record<LogoVariant, Record<LogoSize, string>> = {
  primary: {
    sm: "max-w-[min(100%,10.5rem)]",
    md: "max-w-[min(100%,14rem)]",
    lg: "max-w-[min(100%,18rem)]",
  },
  solo: {
    sm: "max-w-[2.75rem]",
    md: "max-w-[4rem]",
    lg: "max-w-[7.5rem]",
  },
};

function isSvgSrc(src: string) {
  return /\.svg($|\?)/i.test(src);
}

export default function BrandLogo({
  variant = "primary",
  size = "sm",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src = variant === "solo" ? BRAND_LOGO_SOLO : BRAND_LOGO_PRIMARY;
  const maxH = heights[size];
  const aspectPad = variant === "solo" ? 1.2 : 4.2;
  const width = Math.round(maxH * aspectPad);
  const sharedClass = `w-auto object-contain ${maxWidths[variant][size]} ${className}`;

  // SVG complexo (Illustrator) quebra no optimizer do next/image — servir direto.
  if (isSvgSrc(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Clínica DVERSO"
        width={width}
        height={maxH}
        className={sharedClass}
        style={{ maxHeight: maxH, height: "auto", width: "auto" }}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    );
  }

  return (
    <Image
      src={src}
      alt="Clínica DVERSO"
      width={width}
      height={maxH}
      className={sharedClass}
      style={{ maxHeight: maxH, height: "auto" }}
      priority={priority}
    />
  );
}
