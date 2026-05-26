import type { BlogPostRow } from "@/lib/blog/types";
import { getPostBodyForDisplay } from "@/lib/blog/body";
import HtmlBody from "@/components/blog/HtmlBody";
import MarkdownBody from "@/components/blog/MarkdownBody";

interface PostBodyProps {
  post: BlogPostRow;
}

export default function PostBody({ post }: PostBodyProps) {
  const { format, content } = getPostBodyForDisplay(post);
  if (format === "html") {
    return <HtmlBody content={content} />;
  }
  return <MarkdownBody content={content} />;
}
