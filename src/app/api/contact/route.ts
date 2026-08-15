import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email(),
  message: z.string().trim().min(12).max(2000),
  company: z.string().max(0).optional(),
  locale: z.enum(["en", "fa"]).default("en"),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  if (parsed.data.company) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: parsed.data.email,
      subject: `Portfolio enquiry from ${parsed.data.name}`,
      text: `${parsed.data.message}\n\nFrom: ${parsed.data.name} <${parsed.data.email}>`,
    }),
  });

  return response.ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
}
