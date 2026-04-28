import type { MetadataRoute } from "next";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";

const SITE_URL = "https://www.clinicadverso.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/areas`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const areaRoutes: MetadataRoute.Sitemap = CLINIC_AREAS.map((area) => ({
    url: `${SITE_URL}/areas/${area.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...areaRoutes];
}
