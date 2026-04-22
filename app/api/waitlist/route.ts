import { NextResponse } from "next/server";

type WaitlistPayload = {
  name: string;
  email: string;
  whatsapp: string;
  company?: string;
  page?: string;
  source?: string;
  createdAt?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeText(value: unknown) {
  return String(value || "").trim();
}

function normalizeWhatsapp(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;
    const webhookUrl = process.env.WAITLIST_GOOGLE_SCRIPT_URL;
    const webhookSecret = process.env.WAITLIST_WEBHOOK_SECRET;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Configure WAITLIST_GOOGLE_SCRIPT_URL para conectar a lista de espera ao Google Sheets."
        },
        { status: 503 }
      );
    }

    if (!webhookSecret) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Configure WAITLIST_WEBHOOK_SECRET para proteger o envio entre a Vercel e o Google Apps Script."
        },
        { status: 503 }
      );
    }

    const name = normalizeText(body.name);
    const email = normalizeText(body.email).toLowerCase();
    const whatsapp = normalizeWhatsapp(normalizeText(body.whatsapp));
    const company = normalizeText(body.company);

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Informe um nome valido." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Informe um e-mail valido." },
        { status: 400 }
      );
    }

    if (whatsapp.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Informe um WhatsApp valido." },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const userAgent = request.headers.get("user-agent") || "";

    const leadPayload = {
      secret: webhookSecret,
      lead: {
        name,
        email,
        whatsapp,
        page: normalizeText(body.page) || "/lista-de-espera",
        source: normalizeText(body.source) || "landing-desafio-atencao",
        createdAt: body.createdAt || new Date().toISOString(),
        userAgent,
        ip: forwardedFor?.split(",")[0]?.trim() || "unknown"
      }
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leadPayload),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Nao foi possivel enviar o lead para a planilha." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Nao foi possivel processar sua inscricao." },
      { status: 500 }
    );
  }
}
