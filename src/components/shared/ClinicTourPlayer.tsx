import {
  CLINIC_TOUR_EMBED_URL,
  CLINIC_TOUR_YOUTUBE_URL,
} from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

interface ClinicTourPlayerProps {
  title?: string;
  className?: string;
}

export default function ClinicTourPlayer({
  title = "Conheça a Clínica DVERSO",
  className = "",
}: ClinicTourPlayerProps) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <div
        className={`absolute -inset-3 rounded-[1.75rem] ${pastelByIndex(PASTEL_SURFACE_SOFT, 2)} opacity-90`}
        aria-hidden
      />
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/[0.08] bg-white shadow-[0_12px_40px_-16px_rgba(26,43,86,0.15)]">
        <div className="relative w-full aspect-video bg-primary/5">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={CLINIC_TOUR_EMBED_URL}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
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
