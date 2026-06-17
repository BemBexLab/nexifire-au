import nodemailer, { type Transporter } from "nodemailer";

export const runtime = "nodejs";

const recipientEmail = getOptionalEnv("CONTACT_EMAIL") || "contact@nexifire.com.au";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  message?: unknown;
  source?: unknown;
};

let transporter: Transporter | null = null;

function getOptionalEnv(name: string) {
  return process.env[name]?.trim();
}

function getRequiredEnv(name: string) {
  const value = getOptionalEnv(name);

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getSmtpPassword(host: string) {
  const password = getRequiredEnv("SMTP_PASSWORD");

  if (host === "smtp.gmail.com") {
    return password.replace(/\s/g, "");
  }

  return password;
}

function getTransporter() {
  if (!transporter) {
    const host = getRequiredEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT || "465");
    const timeout = Number(process.env.SMTP_CONNECTION_TIMEOUT || "10000");

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : port === 465,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getSmtpPassword(host),
      },
      connectionTimeout: timeout,
      greetingTimeout: timeout,
      socketTimeout: timeout,
    });
  }

  return transporter;
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isSmtpAuthError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EAUTH"
  );
}

function isSmtpConnectionError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error.code === "ESOCKET" || error.code === "ETIMEDOUT")
  );
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const countryCode = normalizeString(payload.countryCode);
  const phone = normalizeString(payload.phone);
  const message = normalizeString(payload.message);
  const source = normalizeString(payload.source) || "NexiFire contact form";

  if (!name || !email || !phone || !message) {
    return Response.json(
      { error: "Please fill in name, email, phone, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const fullPhone = [countryCode, phone].filter(Boolean).join(" ");
  const subject = `New NexiFire inquiry from ${name}`;
  const text = [
    "New NexiFire contact form submission",
    "",
    `Source: ${source}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${fullPhone}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New NexiFire contact form submission</h2>
    <p><strong>Source:</strong> ${escapeHtml(source)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(fullPhone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await getTransporter().sendMail({
      from: `"NexiFire Website" <${getRequiredEnv("SMTP_USER")}>`,
      to: recipientEmail,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact email failed:", error);

    if (isSmtpAuthError(error)) {
      return Response.json(
        {
          error:
            "SMTP login failed. For Gmail, use a Google App Password in SMTP_PASSWORD, then restart the dev server.",
        },
        { status: 500 },
      );
    }

    if (isSmtpConnectionError(error)) {
      return Response.json(
        {
          error:
            "SMTP server is unreachable. Check SMTP_HOST, SMTP_PORT, and SMTP_SECURE in .env.",
        },
        { status: 500 },
      );
    }

    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
