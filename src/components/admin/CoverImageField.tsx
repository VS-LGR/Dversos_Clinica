"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { uploadBlogImage } from "@/lib/blog/storage";

interface CoverImageFieldProps {
  value: string | null;
  onChange: (url: string | null) => void;
  postId?: string;
  disabled?: boolean;
}

export default function CoverImageField({
  value,
  onChange,
  postId,
  disabled = false,
}: CoverImageFieldProps) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    if (!supabase) {
      setError("Supabase não configurado.");
      return;
    }
    setError(null);
    setUploading(true);
    try {
      const url = await uploadBlogImage(supabase, file, postId);
      onChange(url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erro ao enviar imagem");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-primary">Imagem de capa</label>
      {value ? (
        <div className="relative rounded-xl overflow-hidden border border-primary/10 bg-primary-pale/30 aspect-[16/10] max-w-md">
          <Image
            src={value}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            unoptimized={value.includes("supabase")}
          />
          {!disabled && (
            <div className="absolute bottom-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={uploading}
                className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-white"
              >
                Trocar
              </button>
              <button
                type="button"
                onClick={() => onChange(null)}
                disabled={uploading}
                className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-700 shadow-sm hover:bg-white"
              >
                Remover
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          disabled={disabled || uploading || !supabase}
          onClick={() => inputRef.current?.click()}
          className="flex w-full max-w-md flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/20 bg-accent-mint/15 px-6 py-10 text-sm text-primary/70 hover:border-primary/35 hover:bg-accent-mint/25 transition-colors disabled:opacity-50"
        >
          {uploading ? "Enviando…" : "Clique para enviar a capa (JPEG, PNG, WebP — máx. 5 MB)"}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
      />
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs text-primary/55">
        A capa aparece nos cards do blog e na página do artigo.
      </p>
    </div>
  );
}
