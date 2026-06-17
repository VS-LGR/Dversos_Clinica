export const AREAS_INTRO_COPY = {
  eyebrow: "Especialidades",
  title: "Terapia integrada com equipe multidisciplinar",
  description:
    "Psicologia com ABA e ACT, fonoaudiologia, terapia ocupacional, nutrição, TAA e demais especialidades atuando de forma conjunta no plano individualizado de cada pessoa.",
  linkLabel: "Ver todas as especialidades",
};

export const AREAS_BRANCHES = [
  {
    title: "Psicologia e Desenvolvimento",
    slugs: [
      "psychology",
      "neuropsychological-assessment",
      "psychopedagogy",
      "therapeutic-companion",
      "psychomotricity",
      "neurodiversity",
    ],
  },
  {
    title: "Terapias Integradas",
    slugs: [
      "speech-therapy",
      "occupational-therapy",
      "sensory-integration",
      "music-therapy",
      "art-therapy",
      "physiotherapy",
    ],
  },
  {
    title: "Nutrição e Alimentação",
    slugs: ["nutrition", "feeding-therapy"],
  },
  {
    title: "Intervenções Assistidas",
    slugs: ["animal-assisted-therapy", "dog-therapy"],
  },
] as const;

export const ALL_SPECIALTY_SLUGS = AREAS_BRANCHES.flatMap((branch) => branch.slugs);

export const PROTECTED_CARE_COPY = {
  eyebrow: "Terapia Assistida por Animais",
  title: "TAA e cão de terapia na rotina de atendimento",
  description:
    "Quando indicado clinicamente, nosso cão de terapia participa das sessões de 1 hora, favorecendo vínculo, engajamento e regulação. A Terapia Assistida por Animais é conduzida com ética, supervisão e integração ao plano ABA.",
  bullets: [
    "Ambiente protegido e atividades planejadas conforme objetivos clínicos.",
    "Integração com Psicologia, AT e demais especialidades da clínica.",
    "Sala de regulação emocional para manejo seguro de comportamentos interferentes.",
    "Estrutura pensada para conforto sensorial, previsibilidade e acolhimento familiar.",
  ],
  highlightEyebrow: "Nossos espaços",
  highlightTitle: "Ambiente que também ensina",
  highlightDescription:
    "Salas individualizadas, brinquedoteca, cozinha terapêutica, horta e espaços de convivência — pensados para neurodiversidade. Conheça em Nossos espaços.",
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

export const AREAS_PAGE_COPY = {
  description:
    "Escolha uma especialidade para entender como cada área contribui para o plano individualizado da DVERSO — com ABA, evidências e cuidado integrado em Sorocaba.",
};
