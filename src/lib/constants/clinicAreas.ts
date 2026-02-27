export interface ClinicArea {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  howItWorks: string;
  whatsAppMessage: string;
  accentClass: string;
}

export const DEFAULT_WHATSAPP_NUMBER = "5515999999999";

export const CLINIC_AREAS: ClinicArea[] = [
  {
    slug: "psychology",
    name: "Psicologia",
    shortName: "Psicologia",
    description:
      "Atendimento psicológico humanizado para crianças, adolescentes e adultos, com foco em acolhimento e desenvolvimento emocional em Sorocaba e região.",
    howItWorks:
      "As sessões são realizadas em ambiente acolhedor, com duração de 50 minutos. O trabalho pode ser individual ou em grupo, conforme a necessidade. Utilizamos abordagens reconhecidas e adaptadas a cada perfil, sempre em sintonia com a demanda trazida pelo paciente ou pela família.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre atendimento em Psicologia na Clínica Dverso.",
    accentClass: "text-primary",
  },
  {
    slug: "neurodiversity",
    name: "Neurodivergência",
    shortName: "Neurodivergência",
    description:
      "Acompanhamento especializado para crianças e famílias neurodivergentes, com equipe preparada para TEA, TDAH e outras condições do neurodesenvolvimento.",
    howItWorks:
      "O atendimento é planejado de forma interdisciplinar, envolvendo avaliação, intervenção e orientação às famílias. Trabalhamos com estratégias que respeitam o ritmo e o perfil de cada criança, em ambiente seguro e previsível, favorecendo desenvolvimento e qualidade de vida.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre atendimento em Neurodivergência na Clínica Dverso.",
    accentClass: "text-primary",
  },
  {
    slug: "music-therapy",
    name: "Psicoterapia Musical",
    shortName: "Psicoterapia Musical",
    description:
      "Uso da música como ferramenta terapêutica no processo de autoconhecimento, regulação emocional e expressão, em sessões individuais ou em grupo.",
    howItWorks:
      "As sessões combinam escuta musical, improvisação, canto e movimento, sempre alinhadas aos objetivos terapêuticos. Não é necessário saber tocar instrumentos; o foco está no processo criativo e na relação terapêutica mediada pela música.",
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Psicoterapia Musical na Clínica Dverso.",
    accentClass: "text-primary",
  },
  {
    slug: "nutrition",
    name: "Nutrição",
    shortName: "Nutrição",
    description:
      "Atendimento nutricional para todas as idades, com atenção especial à alimentação na infância, neurodivergência e objetivos de saúde e bem-estar.",
    howItWorks:
      "A partir da anamnese e de objetivos definidos em conjunto, elaboramos um plano alimentar personalizado. O acompanhamento inclui suporte para mudança de hábitos, seletividade alimentar quando aplicável e educação nutricional para a família.",
    whatsAppMessage:
      "Olá! Gostaria de agendar ou tirar dúvidas sobre Nutrição na Clínica Dverso.",
    accentClass: "text-primary",
  },
  {
    slug: "dog-therapy",
    name: "Terapia Assistida por Cão",
    shortName: "Terapia com Cão",
    description:
      "Intervenções terapêuticas com o auxílio de cão treinado, potencializando vínculo, motivação e ganhos emocionais e sociais em crianças e adultos.",
    howItWorks:
      "As sessões são conduzidas por profissional capacitado junto com o cão terapeuta. As atividades são planejadas conforme o objetivo do tratamento (ex.: regulação emocional, interação social, motivação) e realizadas em ambiente controlado e seguro.",
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Terapia Assistida por Cão na Clínica Dverso.",
    accentClass: "text-primary",
  },
];

export function getAreaBySlug(slug: string): ClinicArea | undefined {
  return CLINIC_AREAS.find((a) => a.slug === slug);
}
