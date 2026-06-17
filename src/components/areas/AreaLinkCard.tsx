import Link from "next/link";
import { AreaSymbol } from "@/lib/constants/areaIcons";
import {
  PASTEL_CARD_BG,
  PASTEL_CARD_GRADIENTS,
  pastelByIndex,
} from "@/lib/constants/pastelPalette";

interface AreaLinkCardProps {
  slug: string;
  name: string;
  description: string;
  cardIndex: number;
  featured?: boolean;
  ctaLabel?: string;
  variant?: "gradient" | "cozy";
}

export default function AreaLinkCard({
  slug,
  name,
  description,
  cardIndex,
  featured = false,
  ctaLabel = "Saiba mais →",
  variant = "gradient",
}: AreaLinkCardProps) {
  const gradient = pastelByIndex(PASTEL_CARD_GRADIENTS, cardIndex);
  const chipBg = pastelByIndex(PASTEL_CARD_BG, cardIndex);

  if (variant === "cozy") {
    return (
      <Link
        href={`/areas/${slug}`}
        className="group flex flex-col min-h-full rounded-2xl border border-primary/[0.06] bg-white/85 p-4 sm:p-5 text-left shadow-[0_6px_20px_-10px_rgba(26,43,86,0.1)] hover:border-primary/15 hover:shadow-[0_12px_32px_-14px_rgba(26,43,86,0.14)] hover:-translate-y-0.5 transition-all duration-300 min-w-0"
      >
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 ${chipBg} mb-3 group-hover:scale-105 transition-transform`}
          aria-hidden
        >
          <AreaSymbol slug={slug} />
        </span>
        <h4 className="font-semibold text-primary text-sm sm:text-base mb-1.5 text-balance group-hover:text-primary-light transition-colors">
          {name}
        </h4>
        <p className="text-xs sm:text-sm text-primary/80 leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>
        <span className="inline-block mt-4 text-primary/75 font-medium text-xs sm:text-sm group-hover:text-primary group-hover:underline underline-offset-4">
          {ctaLabel}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/areas/${slug}`}
      className={`group flex flex-col min-h-full p-6 sm:p-7 rounded-[2rem] border border-primary/[0.08] bg-gradient-to-br ${gradient} hover:border-primary/20 hover:shadow-[0_12px_40px_-16px_rgba(26,43,86,0.12)] hover:-translate-y-0.5 transition-all duration-300 text-left min-w-0 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <span
        className={`inline-flex items-center justify-center w-11 h-11 rounded-full text-primary/70 mb-4 ${chipBg} border border-primary/[0.06] group-hover:scale-105 transition-transform`}
        aria-hidden
      >
        <AreaSymbol slug={slug} />
      </span>
      <h4 className="text-lg font-semibold text-primary mb-2 break-words text-balance group-hover:text-primary-light transition-colors">
        {name}
      </h4>
      <p
        className={`text-sm text-primary/80 leading-relaxed flex-1 ${
          featured ? "line-clamp-3 sm:line-clamp-none" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <span className="inline-block mt-5 text-primary/80 font-medium text-sm group-hover:text-primary group-hover:underline underline-offset-4">
        {ctaLabel}
      </span>
    </Link>
  );
}
