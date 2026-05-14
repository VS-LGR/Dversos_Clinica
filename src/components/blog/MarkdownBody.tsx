import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownBodyProps {
  content: string;
}

export default function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
