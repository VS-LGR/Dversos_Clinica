import type { MetadataRoute } from "next";
import { CLINIC_AREAS } from "@/lib/constants/clinicAreas";
import { fetchPublishedPosts } from "@/lib/blog/queries";

const SITE_URL = "https://www.clinicadverso.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  const areaRoutes: MetadataRoute.Sitemap = CLINIC_AREAS.map((area) => ({
    url: `${SITE_URL}/areas/${area.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const posts = await fetchPublishedPosts();
  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : undefined,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...areaRoutes, ...blogPostRoutes];
}
