interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h2" | "h3";
  align?: "left" | "center";
  className?: string;
  id?: string;
  subtitle?: string;
}

export default function SectionTitle({
  children,
  as: Tag = "h2",
  align = "center",
  className = "",
  id,
  subtitle,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleClass = align === "center" ? "mt-2 text-primary/70 text-base font-normal max-w-xl mx-auto" : "mt-2 text-primary/70 text-base font-normal max-w-xl";
  return (
    <div className={alignClass}>
      <Tag
        id={id}
        className={`text-2xl sm:text-3xl font-bold text-primary tracking-tight ${className}`}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className={subtitleClass}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
