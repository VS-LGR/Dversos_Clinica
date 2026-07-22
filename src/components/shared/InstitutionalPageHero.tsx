import WaveDivider from "@/components/shared/WaveDivider";

interface InstitutionalPageHeroProps {
  title: string;
  subtitle?: string;
  lead?: string;
  className?: string;
}

/** Hero institucional — sem logo (logo fica só no header/footer). */
export default function InstitutionalPageHero({
  title,
  subtitle,
  lead,
  className = "",
}: InstitutionalPageHeroProps) {
  return (
    <header
      className={`relative py-16 sm:py-20 px-4 sm:px-6 bg-primary-pale/50 overflow-hidden ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center min-w-0 relative z-10">
        {subtitle ? (
          <p className="text-primary/60 text-xs font-medium uppercase tracking-widest mb-3">
            {subtitle}
          </p>
        ) : null}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4 text-balance break-words px-2">
          {title}
        </h1>
        {lead ? (
          <p className="text-lg text-primary/85 leading-relaxed max-w-3xl mx-auto">
            {lead}
          </p>
        ) : null}
      </div>
      <WaveDivider
        overlay
        className="absolute bottom-0 inset-x-0"
        fill="#f4f7fb"
        variant="soft"
      />
    </header>
  );
}
