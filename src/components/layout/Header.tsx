"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/shared/BrandLogo";
import { SITE_NAV_LINKS } from "@/lib/constants/navigation";
import {
  DEFAULT_WHATSAPP_NUMBER,
  formatWhatsAppHref,
} from "@/lib/constants/siteContact";
import { HOME_HERO } from "@/lib/constants/siteContent";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

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
              prefetch={href === "/blog" ? true : undefined}
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
          className="md:hidden relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary bg-primary/[0.06] hover:bg-primary/[0.1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-[18px]" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-primary transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6.5px] h-[1.5px] w-full rounded-full bg-primary transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[13px] h-[1.5px] w-full rounded-full bg-primary transition-transform duration-300 ease-out ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Backdrop + drawer lateral (todas as opções visíveis) */}
      <div
        className={`md:hidden fixed inset-0 z-[60] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={`absolute inset-0 bg-primary/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />

        <aside
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute top-0 right-0 h-full w-[min(100%,20rem)] bg-white shadow-[-12px_0_40px_-16px_rgba(26,43,86,0.35)] flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-14 px-4 border-b border-primary/[0.08] shrink-0">
            <p className="text-sm font-semibold text-primary tracking-tight">Menu</p>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-pastel-mint/50 transition-colors"
              aria-label="Fechar menu"
              onClick={() => {
                setMenuOpen(false);
                buttonRef.current?.focus();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 overflow-y-auto" aria-label="Navegação mobile">
            <ul className="flex flex-col gap-1">
              {SITE_NAV_LINKS.map(({ href, label }) => {
                const active = isActiveLink(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      prefetch={href === "/blog" ? true : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex w-full items-center min-h-12 px-4 py-3 rounded-xl text-base font-semibold tracking-tight transition-colors ${
                        active
                          ? "bg-pastel-mint/70 text-primary"
                          : "text-primary/85 hover:bg-pastel-aqua/40"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 p-4 border-t border-primary/[0.08] pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href={formatWhatsAppHref(DEFAULT_WHATSAPP_NUMBER, HOME_HERO.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-2xl bg-primary text-white font-semibold text-sm px-4 py-3.5 hover:bg-primary-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
