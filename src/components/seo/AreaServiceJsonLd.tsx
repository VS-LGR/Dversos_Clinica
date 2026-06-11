import type { ClinicArea } from "@/lib/constants/clinicAreas";
import { SITE_CONTACT, SITE_URL } from "@/lib/constants/siteContact";

interface AreaServiceJsonLdProps {
  area: ClinicArea;
}

export default function AreaServiceJsonLd({ area }: AreaServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: area.name,
    description: area.description,
    url: `${SITE_URL}/areas/${area.slug}`,
    provider: {
      "@type": "MedicalBusiness",
      name: SITE_CONTACT.name,
      url: SITE_URL,
      telephone: `+${SITE_CONTACT.phoneE164}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONTACT.streetAddress,
        addressLocality: SITE_CONTACT.city,
        addressRegion: SITE_CONTACT.state,
        postalCode: SITE_CONTACT.postalCode,
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: SITE_CONTACT.city,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
