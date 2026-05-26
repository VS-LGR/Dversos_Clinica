import DOMPurify from "isomorphic-dompurify";

interface HtmlBodyProps {
  content: string;
}

export default function HtmlBody({ content }: HtmlBodyProps) {
  const sanitized = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"],
  });

  return (
    <div
      className="html-body prose-blog"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
