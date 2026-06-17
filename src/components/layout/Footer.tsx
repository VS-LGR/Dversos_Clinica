import Link from "next/link";
import BrandLogo from "@/components/shared/BrandLogo";
import WaveDivider from "@/components/shared/WaveDivider";
import { FOOTER_EXTRA_LINKS } from "@/lib/constants/navigation";
import {
  SITE_CONTACT,
  formatFullAddress,
  formatTelHref,
} from "@/lib/constants/siteContact";

export default function Footer() {
  const fullAddress = formatFullAddress();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <WaveDivider
        overlay
        position="top"
        className="absolute top-0 inset-x-0 z-20"
        fill="#fff8f2"
        variant="soft"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset 0 14px 28px -8px rgba(0,0,0,0.25), 0 -8px 32px rgba(26,43,86,0.35)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-3 brightness-0 invert opacity-95">
              <BrandLogo variant="primary" size="sm" />
            </div>
            <h3 className="sr-only">{SITE_CONTACT.name}</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Clínica para neurodivergentes em Sorocaba: ABA, terapias integradas, TAA e cuidado interdisciplinar com evidências.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <address className="not-italic text-sm text-white/90 space-y-2">
              <p>
                <a
                  href={SITE_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {fullAddress}
                </a>
              </p>
              <p>
                <a
                  href={formatTelHref(SITE_CONTACT.phoneE164)}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
          <nav aria-label="Institucional">
            <h3 className="text-lg font-semibold mb-2">Institucional</h3>
            <ul className="flex flex-col gap-1">
              {FOOTER_EXTRA_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/90 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} {SITE_CONTACT.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
