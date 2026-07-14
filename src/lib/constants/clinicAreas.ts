export interface ClinicArea {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  howItWorks: string;
  /** Parágrafos adicionais para a página de detalhe (opcional). */
  detailParagraphs?: string[];
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
      "Atendimento psicológico com ABA e ACT para crianças, adolescentes e adultos neuroatípicos — com foco em habilidades funcionais, regulação emocional e participação da família.",
    howItWorks:
      "A Psicologia na DVERSO atua com Análise do Comportamento Aplicada (ABA) e Terapia de Aceitação e Compromisso (ACT), integrando ciência, vínculo e objetivos funcionais. O atendimento é individualizado, com metas claras, monitoramento contínuo e supervisão clínica.",
    detailParagraphs: [
      "A ABA estrutura intervenções com base em evidências, análise de dados e ajustes permanentes do plano. A ACT complementa o cuidado ao trabalhar flexibilidade psicológica, valores e estratégias de regulação emocional.",
      "A família participa ativamente do processo, recebendo orientações práticas para generalizar habilidades na rotina, na escola e nos diferentes contextos de vida do aprendiz.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre atendimento em Psicologia (ABA/ACT) na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "therapeutic-companion",
    name: "Acompanhante Terapêutico (AT)",
    shortName: "Acompanhante Terapêutico",
    description:
      "Suporte terapêutico em ambientes naturais — casa, escola e comunidade — para generalizar habilidades, ampliar autonomia e fortalecer a rede de apoio.",
    howItWorks:
      "O Acompanhante Terapêutico atua nos contextos em que o aprendiz vive, aplicando estratégias alinhadas ao plano clínico, com supervisão e comunicação contínua com a equipe DVERSO.",
    detailParagraphs: [
      "Quando indicado, o AT participa das sessões de 1 hora e acompanha o aprendiz em situações reais de rotina, favorecendo generalização de habilidades sociais, comunicativas, regulatórias e funcionais.",
      "O trabalho é planejado em conjunto com supervisão ABA, família e, quando necessário, escola — sempre com foco em segurança, previsibilidade e avanços sustentáveis.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Acompanhante Terapêutico na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "speech-therapy",
    name: "Fonoaudiologia",
    shortName: "Fonoaudiologia",
    description:
      "Desenvolvimento da comunicação, linguagem, fala, deglutição e alimentação oral com abordagem funcional e integrada ao plano terapêutico.",
    howItWorks:
      "A Fonoaudiologia avalia e intervém nas habilidades de comunicação e alimentação, considerando perfil sensorial, comportamento e necessidades de cada aprendiz.",
    detailParagraphs: [
      "Trabalhamos comunicação funcional, ampliação de repertório verbal e não verbal, organização oral-motora e estratégias para alimentação e deglutição seguras.",
      "As sessões são integradas à equipe multiprofissional, com metas alinhadas ao PIC e orientação à família para generalização em casa e na escola.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Fonoaudiologia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "occupational-therapy",
    name: "Terapia Ocupacional",
    shortName: "Terapia Ocupacional",
    description:
      "Autonomia, participação e funcionalidade nas atividades do dia a dia, com integração sensorial e planejamento individualizado.",
    howItWorks:
      "A Terapia Ocupacional estrutura metas para rotina, autocuidado, habilidades motoras finas e grossas, organização sensorial e participação social.",
    detailParagraphs: [
      "As intervenções respeitam o perfil de cada aprendiz e dialogam com Psicologia, Integração Sensorial, Nutrição e demais áreas da clínica.",
      "O foco é promover independência funcional e qualidade de vida nos ambientes em que a pessoa está inserida.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Terapia Ocupacional na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "sensory-integration",
    name: "Integração Sensorial",
    shortName: "Integração Sensorial",
    description:
      "Organização das respostas sensoriais para favorecer autorregulação, atenção, participação e funcionalidade no cotidiano.",
    howItWorks:
      "A Integração Sensorial é conduzida dentro da Terapia Ocupacional, com avaliação específica e atividades graduadas que respeitam o perfil sensorial de cada aprendiz.",
    detailParagraphs: [
      "O plano terapêutico busca reduzir sobrecarga, ampliar tolerância a estímulos e fortalecer estratégias de autorregulação em situações reais.",
      "Trabalhamos em parceria com a família e com a equipe para que os ganhos sensoriais se traduzam em mais conforto e participação na rotina.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Integração Sensorial na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "music-therapy",
    name: "Musicoterapia",
    shortName: "Musicoterapia",
    description:
      "Uso terapêutico da música para comunicação, expressão, regulação emocional e desenvolvimento global — sem exigir conhecimento musical prévio.",
    howItWorks:
      "A Musicoterapia utiliza escuta, ritmo, canto e instrumentos de forma planejada, com objetivos clínicos definidos e integração ao plano individualizado.",
    detailParagraphs: [
      "A música favorece engajamento, vínculo e aprendizagem em aprendizes com diferentes perfis de comunicação e interesse.",
      "As sessões são conduzidas por profissional habilitado e alinhadas à supervisão clínica da DVERSO.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de saber mais sobre Musicoterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "physiotherapy",
    name: "Fisioterapia",
    shortName: "Fisioterapia",
    description:
      "Desenvolvimento motor, postura, movimento e funcionalidade com condutas baseadas em avaliação e metas individualizadas.",
    howItWorks:
      "A Fisioterapia avalia o perfil motor e estrutura intervenções para ampliar mobilidade, coordenação, força e participação nas atividades cotidianas.",
    detailParagraphs: [
      "As condutas são ajustadas conforme evolução clínica, com comunicação contínua com a equipe interdisciplinar e orientação à família.",
      "O objetivo é promover movimento funcional, segurança e autonomia nos diferentes contextos de vida.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Fisioterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "psychomotricity",
    name: "Psicomotricidade",
    shortName: "Psicomotricidade",
    description:
      "Integração entre corpo, emoção e cognição para favorecer desenvolvimento global, atenção, interação e aprendizagem.",
    howItWorks:
      "A Psicomotricidade utiliza atividades corporais e lúdicas para ampliar organização motora, regulação, coordenação e habilidades socioemocionais.",
    detailParagraphs: [
      "O trabalho corporal favorece consciência de si, expressão e participação em atividades estruturadas e significativas.",
      "As sessões são planejadas conforme objetivos do PIC e dialogam com demais terapias da clínica.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Psicomotricidade na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "nutrition",
    name: "Nutrição",
    shortName: "Nutrição",
    description:
      "Avaliação nutricional e plano alimentar individualizado, integrado à rotina familiar e às necessidades clínicas de cada aprendiz.",
    howItWorks:
      "A Nutrição acompanha saúde, crescimento e hábitos alimentares com avaliação individual, metas funcionais e orientação prática à família.",
    detailParagraphs: [
      "Consideramos aspectos sensoriais, comportamentais e de saúde para construir estratégias sustentáveis e respeitosas ao ritmo de cada pessoa.",
      "O trabalho se integra à Terapia Alimentar e à equipe multiprofissional quando há seletividade ou dificuldades relacionadas à alimentação.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de agendar ou tirar dúvidas sobre Nutrição na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "feeding-therapy",
    name: "Terapia Alimentar",
    shortName: "Terapia Alimentar",
    description:
      "Intervenção gradual e segura para seletividade alimentar e dificuldades nas refeições, com participação ativa da família.",
    howItWorks:
      "A Terapia Alimentar utiliza a Cozinha Terapêutica e abordagem estruturada para ampliar repertório alimentar, reduzir estresse nas refeições e generalizar avanços em casa.",
    detailParagraphs: [
      "Os pais participam das sessões, acompanhando estratégias e recebendo orientações para sustentar mudanças no ambiente familiar.",
      "A intervenção considera aspectos sensoriais, comportamentais e nutricionais, sempre respeitando o ritmo e a segurança do aprendiz.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Terapia Alimentar na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "psychopedagogy",
    name: "Psicopedagogia",
    shortName: "Psicopedagogia",
    description:
      "Apoio ao processo de aprendizagem escolar, identificando barreiras cognitivas, emocionais e comportamentais com estratégias individualizadas.",
    howItWorks:
      "A Psicopedagogia investiga como o aprendiz aprende, quais dificuldades interferem no desempenho escolar e quais estratégias favorecem participação e autonomia.",
    detailParagraphs: [
      "O trabalho dialoga com a escola, a família e a equipe clínica para construir caminhos de aprendizagem mais funcionais e sustentáveis.",
      "Metas são definidas com base em avaliação e acompanhamento contínuo, integradas ao plano terapêutico da DVERSO.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Psicopedagogia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "neuropsychological-assessment",
    name: "Avaliação Neuropsicológica",
    shortName: "Avaliação Neuropsicológica",
    description:
      "Mapeamento estruturado de funções cognitivas, emocionais e comportamentais para diagnóstico, planejamento e devolutiva clara à família.",
    howItWorks:
      "A Avaliação Neuropsicológica inclui entrevistas, instrumentos técnicos e devolutiva estruturada, com direcionamentos objetivos para o plano de intervenção.",
    detailParagraphs: [
      "O processo auxilia a compreender perfil de aprendizagem, atenção, memória, linguagem, funções executivas e aspectos emocionais relevantes.",
      "Os resultados orientam decisões clínicas, escolares e familiares com base em evidências e linguagem acessível.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Avaliação Neuropsicológica na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "animal-assisted-therapy",
    name: "Terapia Assistida por Animais (TAA)",
    shortName: "Terapia Assistida por Animais",
    description:
      "Intervenções mediadas por animais — incluindo nosso cão de terapia — para vínculo, engajamento, regulação e desenvolvimento socioemocional.",
    howItWorks:
      "A TAA é conduzida por profissionais capacitados, com atividades planejadas conforme objetivos clínicos e ambiente protegido e supervisionado.",
    detailParagraphs: [
      "Quando indicado clinicamente, o cão de terapia participa das sessões de 1 hora, favorecendo motivação, comunicação e regulação emocional.",
      "A intervenção integra-se ao plano ABA e à equipe multiprofissional, sempre priorizando segurança, ética e bem-estar do aprendiz e do animal.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Terapia Assistida por Animais na Clínica DVERSO.",
    accentClass: "text-primary",
  },
  {
    slug: "art-therapy",
    name: "Arteterapia",
    shortName: "Arteterapia",
    description:
      "Expressão e elaboração emocional por meio de recursos artísticos, integrada ao plano terapêutico individualizado.",
    howItWorks:
      "A Arteterapia é conduzida por profissional habilitado, com atividades adaptadas ao perfil de cada aprendiz e objetivos clínicos definidos.",
    detailParagraphs: [
      "Os recursos artísticos favorecem comunicação, criatividade, regulação e vínculo em ambiente acolhedor e estruturado.",
      "Não é necessário experiência prévia em arte — o foco é o processo terapêutico e os ganhos funcionais.",
    ],
    whatsAppMessage:
      "Olá! Gostaria de informações sobre Arteterapia na Clínica DVERSO.",
    accentClass: "text-primary",
  },
];

export function getAreaBySlug(slug: string): ClinicArea | undefined {
  return CLINIC_AREAS.find((a) => a.slug === slug);
}
