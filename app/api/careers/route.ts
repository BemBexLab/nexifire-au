import nodemailer, { type Transporter } from "nodemailer";

export const runtime = "nodejs";

const recipientEmail =
  getOptionalEnv("CAREERS_EMAIL") ||
  getOptionalEnv("CONTACT_EMAIL") ||
  "contact@nexifire.com.au";
const maxResumeSize = 5 * 1024 * 1024;

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

function getFormString(formData: FormData, name: string) {
  const value = formData.get(name);
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
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid application form." }, { status: 400 });
  }

  const firstName = getFormString(formData, "firstName");
  const lastName = getFormString(formData, "lastName");
  const email = getFormString(formData, "email");
  const countryCode = getFormString(formData, "countryCode");
  const phone = getFormString(formData, "phone");
  const salaryExpectation = getFormString(formData, "salaryExpectation");
  const position = getFormString(formData, "position");
  const employmentStatus = getFormString(formData, "employmentStatus");
  const joinTimeline = getFormString(formData, "joinTimeline");
  const portfolio = getFormString(formData, "portfolio");
  const resumeValue = formData.get("resume");
  const resume =
    resumeValue instanceof File && resumeValue.size > 0 ? resumeValue : null;

  if (!firstName || !lastName || !email || !phone || !position) {
    return Response.json(
      { error: "Please fill in first name, last name, email, phone, and position." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (resume && resume.size > maxResumeSize) {
    return Response.json(
      { error: "Please upload a resume smaller than 5MB." },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const fullPhone = [countryCode, phone].filter(Boolean).join(" ");
  const fields = [
    ["Name", fullName],
    ["Email", email],
    ["Phone", fullPhone],
    ["Position", position],
    ["Salary Expectation", salaryExpectation],
    ["Currently Employed", employmentStatus],
    ["Join Timeline", joinTimeline],
    ["Portfolio", portfolio],
  ];
  const text = [
    "New NexiFire career application",
    "",
    ...fields.map(([label, value]) => `${label}: ${value || "Not provided"}`),
  ].join("\n");
  const html = `
    <h2>New NexiFire career application</h2>
    ${fields
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "Not provided")}</p>`,
      )
      .join("")}
  `;

  try {
    await getTransporter().sendMail({
      from: `"NexiFire Careers" <${getRequiredEnv("SMTP_USER")}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New career application from ${fullName}`,
      text,
      html,
      attachments: resume
        ? [
            {
              filename: resume.name,
              content: Buffer.from(await resume.arrayBuffer()),
              contentType: resume.type || undefined,
            },
          ]
        : [],
    });
  } catch (error) {
    console.error("Career application email failed:", error);

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
      { error: "Unable to send your application right now." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
