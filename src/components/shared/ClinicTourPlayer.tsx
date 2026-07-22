import {
  CLINIC_TOUR_EMBED_URL,
  CLINIC_TOUR_YOUTUBE_URL,
} from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

interface ClinicTourPlayerProps {
  title?: string;
  className?: string;
}

/**
 * Tour em retrato (9:16), moldura no estilo Cozy da clínica.
 */
export default function ClinicTourPlayer({
  title = "Conheça a Clínica DVERSO",
  className = "",
}: ClinicTourPlayerProps) {
  const blob = pastelByIndex(PASTEL_SURFACE_SOFT, 2);

  return (
    <div
      className={`relative mx-auto w-full max-w-[17.5rem] sm:max-w-[20rem] md:max-w-[22.5rem] min-w-0 ${className}`}
    >
      {/* Halo pastel — mesma linguagem das molduras Cozy */}
      <div
        className={`absolute -inset-2.5 sm:-inset-3 rounded-[2.5rem] sm:rounded-[2.75rem] ${blob} opacity-80 blur-[1px]`}
        aria-hidden
      />
      <div
        className="absolute -inset-1 rounded-[2.15rem] sm:rounded-[2.4rem] bg-gradient-to-br from-pastel-mint/50 via-white/40 to-pastel-aqua/45"
        aria-hidden
      />

      <figure className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] border border-primary/15 bg-gradient-to-b from-pastel-mint/80 via-pastel-aqua/50 to-primary-pale shadow-[0_14px_44px_-18px_rgba(26,43,86,0.2)] ring-1 ring-primary/10 p-2 sm:p-2.5">
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-primary-pale/40 ring-1 ring-primary/10">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`${CLINIC_TOUR_EMBED_URL}?playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <figcaption className="flex items-center justify-center gap-2 pt-3 pb-1 px-2">
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm"
            aria-hidden
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 15.5 16.5 12 10 8.5v7ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
            </svg>
          </span>
          <a
            href={CLINIC_TOUR_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary-light underline-offset-4 hover:underline transition-colors"
          >
            Assistir no YouTube
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
