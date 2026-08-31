import nodemailer, { type SendMailOptions, type Transporter } from "nodemailer";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  timeout: number;
  user: string;
  pass: string;
};

function getOptionalEnv(name: string) {
  return process.env[name]?.trim();
}

export function getRequiredEnv(name: string) {
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

function getBooleanEnv(name: string, fallback: boolean) {
  const value = getOptionalEnv(name);

  if (!value) {
    return fallback;
  }

  return value === "true";
}

function getNumberEnv(name: string, fallback: number) {
  const value = getOptionalEnv(name);

  if (!value) {
    return fallback;
  }

  const parsedValue = Number(value);

  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

function buildSmtpConfig(
  prefix: "SMTP" | "SMTP_FALLBACK",
  defaults?: Pick<SmtpConfig, "host" | "user" | "pass" | "timeout">,
) {
  const host =
    getOptionalEnv(`${prefix}_HOST`) || defaults?.host || getRequiredEnv("SMTP_HOST");
  const port = getNumberEnv(`${prefix}_PORT`, prefix === "SMTP" ? 465 : 587);
  const secure = getBooleanEnv(`${prefix}_SECURE`, port === 465);

  return {
    host,
    port,
    secure,
    timeout: defaults?.timeout ?? getNumberEnv("SMTP_CONNECTION_TIMEOUT", 15000),
    user: defaults?.user ?? getRequiredEnv("SMTP_USER"),
    pass: defaults?.pass ?? getSmtpPassword(host),
  } satisfies SmtpConfig;
}

function getFallbackSmtpConfig(primaryConfig: SmtpConfig) {
  const hasExplicitFallback =
    Boolean(getOptionalEnv("SMTP_FALLBACK_HOST")) ||
    Boolean(getOptionalEnv("SMTP_FALLBACK_PORT")) ||
    Boolean(getOptionalEnv("SMTP_FALLBACK_SECURE"));

  if (!hasExplicitFallback) {
    return buildSmtpConfig("SMTP_FALLBACK", {
      host: primaryConfig.host,
      user: primaryConfig.user,
      pass: primaryConfig.pass,
      timeout: primaryConfig.timeout,
    });
  }

  return buildSmtpConfig("SMTP_FALLBACK", {
    host: primaryConfig.host,
    user: primaryConfig.user,
    pass: primaryConfig.pass,
    timeout: primaryConfig.timeout,
  });
}

function sameConfig(left: SmtpConfig, right: SmtpConfig) {
  return (
    left.host === right.host &&
    left.port === right.port &&
    left.secure === right.secure &&
    left.user === right.user
  );
}

function createTransporter(config: SmtpConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure && config.port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: config.timeout,
    greetingTimeout: config.timeout,
    socketTimeout: config.timeout,
  });
}

export function isSmtpAuthError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EAUTH"
  );
}

export function isSmtpConnectionError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    ["ESOCKET", "ETIMEDOUT", "ECONNREFUSED", "ENOTFOUND", "EHOSTUNREACH", "ECONNRESET"].includes(
      String(error.code),
    )
  );
}

export function getSmtpHelpMessage(error: unknown) {
  if (isSmtpAuthError(error)) {
    return "SMTP login failed. Check SMTP_USER and SMTP_PASSWORD, then restart the dev server.";
  }

  if (isSmtpConnectionError(error)) {
    return "SMTP connection timed out. Check whether mail.nexifire.com allows outbound SMTP from this machine/server, and verify SMTP_HOST, SMTP_PORT, and SMTP_SECURE.";
  }

  return "Unable to send your message right now.";
}

export function getPublicMailErrorMessage(kind: "contact" | "career") {
  if (kind === "career") {
    return "We’re unable to submit your application right now. Please try again shortly or email contact@nexifire.com directly.";
  }

  return "We’re unable to send your message right now. Please try again shortly or email contact@nexifire.com directly.";
}

export async function sendMailWithConfiguredTransport(
  message: SendMailOptions,
) {
  const primaryConfig = buildSmtpConfig("SMTP");
  const fallbackConfig = getFallbackSmtpConfig(primaryConfig);
  const configs = sameConfig(primaryConfig, fallbackConfig)
    ? [primaryConfig]
    : [primaryConfig, fallbackConfig];

  let lastError: unknown = null;

  for (const config of configs) {
    const transporter: Transporter = createTransporter(config);

    try {
      await transporter.sendMail(message);
      return;
    } catch (error) {
      lastError = error;

      if (!isSmtpConnectionError(error)) {
        throw error;
      }
    }
  }

  throw lastError;
}