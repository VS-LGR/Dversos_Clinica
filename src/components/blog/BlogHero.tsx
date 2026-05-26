import Link from "next/link";
import { BLOG_COPY } from "@/lib/constants/blogCopy";

export default function BlogHero() {
  return (
    <section
      className="relative rounded-3xl border border-primary/[0.08] bg-white shadow-sm overflow-hidden mb-12 sm:mb-14"
      aria-labelledby="blog-hero-title"
    >
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-pastel-coral/70 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-12 w-48 h-48 rounded-full bg-pastel-lime/70 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 p-8 sm:p-10 lg:p-12">
        <div className="flex-1 min-w-0">
          <nav className="text-sm text-primary/55 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              {BLOG_COPY.hero.breadcrumbHome}
            </Link>
            <span className="mx-2 text-primary/35">›</span>
            <span className="text-primary/75">{BLOG_COPY.hero.breadcrumbCurrent}</span>
          </nav>
          <h1
            id="blog-hero-title"
            className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4"
          >
            {BLOG_COPY.hero.title}
          </h1>
          <p className="text-primary/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            {BLOG_COPY.hero.description}
          </p>
        </div>
        <div className="flex-shrink-0 flex justify-center lg:justify-end" aria-hidden>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pastel-aqua to-pastel-peach" />
            <svg
              viewBox="0 0 120 120"
              className="relative w-full h-full text-primary/25"
              fill="none"
            >
              <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="2" opacity="0.35" />
              <path
                d="M60 28c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14zm0 52c-16 0-30 8-30 18v6h60v-6c0-10-14-18-30-18z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M38 72c6-4 14-6 22-6s16 2 22 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
