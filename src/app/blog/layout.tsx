import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Clínica DVERSO",
  description:
    "Artigos e publicações da equipe Clínica DVERSO sobre saúde integrada, terapias e cuidado familiar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Clínica DVERSO",
    description:
      "Artigos e publicações da equipe Clínica DVERSO sobre saúde integrada, terapias e cuidado familiar.",
    url: "/blog",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
