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
        className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-primary/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden
      />

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
      <div className="absolute inset-0 pointer-events-auto flex flex-col items-center justify-center gap-5 px-1.5">
        <a
          href={SITE_CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver no mapa"
          title="Ver no mapa"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer"
        >
          <DecorativeIcon type="pin" size={16} />
        </a>
        <a
          href={SITE_CONTACT.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer"
        >
          <DecorativeIcon type="instagram" size={16} />
        </a>
        <a
          href={SITE_CONTACT.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer"
        >
          <DecorativeIcon type="facebook" size={16} />
        </a>
        <a
          href={formatTelHref(SITE_CONTACT.phoneE164)}
          aria-label="Ligar"
          title="Ligar"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer"
        >
          <DecorativeIcon type="phone" size={16} />
        </a>
      </div>
    </div>
  );
}

import { SITE_CONTACT, formatTelHref } from "@/lib/constants/siteContact";

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
