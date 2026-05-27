"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const waitlistConfig = {
  ctaLabel: "Quero sair do automático",
  link: "/lista-de-espera",
  supportText: "Entre na lista gratuita para receber a abertura da próxima turma."
};

const footerConfig = {
  verifyLink: "/lista-de-espera",
  privacyLink: "/politica-de-privacidade",
  email: "contato@unumpercent.com.br",
  youtubeLink: "https://www.youtube.com/@VitorTyso",
  diagnosisLink: "https://distra-o-digital.vercel.app"
};

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

const thesisStatements = [
  "A atenção é o recurso mais valioso da sua vida.",
  "O ambiente moderno foi construído para capturar sua mente.",
  "Talvez você não esteja perdido. Talvez exista ruído demais."
];

const weekBlocks = [
  {
    label: "Semana 1",
    title: "Consciência e leitura do ruído",
    items: ["entendimento", "consciência", "atenção", "ambiente", "ruído"]
  },
  {
    label: "Semana 2",
    title: "Aplicação e reconstrução prática",
    items: ["ações reais", "menos distrações", "rotina", "presença", "direção"]
  }
];

const beforeAfterItems = [
  {
    before: "Mente fragmentada, excesso de estímulo e sensação de vida no automático.",
    after: "Mais clareza para pensar, mais presença para agir e mais critério para escolher o que merece atenção."
  },
  {
    before: "Dias cheios de consumo, ansiedade mental e baixa continuidade.",
    after: "Menos ruído interno, mais direção prática e uma sensação concreta de retomada da própria vida."
  },
  {
    before: "Muitas tentativas soltas e pouca direção sustentada.",
    after: "Contexto mais favorável, decisões menos drenantes e foco real no que importa."
  }
];

const proofCards = [
  {
    eyebrow: "origem prática",
    value: "14 dias",
    detail: "de estrutura objetiva para sair do excesso e voltar a perceber a própria vida com mais nitidez."
  },
  {
    eyebrow: "direção",
    value: "retomada",
    detail: "de rotina, corpo, projetos e relações quando a atenção volta para o lugar."
  }
];

const faqItems = [
  {
    question: "Isso é para mim?",
    answer:
      "Se você sente que consome demais, aplica de menos e termina os dias com baixa presença, o desafio foi desenhado para você."
  },
  {
    question: "E se eu tiver pouco tempo?",
    answer:
      "A proposta é reduzir ruído, não adicionar complexidade. O desafio foi pensado para caber em uma rotina já sobrecarregada."
  },
  {
    question: "Em 14 dias já dá para perceber diferença?",
    answer:
      "Sim. A primeira semana muda a forma como você enxerga o ambiente e o ruído. A segunda transforma isso em decisões e ações mais conscientes."
  },
  {
    question: "Isso é terapia?",
    answer:
      "Não. É um protocolo educacional sobre atenção, excesso de estímulos, ambiente e direção prática."
  },
  {
    question: "Como funciona o acesso?",
    answer:
      "Ao entrar na lista, você recebe aviso quando a próxima turma abrir e quando o acesso ao desafio estiver disponível."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const particleCount = reducedMotion ? 24 : mobile ? 40 : 68;
    const connectionDistance = mobile ? 132 : 196;
    const pulseSpeed = reducedMotion ? 0.0005 : 0.0015;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 0.9 + 0.2,
      vx: (Math.random() - 0.5) * (reducedMotion ? 0.08 : 0.18),
      vy: (Math.random() - 0.5) * (reducedMotion ? 0.08 : 0.18)
    }));

    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const pulse = (Math.sin(time * pulseSpeed) + 1) / 2;

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.vx * particle.z;
          particle.y += particle.vy * particle.z;
        }

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < 140) {
            particle.x -= (dx / distance) * 0.12;
            particle.y -= (dy / distance) * 0.12;
          }
        }

        if (particle.x < -30) particle.x = width + 30;
        if (particle.x > width + 30) particle.x = -30;
        if (particle.y < -30) particle.y = height + 30;
        if (particle.y > height + 30) particle.y = -30;
      }

      for (let index = 0; index < particles.length; index += 1) {
        const a = particles[index];

        for (let inner = index + 1; inner < particles.length; inner += 1) {
          const b = particles[inner];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const opacity = 0.42 * (1 - distance / connectionDistance);
            context.strokeStyle = `rgba(84, 103, 132, ${opacity})`;
            context.lineWidth = 1.25;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();

            const pulseX = a.x + (b.x - a.x) * pulse;
            const pulseY = a.y + (b.y - a.y) * pulse;
            context.fillStyle = `rgba(255, 255, 255, ${opacity * 4.4})`;
            context.beginPath();
            context.arc(pulseX, pulseY, 2.8, 0, Math.PI * 2);
            context.fill();
          }
        }
      }

      for (const particle of particles) {
        context.fillStyle = `rgba(104, 124, 154, ${0.4 + particle.z * 0.26})`;
        context.beginPath();
        context.arc(particle.x, particle.y, 1.8 + particle.z * 2.5, 0, Math.PI * 2);
        context.fill();
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    raf = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-95"
    />
  );
}

function HeroDepthObjects() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 18, mass: 0.5 });

  const layerOneX = useTransform(springX, [-120, 120], [-16, 16]);
  const layerOneY = useTransform(springY, [-120, 120], [-12, 12]);
  const layerTwoX = useTransform(springX, [-120, 120], [20, -20]);
  const layerTwoY = useTransform(springY, [-120, 120], [16, -16]);
  const haloX = useTransform(springX, [-120, 120], [-28, 28]);
  const haloY = useTransform(springY, [-120, 120], [-18, 18]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const handleMove = (event: PointerEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = Math.min(window.innerHeight / 2, 420);
      pointerX.set((event.clientX - centerX) / 10);
      pointerY.set((event.clientY - centerY) / 12);
    };

    const handleLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      <motion.div
        style={{ x: haloX, y: haloY }}
        className="absolute left-[2%] top-[6%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(71,93,126,0.28)_0%,rgba(120,141,172,0.1)_38%,transparent_74%)] blur-3xl"
      />
      <motion.div
        style={{ x: layerOneX, y: layerOneY }}
        className="absolute left-[7%] top-[32%] h-[300px] w-[240px] rounded-[2.8rem] border border-[rgba(84,104,133,0.18)] bg-[linear-gradient(180deg,rgba(111,133,163,0.08)_0%,rgba(111,133,163,0.02)_100%)] shadow-[0_70px_180px_rgba(67,87,116,0.18)] backdrop-blur-[3px] [transform:rotateX(18deg)_rotateY(-24deg)]"
      />
      <motion.div
        style={{ x: layerTwoX, y: layerTwoY }}
        className="absolute right-[6%] top-[18%] h-[360px] w-[280px] rounded-[3rem] border border-[rgba(84,104,133,0.2)] bg-[linear-gradient(180deg,rgba(108,128,156,0.08)_0%,rgba(108,128,156,0.015)_100%)] shadow-[0_80px_220px_rgba(67,87,116,0.22)] backdrop-blur-[3px] [transform:rotateX(14deg)_rotateY(22deg)]"
      />
      <motion.div
        style={{ x: layerOneX, y: layerTwoY }}
        className="absolute right-[23%] top-[55%] h-[180px] w-[180px] rounded-full border border-[rgba(84,104,133,0.18)] bg-[radial-gradient(circle,rgba(101,122,150,0.16)_0%,rgba(101,122,150,0.05)_48%,transparent_74%)] blur-md"
      />
      <motion.div
        style={{ x: haloX, y: layerOneY }}
        className="absolute left-[26%] top-[14%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(66,87,117,0.22)_0%,rgba(140,158,183,0.04)_45%,transparent_72%)] blur-2xl"
      />
      <motion.div
        style={{ x: layerTwoX, y: haloY }}
        className="absolute right-[28%] top-[14%] h-[120px] w-[320px] rounded-full border border-[rgba(84,104,133,0.14)] bg-[linear-gradient(90deg,rgba(102,124,153,0.12)_0%,rgba(102,124,153,0.02)_100%)] shadow-[0_28px_80px_rgba(67,87,116,0.14)] backdrop-blur-[2px] [transform:rotateX(18deg)_rotateY(-10deg)]"
      />
    </div>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={waitlistConfig.link}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border border-black/8 bg-[#121417] px-6 text-sm font-medium text-white shadow-[0_12px_40px_rgba(10,12,16,0.12)] transition hover:bg-[#1a1f26] ${className}`}
    >
      {waitlistConfig.ctaLabel}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-4xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8b94a1]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-serif text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-[#111318] sm:text-[3.8rem] md:text-[5rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-[#66707c] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
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
      className="rounded-[2rem] border border-black/6 bg-white/74 p-6 shadow-[0_18px_50px_rgba(16,17,20,0.05)] backdrop-blur-xl md:p-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index * 0.04}
      variants={fadeUp}
    >
      <h3 className="text-xl font-medium tracking-[-0.03em] text-[#121417] md:text-2xl">{question}</h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#66707c]">{answer}</p>
    </motion.article>
  );
}

export function LandingPage() {
  const [iatAnswers, setIatAnswers] = useState<(0 | 1 | 2 | null)[]>(
    Array.from({ length: iatQuestions.length }, () => null)
  );
  const [iatSlide, setIatSlide] = useState(0);

  const iatScore = useMemo(
    () => iatAnswers.reduce((total, answer) => total + (answer ?? 0), 0),
    [iatAnswers]
  );

  const answeredCount = useMemo(
    () => iatAnswers.filter((answer) => answer !== null).length,
    [iatAnswers]
  );

  const iatPercent = Math.round((iatScore / 20) * 100);

  const iatBars = useMemo(
    () =>
      iatMetricGroups.map((group) => {
        const max = group.indexes.length * 2;
        const total = group.indexes.reduce((sum, index) => sum + (iatAnswers[index] ?? 0), 0);
        return {
          label: group.label,
          value: Math.round((total / max) * 100)
        };
      }),
    [iatAnswers]
  );

  const activeQuestion = iatQuestions[iatSlide];

  const handleNextIat = () => {
    setIatSlide((current) => (current + 1) % iatQuestions.length);
  };

  const handlePrevIat = () => {
    setIatSlide((current) => (current - 1 + iatQuestions.length) % iatQuestions.length);
  };

  const handleIatSelect = (questionIndex: number, points: 0 | 1 | 2) => {
    setIatAnswers((current) =>
      current.map((answer, index) => (index === questionIndex ? points : answer))
    );

    if (questionIndex < iatQuestions.length - 1) {
      setIatSlide(questionIndex + 1);
    }
  };

  return (
    <main className="bg-[#f7f7f3] text-[#111318]">
      <div className="relative overflow-hidden border-b border-black/6 bg-[linear-gradient(180deg,#fbfbf8_0%,#f6f7f4_54%,#f2f4f1_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,179,202,0.34),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(209,193,154,0.12),transparent_16%),radial-gradient(circle_at_24%_75%,rgba(150,170,194,0.26),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.16))]" />
          <NeuralField />
          <div className="grain-layer absolute inset-0 opacity-18" />
        </div>
        <HeroDepthObjects />

        <header className="relative z-10 border-b border-black/6 bg-white/52 backdrop-blur-2xl">
          <div className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
            <div className="text-sm font-medium tracking-[-0.01em] text-[#111318]">Vitor Tyso</div>
            <PrimaryCta />
          </div>
        </header>

        <section className="relative z-10 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
          <motion.div
            className="mx-auto max-w-[980px] text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#8b94a1]">
              Desafio da Atenção — Vitor Tyso
            </p>
            <h1 className="mt-5 text-balance font-serif text-[3.15rem] leading-[0.92] tracking-[-0.085em] text-[#0c1118] sm:text-[4.3rem] md:text-[5.5rem] lg:text-[6.2rem] [text-shadow:0_1px_0_rgba(255,255,255,0.28)]">
              Sua atenção está sendo roubada.
              <br />
              E você está pagando com a sua vida.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-7 text-[#66707c] md:text-xl md:leading-8">
              Um protocolo de 14 dias para recuperar clareza mental, presença e direção em um ambiente construído para fragmentar sua mente.
            </p>
            <div className="mt-10">
              <PrimaryCta />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#8b94a1]">
              {waitlistConfig.supportText}
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 max-w-[980px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div className="rounded-[2.5rem] border border-[rgba(134,149,170,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76)_0%,rgba(241,245,248,0.62)_100%)] p-5 shadow-[0_24px_80px_rgba(16,17,20,0.08)] backdrop-blur-2xl">
              <div className="rounded-[2rem] border border-[rgba(134,149,170,0.16)] bg-white/58 p-6">
                <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
                  <div className="order-2 lg:order-1">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                      Índice de Atenção Tyso — IAT
                    </div>
                    <div className="mt-5 font-serif text-4xl leading-[0.94] tracking-[-0.06em] text-[#111318]">
                      Meça onde sua atenção está hoje.
                    </div>
                    <p className="mt-4 text-base leading-7 text-[#66707c]">
                      Você responde, acompanha o movimento das barras e registra o número do dia 1 ao dia 7.
                    </p>
                    <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-black/6 bg-white/50 p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <div className="text-[0.64rem] uppercase tracking-[0.22em] text-[#8b94a1]">
                          score atual
                        </div>
                        <div className="mt-2 flex items-end gap-3">
                          <span className="font-serif text-[3.2rem] leading-none tracking-[-0.07em] text-[#111318]">
                            {iatScore}
                          </span>
                          <span className="mb-1 text-sm text-[#8b94a1]">/ 20</span>
                        </div>
                      </div>
                      <div className="rounded-full border border-black/6 bg-[#eef2f7] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#627087]">
                        {answeredCount}/10 respostas
                      </div>
                    </div>
                    <div className="mt-8 space-y-3">
                      {iatBars.map((bar) => (
                        <div key={bar.label}>
                          <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#8b94a1]">
                            <span>{bar.label}</span>
                            <span>{bar.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-black/8">
                            <div
                              className="h-2 rounded-full bg-[linear-gradient(90deg,#d7dde7_0%,#92a4bf_100%)]"
                              style={{ width: `${bar.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[1.4rem] border border-black/6 bg-white/52 p-4 text-sm leading-6 text-[#66707c]">
                      Hoje você está em <span className="font-medium text-[#111318]">{iatPercent}%</span> do seu índice máximo. No final, compare o dia 1 com o dia 7.
                    </div>
                  </div>

                  <div className="order-1 rounded-[1.8rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.74)_0%,rgba(241,245,248,0.56)_100%)] p-5 shadow-[0_18px_50px_rgba(16,17,20,0.05)] lg:order-2">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="rounded-full border border-black/6 bg-[#eff3f8] px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                        {String(iatSlide + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrevIat}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 bg-white/76 text-[#66707c] transition hover:text-[#111318]"
                          aria-label="Pergunta anterior"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={handleNextIat}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 bg-white/76 text-[#66707c] transition hover:text-[#111318]"
                          aria-label="Próxima pergunta"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#8b94a1]">
                      carrossel do IAT
                    </div>
                    <div className="mt-4 font-serif text-[2.15rem] leading-[1] tracking-[-0.055em] text-[#111318] md:text-[2.6rem]">
                      {activeQuestion.question}
                    </div>
                    <div className="mt-6 space-y-2">
                      {activeQuestion.options.map((option) => {
                        const selected = iatAnswers[iatSlide] === option.points;

                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() => handleIatSelect(iatSlide, option.points as 0 | 1 | 2)}
                            className={`w-full rounded-[1.35rem] border px-4 py-4 text-sm transition ${
                              selected
                                ? "border-[#8ea0bb] bg-[linear-gradient(180deg,#e1e8f1_0%,#ccd8e7_100%)] text-[#111318] shadow-[0_12px_28px_rgba(83,105,136,0.14)]"
                                : "border-black/6 bg-white/66 text-[#66707c] hover:border-[#c4d0de] hover:text-[#111318]"
                            }`}
                          >
                            <span className="block font-medium">{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {iatQuestions.map((item, index) => (
                        <button
                          key={item.question}
                          type="button"
                          onClick={() => setIatSlide(index)}
                          className={`h-2.5 rounded-full transition ${
                            index === iatSlide
                              ? "w-10 bg-[#8ea0bb]"
                              : iatAnswers[index] !== null
                                ? "w-4 bg-[#c7d4e4]"
                                : "w-2.5 bg-black/10"
                          }`}
                          aria-label={`Ir para pergunta ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionIntro
            eyebrow="Índice de Atenção Tyso — IAT"
            title="Um índice simples, mensurável e comparável entre o dia 1 e o dia 7."
            subtitle="Você responde dez perguntas, soma de 0 a 20 pontos e registra o próprio número todos os dias durante o desafio."
          />

          <div className="mt-6 mx-auto max-w-3xl rounded-[1.8rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(241,245,248,0.5)_100%)] p-5 text-center shadow-[0_18px_50px_rgba(16,17,20,0.05)] backdrop-blur-xl">
            <p className="text-base leading-7 text-[#66707c]">
              O IAT é o número que mostra se você entrou com a atenção dispersa e saiu com mais clareza. É uma forma de tornar a transformação visível.
            </p>
          </div>

        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-balance font-serif text-[2.8rem] leading-[0.95] tracking-[-0.06em] text-[#111318] sm:text-[3.8rem] md:text-[5rem]">
              A atenção é o recurso mais valioso da sua vida.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-[#66707c] md:text-lg">
              Quanto mais ruído, menos critério. Quanto menos critério, mais difícil fica sustentar direção.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {thesisStatements.map((statement, index) => (
              <motion.article
                key={statement}
                className="rounded-[2.3rem] border border-black/6 bg-white/72 p-8 shadow-[0_24px_70px_rgba(16,17,20,0.05)] backdrop-blur-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.06}
                variants={fadeUp}
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                  0{index + 1}
                </div>
                <p className="mt-5 font-serif text-[2rem] leading-[1.04] tracking-[-0.045em] text-[#111318] md:text-[2.5rem]">
                  {statement}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8b94a1]">
              Analogia do ruído
            </p>
            <h2 className="mt-4 text-balance font-serif text-[2.8rem] leading-[0.96] tracking-[-0.06em] text-[#111318] sm:text-[3.8rem] md:text-[5rem]">
              Quando procuramos um endereço, instintivamente abaixamos o volume do carro.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-[#66707c] md:text-[1.32rem] md:leading-[1.65]">
              <p>Mas quando tentamos encontrar direção na vida, fazemos o contrário.</p>
              <p>Aumentamos o feed, o ruído, as distrações e os estímulos.</p>
              <p className="font-medium text-[#111318]">
                Talvez o problema não seja falta de direção. Talvez exista ruído demais.
              </p>
            </div>
            <div className="mt-8">
              <PrimaryCta />
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2.5rem] border border-black/6 bg-[linear-gradient(180deg,#fafbfd_0%,#eef2f6_100%)] p-5 shadow-[0_28px_90px_rgba(16,17,20,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-[radial-gradient(circle_at_top,rgba(171,190,214,0.32),transparent_35%),linear-gradient(180deg,#f9fafb_0%,#edf2f6_100%)] p-6">
              <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                <span>direção noturna</span>
                <span>silêncio e leitura</span>
              </div>
              <div className="mt-10 rounded-[1.8rem] border border-black/6 bg-white/64 p-6 backdrop-blur-xl">
                <div className="flex items-end gap-2">
                  {[90, 72, 58, 36, 18].map((value, index) => (
                    <div key={index} className="flex-1 rounded-full bg-black/[0.04] p-1">
                      <div
                        className="rounded-full bg-[linear-gradient(180deg,#d8e0eb_0%,#8ca0bd_100%)]"
                        style={{ height: `${value}px` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-black/6 bg-white/66 p-4">
                    <div className="text-[0.64rem] uppercase tracking-[0.22em] text-[#8b94a1]">
                      antes
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#66707c]">
                      volume alto, atenção disputada, direção embaralhada
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-black/6 bg-white/66 p-4">
                    <div className="text-[0.64rem] uppercase tracking-[0.22em] text-[#8b94a1]">
                      depois
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#66707c]">
                      menos ruído, mais presença, leitura mais nítida do que importa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionIntro
            eyebrow="O que é o desafio"
            title="Duas semanas para perceber o ruído, reduzir a captura e reconstruir direção."
            subtitle="Menos texto. Mais entendimento do que vai acontecer com você ao longo do processo."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {weekBlocks.map((week, index) => (
              <motion.article
                key={week.label}
                className="rounded-[2.5rem] border border-black/6 bg-white/76 p-8 shadow-[0_20px_55px_rgba(16,17,20,0.05)] backdrop-blur-xl md:p-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.05}
                variants={fadeUp}
              >
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8b94a1]">
                  {week.label}
                </div>
                <h3 className="mt-4 font-serif text-[2.2rem] leading-[0.98] tracking-[-0.05em] text-[#111318] md:text-[3rem]">
                  {week.title}
                </h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {week.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-black/6 bg-[#f4f7fb] px-4 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#67717d]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionIntro
            eyebrow="Transformação"
            title="Antes: mente fragmentada. Depois: presença, clareza e sensação de retomada."
            subtitle="Não se trata de virar outra pessoa. Se trata de parar de entregar sua vida para o excesso de estímulos."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {beforeAfterItems.map((item, index) => (
              <motion.article
                key={item.before}
                className="rounded-[2.3rem] border border-black/6 bg-white/76 p-7 shadow-[0_18px_50px_rgba(16,17,20,0.05)] backdrop-blur-xl md:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.05}
                variants={fadeUp}
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                  antes
                </div>
                <p className="mt-3 text-lg leading-7 text-[#66707c]">{item.before}</p>
                <div className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                  depois
                </div>
                <p className="mt-3 text-lg leading-7 text-[#111318]">{item.after}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionIntro
            eyebrow="Base real"
            title="Antes de ser ensinado, foi testado na prática."
            subtitle="Ainda sem depoimentos públicos da primeira turma. Por honestidade, a prova nesta página começa pelos resultados que deram origem ao protocolo."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {proofCards.map((card, index) => (
              <motion.article
                key={card.eyebrow}
                className="rounded-[2.3rem] border border-black/6 bg-white/78 p-7 shadow-[0_18px_50px_rgba(16,17,20,0.05)] backdrop-blur-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.05}
                variants={fadeUp}
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b94a1]">
                  {card.eyebrow}
                </div>
                <div className="mt-5 font-serif text-[3rem] leading-none tracking-[-0.06em] text-[#111318]">
                  {card.value}
                </div>
                <p className="mt-4 text-base leading-7 text-[#66707c]">{card.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mx-auto mt-8 max-w-4xl rounded-[2.3rem] border border-[#b8c6d9] bg-[linear-gradient(180deg,rgba(230,236,243,0.72)_0%,rgba(255,255,255,0.82)_100%)] p-8 text-center shadow-[0_18px_50px_rgba(16,17,20,0.04)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-lg leading-8 text-[#66707c] md:text-[1.2rem] md:leading-[1.75]">
              O desafio nasceu de uma hipótese pessoal: quando a atenção volta para o lugar, a vida volta a andar. A primeira turma entra em seguida. Os relatos públicos entram aqui à medida que forem acontecendo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            className="mx-auto w-full max-w-[320px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <div className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-white/76 p-3 shadow-[0_28px_90px_rgba(16,17,20,0.08)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/vitor-tyso-autor-dark.jpeg"
                  alt="Retrato de Vitor Tyso"
                  width={768}
                  height={1024}
                  className="h-auto w-full object-cover object-center grayscale"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8b94a1]">
              Criado por Vitor Tyso
            </p>
            <h2 className="mt-4 text-balance font-serif text-[2.8rem] leading-[0.96] tracking-[-0.06em] text-[#111318] sm:text-[3.9rem] md:text-[5rem]">
              Um protocolo construído a partir de observação, excesso e reconstrução prática.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-[#66707c] md:text-lg">
              <p>Pesquisador independente sobre atenção, sobrecarga informacional e clareza mental.</p>
              <p>
                Depois de anos observando comportamento, decisão sob pressão e os efeitos do excesso sobre a execução, o trabalho deixou de ser apenas intelectual.
              </p>
              <p>
                Passei 15 anos trabalhando em algo que não fazia sentido para mim. Atravessei 7 cidades. Fiquei anos longe da mulher que eu amava.
              </p>
              <p>
                Eu estava acordado de corpo. Morto por dentro.
              </p>
              <p>
                Achava que o problema era eu. Que faltava disciplina. Que algo em mim estava errado.
              </p>
              <p>
                Até que entendi: o problema nunca foi eu. Foi para onde eu estava direcionando minha atenção — e quem estava se beneficiando disso.
              </p>
              <p>
                Quando acordei para isso, criei um protocolo. Testei em mim mesmo. Os resultados foram concretos: clareza mental, presença recuperada, projetos saindo do papel.
              </p>
              <p>
                Eu poderia ter entendido isso aos 25. Fui entender aos 40. Não quero que você espere tanto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <SectionIntro
            eyebrow="Perguntas frequentes"
            title="Clareza comercial sem pressão desnecessária."
            subtitle="O próximo passo precisa parecer nítido antes de parecer urgente."
          />

          <div className="mt-14 grid gap-4">
            {faqItems.map((item, index) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,214,232,0.34),transparent_28%)]" />
        <div className="grain-layer absolute inset-0 opacity-20" />
        <motion.div
          className="relative mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-balance font-serif text-[3rem] leading-[0.95] tracking-[-0.06em] text-[#111318] sm:text-[4.3rem] md:text-[5.6rem]">
            Talvez recuperar sua atenção seja também recuperar sua vida.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-7 text-[#66707c] md:text-xl md:leading-8">
            Não é uma decisão sobre produtividade. É uma decisão sobre presença, direção e o tipo de vida que você ainda quer sentir acontecendo.
          </p>
          <div className="mt-8">
            <PrimaryCta />
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-black/6 bg-[#f5f6f2] px-5 py-10 sm:px-8 md:py-12">
        <div className="mx-auto max-w-[1240px] rounded-[2.4rem] border border-black/6 bg-white/76 px-6 py-8 shadow-[0_18px_50px_rgba(16,17,20,0.05)] backdrop-blur-xl md:px-10 md:py-10">
          <div className="grid gap-8 border-b border-black/6 pb-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111318]">Lista de espera</h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-[#66707c]">
                Entre para receber informações sobre a próxima turma e acompanhar os canais oficiais.
              </p>
              <a
                href={footerConfig.verifyLink}
                className="mt-4 inline-flex text-lg leading-8 text-[#536b8f] transition hover:opacity-80"
              >
                Entrar na lista
              </a>
              <div className="mt-5 flex flex-col gap-2 text-base leading-7 text-[#66707c]">
                <a
                  href={footerConfig.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#536b8f] transition hover:opacity-80"
                >
                  YouTube
                </a>
                <span>Instagram em breve</span>
                <span>TikTok em breve</span>
                <a
                  href={footerConfig.diagnosisLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#536b8f] transition hover:opacity-80"
                >
                  Diagnóstico gratuito
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111318]">Aviso legal</h3>
              <p className="mt-3 text-lg leading-8 text-[#66707c]">
                O conteúdo deste desafio tem caráter educacional e informativo, com foco em atenção, sobrecarga mental e clareza.
              </p>
              <p className="mt-2 text-lg leading-8 text-[#66707c]">
                Não substitui acompanhamento médico, psicológico ou psiquiátrico, nem se propõe a diagnosticar, tratar ou curar condições de saúde.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 text-base text-[#66707c] md:grid-cols-[1fr_auto_auto] md:items-start">
            <div>
              <span className="font-medium text-[#111318]">© 2026 Vitor Tyso — Desafio da Atenção</span>
              <div className="mt-2 text-sm italic text-[#7c8ca2]">Você vale mais.</div>
            </div>
            <a href={footerConfig.privacyLink} className="text-[#536b8f] transition hover:opacity-80">
              Política de Privacidade
            </a>
            <div>{footerConfig.email}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
