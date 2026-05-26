import {
  SITE_CONTACT,
  formatTelHref,
  formatWhatsAppHref,
} from "@/lib/constants/siteContact";

export type ContactNavIcon = "map" | "instagram" | "facebook" | "phone" | "whatsapp";

export interface ContactNavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  icon: ContactNavIcon;
}

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar ou saber mais sobre os atendimentos da Clínica DVERSO.";

export const CONTACT_NAV_ITEMS: ContactNavItem[] = [
  {
    id: "map",
    label: "Ver no mapa",
    href: SITE_CONTACT.mapsUrl,
    external: true,
    icon: "map",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: SITE_CONTACT.social.instagram,
    external: true,
    icon: "instagram",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: SITE_CONTACT.social.facebook,
    external: true,
    icon: "facebook",
  },
  {
    id: "phone",
    label: "Ligar",
    href: formatTelHref(SITE_CONTACT.phoneE164),
    icon: "phone",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: formatWhatsAppHref(SITE_CONTACT.whatsappNumber, WHATSAPP_MESSAGE),
    external: true,
    icon: "whatsapp",
  },
];
