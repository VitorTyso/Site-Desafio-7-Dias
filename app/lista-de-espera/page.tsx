"use client";

import Link from "next/link";
import { FormEvent, useMemo, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const submitLabel = useMemo(() => {
    if (status === "loading") return "Enviando...";
    if (status === "success") return "Recebido";
    return "Entrar na lista";
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      whatsapp: String(form.get("whatsapp") || "").trim(),
      createdAt: new Date().toISOString(),
      source: "landing-desafio-atencao",
      page: window.location.pathname
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Nao foi possivel enviar.");
      }

      setStatus("success");
      setMessage("Recebemos seus dados. Voce sera avisado sobre a proxima turma.");
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar agora. Tente novamente em instantes."
      );
    }
  }

  return (
    <main className="min-h-screen bg-white px-5 py-16 text-ink sm:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between border-b border-black/6 pb-4">
          <span className="text-sm font-medium tracking-[-0.01em] text-ink">Vitor Tyso</span>
          <Link
            href="/"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-ink transition hover:bg-black/[0.035]"
          >
            Voltar
          </Link>
        </div>

        <section className="mx-auto max-w-3xl py-12 text-center md:py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slateSoft">
            Lista de espera
          </p>
          <h1 className="mt-4 text-balance font-serif text-[3.2rem] leading-[0.94] tracking-[-0.06em] text-ink sm:text-[4.4rem] md:text-[5.6rem]">
            Receba a abertura da proxima turma.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-7 text-mist md:text-lg">
            Deixe seus dados para ser avisado quando o Desafio 7 Dias para recuperar sua atenção
            reabrir.
          </p>
        </section>

        <div className="mx-auto max-w-2xl rounded-[2.4rem] bg-[linear-gradient(180deg,#fafbfd_0%,#f4f6f8_100%)] p-6 ring-1 ring-black/5 md:p-8">
          <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Nome
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-12 w-full rounded-2xl border border-black/8 bg-white px-4 text-base text-ink outline-none transition focus:border-black/20"
                placeholder="Seu nome"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                required
                className="h-12 w-full rounded-2xl border border-black/8 bg-white px-4 text-base text-ink outline-none transition focus:border-black/20"
                placeholder="voce@exemplo.com"
                type="email"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-ink">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                required
                className="h-12 w-full rounded-2xl border border-black/8 bg-white px-4 text-base text-ink outline-none transition focus:border-black/20"
                placeholder="(11) 99999-9999"
                type="tel"
                inputMode="tel"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitLabel}
            </button>

            {message ? (
              <div
                className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "bg-red-50 text-red-700 ring-1 ring-red-200"
                }`}
              >
                {message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}
