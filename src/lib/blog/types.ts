export type BlogPostStatus = "draft" | "published";
export type BlogBodyFormat = "markdown" | "html";

export interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body_markdown: string;
  body_html: string | null;
  body_format: BlogBodyFormat | string;
  cover_image_url: string | null;
  category: string | null;
  status: BlogPostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export const BLOG_POST_SELECT =
  "id, slug, title, excerpt, body_markdown, body_html, body_format, cover_image_url, category, status, published_at, created_at, updated_at" as const;
