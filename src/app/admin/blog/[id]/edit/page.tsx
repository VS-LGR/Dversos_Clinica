import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPostRow } from "@/lib/blog/types";

type Props = { params: { id: string } };

export const metadata: Metadata = {
  title: "Editar artigo",
};

export default async function AdminBlogEditPage({ params }: Props) {
  let post: BlogPostRow | null = null;
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, slug, title, excerpt, body_markdown, body_format, status, published_at, created_at, updated_at"
      )
      .eq("id", params.id)
      .maybeSingle();

    if (!error && data) post = data as BlogPostRow;
  } catch {
    post = null;
  }

  if (!post) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Editar artigo</h1>
      <p className="text-sm text-primary/65 mb-6 font-mono">{post.slug}</p>
      <BlogPostForm mode="edit" initial={post} />
    </div>
  );
}
