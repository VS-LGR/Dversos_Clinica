import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { fetchPublishedPosts } from "@/lib/blog/queries";

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

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle as="h1" className="mb-4" subtitle="Conteúdo da equipe para famílias e profissionais.">
          Blog
        </SectionTitle>

        {posts.length === 0 ? (
          <p className="text-center text-primary/75 max-w-xl mx-auto">
            Em breve publicações. Configure o Supabase e adicione artigos pelo painel administrativo.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 mt-12">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full p-6 rounded-xl border border-primary/[0.08] bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-primary/50 mb-2">
                    {formatDate(post.published_at)}
                  </p>
                  <h2 className="text-lg font-semibold text-primary mb-2">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-sm text-primary/80 line-clamp-3">{post.excerpt}</p>
                  )}
                  <span className="mt-4 inline-block text-sm font-medium text-primary-light">
                    Ler artigo
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
