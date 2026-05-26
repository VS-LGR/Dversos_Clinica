import Image from "next/image";
import Link from "next/link";
import type { BlogPostRow } from "@/lib/blog/types";
import { BLOG_COPY } from "@/lib/constants/blogCopy";
import { PASTEL_CARD_BG, pastelByIndex } from "@/lib/constants/pastelPalette";

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";

interface BlogPostCardProps {
  post: BlogPostRow;
  formatDate: (iso: string | null) => string;
  index?: number;
}

export default function BlogPostCard({ post, formatDate, index = 0 }: BlogPostCardProps) {
  const imageSrc = post.cover_image_url || PLACEHOLDER;
  const cardBg = pastelByIndex(PASTEL_CARD_BG, index);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/[0.08] ${cardBg} shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-pastel-aqua/40">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={imageSrc.includes("supabase")}
        />
        {post.category && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
            {post.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-primary/50 mb-2">
          {formatDate(post.published_at)}
        </p>
        <h2 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-sm text-primary/80 line-clamp-3 flex-1 leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <span className="mt-4 inline-block text-sm font-medium text-primary-light group-hover:underline underline-offset-2">
          {BLOG_COPY.listing.readMore}
        </span>
      </div>
    </Link>
  );
}
