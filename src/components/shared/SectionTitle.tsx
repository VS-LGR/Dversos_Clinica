interface SectionTitleProps {
  children: React.ReactNode;
  as?: "h2" | "h3";
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionTitle({
  children,
  as: Tag = "h2",
  align = "center",
  className = "",
  id,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <Tag
      id={id}
      className={`text-2xl sm:text-3xl font-bold text-primary ${alignClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
