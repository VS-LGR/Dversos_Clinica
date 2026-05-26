import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PastelPageDecor from "@/components/shared/PastelPageDecor";
import BlogHero from "@/components/blog/BlogHero";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { fetchPublishedPosts } from "@/lib/blog/queries";
import { BLOG_COPY } from "@/lib/constants/blogCopy";

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
    <div className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <PastelPageDecor />
      <div className="relative z-10 max-w-6xl mx-auto">
        <BlogHero />

        {posts.length === 0 ? (
          <p className="text-center text-primary/75 max-w-xl mx-auto">
            {BLOG_COPY.listing.empty}
          </p>
        ) : (
          <>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary/60 mb-6">
              {BLOG_COPY.listing.sectionTitle}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <li key={post.id}>
                  <RevealOnScroll
                    delayMs={Math.min(300, (index % 6) * 60)}
                    index={index}
                  >
                    <BlogPostCard post={post} formatDate={formatDate} index={index} />
                  </RevealOnScroll>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
