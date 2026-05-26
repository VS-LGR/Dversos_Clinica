import type { BlogPostRow } from "@/lib/blog/types";

/** Conteúdo preferido para exibição pública. */
export function getPostBodyForDisplay(post: BlogPostRow): {
  format: "html" | "markdown";
  content: string;
} {
  if (post.body_format === "html" && post.body_html?.trim()) {
    return { format: "html", content: post.body_html };
  }
  return { format: "markdown", content: post.body_markdown || "" };
}

/** Valor inicial do editor WYSIWYG ao abrir um post existente. */
export function getInitialEditorHtml(post: BlogPostRow | null | undefined): string {
  if (!post) return "";
  if (post.body_html?.trim()) return post.body_html;
  if (post.body_markdown?.trim()) {
    const escaped = post.body_markdown
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<p>${escaped.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>`;
  }
  return "";
}
