"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { BlogPostRow } from "@/lib/blog/types";
import { slugifyTitle } from "@/lib/blog/slug";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type Mode = "new" | "edit";

interface BlogPostFormProps {
  mode: Mode;
  initial?: BlogPostRow | null;
}

export default function BlogPostForm({ mode, initial }: BlogPostFormProps) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!initial?.slug);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [body, setBody] = useState(initial?.body_markdown ?? "");
  const [status, setStatus] = useState<"draft" | "published">(initial?.status ?? "draft");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const derivedSlug = slugifyTitle(title);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugifyTitle(value));
  };

  const handleSlugChange = (value: string) => {
    setSlugTouched(true);
    setSlug(value);
  };

  const payloadBase = () => {
    const finalSlug = (slug || derivedSlug).trim() || "post";
    return {
      slug: finalSlug,
      title: title.trim() || "Sem título",
      excerpt: excerpt.trim() || null,
      body_markdown: body,
      body_format: "markdown",
    };
  };

  const save = async (nextStatus: "draft" | "published") => {
    setError(null);
    if (!supabase) {
      setError("Cliente Supabase indisponível. Verifique as variáveis de ambiente.");
      return;
    }
    setSaving(true);
    const base = payloadBase();
    const publishedAt =
      nextStatus === "published" ? new Date().toISOString() : null;

    try {
      if (mode === "new") {
        const { data, error: insertError } = await supabase
          .from("blog_posts")
          .insert({
            ...base,
            status: nextStatus,
            published_at: publishedAt,
          })
          .select("id")
          .single();

        if (insertError) throw insertError;
        router.push(`/admin/blog/${data.id}/edit`);
        router.refresh();
      } else if (initial?.id) {
        const { error: updateError } = await supabase
          .from("blog_posts")
          .update({
            ...base,
            status: nextStatus,
            published_at: publishedAt,
          })
          .eq("id", initial.id);

        if (updateError) throw updateError;
        setStatus(nextStatus);
        router.refresh();
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erro ao salvar";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}
      {!supabase && (
        <p className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Configure as variáveis do Supabase para salvar artigos.
        </p>
      )}

      <div>
        <label htmlFor="post-title" className="block text-sm font-medium text-primary mb-1">
          Título
        </label>
        <input
          id="post-title"
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="post-slug" className="block text-sm font-medium text-primary mb-1">
          Slug (URL)
        </label>
        <input
          id="post-slug"
          type="text"
          value={slug}
          onChange={(e) => handleSlugChange(e.target.value)}
          className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <p className="mt-1 text-xs text-primary/55">Sugestão automática a partir do título até você editar manualmente.</p>
      </div>

      <div>
        <label htmlFor="post-excerpt" className="block text-sm font-medium text-primary mb-1">
          Resumo (opcional)
        </label>
        <textarea
          id="post-excerpt"
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="post-body" className="block text-sm font-medium text-primary mb-1">
          Conteúdo (Markdown)
        </label>
        <textarea
          id="post-body"
          rows={16}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {mode === "edit" && (
        <p className="text-sm text-primary/65">
          Estado atual: <strong className="text-primary">{status === "published" ? "Publicado" : "Rascunho"}</strong>
        </p>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          disabled={saving || !supabase}
          onClick={() => save("draft")}
          className="rounded-xl border-2 border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-pale/50 disabled:opacity-50"
        >
          Salvar rascunho
        </button>
        <button
          type="button"
          disabled={saving || !supabase}
          onClick={() => save("published")}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-50"
        >
          Publicar
        </button>
      </div>
    </div>
  );
}
