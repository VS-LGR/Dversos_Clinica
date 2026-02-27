"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/areas/psychology", label: "Psicologia" },
  { href: "/areas/neurodiversity", label: "Neurodivergência" },
  { href: "/areas/music-therapy", label: "Psicoterapia Musical" },
  { href: "/areas/nutrition", label: "Nutrição" },
  { href: "/areas/dog-therapy", label: "Terapia com Cão" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-primary-pale shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-semibold text-primary hover:text-primary-light transition-colors"
        >
          Clínica Dverso
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-primary/90 hover:text-primary font-medium text-sm transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-primary hover:bg-primary-pale"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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
        <div className="md:hidden border-t border-primary-pale bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-2 text-primary hover:bg-primary-pale rounded-lg px-3 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
