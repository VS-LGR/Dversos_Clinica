"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/shared/BrandLogo";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { SITE_NAV_LINKS } from "@/lib/constants/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/areas") return pathname.startsWith("/areas");
    if (href === "/blog") return pathname.startsWith("/blog");
    if (href === "/sobre") return pathname.startsWith("/sobre");
    if (href === "/espacos") return pathname.startsWith("/espacos");
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pastel-peach/40 shadow-[0_1px_0_rgba(26,43,86,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center shrink-0 max-w-[55vw] sm:max-w-none hover:opacity-90 transition-opacity"
          aria-label="Clínica DVERSO — início"
        >
          <BrandLogo variant="primary" size="sm" priority className="!max-h-8 sm:!max-h-9" />
        </Link>

        <nav className="hidden md:flex items-center gap-2" aria-label="Navegação principal">
          {SITE_NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors border ${
                isActiveLink(href)
                  ? "text-primary border-primary/25 bg-pastel-mint/40"
                  : "text-primary/90 border-transparent hover:text-primary hover:bg-pastel-aqua/30"
              }`}
            >
              {label}
            </Link>
          ))}
          <WhatsAppButton
            phoneNumber={DEFAULT_WHATSAPP_NUMBER}
            label="Falar no WhatsApp"
            variant="soft"
            className="ml-1 rounded-full px-4 py-2 text-sm"
          />
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-full text-primary hover:bg-pastel-mint/40"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-main-menu" className="md:hidden border-t border-pastel-peach/40 bg-white/95 backdrop-blur-md shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2" aria-label="Navegação mobile">
            {SITE_NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-3 text-primary rounded-2xl px-4 font-medium border transition-colors ${
                  isActiveLink(href)
                    ? "bg-pastel-mint/40 border-primary/20"
                    : "border-primary/8 hover:bg-pastel-aqua/25"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 grid grid-cols-1 gap-2">
              <WhatsAppButton
                phoneNumber={DEFAULT_WHATSAPP_NUMBER}
                label="Falar no WhatsApp"
                variant="soft"
                className="w-full text-sm rounded-2xl"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
