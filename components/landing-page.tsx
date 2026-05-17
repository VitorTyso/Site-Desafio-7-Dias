"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Pontos editaveis principais da oferta.
const landingConfig = {
  price: "R$ 197",
  checkoutUrl: "#"
};

// Ajuste aqui o texto de lista de espera / abertura da proxima turma.
const waitlistConfig = {
  nextCohort: "Proxima turma em breve",
  ctaLabel: "Entrar na lista - é gratuito",
  link: "/lista-de-espera"
};

// Ajuste aqui os dados do rodape final.
const footerConfig = {
  verifyLink: "/lista-de-espera",
  privacyLink: "/politica-de-privacidade",
  email: "contato@unumpercent.com.br",
  youtubeLink: "https://www.youtube.com/@VitorTyso",
  diagnosisLink: "https://distra-o-digital.vercel.app"
};

const painCards = [
  {
    title: "Excesso de informação",
    description: "Você recebe mais estímulos do que consegue processar com qualidade."
  },
  {
    title: "Atenção fragmentada",
    description: "Sua mente alterna entre tarefas, notificações, preocupações e urgências."
  },
  {
    title: "Decisões travadas",
    description: "Até o que é simples começa a parecer pesado quando tudo compete ao mesmo tempo."
  },
  {
    title: "Execução inconsistente",
    description: "Você sabe o que precisa fazer, mas não consegue sustentar presença para avançar."
  }
];

const structureItems = [
  {
    index: "01",
    eyebrow: "Leitura inicial",
    title: "Diagnóstico",
    description: "Identifique com clareza o que hoje dispersa sua atenção e compromete sua execução."
  },
  {
    index: "02",
    eyebrow: "Arquitetura do método",
    title: "Metodologia – Framework",
    description: "Base onde se apoiam todas as mudanças."
  },
  {
    index: "03",
    eyebrow: "Decisão prática",
    title: "SSC – Start Stop Continue",
    description: "Defina com objetividade o que começar, o que interromper e o que sustentar."
  },
  {
    index: "04",
    eyebrow: "Entrada de informação",
    title: "Curadoria de informações",
    description: "Reduza excesso, filtre melhor e recupere espaço mental para pensar."
  },
  {
    index: "05",
    eyebrow: "Contexto de execução",
    title: "Ambiente",
    description: "Ajuste o espaço físico e digital para favorecer presença, foco e continuidade."
  },
  {
    index: "06",
    eyebrow: "Movimento com coerência",
    title: "Projeto Ação Emoção",
    description: "Recupere um projeto antigo que gostaria de realizar."
  },
  {
    index: "07",
    eyebrow: "Sustentação",
    title: "AMV – Ação mínima viável",
    description: "Crie continuidade com passos pequenos, concretos e sustentáveis."
  }
];

const transformationPanels = [
  {
    title: "Menos ruído",
    description: "Reduza o excesso mental e pare de carregar mais do que precisa."
  },
  {
    title: "Mais direção",
    description: "Tome decisões com menos fricção e mais clareza."
  },
  {
    title: "Mais continuidade",
    description: "Crie um contexto que favorece ação real, e não só intenção."
  }
];

const beforeAfterItems = [
  {
    before: "Consome muito e executa pouco.",
    after: "Distingue melhor o que merece atenção e volta a agir com continuidade."
  },
  {
    before: "Tudo parece urgente e mentalmente pesado.",
    after: "As decisões ficam mais leves porque há menos ruído e mais critério."
  },
  {
    before: "Termina o dia cansado, mas sem avanço real.",
    after: "Recupera a percepção de direção e move o que realmente importa."
  }
];

const offerHighlights = [
  "7 etapas práticas",
  "Acesso imediato",
  "Feito para reduzir sobrecarga e recuperar clareza",
  "Garantia de 7 dias"
];

const faqItems = [
  {
    question: "E se eu tiver pouco tempo?",
    answer:
      "Esse é exatamente o sintoma. Quando a atenção está fragmentada, a sensação é de que o tempo sumiu. O desafio não adiciona mais uma tarefa na sua lista - ele remove o que está consumindo seu tempo sem você perceber. São 10 minutos por dia de aula. Se você não tem 10 minutos, o problema é maior do que você imagina. E é por isso que você precisa disso."
  },
  {
    question: "E se eu me dispersar no meio?",
    answer:
      "A estrutura foi desenhada para quem já tem dificuldade de continuidade. A Ação Mínima Viável existe justamente para isso: criar passos tão pequenos que é impossível não executar. Você não precisa de motivação. Precisa de um passo menor."
  },
  {
    question: "E se eu já tentei outras coisas?",
    answer:
      "Porque as outras coisas tentavam te dar mais motivação, mais técnica, mais método - enquanto o ambiente continuava te fragmentando ativamente. Você não falhou. O método errado falhou. Esse protocolo começa pelo ambiente antes de exigir qualquer mudança de comportamento."
  },
  {
    question: "Isso é terapia?",
    answer:
      "Não. É um método educacional sobre atenção, sobrecarga informacional e clareza mental."
  },
  {
    question: "Como funciona o acesso?",
    answer:
      "Após a compra, o acesso é liberado para você iniciar o desafio e seguir as etapas."
  },
  {
    question: "Em 7 dias já dá para perceber diferença?",
    answer:
      "A primeira semana é de preparação - você estuda e prepara o terreno. A segunda semana é o desafio aplicado. A maioria das pessoas já sente diferença na clareza mental ainda na primeira semana - quando param de consumir o que fragmenta a atenção. O resultado completo se consolida nas semanas seguintes."
  },
  {
    question: "Preciso pensar mais antes de decidir.",
    answer:
      "A mente que precisa de mais tempo para decidir sobre algo que já sabe que precisa - é uma mente fragmentada. A garantia de 7 dias existe para que o risco seja zero. Entre, experimente, decida depois."
  }
];

const authorStoryParagraphs = [
  "Passei 15 anos trabalhando em algo que não fazia sentido para mim. Atravessei 8 cidades. Fiquei anos longe da mulher que eu amava.",
  "Eu estava acordado de corpo. Morto por dentro.",
  "Achava que o problema era eu. Que faltava disciplina. Que algo em mim estava errado.",
  "Até que entendi: o problema nunca foi eu. Foi para onde eu estava direcionando minha atenção - e quem estava se beneficiando disso.",
  "Quando acordei para isso, criei um protocolo. Testei em mim mesmo. Os resultados foram concretos: clareza mental, presença recuperada, projetos saindo do papel.",
  "Eu poderia ter entendido isso aos 25. Fui entender aos 40. Não quero que você espere tanto."
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={fadeUp}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-serif text-[2.9rem] leading-[0.96] tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[5.2rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-mist md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

function DeviceMockup() {
  return (
    <motion.div
      className="relative mx-auto mt-16 max-w-[840px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="aurora-blob absolute left-[10%] top-[12%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(158,170,187,0.2),transparent_72%)] blur-3xl" />
      <div className="aurora-blob-reverse absolute right-[16%] top-[8%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(186,196,208,0.16),transparent_72%)] blur-3xl" />
      <div className="grid gap-5 lg:grid-cols-[minmax(290px,320px)_minmax(460px,560px)] lg:items-center lg:justify-center">
        <div className="mx-auto w-full max-w-[290px] rounded-[3rem] border border-black/8 bg-[#f5f5f7] p-3 shadow-device">
          <div className="rounded-[2.5rem] border border-black/6 bg-white px-4 pb-4 pt-3">
            <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-black/10" />
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#f7f8fb_0%,#eef2f6_100%)] p-5">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                Desafio da Atenção
              </div>
              <div className="mt-4 font-serif text-3xl leading-none tracking-[-0.05em] text-ink">
                Atenção
              </div>
              <div className="relative mt-6 overflow-hidden rounded-[1.5rem] bg-white/72 p-4 ring-1 ring-black/5">
                <div className="absolute inset-x-4 top-3 h-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(163,177,194,0.18),transparent_72%)] blur-2xl" />
                <div className="relative space-y-3 text-[0.78rem] uppercase tracking-[0.18em] text-mist">
                  <div className="rounded-[1rem] bg-white/78 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-black/5">
                    <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-2 text-[0.72rem] font-semibold tracking-normal text-white">
                      7
                    </span>
                    dias de preparação
                  </div>
                  <div className="rounded-[1rem] bg-white/78 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-black/5">
                    <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-2 text-[0.72rem] font-semibold tracking-normal text-white">
                      7
                    </span>
                    dias de Desafio
                  </div>
                  <div className="rounded-[1rem] bg-white/78 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-black/5">
                    <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-2 text-[0.72rem] font-semibold tracking-normal text-white">
                      1
                    </span>
                    Possibilidade de mudança para Vida toda
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-white/85 p-4 shadow-float">
                <div className="text-xs uppercase tracking-[0.18em] text-mist">
                  progresso
                </div>
                <div className="mt-3 flex gap-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-1.5 flex-1 rounded-full ${index < 4 ? "bg-ink" : "bg-black/10"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-[linear-gradient(180deg,#fbfbfd_0%,#f3f5f8_100%)] p-3 shadow-panel ring-1 ring-black/6">
          <div className="rounded-[2.1rem] bg-white/88 p-5 ring-1 ring-black/5 md:p-7">
            <div className="space-y-4">
              <div className="rounded-[1.8rem] bg-[linear-gradient(180deg,#f7f8fa_0%,#eef2f6_100%)] p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-mist">
                  o que pode estar travando sua vida
                </div>
                <div className="mt-5 font-serif text-4xl leading-[0.96] tracking-[-0.06em] text-ink md:text-5xl">
                  Não é falta de Disciplina.
                </div>
                <p className="mt-4 max-w-sm text-sm leading-6 text-mist md:text-base">
                  É sua atenção sendo roubada, fragmentada em dezenas de pequenas promessas diárias que você nem vê chegar: abas abertas, notificações, urgências artificiais e a sensação constante de estar ocupado sem sair do lugar.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#f7f8fb] p-5">
                <div className="space-y-4 text-base leading-7 text-ink md:text-lg">
                  <p className="font-semibold">É você priorizando distrações e deixando as pessoas mais importantes da sua vida em segundo plano.</p>
                  <p>Você abre o celular sem perceber.</p>
                  <p>Trabalha o dia todo e encerra com a mente exausta.</p>
                  <p>Tem dificuldade para entrar no trabalho que exige presença.</p>
                  <p>Procura alívio em telas, mas recebe mais ruído.</p>
                  <p>Sente que perdeu o ritmo, mas não sabe como voltar.</p>
                </div>
              </div>
              <p className="text-center text-sm leading-6 text-mist md:text-base">
                Se isso parece familiar, o desafio foi desenhado para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StructureCard({
  item,
  index
}: {
  item: (typeof structureItems)[number];
  index: number;
}) {
  return (
    <motion.article
      className="rounded-[2.5rem] bg-[linear-gradient(180deg,#fafbfd_0%,#f4f6f8_100%)] p-8 ring-1 ring-black/5 md:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      custom={index * 0.05}
      variants={fadeUp}
    >
      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slateSoft">
        {item.eyebrow}
      </div>
      <div className="mt-5 text-sm text-mist">{item.index}</div>
      <h3 className="mt-2 max-w-[12ch] font-serif text-4xl leading-[0.98] tracking-[-0.05em] text-ink md:text-5xl">
        {item.title}
      </h3>
      <p className="mt-5 max-w-[32rem] text-base leading-7 text-mist md:text-lg">
        {item.description}
      </p>
    </motion.article>
  );
}

function FaqItem({
  question,
  answer,
  index
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <motion.article
      className="rounded-[2rem] bg-[#f7f8fa] p-6 ring-1 ring-black/5 md:p-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={index * 0.05}
      variants={fadeUp}
    >
      <h3 className="text-xl font-medium tracking-[-0.03em] text-ink md:text-2xl">
        {question}
      </h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-mist">{answer}</p>
    </motion.article>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-x-clip bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-black/6 bg-white/78 backdrop-blur-2xl">
        <div className="mx-auto flex h-12 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <span className="text-sm font-medium tracking-[-0.01em] text-ink">Vitor Tyso</span>
          <a
            href={waitlistConfig.link}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-ink transition hover:bg-black/[0.035]"
          >
            {waitlistConfig.ctaLabel}
          </a>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <section className="flex min-h-[calc(100vh-3rem)] items-center py-20 md:py-28">
          <div className="w-full">
            <motion.div
              className="mx-auto max-w-[1020px] text-center"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
                Desafio da Atenção
              </p>
              <h1 className="mt-5 text-balance font-serif text-[4.2rem] leading-[0.9] tracking-[-0.075em] text-ink sm:text-[5.8rem] md:text-[7.4rem] lg:text-[8.8rem]">
                Saia do automático - antes que a vida passe sem você.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-7 text-mist md:text-xl md:leading-8">
                Um protocolo de 14 dias para proteger o que está sendo roubado de você todos os dias - e voltar a sentir que sua vida está andando.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-balance text-sm font-semibold italic leading-7 text-[#7c322e] md:text-lg">
                O ambiente foi projetado para roubar sua atenção. Você estava lutando sem saber que tinha um inimigo.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-ink/80 md:text-lg">
                A proposta é simples: foco, clareza e presença ao longo de 14 dias.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waitlistConfig.link}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-black/88"
                >
                  {waitlistConfig.ctaLabel}
                </a>
                <a
                  href={waitlistConfig.link}
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-ink transition hover:bg-black/[0.03]"
                >
                  {waitlistConfig.ctaLabel}
                </a>
              </div>

              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-5 py-3 text-sm text-mist ring-1 ring-black/5">
                <span className="font-medium text-ink">Grupo Fechado</span>
                <span>•</span>
                <span>Vagas Limitadas</span>
              </div>
            </motion.div>

            <DeviceMockup />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <SectionHeader
            eyebrow="O que está custando?"
            title="O preço da atenção fragmentada não aparece na fatura."
            subtitle="Ele aparece como cansaço mental, microadiamentos, culpa e a percepção incômoda de que a vida está sendo empurrada no automático."
            align="left"
          />

          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-mist md:text-[1.4rem] md:leading-[1.65]">
            <p>Você tenta se organizar.</p>
            <p>Mas sua mente já começa o dia carregada.</p>
            <p>Muitas abas abertas.</p>
            <p>Muitas ideias competindo.</p>
            <p>Muito conteúdo entrando.</p>
            <p>Pouca energia sobrando para decidir e concluir.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="rounded-[2.2rem] bg-[#f7f8fa] p-6 ring-1 ring-black/5 md:p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.05}
                variants={fadeUp}
              >
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-mist">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-16">
          <motion.div
            className="rounded-[2.75rem] bg-[#f5f5f7] px-6 py-14 ring-1 ring-black/5 md:px-12 md:py-18"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
              Agitação
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-[2.9rem] leading-[0.96] tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[5rem]">
              A atenção fragmentada cobra um preço silencioso.
            </h2>
            <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-mist md:text-[1.45rem] md:leading-[1.6]">
              <p>Você demora mais para decidir.</p>
              <p>Gasta energia demais no que não importa.</p>
              <p>Adia o que sabe que precisa enfrentar.</p>
              <p>Sente ansiedade mental mesmo quando está parado.</p>
              <p>E, aos poucos, perde a sensação de direção.</p>
            </div>
            <div className="mt-8 space-y-3">
              <p className="text-xl font-medium tracking-[-0.03em] text-ink">Não porque você seja incapaz.</p>
              <p className="max-w-3xl text-lg leading-8 text-mist">
                Mas porque ninguém sustenta clareza por muito tempo em estado contínuo de sobrecarga.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="py-10 md:py-14">
          <motion.div
            className="mx-auto max-w-4xl border-y border-black/6 px-6 py-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="text-lg font-medium tracking-[-0.03em] text-ink">
              Você não precisa continuar assim.
            </p>
            <div className="mt-5">
              <a
                href={waitlistConfig.link}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-black/88"
              >
                {waitlistConfig.ctaLabel}
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-mist">
              Garantia de 7 dias. Sem questionamento.
            </p>
          </motion.div>
        </section>

        <section id="mecanismo" className="py-20 md:py-28">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={fadeUp}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
              Solução
            </p>
            <div className="mt-4 rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(251,251,253,0.96)_0%,rgba(243,245,248,0.92)_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(15,23,42,0.06)] ring-1 ring-black/5 md:px-10 md:py-10">
              <h2 className="bg-[linear-gradient(180deg,#0f172a_0%,#3f4958_100%)] bg-clip-text text-balance font-serif text-[2.9rem] leading-[0.96] tracking-[-0.055em] text-transparent sm:text-[4rem] md:text-[5.2rem]">
                Não é mais um curso de produtividade. É a proteção contra um ambiente programado para roubar sua atenção.
              </h2>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-mist md:text-lg">
              Atenção não é só um recurso mental escasso. É o capital invisível que molda a qualidade da sua vida.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 rounded-[2.75rem] bg-[linear-gradient(180deg,#fbfbfd_0%,#f3f5f8_100%)] p-6 ring-1 ring-black/5 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-4 text-lg leading-8 text-mist md:text-[1.2rem] md:leading-[1.75]">
                <p>O desafio foi desenhado para restaurar a base mental. Em vez de ensinar hacks para render mais, ele reorganiza o terreno onde a sua atenção pisa.</p>
                <p>Você não vai encontrar promessas de rotina perfeita. Vai receber uma sequência de intervenções curtas, objetivas e práticas para reduzir ruído, aumentar presença e voltar a terminar o que importa.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="estrutura" className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Estrutura do desafio"
            title="7 Etapas para reorganizar sua Atenção"
            subtitle=""
          />

          <div className="mt-14 space-y-5 md:space-y-6">
            {structureItems.map((item, index) => (
              <StructureCard key={item.index} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Transformação"
            title="O que começa a mudar quando sua atenção volta para o lugar."
            subtitle=""
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {transformationPanels.map((panel, index) => (
              <motion.article
                key={panel.title}
                className="rounded-[2.4rem] bg-[linear-gradient(180deg,#fafbfd_0%,#f3f5f8_100%)] p-8 ring-1 ring-black/5 md:min-h-[320px] md:p-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index * 0.06}
                variants={fadeUp}
              >
                <h3 className="font-serif text-4xl leading-none tracking-[-0.05em] text-ink md:text-5xl">
                  {panel.title}
                </h3>
                <p className="mt-5 max-w-sm text-base leading-7 text-mist md:text-lg">
                  {panel.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {beforeAfterItems.map((item, index) => (
              <motion.article
                key={item.before}
                className="rounded-[2.2rem] bg-[#f7f8fa] p-6 ring-1 ring-black/5 md:p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.05}
                variants={fadeUp}
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slateSoft">
                  Antes
                </div>
                <p className="mt-3 text-lg leading-7 text-mist">{item.before}</p>
                <div className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slateSoft">
                  Depois
                </div>
                <p className="mt-3 text-lg leading-7 text-ink">{item.after}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <motion.div
            className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(240px,320px)_1fr] md:items-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={fadeUp}
          >
            <div className="mx-auto w-full max-w-[280px]">
              <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,#fafbfd_0%,#f4f6f8_100%)] p-3 shadow-[0_28px_80px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/vitor-tyso-autor.jpeg"
                    alt="Retrato de Vitor Tyso"
                    width={768}
                    height={1024}
                    className="h-auto w-full scale-[1.08] object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-serif text-[2.9rem] leading-[0.98] tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[5rem]">
                Criado por Vitor Tyso
              </h2>
              <div className="mt-6 space-y-4">
                {authorStoryParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={`mx-auto max-w-3xl text-balance text-base leading-7 md:mx-0 md:text-lg ${
                      paragraph === "Eu estava acordado de corpo. Morto por dentro."
                        ? "font-semibold text-[#7c322e]"
                        : "text-mist"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-10 md:py-16">
          <motion.div
            className="grid gap-8 rounded-[2.75rem] bg-[#f5f5f7] px-6 py-8 ring-1 ring-black/5 md:grid-cols-[220px_1fr] md:items-center md:px-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <div className="mx-auto flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white shadow-float ring-1 ring-[#cfd6df] md:h-[180px] md:w-[180px]">
              <div className="relative flex h-[138px] w-[138px] items-center justify-center rounded-full border border-[#cfd6df]">
                <div className="absolute inset-[14px] rounded-full border border-dashed border-[#c8d0da]" />
                <div className="text-center">
                  <div className="text-6xl font-semibold tracking-[-0.06em] text-ink">7</div>
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-slateSoft">
                    dias
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
                Garantia
              </p>
              <h2 className="mt-3 font-serif text-[2.5rem] leading-[0.98] tracking-[-0.055em] text-ink sm:text-[3.3rem] md:text-[4.2rem]">
                Teste com segurança por 7 dias.
              </h2>
              <p className="mt-5 max-w-4xl text-balance text-lg leading-8 text-mist md:text-[1.45rem] md:leading-[1.6]">
                Se ao iniciar o desafio você perceber que ele não faz sentido para o seu momento, pode solicitar cancelamento dentro de 7 dias.
              </p>
              <p className="mt-3 max-w-4xl text-balance text-lg leading-8 text-mist md:text-[1.2rem] md:leading-[1.6]">
                A proposta é simples: reduzir risco para que você possa entrar com tranquilidade.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="oferta" className="py-20 md:py-28">
          <div className="rounded-[2.75rem] bg-[#f5f5f7] px-6 py-14 md:px-12 md:py-20">
            <motion.div
              className="mx-auto max-w-5xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
                Oferta
              </p>
              <h2 className="mt-4 font-serif text-[2.9rem] leading-[0.96] tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[5rem]">
                Comece a recuperar sua atenção hoje.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-7 text-mist md:text-lg">
                Acesso ao Desafio da Atenção por {landingConfig.price}.
              </p>

              <div className="mt-10 font-serif text-[3.8rem] leading-none tracking-[-0.06em] text-ink sm:text-[4.8rem] md:text-[6.2rem]">
                {landingConfig.price}
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-mist md:text-lg">
                12 x de 19,70
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {offerHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] bg-white/78 px-5 py-5 text-sm text-mist ring-1 ring-black/5"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-mist md:text-lg">
                Não é mais conteúdo para acumular.
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-balance text-base leading-7 text-mist md:text-lg">
                É uma estrutura para ajudar você a voltar a pensar e agir com mais clareza.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waitlistConfig.link}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-black/88"
                >
                  {waitlistConfig.ctaLabel}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <motion.div
            className="rounded-[2.75rem] bg-[#f5f5f7] px-6 py-14 text-center ring-1 ring-black/5 md:px-12 md:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
              Prova pessoal
            </p>
            <h2 className="mt-4 font-serif text-[2.9rem] leading-[0.96] tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[4.8rem]">
              Testado antes de ser ensinado.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-mist">
              Antes de criar qualquer aula, apliquei esse protocolo em mim mesmo por 30 dias.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-balance text-lg leading-8 text-mist">
              Sem contar calorias. Sem dieta especial. Apenas recuperando o controle da minha atenção.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-balance text-lg leading-8 text-mist">
              Resultado: 8kg a menos na balança, meses sem álcool, silêncio mental recuperado, presença real com quem amo.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-balance text-lg leading-8 text-mist">
              Mas o resultado mais importante foi esse: voltei a sentir que a minha vida estava andando.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-[1.8rem] border border-[#7c322e]/30 bg-white/70 px-6 py-5 text-center shadow-[0_18px_50px_rgba(124,50,46,0.08)]">
              <p className="text-lg font-medium tracking-[-0.03em] text-[#7c322e]">
                IAT inicial: 4 | IAT após 30 dias: 17
              </p>
            </div>
          </motion.div>
        </section>

        <section className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Objeções"
            title="Perguntas frequentes"
            subtitle=""
          />

          <div className="mt-14 grid gap-4">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="pb-28 pt-12 md:pb-36 md:pt-20">
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={fadeUp}
          >
            <h2 className="text-balance font-serif text-[3rem] leading-[0.95] tracking-[-0.06em] text-ink sm:text-[4.2rem] md:text-[5.4rem]">
              O que está custando sua atenção pode estar custando mais do que você imagina.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-mist md:text-xl md:leading-8">
              Comece agora a reorganizar sua mente, seu ambiente e sua direção.
            </p>
            <div className="mt-8">
              <a
                href={waitlistConfig.link}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-black/88"
              >
                {waitlistConfig.ctaLabel}
              </a>
            </div>
          </motion.div>
        </section>

        <footer className="pb-16 pt-4 md:pb-20">
          <div className="rounded-[2.5rem] bg-[#f7f8fa] px-6 py-8 ring-1 ring-black/5 md:px-10 md:py-10">
            <div className="grid gap-8 border-b border-black/6 pb-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink">
                  Lista de espera
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-8 text-mist">
                  Clique para receber informações sobre a próxima turma e verificar os canais oficiais de contato.
                </p>
                <a
                  href={footerConfig.verifyLink}
                  className="mt-3 inline-flex text-lg leading-8 text-[#6d5ef3] transition hover:opacity-80"
                >
                  Receber informações da próxima turma
                </a>
                <div className="mt-5 flex flex-col gap-2 text-base leading-7 text-mist">
                  <a
                    href={footerConfig.youtubeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6d5ef3] transition hover:opacity-80"
                  >
                    YouTube
                  </a>
                  <span>Instagram em breve</span>
                  <span>TikTok em breve</span>
                  <a
                    href={footerConfig.diagnosisLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6d5ef3] transition hover:opacity-80"
                  >
                    Diagnóstico gratuito
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink">
                  Aviso legal
                </h3>
                <p className="mt-3 text-lg leading-8 text-mist">
                  O conteúdo deste desafio tem caráter educacional e informativo, com foco em atenção, sobrecarga mental e clareza.
                </p>
                <p className="mt-2 text-lg leading-8 text-mist">
                  Não substitui acompanhamento médico, psicológico ou psiquiátrico, nem se propõe a diagnosticar, tratar ou curar condições de saúde.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 text-base text-mist md:grid-cols-[1fr_auto_auto] md:items-start">
              <div>
                <span className="font-medium text-ink">© 2026 Vitor Tyso — Desafio da Atenção</span>
                <div className="mt-2 text-sm italic text-[#7c322e]">Você vale mais.</div>
              </div>
              <a href={footerConfig.privacyLink} className="text-[#6d5ef3] transition hover:opacity-80">
                Política de Privacidade
              </a>
              <div>{footerConfig.email}</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
