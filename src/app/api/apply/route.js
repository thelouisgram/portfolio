import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_EMAIL = "hadesanoye01@gmail.com";

const OPPORTUNITY_LABELS = {
  freelance: "Freelance",
  "full-time": "Full-time",
  contract: "Contract",
};

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const opportunity = String(body.opportunity || "").trim();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!OPPORTUNITY_LABELS[opportunity]) {
      return NextResponse.json(
        { error: "Please select an opportunity type." },
        { status: 400 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email is not configured yet. Please try again later." },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
    const from = "thelouisgram <onboarding@resend.dev>";
    const opportunityLabel = OPPORTUNITY_LABELS[opportunity];

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New ${opportunityLabel.toLowerCase()} inquiry from ${name}`,
      text: [
        `New ${opportunityLabel.toLowerCase()} inquiry from thelouisgram portfolio`,
        "",
        `Opportunity: ${opportunityLabel}`,
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;line-height:1.5;color:#fafafa;background:#09090b;padding:24px">
          <h2 style="margin:0 0 12px;color:#fafafa">New ${escapeHtml(opportunityLabel.toLowerCase())} inquiry</h2>
          <p style="margin:0 0 20px;color:#a1a1aa">Submitted via thelouisgram apply form</p>
          <table style="border-collapse:collapse;width:100%;max-width:560px;color:#e4e4e7">
            <tr><td style="padding:8px 0;font-weight:600;color:#a1a1aa">Opportunity</td><td style="padding:8px 0">${escapeHtml(opportunityLabel)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#a1a1aa">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#a1a1aa">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#fafafa">${escapeHtml(email)}</a></td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#18181b;border-radius:12px;white-space:pre-wrap;color:#e4e4e7">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your application. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
