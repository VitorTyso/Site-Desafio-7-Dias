import { NextResponse } from "next/server";

type WaitlistPayload = {
  name: string;
  email: string;
  whatsapp: string;
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
    const airtableToken = process.env.AIRTABLE_TOKEN;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Waitlist";

    if (!airtableToken || !airtableBaseId) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Configure AIRTABLE_TOKEN e AIRTABLE_BASE_ID para conectar a lista de espera ao Airtable."
        },
        { status: 503 }
      );
    }

    const name = normalizeText(body.name);
    const email = normalizeText(body.email).toLowerCase();
    const whatsapp = normalizeWhatsapp(normalizeText(body.whatsapp));

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

    const airtablePayload = {
      records: [
        {
          fields: {
            name,
            email,
            whatsapp,
            source: normalizeText(body.source) || "landing-desafio-atencao",
            page: normalizeText(body.page) || "/lista-de-espera",
            createdAt: body.createdAt || new Date().toISOString()
          }
        }
      ]
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(airtablePayload),
        cache: "no-store"
      }
    );

    const rawResponse = await response.text();
    let responseData: unknown = null;

    try {
      responseData = rawResponse ? JSON.parse(rawResponse) : null;
    } catch {
      responseData = rawResponse;
    }

    if (!response.ok) {
      const airtableMessage =
        typeof responseData === "object" &&
        responseData !== null &&
        "error" in responseData &&
        typeof responseData.error === "object" &&
        responseData.error !== null &&
        "message" in responseData.error &&
        typeof responseData.error.message === "string"
          ? responseData.error.message
          : typeof responseData === "string" && responseData
            ? responseData
            : `Airtable respondeu com status ${response.status}.`;

      return NextResponse.json(
        {
          ok: false,
          message: airtableMessage
        },
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
