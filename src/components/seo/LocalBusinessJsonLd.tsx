import { SITE_CONTACT, SITE_URL, formatFullAddress } from "@/lib/constants/siteContact";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONTACT.name,
    alternateName: SITE_CONTACT.legalName,
    url: SITE_URL,
    telephone: `+${SITE_CONTACT.phoneE164}`,
    image: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.city,
      addressRegion: SITE_CONTACT.state,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      address: formatFullAddress(),
    },
    sameAs: [SITE_CONTACT.social.instagram, SITE_CONTACT.social.facebook],
    areaServed: {
      "@type": "City",
      name: "Sorocaba",
    },
    description:
      "Clínica de psicologia, terapias integradas, avaliação neuropsicológica, nutrição e atendimentos especializados em Sorocaba e região.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
