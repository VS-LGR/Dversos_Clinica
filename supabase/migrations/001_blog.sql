-- Blog + painel: tabelas e RLS (rodar no SQL Editor do Supabase ou via CLI).
-- Após criar o usuário em Authentication, inserir uma linha em blog_admins:
--   insert into public.blog_admins (user_id) values ('<uuid do auth.users>');
-- Depois rode também: supabase/migrations/002_blog_grants.sql (senão o blog público fica vazio com a anon key).

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- blog_admins: quem pode gerenciar posts (conta única da clínica)
-- ---------------------------------------------------------------------------
create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.blog_admins enable row level security;

-- Cada admin só enxerga a própria linha (suficiente para EXISTS nas policies de blog_posts)
create policy "blog_admins_select_own"
  on public.blog_admins
  for select
  to authenticated
  using (user_id = auth.uid());

-- Opcional: permitir que o próprio usuário remova a linha (não usado no app)
-- Sem INSERT público: inserção manual no SQL Editor após criar o usuário.

-- ---------------------------------------------------------------------------
-- blog_posts
-- ---------------------------------------------------------------------------
create type public.blog_post_status as enum ('draft', 'published');

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body_markdown text not null default '',
  body_format text not null default 'markdown',
  status public.blog_post_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_posts_published_requires_date check (
    status <> 'published' or published_at is not null
  )
);

create index if not exists blog_posts_status_published_at_idx
  on public.blog_posts (status, published_at desc nulls last);

-- updated_at automático
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row
  execute procedure public.set_updated_at();

alter table public.blog_posts enable row level security;

-- Leitura pública: apenas publicados com data de publicação já efetiva
create policy "blog_posts_public_select_published"
  on public.blog_posts
  for select
  to anon, authenticated
  using (
    status = 'published'
    and published_at is not null
    and published_at <= now()
  );

-- Admins: leem tudo (inclui rascunhos)
create policy "blog_posts_admin_select_all"
  on public.blog_posts
  for select
  to authenticated
  using (
    exists (select 1 from public.blog_admins b where b.user_id = auth.uid())
  );

create policy "blog_posts_admin_insert"
  on public.blog_posts
  for insert
  to authenticated
  with check (
    exists (select 1 from public.blog_admins b where b.user_id = auth.uid())
  );

create policy "blog_posts_admin_update"
  on public.blog_posts
  for update
  to authenticated
  using (
    exists (select 1 from public.blog_admins b where b.user_id = auth.uid())
  )
  with check (
    exists (select 1 from public.blog_admins b where b.user_id = auth.uid())
  );

create policy "blog_posts_admin_delete"
  on public.blog_posts
  for delete
  to authenticated
  using (
    exists (select 1 from public.blog_admins b where b.user_id = auth.uid())
  );
