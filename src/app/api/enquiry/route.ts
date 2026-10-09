import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Receives website enquiries.
 *
 * Delivery is intentionally not faked. To enable real delivery, set a
 * server-side environment variable `ENQUIRY_WEBHOOK_URL` that accepts a JSON
 * POST (e.g. Formspree, a CRM endpoint, Zapier/Make/n8n, or your own API).
 * When it is not configured the endpoint returns `{ ok: false, configured: false }`
 * and the client offers a WhatsApp / email fallback instead of a false success.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const data = {
    name: str(body.name, 120),
    company: str(body.company, 160),
    country: str(body.country, 120),
    email: str(body.email, 160),
    phone: str(body.phone, 60),
    category: str(body.category, 160),
    quantity: str(body.quantity, 160),
    details: str(body.details, 4000),
    contactMethod: str(body.contactMethod, 40),
    source: str(body.source, 80) || "website",
    submittedAt: new Date().toISOString(),
  };

  const invalid: string[] = [];
  if (!data.name) invalid.push("name");
  if (!data.country) invalid.push("country");
  if (!data.email || !EMAIL_RE.test(data.email)) invalid.push("email");
  if (!data.category) invalid.push("category");

  if (invalid.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fields: invalid },
      { status: 422 }
    );
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, configured: false }, { status: 200 });
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, configured: true, error: "Delivery failed." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, configured: true, error: "Delivery error." },
      { status: 502 }
    );
  }
}
