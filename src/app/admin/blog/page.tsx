import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPostRow } from "@/lib/blog/types";
import { BLOG_POST_SELECT } from "@/lib/blog/types";
import { BLOG_COPY } from "@/lib/constants/blogCopy";

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
      .select(BLOG_POST_SELECT)
      .order("updated_at", { ascending: false });

    if (!error && data) posts = data as BlogPostRow[];
  } catch {
    posts = [];
  }

  return (
    <div>
      <div className="rounded-2xl bg-gradient-to-br from-pastel-mint via-pastel-aqua to-pastel-peach border border-primary/[0.08] p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary">{BLOG_COPY.admin.listTitle}</h1>
            <p className="text-sm text-primary/70 mt-1">{BLOG_COPY.admin.listSubtitle}</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light shadow-sm"
          >
            {BLOG_COPY.admin.newPost}
          </Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-primary/75 text-sm rounded-xl border border-primary/10 bg-white p-6">
          Nenhum artigo encontrado. Crie o primeiro ou verifique a conexão com o Supabase.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/admin/blog/${post.id}/edit`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="relative aspect-[16/10] bg-accent-lavender/20">
                  {post.cover_image_url ? (
                    <Image
                      src={post.cover_image_url}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      unoptimized={post.cover_image_url.includes("supabase")}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/35 text-sm">
                      Sem capa
                    </div>
                  )}
                  <span
                    className={`absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      post.status === "published"
                        ? "bg-primary text-white"
                        : "bg-white/95 text-primary border border-primary/15"
                    }`}
                  >
                    {post.status === "published" ? "Publicado" : "Rascunho"}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-semibold text-primary line-clamp-2 group-hover:text-primary-light transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-primary/55 mt-2 font-mono truncate">{post.slug}</p>
                  <p className="text-xs text-primary/60 mt-1">
                    Atualizado {formatDate(post.updated_at)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
