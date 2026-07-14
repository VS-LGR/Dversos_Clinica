import type { MetadataRoute } from "next";
import { SITE_CONTACT } from "@/lib/constants/siteContact";
import { BRAND_LOGO_SOLO } from "@/lib/constants/clinicMedia";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONTACT.name,
    short_name: "DVERSO",
    description:
      "Clínica de saúde integrada e atendimento neuroafirmativo em Sorocaba.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a2b56",
    lang: "pt-BR",
    icons: [
      {
        src: BRAND_LOGO_SOLO,
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
