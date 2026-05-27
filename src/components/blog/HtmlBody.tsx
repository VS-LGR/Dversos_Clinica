interface HtmlBodyProps {
  content: string;
}

function sanitizeBasicHtml(html: string) {
  // Defesa mínima para SSR sem dependência de JSDOM/DOMPurify no build.
  // A origem do HTML é o editor/admin do próprio site (conteúdo editorial).
  let out = html;

  // Remove <script>...</script>
  out = out.replace(/<script\b[\s\S]*?<\/script>/gi, "");

  // Remove handlers inline (onClick, onload, etc.)
  out = out.replace(/\son\w+\s*=\s*"[^"]*"/gi, "");
  out = out.replace(/\son\w+\s*=\s*'[^']*'/gi, "");
  out = out.replace(/\son\w+\s*=\s*[^\s>]+/gi, "");

  // Garante rel seguro quando target=_blank
  out = out.replace(
    /<a([^>]*?)\s+target=(["'])_blank\2([^>]*?)>/gi,
    (match, before, q, after) => {
      const hasRel = /\srel=(["']).*?\1/i.test(match);
      if (hasRel) return match;
      return `<a${before} target=${q}_blank${q} rel=${q}noopener noreferrer${q}${after}>`;
    },
  );

  return out;
}

export default function HtmlBody({ content }: HtmlBodyProps) {
  const sanitized = sanitizeBasicHtml(content);

  return (
    <div
      className="html-body prose-blog"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
