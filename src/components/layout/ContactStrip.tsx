import ContactNavIcon from "@/components/shared/ContactNavIcon";
import { CONTACT_NAV_ITEMS } from "@/lib/constants/contactNav";

export default function ContactStrip() {
  return (
    <nav
      className="sm:hidden border-t border-primary/[0.08] bg-primary-pale/90 backdrop-blur-md pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      aria-label="Contato rápido"
    >
      <ul className="flex items-center justify-around gap-1 px-2 py-2.5 max-w-lg mx-auto">
        {CONTACT_NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={item.label}
              className="flex flex-col items-center gap-0.5 min-w-[3.25rem] rounded-lg px-2 py-1.5 text-primary transition-colors hover:bg-white/70 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
            >
              <ContactNavIcon type={item.icon} className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{item.label.split(" ")[0]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
