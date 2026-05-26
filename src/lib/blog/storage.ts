import type { SupabaseClient } from "@supabase/supabase-js";

export const BLOG_MEDIA_BUCKET = "blog-media";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export function isAllowedBlogImage(file: File): boolean {
  return ALLOWED_TYPES.includes(file.type);
}

export async function uploadBlogImage(
  supabase: SupabaseClient,
  file: File,
  postId?: string
): Promise<string> {
  if (!isAllowedBlogImage(file)) {
    throw new Error("Formato não suportado. Use JPEG, PNG, WebP ou GIF.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Imagem muito grande (máx. 5 MB).");
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const folder = postId ? `posts/${postId}` : "posts/draft";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from(BLOG_MEDIA_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(BLOG_MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
