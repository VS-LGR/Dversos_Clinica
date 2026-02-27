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
  neurodiversity: [
    {
      id: "n1",
      name: "Profissional de Neurodivergência (exemplo)",
      specialty: "Neurodivergência e desenvolvimento",
      bio: "Acompanhamento de crianças e famílias. (Texto para revisão.)",
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
  "dog-therapy": [
    {
      id: "d1",
      name: "Profissional de Terapia Assistida por Cão (exemplo)",
      specialty: "Terapia Assistida por Animais",
      bio: "Sessões com cão terapeuta. (Texto para revisão.)",
      imageUrl: null,
    },
  ],
};
