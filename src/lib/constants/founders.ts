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
    name: "Selma Maria Carvalho Silva",
    role: "Fundadora · Psicologia",
    bio:
      "Atuação clínica com foco em acolhimento familiar, regulação emocional e cuidado interdisciplinar. Participa da construção de protocolos de segurança e cuidado protegido.",
    imageUrl: null,
  },
  {
    id: "2",
    name: "Debora Cristina Carvalho Silva",
    role: "Fundadora · Desenvolvimento Terapêutico",
    bio:
      "Contribui para o desenho de planos terapêuticos individualizados e integração entre especialidades, priorizando previsibilidade e evolução funcional.",
    imageUrl: null,
  },
  {
    id: "3",
    name: "Ana Laura Carvalho Silva",
    role: "Fundadora · Integração Clínica",
    bio:
      "Atuação voltada para comunicação entre equipe e família, com ênfase em acompanhamento humanizado e organização de condutas baseadas em evidências.",
    imageUrl: null,
  },
  {
    id: "4",
    name: "Selso Fernando Munhoz",
    role: "Fundador · Gestão Clínica",
    bio:
      "Apoia a estrutura técnica e operacional da clínica para manutenção de ambiente seguro, acolhedor e preparado para diferentes perfis de atendimento.",
    imageUrl: null,
  },
];
