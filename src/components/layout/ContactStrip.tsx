import ContactNavIcon from "@/components/shared/ContactNavIcon";
import { CONTACT_NAV_ITEMS } from "@/lib/constants/contactNav";

export default function ContactStrip() {
  return (
    <nav
      className="sm:hidden border-b border-primary/[0.08] bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,43,86,0.04)]"
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
              className="flex flex-col items-center gap-0.5 min-w-[3.25rem] rounded-lg px-2 py-1.5 text-primary transition-colors hover:bg-primary-pale/80 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
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
