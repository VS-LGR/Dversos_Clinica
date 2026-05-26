export const SITE_URL = "https://www.clinicadverso.com.br";

export const SITE_CONTACT = {
  name: "Clínica DVERSO",
  legalName: "DVERSO - Terapias Integradas",
  streetAddress: "R. Messías Pereira de Paula, 241",
  neighborhood: "Jardim Pires de Mello",
  city: "Sorocaba",
  state: "SP",
  postalCode: "18046-640",
  phoneDisplay: "(15) 99666-6866",
  phoneE164: "5515996666866",
  whatsappNumber: "5515996666866",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Mess%C3%ADas+Pereira+de+Paula%2C+241+-+Jardim+Pires+de+Mello%2C+Sorocaba+-+SP%2C+18046-640",
  social: {
    instagram: "https://www.instagram.com/clinica.dverso",
    facebook: "https://www.facebook.com/profile.php?id=61576846224796",
  },
} as const;

export const DEFAULT_WHATSAPP_NUMBER = SITE_CONTACT.whatsappNumber;

export function formatFullAddress(): string {
  const { streetAddress, neighborhood, city, state, postalCode } = SITE_CONTACT;
  return `${streetAddress} - ${neighborhood}, ${city} - ${state}, ${postalCode}`;
}

export function formatTelHref(e164: string): string {
  return `tel:+${e164}`;
}

export function formatWhatsAppHref(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
