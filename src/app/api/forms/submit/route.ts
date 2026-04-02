import { NextResponse } from "next/server";
import { appointmentFormSchema, newsletterFormSchema } from "@/lib/formValidation";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

type FormType = "appointment" | "contact" | "newsletter";

function coerceFormType(value: unknown): FormType {
  if (value === "appointment" || value === "contact" || value === "newsletter") return value;
  return "contact";
}

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (!xff) return null;
  const first = xff.split(",")[0]?.trim();
  return first || null;
}

function formatKeyValueLines(data: Record<string, unknown>) {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(data)) {
    if (k === "honeypot") continue;
    if (v === undefined || v === null) continue;
    lines.push(`${k}: ${String(v)}`);
  }
  return lines;
}

async function sendResendEmail(params: {
  subject: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false as const };

  const from = process.env.RESEND_FROM || "Sunrise Human Care <no-reply@sunrisehumancare.com>";

  const to = (process.env.FORM_NOTIFY_EMAILS || "amal.a@omnihealthservices.in,sunrisehcshr@gmail.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (to.length === 0) return { sent: false as const };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    }),
  });

  if (!res.ok) {
    return { sent: false as const };
  }

  return { sent: true as const };
}

export async function POST(req: Request) {
  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const formType = coerceFormType(payload?.formType);
  const data = payload?.data;

  if (!data || typeof data !== "object") {
    return NextResponse.json({ ok: false, error: "Missing data" }, { status: 400 });
  }

  let parsed: any;
  if (formType === "newsletter") {
    const result = newsletterFormSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
    }
    parsed = result.data;
  } else {
    const result = appointmentFormSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
    }
    parsed = result.data;
  }

  const ip = getClientIp(req);
  const userAgent = req.headers.get("user-agent");

  const supabase = getSupabaseAdmin();
  const insertRes = await supabase
    .from("form_submissions")
    .insert({
      form_type: formType,
      data: parsed,
      ip,
      user_agent: userAgent,
    })
    .select("id")
    .single();

  if (insertRes.error) {
    return NextResponse.json({ ok: false, error: "Failed to store submission" }, { status: 500 });
  }

  const submissionId = insertRes.data?.id;
  const subject =
    formType === "newsletter"
      ? "Newsletter Subscription"
      : formType === "appointment"
        ? "New Appointment Request"
        : "New Contact Submission";

  const lines = formatKeyValueLines(parsed);
  const text = [`Form: ${formType}`, `Submission ID: ${submissionId}`, "", ...lines].join("\n");
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.5;">
      <h2 style="margin:0 0 12px;">${subject}</h2>
      <p style="margin:0 0 8px;"><strong>Form:</strong> ${formType}</p>
      <p style="margin:0 0 16px;"><strong>Submission ID:</strong> ${submissionId}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:720px;">
        ${lines
          .map((line) => {
            const [k, ...rest] = line.split(":");
            const v = rest.join(":").trim();
            return `
              <tr>
                <td style="padding:10px 12px; border:1px solid #eee; width:220px; font-weight:700; color:#111;">${k}</td>
                <td style="padding:10px 12px; border:1px solid #eee; color:#333;">${v}</td>
              </tr>
            `;
          })
          .join("")}
      </table>
    </div>
  `;

  const emailResult = await sendResendEmail({ subject, text, html });

  return NextResponse.json({ ok: true, id: submissionId, emailSent: emailResult.sent });
}
