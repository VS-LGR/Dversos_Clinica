import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente somente leitura com chave anônima, sem sessão do painel.
 * Usar em /blog, /blog/[slug] e sitemap para não aplicar JWT de admin (evita vazar rascunhos via RLS).
 */
export function createSupabaseAnonServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
