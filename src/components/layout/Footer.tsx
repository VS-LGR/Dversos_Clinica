import Link from "next/link";

const footerLinks = [
  { href: "/areas/psychology", label: "Psicologia" },
  { href: "/areas/neurodiversity", label: "Neurodivergência" },
  { href: "/areas/music-therapy", label: "Psicoterapia Musical" },
  { href: "/areas/nutrition", label: "Nutrição" },
  { href: "/areas/dog-therapy", label: "Terapia com Cão" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Clínica Dverso</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Saúde integrada em Sorocaba e região: psicologia, neurodivergência, música, nutrição e terapia assistida por cão.
            </p>
          </div>
          <nav aria-label="Links do rodapé">
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
          © {new Date().getFullYear()} Clínica Dverso. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
