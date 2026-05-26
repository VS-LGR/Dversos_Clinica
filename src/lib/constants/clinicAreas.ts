export interface ClinicArea {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  howItWorks: string;
  whatsAppMessage: string;
  accentClass: string;
}

export { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/siteContact";

export const CLINIC_AREAS: ClinicArea[] = [
  {
    slug: "psychology",
    name: "Psicologia",
    shortName: "Psicologia",
    description:
      "Atendimento psicológico humanizado para crianças, adolescentes e adultos, com foco em acolhimento, vínculo terapêutico e saúde emocional em Sorocaba e região.",
    howItWorks:
      "As sessões acontecem em ambiente acolhedor, com plano terapêutico individualizado. O acompanhamento pode incluir orientação familiar e integração com outras áreas da clínica para cuidado mais completo.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre atendimento em Psicologia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "neuropsychological-assessment",
    name: "Avaliação Neuropsicológica",
    shortName: "Avaliação Neuropsicológica",
    description:
      "Processo avaliativo para mapear funções cognitivas, emocionais e comportamentais, auxiliando diagnóstico e planejamento terapêutico.",
    howItWorks:
      "A avaliação inclui entrevistas, aplicação de instrumentos técnicos e devolutiva estruturada para família e equipe, com direcionamentos claros para os próximos passos do cuidado.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Avaliação Neuropsicológica na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "music-therapy",
    name: "Musicoterapia",
    shortName: "Musicoterapia",
    description:
      "Uso terapêutico da música para favorecer comunicação, expressão emocional, regulação e desenvolvimento global.",
    howItWorks:
      "As sessões utilizam escuta, ritmo, canto e instrumentos de forma planejada para cada objetivo clínico. Não é necessário conhecimento musical prévio.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Musicoterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "nutrition",
    name: "Nutrição",
    shortName: "Nutrição",
    description:
      "Atendimento nutricional para diferentes fases da vida, com foco em saúde, rotina alimentar e qualidade de vida.",
    howItWorks:
      "Acompanhamento com avaliação individual, plano alimentar personalizado e orientação para a família, considerando necessidades clínicas e rotina real.",
    whatsAppMessage:
      "Olá! Gostaria de agendar ou tirar dúvidas sobre Nutrição na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "art-therapy",
    name: "Arteterapia",
    shortName: "Arteterapia",
    description:
      "Intervenção terapêutica por meio de recursos artísticos para promover expressão, criatividade e elaboração emocional.",
    howItWorks:
      "A proposta é conduzida por profissional habilitado, com atividades adaptadas ao perfil de cada paciente e integradas ao plano terapêutico.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Arteterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "occupational-therapy",
    name: "Terapia Ocupacional",
    shortName: "Terapia Ocupacional",
    description:
      "Atendimento voltado para autonomia, funcionalidade e participação nas atividades do dia a dia.",
    howItWorks:
      "As sessões trabalham habilidades motoras, cognitivas, sensoriais e de rotina, com metas definidas junto à família e à equipe interdisciplinar.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Terapia Ocupacional na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "sensory-integration",
    name: "Integração Sensorial",
    shortName: "Integração Sensorial",
    description:
      "Intervenção para organizar respostas aos estímulos sensoriais, favorecendo autorregulação e funcionalidade.",
    howItWorks:
      "O plano terapêutico é estruturado a partir de avaliação específica e atividades graduadas para ampliar adaptação sensorial no cotidiano.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Integração Sensorial na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "physiotherapy",
    name: "Fisioterapia",
    shortName: "Fisioterapia",
    description:
      "Atendimento fisioterapêutico com foco em desenvolvimento motor, funcionalidade e qualidade de movimento.",
    howItWorks:
      "As condutas são definidas conforme avaliação funcional e objetivos clínicos, com acompanhamento contínuo e orientação familiar.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Fisioterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "psychomotricity",
    name: "Psicomotricidade",
    shortName: "Psicomotricidade",
    description:
      "Intervenção que integra corpo, emoção e cognição para favorecer desenvolvimento global e aprendizagem.",
    howItWorks:
      "As sessões utilizam atividades corporais e lúdicas para ampliar organização motora, atenção, interação e regulação comportamental.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Psicomotricidade na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "therapeutic-companion",
    name: "Acompanhante Terapêutico (AT)",
    shortName: "Acompanhante Terapêutico",
    description:
      "Suporte terapêutico em contextos de vida real, promovendo generalização de habilidades e maior autonomia.",
    howItWorks:
      "O acompanhamento ocorre em ambientes como casa, escola e comunidade, com plano alinhado ao cuidado clínico e orientação contínua da equipe.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Acompanhante Terapêutico na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "feeding-therapy",
    name: "Terapia Alimentar",
    shortName: "Terapia Alimentar",
    description:
      "Atendimento para seletividade e dificuldades alimentares, com abordagem gradual, segura e acolhedora.",
    howItWorks:
      "A intervenção considera aspectos sensoriais, comportamentais e nutricionais para ampliar repertório alimentar e reduzir estresse nas refeições.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Terapia Alimentar na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "animal-assisted-therapy",
    name: "Terapia Assistida por Animais (TAA)",
    shortName: "Terapia Assistida por Animais",
    description:
      "Intervenções terapêuticas mediadas por animais para fortalecer vínculo, engajamento e desenvolvimento socioemocional.",
    howItWorks:
      "As atividades são planejadas conforme objetivos clínicos e conduzidas por profissionais capacitados em ambiente protegido e supervisionado.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Terapia Assistida por Animais na Clínica DVERSO.",
    accentClass: "text-primary",
  },
];

export function getAreaBySlug(slug: string): ClinicArea | undefined {
  return CLINIC_AREAS.find((a) => a.slug === slug);
}
