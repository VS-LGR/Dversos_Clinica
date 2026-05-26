import type { ContactNavIcon as ContactNavIconType } from "@/lib/constants/contactNav";

interface ContactNavIconProps {
  type: ContactNavIconType;
  className?: string;
}

export default function ContactNavIcon({ type, className = "w-5 h-5" }: ContactNavIconProps) {
  switch (type) {
    case "map":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8.5h2.5V5h-2.9c-2.8 0-4.1 1.7-4.1 4v1.5H7v3.5h2.5V19h3.5v-5.5H16l.5-3.5h-3V9.2c0-1 .3-1.7 1.7-1.7Z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.6 4.8c.4-.9 1.5-1.2 2.3-.6l1.6 1.2c.7.5.9 1.4.5 2.1l-.7 1.2c.9 1.8 2.3 3.2 4.1 4.1l1.2-.7c.7-.4 1.6-.2 2.1.5l1.2 1.6c.6.8.3 1.9-.6 2.3-1.2.5-2.5.8-3.8.8-4.8 0-9.3-3.6-10.8-8.4-.2-.7 0-1.5.3-2.1Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2 .6 3.9 1.7 5.5L2 22l5.4-1.6c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.2 10-9.4S17.5 2 12 2Zm5.8 13.5c-.2.6-1.2 1.1-1.7 1.1-.4 0-1-.2-2.4-.8-2.2-.9-3.6-3.1-3.7-3.3-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2 .2-.3.5-.3.7-.3h.5c.2 0 .4.1.5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6 1.1 1 2 1.3 2.3 1.4.3.1.7 0 .9-.4.2-.4.8-1 1-1.3.2-.3.4-.2.7-.1.3.1 1.8.8 2.1 1 .3.1.5.2.6.3 0 .2 0 .7-.2 1.3Z" />
        </svg>
      );
    default:
      return null;
  }
}
