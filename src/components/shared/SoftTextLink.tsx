import Link from "next/link";

interface SoftTextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function SoftTextLink({
  href,
  children,
  className = "",
  external = false,
}: SoftTextLinkProps) {
  const baseClass =
    "inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-light transition-colors underline-offset-4 hover:underline";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {children}
        <span aria-hidden>→</span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
