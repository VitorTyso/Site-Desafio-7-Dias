// Perguntas, pesos, faixas e cálculo extraídos do questionário público original em 17/11/2026.
let d=[{id:"ageRange",title:"Qual sua faixa et\xe1ria?",description:"Seu resultado ser\xe1 mais preciso com essa informa\xe7\xe3o.",options:[{label:"Menos de 18 anos",value:0},{label:"18 a 24 anos",value:1},{label:"25 a 34 anos",value:2},{label:"35 a 44 anos",value:3},{label:"45 a 59 anos",value:4},{label:"60 anos ou mais",value:5}]},{id:"phoneHours",title:"Quantas horas por dia voc\xea passa no celular?",options:[{label:"Menos de 2 horas",value:0},{label:"Entre 2 e 4 horas",value:1},{label:"Entre 4 e 6 horas",value:2},{label:"Mais de 6 horas",value:3}]},{id:"socialHours",title:"Quantas horas por dia voc\xea passa em redes sociais?",options:[{label:"Menos de 1 hora",value:0},{label:"Entre 1 e 2 horas",value:1},{label:"Entre 2 e 4 horas",value:2},{label:"Mais de 4 horas",value:3}]},{id:"unlocks",title:"Quantas vezes por dia voc\xea desbloqueia o telefone?",options:[{label:"Menos de 20 vezes",value:0},{label:"Entre 20 e 50 vezes",value:1},{label:"Entre 50 e 100 vezes",value:2},{label:"Mais de 100 vezes",value:3}]},{id:"notifications",title:"Quantas notifica\xe7\xf5es voc\xea recebe por dia?",options:[{label:"Quase nenhuma",value:0},{label:"Entre 10 e 30",value:1},{label:"Entre 30 e 60",value:2},{label:"Mais de 60",value:3}]},{id:"sleep",title:"Quantas horas voc\xea dorme por noite?",options:[{label:"Mais de 8 horas",value:0},{label:"Entre 7 e 8 horas",value:1},{label:"Entre 5 e 7 horas",value:2},{label:"Menos de 5 horas",value:3}]},{id:"mentalState",title:"Como est\xe1 sua sensa\xe7\xe3o mental hoje?",options:[{label:"Leve e clara",value:0},{label:"Um pouco cansada",value:1},{label:"Confusa e sobrecarregada",value:2},{label:"Exausta e fragmentada",value:3}]},{id:"tabs",title:"Quantas abas abertas voc\xea costuma ter ao mesmo tempo?",options:[{label:"1 a 3 abas",value:0},{label:"4 a 8 abas",value:1},{label:"9 a 15 abas",value:2},{label:"Mais de 15",value:3}]}],c={phoneHours:[.2,.7,1.3,2],socialHours:[.1,.4,.8,1.4],unlocks:[.05,.2,.45,.8],notifications:[.05,.2,.4,.7],sleep:[0,.15,.45,.9],tabs:[.05,.15,.3,.5],mentalState:[0,.2,.5,.9]},m=[{min:0,max:.05,classification:"Alerta",title:"Sua aten\xe7\xe3o ainda parece relativamente preservada.",diagnosis:"Seu padr\xe3o atual ainda parece revers\xedvel, mas j\xe1 existe um custo silencioso se acumulando. Pequenas distra\xe7\xf5es recorrentes podem crescer sem chamar aten\xe7\xe3o at\xe9 afetarem sua clareza.",guidance:"O melhor momento para proteger sua aten\xe7\xe3o \xe9 antes que a perda vire rotina.",impactPhrases:["O que parece normal hoje pode estar custando anos de presen\xe7a ao longo da vida.","Sua aten\xe7\xe3o forte hoje merece prote\xe7\xe3o antes que a sobrecarga vire padr\xe3o."]},{min:.05,max:.1,classification:"Sobrecarga",title:"Sua aten\xe7\xe3o j\xe1 come\xe7a a mostrar sinais de sobrecarga.",diagnosis:"Seu padr\xe3o digital j\xe1 aponta uma perda relevante de energia mental. Interrup\xe7\xf5es, excesso de est\xedmulo e troca constante de contexto podem estar reduzindo foco e profundidade com mais frequ\xeancia do que parece.",guidance:"Voc\xea ainda est\xe1 em uma faixa de revers\xe3o, mas j\xe1 vale agir com inten\xe7\xe3o.",impactPhrases:["Distra\xe7\xe3o n\xe3o rouba s\xf3 tempo. Rouba profundidade, energia e dire\xe7\xe3o.","O excesso de est\xedmulo cobra um pre\xe7o invis\xedvel, mas real."]},{min:.1,max:.15,classification:"Severa",title:"Sua rotina digital j\xe1 pode estar corroendo parte importante da sua vida \xfatil.",diagnosis:"O padr\xe3o atual sugere um desgaste consistente, n\xe3o pontual. Sua aten\xe7\xe3o pode estar sendo fragmentada a ponto de afetar presen\xe7a, qualidade mental e consist\xeancia nas decis\xf5es do dia a dia.",guidance:"Aqui j\xe1 n\xe3o basta tentar focar mais. Voc\xea precisa redesenhar ambiente, est\xedmulos e rotina.",impactPhrases:["Sua vida sente o peso daquilo que captura sua aten\xe7\xe3o todos os dias.","Quando a fragmenta\xe7\xe3o vira rotina, at\xe9 tarefas simples passam a custar mais energia."]},{min:.15,max:.2,classification:"Cr\xedtica",title:"Sua aten\xe7\xe3o est\xe1 sendo drenada em um n\xedvel preocupante.",diagnosis:"Seu padr\xe3o atual sugere um comprometimento alto da sua energia mental. O problema pode n\xe3o ser falta de capacidade, mas uma rotina que fragmenta sua clareza com frequ\xeancia suficiente para alterar sua vida pr\xe1tica.",guidance:"Sua aten\xe7\xe3o precisa sair do improviso e voltar a ser protegida de forma deliberada.",impactPhrases:["Distra\xe7\xe3o n\xe3o rouba s\xf3 tempo. Rouba profundidade, energia e dire\xe7\xe3o.","O excesso de est\xedmulo cobra um pre\xe7o invis\xedvel, mas real."]},{min:.2,max:Number.POSITIVE_INFINITY,classification:"ALERTA M\xc1XIMO",title:"Seu padr\xe3o atual sugere comprometimento extremo da sua vida restante.",diagnosis:"O custo projetado j\xe1 n\xe3o parece apenas desconfort\xe1vel. Ele se aproxima de um n\xedvel estrutural de perda de presen\xe7a, energia e capacidade de dire\xe7\xe3o ao longo dos pr\xf3ximos anos.",guidance:"Isso pede uma resposta consciente e imediata. Sua aten\xe7\xe3o precisa voltar a ser tratada como ativo central da sua vida.",impactPhrases:["O que hoje parece h\xe1bito pode estar sequestrando uma fatia s\xe9ria da sua vida restante.","Quando a aten\xe7\xe3o se perde todos os dias, o preju\xedzo deixa de ser abstrato."]}];

function x(e){return Math.max(0,80-e)}
function calculateDiagnosis(e){var a,t;let s=d.reduce((a,t)=>{var s;return"ageRange"===t.id?a:a+(null!=(s=e[t.id])?s:0)},0),i=Math.round(s/21*100),l=null!=(t=[16,21,29,39,52,65][null!=(a=e.ageRange)?a:0])?t:29,r=x(l),n=Number(Object.entries(c).reduce((a,t)=>{var s,i;let[l,r]=t;return a+(null!=(i=r[null!=(s=e[l])?s:0])?i:0)},0).toFixed(2)),o=Math.round(365*n/24),u=Number((o*x(l)/365).toFixed(1)),p=r<=0?0:Number((u/r).toFixed(4)),h=function(e,a){var t;let s=a>=.2?4:a>=.15?3:a>=.1?2:+(a>=.05);return s>=4?m[4]:null!=(t=m[Math.max(e<=25?0:e<=50?1:e<=75?2:3,s)])?t:m[m.length-1]}(i,p),f=i%h.impactPhrases.length;return{rawScore:s,score:i,classification:h.classification,severityPercentage:Number((100*p).toFixed(1)),title:h.title,diagnosis:h.diagnosis,guidance:h.guidance,impactPhrase:h.impactPhrases[f],ageAverage:l,remainingYears:r,hoursLostPerDay:n,daysLostPerYear:o,projectedYearsLost:u}}
const iatQuestions = [
  {
    question: "Horas de tela hoje?",
    options: [
      { label: "Menos de 2h", points: 2 },
      { label: "2-4h", points: 1 },
      { label: "Mais de 4h", points: 0 }
    ]
  },
  {
    question: "Consumiu notícias?",
    options: [
      { label: "Não", points: 2 },
      { label: "Sim brevemente", points: 1 },
      { label: "Sim muito", points: 0 }
    ]
  },
  {
    question: "Minutos de foco profundo?",
    options: [
      { label: "Mais de 60min", points: 2 },
      { label: "30-60min", points: 1 },
      { label: "Menos de 30min", points: 0 }
    ]
  },
  {
    question: "Fez treino físico?",
    options: [
      { label: "Sim", points: 2 },
      { label: "Parcial", points: 1 },
      { label: "Não", points: 0 }
    ]
  },
  {
    question: "Meditação ou silêncio intencional?",
    options: [
      { label: "Sim", points: 2 },
      { label: "Tentou", points: 1 },
      { label: "Não", points: 0 }
    ]
  },
  {
    question: "Progresso no projeto pessoal?",
    options: [
      { label: "Sim", points: 2 },
      { label: "Mínimo", points: 1 },
      { label: "Nada", points: 0 }
    ]
  },
  {
    question: "Presença com família ou pessoas importantes?",
    options: [
      { label: "Alta", points: 2 },
      { label: "Média", points: 1 },
      { label: "Baixa", points: 0 }
    ]
  },
  {
    question: "Qualidade do sono?",
    options: [
      { label: "Boa", points: 2 },
      { label: "Regular", points: 1 },
      { label: "Ruim", points: 0 }
    ]
  },
  {
    question: "Consumo de conteúdo intencional?",
    options: [
      { label: "Sim", points: 2 },
      { label: "Parcial", points: 1 },
      { label: "Não", points: 0 }
    ]
  },
  {
    question: "Como está sua clareza mental agora?",
    options: [
      { label: "Alta", points: 2 },
      { label: "Média", points: 1 },
      { label: "Baixa", points: 0 }
    ]
  }
];

const iatMetricGroups = [
  { label: "ruído", indexes: [0, 1, 8] },
  { label: "presença", indexes: [4, 6, 7] },
  { label: "continuidade", indexes: [2, 3, 5] },
  { label: "clareza", indexes: [2, 4, 7, 9] }
];


export {d as questions, calculateDiagnosis, iatQuestions, iatMetricGroups};
