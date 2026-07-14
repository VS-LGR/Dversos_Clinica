"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/shared/BrandLogo";
import { SITE_NAV_LINKS } from "@/lib/constants/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/areas") return pathname.startsWith("/areas");
    if (href === "/blog") return pathname.startsWith("/blog");
    if (href === "/sobre") return pathname.startsWith("/sobre");
    if (href === "/espacos") return pathname.startsWith("/espacos");
    return pathname === href;
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/[0.08] shadow-[0_1px_0_rgba(26,43,86,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 gap-3">
        <Link
          href="/"
          className="flex items-center shrink-0 min-w-0 max-w-[calc(100%-3.5rem)] md:max-w-none hover:opacity-90 transition-opacity"
          aria-label="Clínica DVERSO — início"
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo variant="primary" size="sm" priority className="!max-h-7 sm:!max-h-9" />
        </Link>

        <nav className="hidden md:flex items-center gap-1.5" aria-label="Navegação principal">
          {SITE_NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors border ${
                isActiveLink(href)
                  ? "text-primary border-primary/25 bg-pastel-mint/50"
                  : "text-primary/90 border-transparent hover:text-primary hover:bg-pastel-aqua/30"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="md:hidden relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary border border-primary/10 bg-pastel-mint/30 hover:bg-pastel-mint/55 active:bg-pastel-mint/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-primary transition-transform duration-200 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-5 rounded-full bg-primary transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-5 rounded-full bg-primary transition-transform duration-200 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Overlay + painel mobile */}
      <div
        className={`md:hidden fixed inset-x-0 top-14 bottom-0 z-40 transition-[visibility] duration-200 ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={`absolute inset-0 bg-primary/35 backdrop-blur-[2px] transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />

        <div
          ref={panelRef}
          id={menuId}
          className={`relative z-10 mx-3 mt-2 rounded-2xl border border-primary/10 bg-white shadow-[0_18px_48px_-20px_rgba(26,43,86,0.35)] overflow-hidden transition-all duration-200 origin-top ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-[0.98]"
          }`}
        >
          <nav className="px-2 py-2" aria-label="Navegação mobile">
            <ul className="flex flex-col">
              {SITE_NAV_LINKS.map(({ href, label }) => {
                const active = isActiveLink(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center min-h-12 px-4 py-3 rounded-xl text-[15px] font-semibold tracking-tight transition-colors ${
                        active
                          ? "bg-pastel-mint/70 text-primary"
                          : "text-primary/90 hover:bg-pastel-aqua/35 active:bg-pastel-aqua/50"
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
