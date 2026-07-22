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
 * Tour vertical: o material é em retrato — o viewport 9:16 elimina as
 * barras laterais pretas do player 16:9. Leve cover + máscara só no chrome.
 */
export default function ClinicTourPlayer({
  title = "Conheça a Clínica DVERSO",
  className = "",
}: ClinicTourPlayerProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[17.5rem] sm:max-w-[20rem] md:max-w-[22.5rem] min-w-0 ${className}`}>
      <div
        className={`absolute -inset-3 rounded-[1.75rem] ${pastelByIndex(PASTEL_SURFACE_SOFT, 2)} opacity-90`}
        aria-hidden
      />
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/[0.08] bg-white shadow-[0_12px_40px_-16px_rgba(26,43,86,0.15)]">
        {/* Proporção do vídeo (retrato) — sem pillarbox */}
        <div className="relative w-full aspect-[9/16] overflow-hidden bg-primary/5">
          <iframe
            className="absolute left-1/2 top-1/2 h-[108%] w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
            src={`${CLINIC_TOUR_EMBED_URL}${CLINIC_TOUR_EMBED_URL.includes("?") ? "&" : "?"}playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/90 to-transparent" />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(26,43,86,0.06)]" />
          </div>
        </div>
        <p className="text-center py-3 px-4 text-xs sm:text-sm text-primary/65 bg-white border-t border-primary/[0.06]">
          <a
            href={CLINIC_TOUR_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline underline-offset-2"
          >
            Assistir no YouTube
          </a>
        </p>
      </div>
    </div>
  );
}
