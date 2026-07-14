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
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
