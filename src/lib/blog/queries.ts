import type { BlogPostRow } from "@/lib/blog/types";
import { createSupabaseAnonServerClient } from "@/lib/supabase/anon";

export async function fetchPublishedPosts(): Promise<BlogPostRow[]> {
  const supabase = createSupabaseAnonServerClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, slug, title, excerpt, body_markdown, body_format, status, published_at, created_at, updated_at"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as BlogPostRow[];
}

export async function fetchPublishedPostBySlug(slug: string): Promise<BlogPostRow | null> {
  const supabase = createSupabaseAnonServerClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, slug, title, excerpt, body_markdown, body_format, status, published_at, created_at, updated_at"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) return null;
  return data as BlogPostRow;
}
