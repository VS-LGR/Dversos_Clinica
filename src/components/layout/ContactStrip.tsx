"use client";

import ContactNavIcon from "@/components/shared/ContactNavIcon";
import { trackContactClick } from "@/lib/analytics/gtag";
import { CONTACT_NAV_ITEMS } from "@/lib/constants/contactNav";
import { pastelByIndex, PASTEL_CARD_BG } from "@/lib/constants/pastelPalette";

function trackItemClick(icon: string, label: string) {
  switch (icon) {
    case "whatsapp":
      trackContactClick("whatsapp", label);
      break;
    case "phone":
      trackContactClick("phone", label);
      break;
    case "map":
      trackContactClick("map", label);
      break;
    case "instagram":
      trackContactClick("instagram", label);
      break;
    case "facebook":
      trackContactClick("facebook", label);
      break;
    default:
      break;
  }
}

export default function ContactStrip() {
  return (
    <nav
      className="sm:hidden border-b border-pastel-peach/30 bg-white/90 backdrop-blur-md"
      aria-label="Contato rápido"
    >
      <ul className="flex items-center justify-around gap-1 px-2 py-2.5 max-w-lg mx-auto">
        {CONTACT_NAV_ITEMS.map((item, index) => (
          <li key={item.id}>
            <a
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={item.label}
              onClick={() => trackItemClick(item.icon, item.label)}
              className={`flex flex-col items-center gap-0.5 min-w-[3.25rem] rounded-full px-2 py-1.5 text-primary transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${pastelByIndex(PASTEL_CARD_BG, index)}`}
            >
              <ContactNavIcon type={item.icon} className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{item.label.split(" ")[0]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
