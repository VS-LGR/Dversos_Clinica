/** Ícones arredondados por área — símbolos terapêuticos neutros. */

const iconClass = "w-5 h-5";

export function AreaSymbol({ slug }: { slug: string }) {
  switch (slug) {
    case "psychology":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4v16M8 6c0 2.5 1.8 4 4 4s4-1.5 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "neuropsychological-assessment":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 14l3-3 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "psychopedagogy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 7h12v10H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "therapeutic-companion":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 20s-6-4-6-9a6 6 0 1 1 12 0c0 5-6 9-6 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "psychomotricity":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8v5M9 20l3-7 3 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "speech-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 10a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0v-1z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 15v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "occupational-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 12c0-3 2-5 4-5s4 2 4 5v6H8v-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "sensory-integration":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "music-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M10 6v9a3 3 0 1 1-2-2.83" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 4v9a3 3 0 1 1-2-2.83" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "art-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="14" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "physiotherapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4c3 4 3 8 0 12-3-4-3-8 0-12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "nutrition":
    case "feeding-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4c-2 3-2 6 0 9 2-3 2-6 0-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "animal-assisted-therapy":
    case "dog-therapy":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="8" cy="9" r="1.5" fill="currentColor" />
          <circle cx="16" cy="9" r="1.5" fill="currentColor" />
          <path d="M7 14c1.5 2 8.5 2 10 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="12" cy="13" rx="6" ry="5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "neurodiversity":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 12c0-3 2.5-5 6-5s6 2 6 5-2.5 5-6 5-6-2-6-5z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}
