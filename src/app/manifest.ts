import type { MetadataRoute } from "next";
import { SITE_CONTACT } from "@/lib/constants/siteContact";

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
        src: "/images/Ativo 1LogoDverso.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
