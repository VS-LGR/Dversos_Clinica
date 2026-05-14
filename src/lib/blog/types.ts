export type BlogPostStatus = "draft" | "published";

export interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body_markdown: string;
  body_format: string;
  status: BlogPostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
