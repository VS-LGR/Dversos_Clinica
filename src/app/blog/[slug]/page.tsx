import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostBody from "@/components/blog/PostBody";
import { fetchPublishedPostBySlug } from "@/lib/blog/queries";
import { BLOG_COPY } from "@/lib/constants/blogCopy";
import { SITE_URL } from "@/lib/constants/siteContact";

type Props = { params: { slug: string } };

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80";

function formatDate(iso: string | null) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPublishedPostBySlug(params.slug);
  if (!post) {
    return { title: "Artigo | Clínica DVERSO" };
  }
  const description = post.excerpt ?? post.title;
  const images = post.cover_image_url
    ? [{ url: post.cover_image_url, alt: post.title }]
    : undefined;

  return {
    title: `${post.title} | Blog Clínica DVERSO`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      locale: "pt_BR",
      images,
    },
    twitter: {
      card: post.cover_image_url ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchPublishedPostBySlug(params.slug);
  if (!post) notFound();

  const coverSrc = post.cover_image_url || PLACEHOLDER;

  return (
    <article className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-primary/55 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">
            {BLOG_COPY.hero.breadcrumbHome}
          </Link>
          <span className="mx-2 text-primary/35">›</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            {BLOG_COPY.hero.breadcrumbCurrent}
          </Link>
          <span className="mx-2 text-primary/35">›</span>
          <span className="text-primary/75 line-clamp-1">{post.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div className="min-w-0">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-accent-lavender/20 shadow-sm">
              <Image
                src={coverSrc}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                unoptimized={coverSrc.includes("supabase")}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.category && (
                <span className="rounded-full bg-accent-mint/40 border border-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-widest text-primary/55">
                {formatDate(post.published_at)}
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-3">
              {post.title}
            </h1>
            <p className="text-sm text-primary/65 mb-6">{BLOG_COPY.post.byline}</p>
            {post.excerpt && (
              <p className="text-lg text-primary/85 mb-10 leading-relaxed border-l-4 border-accent-lavender/60 pl-4">
                {post.excerpt}
              </p>
            )}

            <PostBody post={post} />

            <div className="mt-12 pt-8 border-t border-primary/[0.08]">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary-light hover:text-primary"
              >
                ← {BLOG_COPY.post.back}
              </Link>
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>

      {post.cover_image_url && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt ?? post.title,
              datePublished: post.published_at,
              image: post.cover_image_url,
              url: `${SITE_URL}/blog/${post.slug}`,
              author: { "@type": "Organization", name: "Clínica DVERSO" },
            }),
          }}
        />
      )}
    </article>
  );
}
