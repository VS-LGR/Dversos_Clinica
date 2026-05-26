import type { BlogPostRow } from "@/lib/blog/types";
import { BLOG_POST_SELECT } from "@/lib/blog/types";
import { createSupabaseAnonServerClient } from "@/lib/supabase/anon";

export async function fetchPublishedPosts(limit?: number): Promise<BlogPostRow[]> {
  const supabase = createSupabaseAnonServerClient();
  if (!supabase) return [];

  let query = supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  if (error || !data) return [];
  return data as BlogPostRow[];
}

export async function fetchPublishedPostBySlug(slug: string): Promise<BlogPostRow | null> {
  const supabase = createSupabaseAnonServerClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) return null;
  return data as BlogPostRow;
}
