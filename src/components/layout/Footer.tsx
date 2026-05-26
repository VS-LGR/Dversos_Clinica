import Link from "next/link";
import { FOOTER_EXTRA_LINKS } from "@/lib/constants/navigation";
import {
  SITE_CONTACT,
  formatFullAddress,
  formatTelHref,
} from "@/lib/constants/siteContact";

const footerLinks = [
  { href: "/areas/psychology", label: "Psicologia" },
  { href: "/areas/neuropsychological-assessment", label: "Avaliação Neuropsicológica" },
  { href: "/areas/music-therapy", label: "Musicoterapia" },
  { href: "/areas/nutrition", label: "Nutrição" },
  { href: "/areas/animal-assisted-therapy", label: "TAA" },
];

export default function Footer() {
  const fullAddress = formatFullAddress();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(15,28,55,0.97) 0%, rgba(26,43,86,1) 45%, rgb(26,43,86) 100%)",
          boxShadow: "inset 0 14px 28px -8px rgba(0,0,0,0.25), 0 -8px 32px rgba(26,43,86,0.35)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">{SITE_CONTACT.name}</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Saúde integrada em Sorocaba e região: psicologia, terapias integradas, nutrição e intervenções especializadas.
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
              <p className="flex flex-wrap gap-3 pt-1">
                <a
                  href={SITE_CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={SITE_CONTACT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  Facebook
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
          <nav aria-label="Áreas de atuação">
            <h3 className="text-lg font-semibold mb-2">Áreas</h3>
            <ul className="flex flex-col gap-1">
              {footerLinks.map(({ href, label }) => (
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
