import Link from "next/link";
import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPostRow } from "@/lib/blog/types";

export const metadata: Metadata = {
  title: "Artigos",
};

function formatDate(iso: string | null) {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return "—";
  }
}

export default async function AdminBlogListPage() {
  let posts: BlogPostRow[] = [];
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, slug, title, excerpt, body_markdown, body_format, status, published_at, created_at, updated_at"
      )
      .order("updated_at", { ascending: false });

    if (!error && data) posts = data as BlogPostRow[];
  } catch {
    posts = [];
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-primary">Artigos do blog</h1>
          <p className="text-sm text-primary/70 mt-1">Rascunhos e publicações.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-light"
        >
          Novo artigo
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-primary/75 text-sm rounded-xl border border-primary/10 bg-white p-6">
          Nenhum artigo encontrado. Crie o primeiro ou verifique a conexão com o Supabase.
        </p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3"
            >
              <div className="min-w-0">
                <p className="font-medium text-primary truncate">{post.title}</p>
                <p className="text-xs text-primary/60 mt-0.5">
                  <span className="font-mono">{post.slug}</span>
                  {" · "}
                  <span>{post.status === "published" ? "Publicado" : "Rascunho"}</span>
                  {" · "}
                  <span>Atualizado {formatDate(post.updated_at)}</span>
                </p>
              </div>
              <Link
                href={`/admin/blog/${post.id}/edit`}
                className="shrink-0 text-sm font-semibold text-primary-light hover:text-primary"
              >
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
