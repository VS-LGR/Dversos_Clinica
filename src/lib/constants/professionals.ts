export interface Professional {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string | null;
}

export const PROFESSIONALS_BY_AREA: Record<string, Professional[]> = {
  psychology: [
    {
      id: "p1",
      name: "Profissional de Psicologia (exemplo)",
      specialty: "Psicologia Clínica",
      bio: "Atuação em psicoterapia infantil e adulta. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "neuropsychological-assessment": [
    {
      id: "n1",
      name: "Profissional de Avaliação Neuropsicológica (exemplo)",
      specialty: "Neuropsicologia",
      bio: "Avaliação clínica e devolutiva para famílias. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "music-therapy": [
    {
      id: "m1",
      name: "Profissional de Psicoterapia Musical (exemplo)",
      specialty: "Musicoterapia / Psicoterapia Musical",
      bio: "Sessões individuais e em grupo. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  nutrition: [
    {
      id: "nu1",
      name: "Profissional de Nutrição (exemplo)",
      specialty: "Nutrição Clínica",
      bio: "Atendimento para todas as idades. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "art-therapy": [
    {
      id: "a1",
      name: "Profissional de Arteterapia (exemplo)",
      specialty: "Arteterapia",
      bio: "Intervenção com recursos artísticos. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "occupational-therapy": [
    {
      id: "o1",
      name: "Profissional de Terapia Ocupacional (exemplo)",
      specialty: "Terapia Ocupacional",
      bio: "Acompanhamento funcional e autonomia. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "sensory-integration": [
    {
      id: "s1",
      name: "Profissional de Integração Sensorial (exemplo)",
      specialty: "Integração Sensorial",
      bio: "Plano sensorial individualizado. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  physiotherapy: [
    {
      id: "f1",
      name: "Profissional de Fisioterapia (exemplo)",
      specialty: "Fisioterapia",
      bio: "Intervenção motora e funcional. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  psychomotricity: [
    {
      id: "pm1",
      name: "Profissional de Psicomotricidade (exemplo)",
      specialty: "Psicomotricidade",
      bio: "Integração corpo, emoção e cognição. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "therapeutic-companion": [
    {
      id: "at1",
      name: "Acompanhante Terapêutico (exemplo)",
      specialty: "Acompanhamento terapêutico",
      bio: "Suporte em contextos de vida real. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "feeding-therapy": [
    {
      id: "ta1",
      name: "Profissional de Terapia Alimentar (exemplo)",
      specialty: "Terapia Alimentar",
      bio: "Manejo de seletividade alimentar. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
  "animal-assisted-therapy": [
    {
      id: "taa1",
      name: "Profissional de TAA (exemplo)",
      specialty: "Terapia Assistida por Animais",
      bio: "Intervenções mediadas por animais. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
};
