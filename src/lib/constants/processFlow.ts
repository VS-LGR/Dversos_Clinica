export interface CareProcessStep {
  step: number;
  title: string;
  description: string;
}

export const CARE_PROCESS_STEPS: CareProcessStep[] = [
  {
    step: 0,
    title: "Supervisão (antes do 1º atendimento)",
    description:
      "Antes do primeiro atendimento, a DVERSO disponibiliza aos responsáveis uma conversa com a Supervisora Clínica, que ouve as principais preocupações da família, entende as dificuldades do dia a dia, identifica as demandas iniciais do aprendiz e define quais terapias e profissionais serão mais indicados.",
  },
  {
    step: 1,
    title: "Anamnese",
    description:
      "Aprofundamos a história do aprendiz: desenvolvimento, comunicação, rotina, alimentação, sono, escola, comportamentos que preocupam a família e experiências anteriores. Essas informações ajudam a entender o contexto completo antes de qualquer tomada de decisão.",
  },
  {
    step: 2,
    title: "Vinculação com o aprendiz",
    description:
      "Antes de avaliar, é preciso construir vínculo. Esse momento é importante porque aprendizes tendem a mostrar melhor suas habilidades quando se sentem seguros, compreendidos e menos pressionados.",
  },
  {
    step: 3,
    title: "Vinculação e protocolos avaliativos iniciais",
    description:
      "Seguimos fortalecendo o vínculo enquanto aplicamos e finalizamos os protocolos avaliativos iniciais desenvolvidos pela DVERSO, criados para identificar os principais déficits e barreiras de desenvolvimento. Observamos de forma estruturada habilidades, comunicação, aprendizagem e comportamentos que interferem no cotidiano.",
  },
  {
    step: 4,
    title: "Reunião com a escola",
    description:
      "O desenvolvimento não acontece só dentro da clínica. Por isso, conversamos com a escola para entender como o aprendiz se porta em outro ambiente importante da rotina.",
  },
  {
    step: 5,
    title: "Devolutiva e plano de intervenção",
    description:
      "Após esse processo, a família e o aprendiz recebem uma devolutiva clara sobre o que foi observado, quais são as principais barreiras, quais habilidades estão emergindo e o início do plano de intervenção individualizado.",
  },
];
