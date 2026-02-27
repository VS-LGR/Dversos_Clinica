export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string | null;
}

export const FOUNDERS: Founder[] = [
  {
    id: "1",
    name: "Nome da Fundadora 1",
    role: "Co-fundadora · Psicologia",
    bio:
      "Breve trajetória sugerida: formação em Psicologia, atuação em clínica infantil e neurodivergência. Especialização em abordagens que priorizam o acolhimento e o desenvolvimento emocional. (Texto para revisão pela clínica.)",
    imageUrl: null,
  },
  {
    id: "2",
    name: "Nome da Fundadora 2",
    role: "Co-fundadora · Área de atuação",
    bio:
      "Breve trajetória sugerida: experiência em [área], com foco em [público/objetivo]. Comprometida com práticas baseadas em evidências e em um atendimento humanizado. (Texto para revisão pela clínica.)",
    imageUrl: null,
  },
];
