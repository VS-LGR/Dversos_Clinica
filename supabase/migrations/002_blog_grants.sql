-- Permissões para a API pública (anon) e usuários logados (authenticated).
-- Sem estes GRANTs, o site com NEXT_PUBLIC_SUPABASE_ANON_KEY recebe lista vazia mesmo com posts published.
-- Rode no SQL Editor do Supabase após 001_blog.sql.

grant usage on schema public to anon, authenticated;

grant select on public.blog_posts to anon;

grant select, insert, update, delete on public.blog_posts to authenticated;

-- Necessário para a policy admin (EXISTS em blog_admins) ao listar/editar no painel
grant select on public.blog_admins to authenticated;
