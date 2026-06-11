"use client";

import { CLINIC_TOUR_POSTER, CLINIC_TOUR_VIDEO } from "@/lib/constants/clinicMedia";
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
        <p className="sr-only">{title}</p>
        <video
          className="w-full aspect-video object-cover bg-primary/5"
          controls
          playsInline
          preload="metadata"
          poster={CLINIC_TOUR_POSTER}
          aria-label={title}
        >
          <source src={CLINIC_TOUR_VIDEO} type="video/mp4" />
          Seu navegador não suporta reprodução de vídeo.
        </video>
      </div>
    </div>
  );
}
