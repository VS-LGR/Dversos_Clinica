/** Links de navegação compartilhados (header / footer). */
export const SITE_NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/areas", label: "Especialidades" },
  { href: "/espacos", label: "Espaços" },
] as const;

export const FOOTER_INSTITUTIONAL_LINKS = [
  { href: "/sobre", label: "Sobre a clínica" },
  { href: "/espacos", label: "Nossos espaços" },
  { href: "/liderancas", label: "Lideranças" },
  { href: "/seja-colaborador", label: "Seja colaborador" },
] as const;

export const FOOTER_EXTRA_LINKS = FOOTER_INSTITUTIONAL_LINKS;
