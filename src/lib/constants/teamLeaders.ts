export interface TeamLeader {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string | null;
}

export const LEADERS_PAGE = {
  metaTitle: "Lideranças DVERSO | Clínica de saúde integrada",
  metaDescription:
    "Conheça a liderança da Clínica DVERSO: gestão, direção clínica, conformidade e trajetória dedicada ao cuidado neuroatípico em Sorocaba.",
  title: "Lideranças DVERSO",
  subtitle: "Um histórico de transformação nos cuidados",
};

export const TEAM_LEADERS: TeamLeader[] = [
  {
    id: "celso",
    name: "Celso Fernando Munhoz",
    role: "Gestor",
    bio: "Pai e marido, formado em Administração de Empresas, com 20 anos de experiência no setor da saúde e trajetória sólida em liderança, gestão empresarial e desenvolvimento de pessoas.",
  },
  {
    id: "ana-laura",
    name: "Ana Laura",
    role: "Sócia administradora",
    bio: "Mãe da Helena e esposa. Atua na organização dos processos internos, apoio operacional às equipes, acompanhamento das rotinas institucionais e relacionamento com clientes, contribuindo para que o cuidado clínico aconteça com consistência, qualidade e atenção às necessidades de cada paciente e família.",
  },
  {
    id: "selma",
    name: "Selma Carvalho",
    role: "Sócia · Diretora clínica e conformidade",
    bio: "Desde 2016 atua com aprendizes com deficiência e Transtorno do Espectro Autista. Psicóloga especializada em ABA, referência em manejo de comportamentos interferentes e de risco e desenvolvimento de habilidades funcionais. Responsável pela direção clínica, supervisão dos casos, qualidade técnica e conformidade da equipe.",
  },
  {
    id: "debora",
    name: "Débora Cristina Carvalho Silva",
    role: "Sócia administradora",
    bio: "Empreendedora e mãe de adolescente neuroatípica. Sua trajetória profissional é conectada à vivência familiar — conhece de forma concreta os caminhos, dúvidas e desafios de quem busca atendimento de qualidade. Participa da DVERSO com o objetivo de transformar esse cenário em um espaço de acolhimento, excelência e desenvolvimento.",
  },
];
