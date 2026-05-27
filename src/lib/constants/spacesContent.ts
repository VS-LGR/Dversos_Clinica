export interface ClinicSpace {
  slug: string;
  title: string;
  paragraphs: string[];
}

export const SPACES_PAGE = {
  metaTitle: "Nossos espaços | Clínica DVERSO Sorocaba",
  metaDescription:
    "Ambientes terapêuticos pensados para neurodiversidade: conforto sensorial, previsibilidade, salas individualizadas, regulação emocional e convivência em Sorocaba.",
  title: "Nossos espaços",
  introTitle: "Ambientes que respeitam a neurodiversidade",
  introParagraphs: [
    "Pensamos nossos espaços considerando conforto sensorial, previsibilidade, acessibilidade e acolhimento, porque acreditamos que o ambiente também ensina, regula e comunica segurança.",
    "Contamos com mobiliário arredondado, iluminação com intensidade reduzida e sem ruídos ou oscilações, ambientes padronizados, paleta de cores em tons neutros e organização visual mais limpa — favorecendo menor sobrecarga sensorial e maior previsibilidade.",
  ],
};

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    slug: "brinquedoteca",
    title: "Brinquedoteca",
    paragraphs: [
      "A rotina de atendimentos pode ser desafiadora para as famílias: crianças podem ter dificuldade de espera, se dispersar com facilidade, ficar ansiosas antes do atendimento ou precisar dividir a atenção com irmãos durante o tempo na clínica.",
      "Nossa brinquedoteca é um espaço de acolhimento, espera e convivência. Os aprendizes podem utilizá-la enquanto aguardam atendimento ou como ambiente de permanência com a família.",
      "Ela não precisa ser frequentada apenas no horário da terapia, podendo ser um espaço leve de adaptação, brincadeira e construção de vínculo com o ambiente da clínica.",
    ],
  },
  {
    slug: "espaco-conforto",
    title: "Espaço Conforto",
    paragraphs: [
      "O cuidado não acontece apenas dentro da terapia. A rotina de atendimentos pode ser intensa e exigir reorganização constante da vida cotidiana.",
      "Criamos um ambiente para que cuidadores possam descansar, trabalhar, estudar ou ter um momento de pausa enquanto aguardam os atendimentos — um espaço confortável, tranquilo e acolhedor.",
      "Descansar também faz parte da jornada.",
    ],
  },
  {
    slug: "salas-individualizadas",
    title: "Salas terapêuticas individualizadas",
    paragraphs: [
      "Nem todo aprendiz aprende da mesma forma e nem todos os ambientes favorecem o desenvolvimento.",
      "Nossas salas são organizadas para favorecer segurança, previsibilidade, engajamento e aprendizagem, respeitando diferentes perfis sensoriais, necessidades regulatórias e objetivos clínicos.",
    ],
  },
  {
    slug: "sala-regulacao",
    title: "Sala de regulação emocional",
    paragraphs: [
      "Emoções intensas, dificuldades de flexibilidade, frustração ou sobrecargas sensoriais podem interferir na participação, aprendizagem e bem-estar.",
      "Nossa Sala de Regulação Emocional oferece um ambiente seguro e estruturado para manejo de comportamentos interferentes, desenvolvimento de autorregulação, tolerância à frustração, flexibilidade e estratégias para lidar com desafios emocionais de forma mais funcional.",
      "Mais do que acalmar, o objetivo é ensinar habilidades de regulação que possam ser utilizadas na vida real.",
    ],
  },
  {
    slug: "horta",
    title: "Horta terapêutica",
    paragraphs: [
      "Nem todo aprendizado acontece sentado em uma mesa.",
      "A horta é um espaço de experiências práticas, exploração sensorial e construção de autonomia — trabalhando responsabilidade, tolerância à espera, flexibilidade, alimentação, coordenação motora, planejamento e participação social.",
      "Também é um ambiente rico para experiências sensoriais graduais, especialmente para aprendizes com seletividade alimentar ou maior sensibilidade a texturas, cheiros e novos alimentos.",
    ],
  },
  {
    slug: "sala-convivencia",
    title: "Sala de convivência",
    paragraphs: [
      "Aprender a conviver também é uma habilidade. Competências importantes surgem nas interações do cotidiano: esperar, negociar, compartilhar espaços, iniciar conversas, respeitar limites e construir vínculos.",
      "Utilizamos essa sala para intervenções em grupo com temas específicos alinhados ao plano terapêutico e para experiências de pertencimento em ambiente supervisionado.",
    ],
  },
  {
    slug: "gameterapia",
    title: "Espaço de gameterapia",
    paragraphs: [
      "Para muitos aprendizes, os jogos fazem parte do mundo de interesse, motivação e conexão.",
      "Na gameterapia, utilizamos jogos de forma estruturada com objetivos terapêuticos claros: flexibilidade cognitiva, tolerância à frustração, tomada de decisão, planejamento, comunicação, cooperação, regulação emocional e habilidades sociais.",
    ],
  },
  {
    slug: "cozinha-terapeutica",
    title: "Cozinha terapêutica",
    paragraphs: [
      "A alimentação pode ser uma das maiores preocupações das famílias: recusa alimentar, seletividade, dificuldade com texturas, marcas ou cheiros.",
      "Contamos com a Cozinha Terapêutica para intervenções em terapia alimentar, com processo estruturado, seguro e respeitoso ao ritmo do aprendiz.",
      "Os pais participam ativamente das sessões, acompanhando estratégias e recebendo orientações para generalizar os avanços no ambiente familiar.",
    ],
  },
];
