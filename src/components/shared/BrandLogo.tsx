import Image from "next/image";
import { BRAND_LOGO_ALT, BRAND_LOGO_PRIMARY } from "@/lib/constants/clinicMedia";

type LogoVariant = "primary" | "alt";
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
  lg: 64,
};

export default function BrandLogo({
  variant = "primary",
  size = "sm",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src = variant === "primary" ? BRAND_LOGO_PRIMARY : BRAND_LOGO_ALT;
  const maxH = heights[size];

  return (
    <Image
      src={src}
      alt="Clínica DVERSO"
      width={maxH * 4}
      height={maxH}
      className={`w-auto max-w-[min(100%,12rem)] object-contain ${className}`}
      style={{ maxHeight: maxH, height: "auto" }}
      priority={priority}
    />
  );
}
