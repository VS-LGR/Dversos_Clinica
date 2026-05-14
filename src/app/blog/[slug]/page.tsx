import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/blog/MarkdownBody";
import { fetchPublishedPostBySlug } from "@/lib/blog/queries";

export const revalidate = 60;

type Props = { params: { slug: string } };

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
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchPublishedPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-primary/55 mb-2">
          {formatDate(post.published_at)}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">{post.title}</h1>
        {post.excerpt && <p className="text-lg text-primary/85 mb-10 leading-relaxed">{post.excerpt}</p>}
        <MarkdownBody content={post.body_markdown} />
        <div className="mt-12 pt-8 border-t border-primary/[0.08]">
          <Link href="/blog" className="text-sm font-medium text-primary-light hover:text-primary">
            Voltar ao blog
          </Link>
        </div>
      </div>
    </article>
  );
}
