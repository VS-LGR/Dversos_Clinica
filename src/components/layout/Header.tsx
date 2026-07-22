"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/areas") return pathname.startsWith("/areas");
    if (href === "/sobre") return pathname.startsWith("/sobre");
    if (href === "/espacos") return pathname.startsWith("/espacos");
    return pathname === href;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const drawer =
    mounted &&
    createPortal(
      <div
        className={`md:hidden fixed inset-0 z-[200] ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={`absolute inset-0 bg-primary/45 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />

        <aside
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute top-0 right-0 flex h-[100dvh] w-[min(100%,20rem)] flex-col bg-white shadow-[-12px_0_40px_-16px_rgba(26,43,86,0.35)] transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-primary/[0.08] px-4">
            <p className="text-sm font-semibold tracking-tight text-primary">Menu</p>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-pastel-mint/50"
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

          <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4" aria-label="Navegação mobile">
            <ul className="flex flex-col gap-1">
              {SITE_NAV_LINKS.map(({ href, label }) => {
                const active = isActiveLink(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex min-h-12 w-full items-center rounded-xl px-4 py-3 text-base font-semibold tracking-tight transition-colors ${
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

          <div className="shrink-0 border-t border-primary/[0.08] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href={formatWhatsAppHref(DEFAULT_WHATSAPP_NUMBER, HOME_HERO.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              onClick={() => setMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-primary/[0.08] bg-white/95 shadow-[0_1px_0_rgba(26,43,86,0.04)] backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="flex max-w-[calc(100%-3.5rem)] min-w-0 shrink-0 items-center transition-opacity hover:opacity-90 md:max-w-none"
            aria-label="Clínica DVERSO — início"
            onClick={() => setMenuOpen(false)}
          >
            <BrandLogo variant="primary" size="sm" priority className="!max-h-7 sm:!max-h-9" />
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex" aria-label="Navegação principal">
            {SITE_NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveLink(href)
                    ? "border-primary/25 bg-pastel-mint/50 text-primary"
                    : "border-transparent text-primary/90 hover:bg-pastel-aqua/30 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/[0.06] text-primary transition-colors hover:bg-primary/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 md:hidden"
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
      </header>
      {drawer}
    </>
  );
}
