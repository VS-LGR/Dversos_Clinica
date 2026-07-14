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

export default function BrandLogo({
  variant = "primary",
  size = "sm",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src = variant === "solo" ? BRAND_LOGO_SOLO : BRAND_LOGO_PRIMARY;
  const maxH = heights[size];
  const aspectPad = variant === "solo" ? 1.2 : 4.2;

  return (
    <Image
      src={src}
      alt="Clínica DVERSO"
      width={Math.round(maxH * aspectPad)}
      height={maxH}
      className={`w-auto object-contain ${maxWidths[variant][size]} ${className}`}
      style={{ maxHeight: maxH, height: "auto" }}
      priority={priority}
    />
  );
}
