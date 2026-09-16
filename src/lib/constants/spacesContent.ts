export interface ClinicSpace {
  slug: string;
  title: string;
  paragraphs: string[];
}

export const SPACES_PAGE = {
  metaTitle: "Nossos ambientes | Clínica DVERSO Sorocaba",
  metaDescription:
    "Ambientes terapêuticos pensados para neurodiversidade: conforto sensorial, previsibilidade, salas individualizadas, regulação emocional e convivência em Sorocaba.",
  title: "Nossos ambientes",
  introTitle: "Ambientes que respeitam a neurodiversidade",
  introParagraphs: [
    "Pensamos nossos ambientes considerando conforto sensorial, previsibilidade, acessibilidade e acolhimento, porque acreditamos que o ambiente também ensina, regula e comunica segurança.",
    "Contamos com mobiliário arredondado, iluminação com intensidade reduzida e sem ruídos ou oscilações, ambientes padronizados, paleta de cores em tons neutros e organização visual mais limpa — favorecendo menor sobrecarga sensorial e maior previsibilidade.",
  ],
};

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    slug: "brinquedoteca",
    title: "Brinquedoteca",
    paragraphs: [
      "A rotina de atendimentos pode ser desafiadora para as famílias: crianças podem ter dificuldade de espera, se dispersar com facilidade, ficar ansiosas antes do atendimento ou precisar dividir a atenção com irmãos durante o tempo na clínica. Por isso, planejamos um espaço acolhedor, com recursos pensados para oferecer conforto e tranquilidade para crianças e famílias durante esse período.",
    ],
  },
  {
    slug: "espaco-conforto",
    title: "Espaço Conforto",
    paragraphs: [
      "O cuidado vai além da sala de terapia. Sabemos que a rotina de atendimentos envolve deslocamentos, esperas e adaptações na dinâmica familiar. Contamos com um espaço pensado para esse momento: confortável e organizado para oferecer tranquilidade às famílias durante toda a permanência na clínica.",
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
      "Reconhecemos que a regulação faz parte do processo de aprendizagem e da participação. Por isso, criamos um espaço acolhedor e acessível, com recursos de regulação individualizados. A criança não é conduzida para esse ambiente; ela é ensinada a reconhecer os sinais do próprio corpo, identificar quais recursos, estratégias e ambientes favorecem sua regulação e, gradualmente, solicitar o uso do espaço de forma autônoma.",
    ],
  },
  {
    slug: "horta",
    title: "Horta terapêutica",
    paragraphs: [
      "Nem todo aprendizado acontece sentado à mesa. Na horta, o cuidado com a terra, o plantio e a colheita se transformam em oportunidades para desenvolver autonomia, planejamento, atenção, flexibilidade, coordenação motora e habilidades de vida diária. Além disso, o contato com a natureza favorece o bem-estar, a regulação emocional e amplia as possibilidades de exploração sensorial.",
    ],
  },
  {
    slug: "sala-convivencia",
    title: "Sala de convivência",
    paragraphs: [
      "Aprender a conviver também é uma habilidade. Por isso, valorizamos os momentos de interação espontânea, em que as crianças podem praticar competências importantes em contextos naturais. Esperar, negociar, compartilhar espaços, iniciar conversas, respeitar limites, lidar com diferentes perspectivas e construir vínculos são aprendizagens que acontecem no cotidiano e contribuem para uma participação mais autônoma, significativa e respeitosa nos diferentes ambientes da vida.",
    ],
  },
  {
    slug: "gameterapia",
    title: "Espaço de gameterapia",
    paragraphs: [
      "Os jogos são utilizados de forma intencional para promover aprendizagem. Por meio deles, desenvolvemos habilidades cognitivas, sociais, comunicativas e de autorregulação, aproveitando interesses e motivações para tornar as intervenções mais significativas e engajadoras.",
    ],
  },
  {
    slug: "cozinha-terapeutica",
    title: "Cozinha terapêutica",
    paragraphs: [
      "A alimentação pode ser um dos maiores desafios para muitas famílias. Recusa alimentar, seletividade, sensibilidade a texturas, cheiros, temperaturas, cores ou marcas podem impactar a saúde, a participação e a rotina.",
      "A cozinha terapêutica oferece um ambiente seguro para explorar alimentos, desenvolver habilidades relacionadas à alimentação e promover maior autonomia, sempre respeitando o ritmo e as necessidades de cada aprendiz.",
    ],
  },
];
