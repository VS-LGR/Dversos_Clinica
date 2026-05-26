-- Blog: capa, categoria e corpo HTML (WYSIWYG) + bucket de mídia.
-- Rode após 001_blog.sql e 002_blog_grants.sql.

alter table public.blog_posts
  add column if not exists cover_image_url text,
  add column if not exists category text,
  add column if not exists body_html text;

comment on column public.blog_posts.cover_image_url is 'URL pública da imagem de capa (Supabase Storage)';
comment on column public.blog_posts.category is 'Rótulo exibido nos cards (ex.: Neurodiversidade)';
comment on column public.blog_posts.body_html is 'Conteúdo HTML do editor WYSIWYG';

-- ---------------------------------------------------------------------------
-- Storage: bucket blog-media (público para leitura de imagens no site)
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-media',
  'blog-media',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Leitura pública
drop policy if exists "blog_media_public_select" on storage.objects;
create policy "blog_media_public_select"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'blog-media');

-- Upload / update / delete: apenas blog_admins autenticados
drop policy if exists "blog_media_admin_insert" on storage.objects;
create policy "blog_media_admin_insert"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'blog-media'
    and exists (
      select 1 from public.blog_admins ba where ba.user_id = auth.uid()
    )
  );

drop policy if exists "blog_media_admin_update" on storage.objects;
create policy "blog_media_admin_update"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'blog-media'
    and exists (
      select 1 from public.blog_admins ba where ba.user_id = auth.uid()
    )
  );

drop policy if exists "blog_media_admin_delete" on storage.objects;
create policy "blog_media_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'blog-media'
    and exists (
      select 1 from public.blog_admins ba where ba.user_id = auth.uid()
    )
  );
