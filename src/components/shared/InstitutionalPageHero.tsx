interface InstitutionalPageHeroProps {
  title: string;
  subtitle?: string;
  lead?: string;
}

export default function InstitutionalPageHero({
  title,
  subtitle,
  lead,
}: InstitutionalPageHeroProps) {
  return (
    <header className="py-16 sm:py-20 px-4 sm:px-6 border-b border-primary/[0.06] bg-white">
      <div className="max-w-4xl mx-auto text-center">
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
    </header>
  );
}
