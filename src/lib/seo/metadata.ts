import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/constants/clinicAreas";
import { SITE_CONTACT, SITE_URL } from "@/lib/constants/siteContact";

const SITE_NAME = SITE_CONTACT.name;
const TITLE_SUFFIX = `| ${SITE_NAME}`;

/** Imagem padrão para compartilhamento social (Open Graph / Twitter). */
export const OG_IMAGE_PATH = "/images/hero-poster.webp";
export const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: "Clínica DVERSO — saúde integrada e atendimento neuroafirmativo em Sorocaba",
};

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Clínica DVERSO | Saúde Integrada em Sorocaba`,
    template: `%s ${TITLE_SUFFIX}`,
  },
  description:
    "Clínica DVERSO em Sorocaba: atendimento neuroatípico com ABA, terapias integradas, TAA, avaliação neuropsicológica e plano individualizado.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica DVERSO | Saúde Integrada em Sorocaba",
    description:
      "Psicologia, terapias integradas, avaliação neuropsicológica, nutrição e acolhimento familiar em Sorocaba e região.",
    url: "/",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica DVERSO | Saúde Integrada em Sorocaba",
    description:
      "Acolhimento familiar e cuidado interdisciplinar com equipe especializada.",
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} ${TITLE_SUFFIX}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function buildAreaMetadata(slug: string): Metadata {
  const area = getAreaBySlug(slug);
  if (!area) {
    return buildPageMetadata({
      title: "Área de atuação",
      description: "Conheça os atendimentos da Clínica DVERSO em Sorocaba.",
      path: `/areas/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${area.name} em Sorocaba`,
    description: `${area.description} Agende na Clínica DVERSO.`,
    path: `/areas/${slug}`,
  });
}
