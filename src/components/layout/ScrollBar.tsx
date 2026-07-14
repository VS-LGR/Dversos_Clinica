import { SITE_CONTACT, formatWhatsAppHref } from "@/lib/constants/siteContact";
import { HOME_HERO } from "@/lib/constants/siteContent";

/** Onda vertical suave na borda direita da barra — transição orgânica para o conteúdo. */
function SidebarWaveEdge() {
  return (
    <svg
      className="absolute top-0 right-0 h-full w-3 sm:w-3.5 translate-x-[99%] pointer-events-none"
      viewBox="0 0 12 400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0,0 C5,40 0,80 5,120 C0,160 5,200 0,240 C5,280 0,320 5,360 C0,380 0,400 12,400 L12,0 Z"
        fill="#f4f7fb"
      />
    </svg>
  );
}

export default function ScrollBar() {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 pointer-events-none overflow-hidden hidden sm:block"
      aria-hidden
    >
      <div
        className="absolute inset-0 shadow-[6px_0_18px_rgba(26,43,86,0.24)]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset -8px 0 16px -8px rgba(0,0,0,0.18)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden
      />
      <SidebarWaveEdge />

      <div className="absolute inset-0 px-1.5 py-6 flex flex-col items-center justify-between text-white/80">
        {DECOR_ITEMS.map((item, index) => (
          <span
            key={`${item.type}-${index}`}
            className="inline-flex animate-paw-float"
            style={{ opacity: item.opacity, animationDelay: item.delay }}
          >
            <DecorativeIcon type={item.type} size={item.size} />
          </span>
        ))}
      </div>

      {/* Interações (sem alterar o visual/ritmo): camada clicável pontual */}
      <div className="absolute inset-0 pointer-events-auto flex flex-col items-center justify-center gap-3.5 px-1.5">
        <a
          href={SITE_CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver no mapa"
          title="Ver no mapa"
          className="group inline-flex h-16 w-16 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer transition-transform duration-200 hover:scale-110 [filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.28))]"
        >
          <DecorativeIcon type="pin" size={26} />
          <span
            className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-primary shadow-sm opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            aria-hidden
          >
            Ver no mapa
          </span>
        </a>
        <a
          href={SITE_CONTACT.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="group inline-flex h-16 w-16 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer transition-transform duration-200 hover:scale-110 [filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.28))]"
        >
          <DecorativeIcon type="instagram" size={26} />
          <span
            className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-primary shadow-sm opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            aria-hidden
          >
            Instagram
          </span>
        </a>
        <a
          href={SITE_CONTACT.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="group inline-flex h-16 w-16 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer transition-transform duration-200 hover:scale-110 [filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.28))]"
        >
          <DecorativeIcon type="facebook" size={26} />
          <span
            className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-primary shadow-sm opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            aria-hidden
          >
            Facebook
          </span>
        </a>
        <a
          href={formatWhatsAppHref(SITE_CONTACT.whatsappNumber, HOME_HERO.ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="group inline-flex h-16 w-16 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer transition-transform duration-200 hover:scale-110 [filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.28))]"
        >
          <DecorativeIcon type="whatsapp" size={26} />
          <span
            className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-primary shadow-sm opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            aria-hidden
          >
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

const DECOR_ITEMS = [
  { type: "psi", opacity: 0.22, size: 14, delay: "0ms" },
  { type: "brain", opacity: 0.2, size: 14, delay: "220ms" },
  { type: "heart", opacity: 0.18, size: 12, delay: "380ms" },
  { type: "dv", opacity: 0.24, size: 16, delay: "540ms" },
  { type: "psi", opacity: 0.2, size: 13, delay: "700ms" },
  { type: "brain", opacity: 0.17, size: 13, delay: "860ms" },
  { type: "dv", opacity: 0.22, size: 16, delay: "1010ms" },
  { type: "heart", opacity: 0.18, size: 12, delay: "1170ms" },
  { type: "psi", opacity: 0.2, size: 14, delay: "1320ms" },
];

function DecorativeIcon({ type, size }: { type: string; size: number }) {
  if (type === "dv") {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full border border-white/30 text-white/80 font-semibold tracking-tight"
        style={{ width: size + 6, height: size + 6, fontSize: Math.max(9, size - 5) }}
      >
        DV
      </span>
    );
  }

  if (type === "psi") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 4V20M8 5.5C8 8 10 10 12 10C14 10 16 8 16 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "brain") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 6.5C9 4.6 7.4 3 5.5 3C3.6 3 2 4.6 2 6.5C2 7.8 2.7 8.9 3.8 9.5C2.7 10.1 2 11.2 2 12.5C2 14.4 3.6 16 5.5 16H9M15 6.5C15 4.6 16.6 3 18.5 3C20.4 3 22 4.6 22 6.5C22 7.8 21.3 8.9 20.2 9.5C21.3 10.1 22 11.2 22 12.5C22 14.4 20.4 16 18.5 16H15M9 16V6.5M15 16V6.5M9 16C9 18.2 10.8 20 13 20H11C13.2 20 15 18.2 15 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M14 8.5h2.5V5h-2.9c-2.8 0-4.1 1.7-4.1 4v1.5H7v3.5h2.5V19h3.5v-5.5H16l.5-3.5h-3V9.2c0-1 .3-1.7 1.7-1.7Z" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.6 4.8c.4-.9 1.5-1.2 2.3-.6l1.6 1.2c.7.5.9 1.4.5 2.1l-.7 1.2c.9 1.8 2.3 3.2 4.1 4.1l1.2-.7c.7-.4 1.6-.2 2.1.5l1.2 1.6c.6.8.3 1.9-.6 2.3-1.2.5-2.5.8-3.8.8-4.8 0-9.3-3.6-10.8-8.4-.2-.7 0-1.5.3-2.1Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20C12 20 4 15.3 4 9.8C4 7.2 6.1 5 8.8 5C10.5 5 12 6 12 7.4C12 6 13.5 5 15.2 5C17.9 5 20 7.2 20 9.8C20 15.3 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
