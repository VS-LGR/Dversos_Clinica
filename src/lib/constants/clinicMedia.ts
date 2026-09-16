import { CLINIC_SPACES, type ClinicSpace } from "@/lib/constants/spacesContent";

export function publicMediaPath(...segments: string[]): string {
  return `/${segments.map((s) => encodeURIComponent(s)).join("/")}`;
}

export const BRAND_LOGO_PRIMARY = publicMediaPath("images", "LogoDversos_Logo.png");
export const BRAND_LOGO_SOLO = publicMediaPath("images", "Logo SoloDversos_Logo.webp");
export const BE_DVERSO_SUPPORT_IMAGE = publicMediaPath("images", "SejaDversoDversos_Logo.svg");
export const ANAKIN_THERAPY_DOG_IMAGE = publicMediaPath("images", "Foto Anakin.jpg.png");
export const ANAKIN_THERAPY_DOG_ALT =
  "Anakin — cão de terapia da Clínica DVERSO com bandana da marca";
export const TEAM_GROUP_PHOTO = publicMediaPath("images", "Socios", "DSC09904.jpg");
export const TEAM_GROUP_PHOTO_ALT =
  "Sócios da Clínica DVERSO — equipe de liderança em ambiente acolhedor";
export const CLINIC_TOUR_YOUTUBE_ID = "FKTPL8IMRQ4";
export const CLINIC_TOUR_YOUTUBE_URL = "https://youtu.be/FKTPL8IMRQ4";
export const CLINIC_TOUR_EMBED_URL = `https://www.youtube-nocookie.com/embed/${CLINIC_TOUR_YOUTUBE_ID}`;

export type SpaceSlug = (typeof CLINIC_SPACES)[number]["slug"];

export interface SpaceMedia {
  cover: string;
  gallery: string[];
}

const img = (...parts: string[]) => publicMediaPath("images", ...parts);

const SESSION_AT_SCHOOL = img("Acompanhamento_Terapeutico_escola.jpeg");
const SESSION_AT_TABLE = img("AcompanhamentoTerapeituco.jpeg");
const SESSION_ART_THERAPY = img("ArteTerapia_2.jpeg");
const SESSION_ART_ACTIVITY = img("Arteterapia.jpeg");
const SESSION_NEURO_ASSESSMENT = img("AvaliaçãoNeuro.jpeg");
const SESSION_PHYSIO_WALKER = img("Fisioterapia_Andador.jpeg");
const SESSION_SENSORY_ROOM = img("Fisioterapia.jpeg");
const SESSION_MUSIC_THERAPY = img("MusicoTerapia.jpeg");
const SESSION_NUTRITION = img("Nutricao.jpeg");
const SESSION_PSYCHOMOTRICITY = img("Psicomotricidade.jpeg");
const SESSION_PSYCHOPEDAGOGY = img("Psicopedagogia.jpeg");
const SESSION_TAA_PLAYROOM = img("TAA+Brinquedoteca.jpeg");
const SESSION_FEEDING_THERAPY = img("TerapiaAlimentar.jpeg");

export const SPACE_MEDIA: Record<SpaceSlug, SpaceMedia> = {
  brinquedoteca: {
    cover: SESSION_TAA_PLAYROOM,
    gallery: [img("Brinquedoteca", "DSC00280.jpg"), img("Brinquedoteca", "DSC00279.jpg")],
  },
  "espaco-conforto": {
    cover: img("Espaço Conforto", "DSC09448.jpg"),
    gallery: [
      img("Espaço Conforto", "DSC09450.jpg"),
      img("Espaço Conforto", "DSC09453.jpg"),
    ],
  },
  "salas-individualizadas": {
    cover: img("Consultórios", "Pisicologia", "DSC09454.jpg"),
    gallery: [
      SESSION_ART_THERAPY,
      img("Consultórios", "Fonaudiologia", "DSC09463.jpg"),
      SESSION_MUSIC_THERAPY,
      SESSION_SENSORY_ROOM,
    ],
  },
  "sala-regulacao": {
    cover: img("Sala de Regulação Emocional Sensorial", "DSC03234.jpg.jpeg"),
    gallery: [
      img("Sala de Regulação Emocional Sensorial", "DSC03240.jpg.jpeg"),
      img("Sala de Regulação Emocional Sensorial", "DSC03248.jpg.jpeg"),
    ],
  },
  horta: {
    cover: img("Horta", "DSC03332.jpg.jpeg"),
    gallery: [
      img("Horta", "DSC03333.jpg.jpeg"),
      img("Horta", "DSC03335.jpg.jpeg"),
      img("Horta", "DSC03338.jpg.jpeg"),
      img("Horta", "DSC03340.jpg.jpeg"),
    ],
  },
  "sala-convivencia": {
    cover: img("Extras", "DSC09942.jpg"),
    gallery: [img("Extras", "DSC09944.jpg"), img("Extras", "DSC09700.jpg")],
  },
  gameterapia: {
    cover: img("Game", "DSC03309.jpg.jpeg"),
    gallery: [img("Game", "DSC03312.jpg.jpeg")],
  },
  "cozinha-terapeutica": {
    cover: img("Extras", "DSC03343.jpg.jpeg"),
    gallery: [
      SESSION_FEEDING_THERAPY,
      img("Extras", "DSC03345.jpg.jpeg"),
      img("Extras", "DSC03350.jpg.jpeg"),
    ],
  },
};

export const CONSULTORIO_GALLERIES = [
  {
    label: "Arteterapia",
    images: [
      SESSION_ART_THERAPY,
      SESSION_ART_ACTIVITY,
      img("Consultórios", "Arteterapia", "DSC09489.jpg"),
    ],
  },
  {
    label: "Fonoaudiologia",
    images: [
      img("Consultórios", "Fonaudiologia", "DSC09462.jpg"),
      img("Consultórios", "Fonaudiologia", "DSC09463.jpg"),
      img("Consultórios", "Fonaudiologia", "DSC09464.jpg"),
      img("Consultórios", "Fonaudiologia", "DSC09465.jpg"),
    ],
  },
  {
    label: "Musicoterapia",
    images: [
      img("Consultórios", "Musicoterapia", "DSC09482.jpg"),
      img("Consultórios", "Musicoterapia", "DSC09484.jpg"),
    ],
  },
  {
    label: "Psicologia",
    images: [
      img("Consultórios", "Pisicologia", "DSC09454.jpg"),
      img("Consultórios", "Pisicologia", "DSC09457.jpg"),
      img("Consultórios", "Pisicologia", "DSC09458.jpg"),
      img("Consultórios", "Pisicologia", "DSC09459.jpg"),
      img("Consultórios", "Pisicologia", "DSC09460.jpg"),
    ],
  },
  {
    label: "Fisioterapia e psicomotricidade",
    images: [
      img("Consultórios", "Fisioterapia Psicomotricidade", "DSC09466.jpg"),
      img("Consultórios", "Fisioterapia Psicomotricidade", "DSC09468.jpg"),
      img("Consultórios", "Fisioterapia Psicomotricidade", "DSC09469.jpg"),
      img("Consultórios", "Fisioterapia Psicomotricidade", "DSC09470.jpg"),
      img("Consultórios", "Fisioterapia Psicomotricidade", "DSC09472.jpg"),
    ],
  },
  {
    label: "Integração sensorial",
    images: [
      img("Consultórios", "Integração Sensorial", "DSC03287.jpg.jpeg"),
      img("Consultórios", "Integração Sensorial", "DSC03292.jpg.jpeg"),
      img("Consultórios", "Integração Sensorial", "DSC03294.jpg.jpeg"),
      img("Consultórios", "Integração Sensorial", "DSC03297.jpg.jpeg"),
      img("Consultórios", "Integração Sensorial", "DSC03299.jpg.jpeg"),
      img("Consultórios", "Integração Sensorial", "DSC03300.jpg.jpeg"),
    ],
  },
] as const;

export const TAA_GALLERY = [
  img("TAA", "DSC09749.jpg"),
  img("TAA", "DSC09754.jpg"),
  img("TAA", "DSC09764.jpg"),
  img("TAA", "DSC09817.jpg"),
  img("TAA", "DSC09821.jpg"),
  img("TAA", "DSC09825.jpg"),
  img("TAA", "DSC09850.jpg"),
  img("TAA", "DSC09853.jpg"),
] as const;

export const HOME_MOSAIC_SLIDES = [
  { src: img("Brinquedoteca", "DSC00280.jpg"), alt: "Brinquedoteca da Clínica DVERSO" },
  { src: img("Espaço Conforto", "DSC09453.jpg"), alt: "Espaço Conforto para famílias" },
  { src: img("Horta", "DSC03335.jpg.jpeg"), alt: "Horta terapêutica" },
  { src: SESSION_TAA_PLAYROOM, alt: "Terapia assistida por animais na brinquedoteca" },
  { src: SESSION_SENSORY_ROOM, alt: "Sala de integração sensorial" },
  { src: img("Game", "DSC03312.jpg.jpeg"), alt: "Espaço de gameterapia" },
  { src: img("Extras", "DSC00441.jpg"), alt: "Ambiente acolhedor da clínica" },
] as const;

export const HOME_MOSAIC_IMAGES = HOME_MOSAIC_SLIDES.map((slide) => slide.src);

export const SOBRE_GALLERY = [
  img("Extras", "DSC00369.jpg"),
  img("Extras", "DSC00526.jpg"),
  img("Extras", "DSC09705.jpg"),
] as const;

export const ESPACOS_HERO_IMAGE = img("Extras", "DSC00441.jpg");

export const EDITORIAL_KID_PAINTING = img("Kid_Painting.jpg");
export const EDITORIAL_THERAPY_ABA = img("Therapy_ABA.png");
export const ABA_PROCESS_INFOGRAPHIC = img("AtendimentoABA.png");

/** Galeria sticky da seção PIC em Sobre — 2 imagens para crossfade fluido. */
export const PIC_SCROLL_GALLERY = [
  {
    src: EDITORIAL_THERAPY_ABA,
    alt: "Intervenção baseada em ABA — metodologia da Clínica DVERSO",
    fit: "contain" as const,
  },
  {
    src: img("Extras", "DSC00369.jpg"),
    alt: "Ambiente acolhedor da Clínica DVERSO",
    fit: "cover" as const,
  },
] as const;

export const HOME_SPECIALTIES_COLLAGE = {
  hero: {
    src: SESSION_SENSORY_ROOM,
    alt: "Sala de integração sensorial na Clínica DVERSO",
  },
  topLeft: {
    src: img("Consultórios", "Fonaudiologia", "DSC09463.jpg"),
    alt: "Sessão de fonoaudiologia na Clínica DVERSO",
  },
  topRight: {
    src: img("Consultórios", "Pisicologia", "DSC09454.jpg"),
    alt: "Atendimento psicológico na Clínica DVERSO",
  },
  bottomCenter: {
    src: SESSION_ART_THERAPY,
    alt: "Arteterapia na Clínica DVERSO",
  },
} as const;

/**
 * Colagem "Sobre a clínica":
 * 1 grande | abaixo: 2 quadrados à esquerda + 1 média vertical à direita
 */
export const HOME_ABOUT_COLLAGE = {
  hero: {
    src: SESSION_TAA_PLAYROOM,
    alt: "Brinquedoteca e Terapia Assistida por Animais na Clínica DVERSO em Sorocaba",
  },
  squareTop: {
    src: EDITORIAL_THERAPY_ABA,
    alt: "Sessão de terapia ABA na Clínica DVERSO",
  },
  squareBot: {
    src: img("Espaço Conforto", "DSC09453.jpg"),
    alt: "Espaço de acolhimento para famílias",
  },
  vertical: {
    src: SESSION_AT_TABLE,
    alt: "Atendimento terapêutico integrado na Clínica DVERSO",
  },
} as const;

export const EDITORIAL_IMAGES = {
  kidPainting: EDITORIAL_KID_PAINTING,
  therapyAba: EDITORIAL_THERAPY_ABA,
  abaProcessInfographic: ABA_PROCESS_INFOGRAPHIC,
} as const;

/** Imagem de capa por especialidade (listagem /areas e páginas de área). */
export const AREA_CARD_IMAGE: Record<
  string,
  { src: string; alt: string }
> = {
  psychology: {
    src: img("Consultórios", "Pisicologia", "DSC09454.jpg"),
    alt: "Consultório de Psicologia da Clínica DVERSO",
  },
  "speech-therapy": {
    src: img("Consultórios", "Fonaudiologia", "DSC09463.jpg"),
    alt: "Consultório de Fonoaudiologia da Clínica DVERSO",
  },
  "occupational-therapy": {
    src: img("Consultórios", "Integração Sensorial", "DSC09476.jpg"),
    alt: "Sala de Terapia Ocupacional e integração sensorial",
  },
  "sensory-integration": {
    src: SESSION_SENSORY_ROOM,
    alt: "Sala de Integração Sensorial da Clínica DVERSO",
  },
  "music-therapy": {
    src: SESSION_MUSIC_THERAPY,
    alt: "Sala de Musicoterapia da Clínica DVERSO",
  },
  physiotherapy: {
    src: SESSION_PHYSIO_WALKER,
    alt: "Sala de Fisioterapia da Clínica DVERSO",
  },
  psychomotricity: {
    src: SESSION_PSYCHOMOTRICITY,
    alt: "Sala de Psicomotricidade da Clínica DVERSO",
  },
  nutrition: {
    src: SESSION_NUTRITION,
    alt: "Ambiente de Nutrição e cozinha terapêutica",
  },
  "feeding-therapy": {
    src: SESSION_FEEDING_THERAPY,
    alt: "Cozinha terapêutica — Terapia Alimentar na Clínica DVERSO",
  },
  psychopedagogy: {
    src: SESSION_PSYCHOPEDAGOGY,
    alt: "Ambiente de Psicopedagogia na Clínica DVERSO",
  },
  "neuropsychological-assessment": {
    src: SESSION_NEURO_ASSESSMENT,
    alt: "Ambiente para Avaliação Neuropsicológica na Clínica DVERSO",
  },
  "animal-assisted-therapy": {
    src: SESSION_TAA_PLAYROOM,
    alt: "Terapia Assistida por Animais na Clínica DVERSO",
  },
  "therapeutic-companion": {
    src: SESSION_AT_SCHOOL,
    alt: "Acompanhamento terapêutico em ambiente escolar na Clínica DVERSO",
  },
  "art-therapy": {
    src: SESSION_ART_THERAPY,
    alt: "Sala de Arteterapia da Clínica DVERSO",
  },
  neurodiversity: {
    src: EDITORIAL_KID_PAINTING,
    alt: "Atendimento neuroafirmativo na Clínica DVERSO",
  },
};

/** Slugs de área que exibem imagem editorial de apoio */
export const AREA_EDITORIAL_IMAGE: Record<string, string> = Object.fromEntries(
  Object.entries(AREA_CARD_IMAGE).map(([slug, media]) => [slug, media.src]),
);

export function spaceMediaFor(space: ClinicSpace): SpaceMedia {
  return SPACE_MEDIA[space.slug as SpaceSlug];
}

export function spaceImageAlt(space: ClinicSpace, index = 0): string {
  const kind = index === 0 ? "ambiente" : "detalhe do ambiente";
  return `${space.title} — ${kind} da Clínica DVERSO em Sorocaba`;
}
