import ContactNavIcon from "@/components/shared/ContactNavIcon";
import { CONTACT_NAV_ITEMS } from "@/lib/constants/contactNav";

export default function ScrollBar() {
  return (
    <aside
      className="fixed top-0 left-0 bottom-0 w-20 sm:w-24 z-30 hidden sm:flex flex-col items-center border-r border-primary/[0.08] shadow-[4px_0_20px_rgba(26,43,86,0.06)]"
      aria-label="Contato e localização"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-pale via-white to-accent-mint/40"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-primary/10 to-accent-warm/30"
        aria-hidden
      />

      <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 py-8 px-2">
        {CONTACT_NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={item.label}
            title={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-primary shadow-sm ring-1 ring-primary/[0.08] transition-all duration-200 hover:scale-110 hover:bg-white hover:text-primary-light hover:shadow-md hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-pale"
          >
            <ContactNavIcon type={item.icon} className="w-5 h-5" />
            <span
              className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-primary px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 -translate-x-1 group-hover:translate-x-0"
              aria-hidden
            >
              {item.label}
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-primary" />
            </span>
          </a>
        ))}
      </nav>

      <p className="relative z-10 mb-4 px-1 text-center text-[10px] font-medium uppercase tracking-wider text-primary/45">
        Contato
      </p>
    </aside>
  );
}
