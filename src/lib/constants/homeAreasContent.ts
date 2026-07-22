export const AREAS_INTRO_COPY = {
  eyebrow: "Especialidades",
  title: "Terapia integrada com equipe multidisciplinar",
  linkLabel: "Ver especialidades",
};

export const PUBLIC_SPECIALTY_SLUGS = [
  "psychology",
  "speech-therapy",
  "occupational-therapy",
  "neuropsychological-assessment",
  "feeding-therapy",
  "therapeutic-companion",
] as const;

export type PublicSpecialtySlug = (typeof PUBLIC_SPECIALTY_SLUGS)[number];

/** Labels curtos padronizados para chips da home. */
export const SPECIALTY_CHIP_LABELS: Record<PublicSpecialtySlug, string> = {
  psychology: "Psicologia",
  "speech-therapy": "Fonoaudiologia",
  "occupational-therapy": "Terapia Ocupacional",
  "neuropsychological-assessment": "Avaliação Neuro",
  "feeding-therapy": "Terapia Alimentar",
  "therapeutic-companion": "AT - Acompanhamento Terapêutico",
};

export const HOME_FEATURED_SPECIALTY_SLUGS = PUBLIC_SPECIALTY_SLUGS;
export const ALL_SPECIALTY_SLUGS = PUBLIC_SPECIALTY_SLUGS;

export const AREAS_PAGE_COPY = {
  description:
    "Conheça as especialidades da Clínica DVERSO — atuação integrada, individualizada e baseada em evidências.",
};

export const PROTECTED_CARE_COPY = {
  eyebrow: "Terapia Assistida por Animais",
  title: "TAA e cão de terapia",
  description:
    "A Terapia Assistida por Animais é conduzida com ética, supervisão e integração ao plano terapêutico individualizado.",
};

export const COMPLEMENTARY_CARE_COPY = {
  eyebrow: "Cuidado neuroafirmativo",
  title: "Atendimento para crianças, adolescentes e famílias",
  description:
    "Atuamos com correntes atuais e abordagem interdisciplinar, promovendo regulação emocional, desenvolvimento funcional e qualidade de vida em ambiente previsível e acolhedor — incluindo comportamentos interferentes e de risco.",
  cards: [
    {
      title: "Participação da família",
      description:
        "Orientação, acolhimento e estratégias práticas para generalizar habilidades na rotina, na escola e em toda a rede de apoio.",
    },
    {
      title: "Equipe integrada",
      description:
        "Supervisão clínica, comunicação entre especialidades e plano terapêutico coerente com mensuração contínua de evolução.",
    },
    {
      title: "Objetivo funcional",
      description:
        "Avanços reais em autonomia, comunicação, participação social e qualidade de vida nos diferentes contextos de vida.",
    },
  ],
};
