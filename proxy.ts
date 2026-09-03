import { NextRequest, NextResponse } from "next/server";

const AU_COUNTRY_CODE = "AU";
const US_COUNTRY_CODE = "US";
const US_TARGET_HOST = "www.nexifire.com";
const AU_TARGET_HOST = "www.nexifire.com.au";

function getCountryCode(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    null
  );
}

function getRequestHost(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    request.nextUrl.host
  ).toLowerCase();
}

function isLocalHost(host: string): boolean {
  return (
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    host.endsWith(".local")
  );
}

function shouldRedirectAuTraffic(
  request: NextRequest,
  countryCode: string | null | undefined,
): boolean {
  if (countryCode !== AU_COUNTRY_CODE) {
    return false;
  }

  const host = getRequestHost(request);

  if (isLocalHost(host) || host === AU_TARGET_HOST || host.endsWith(".com.au")) {
    return false;
  }

  return host === "nexifire.com" || host === "www.nexifire.com";
}

function shouldRedirectUsTraffic(
  request: NextRequest,
  countryCode: string | null | undefined,
): boolean {
  if (countryCode !== US_COUNTRY_CODE) {
    return false;
  }

  const host = getRequestHost(request);

  if (isLocalHost(host) || host === US_TARGET_HOST) {
    return false;
  }

  return host === "nexifire.com.au" || host === "www.nexifire.com.au";
}

function createRedirectResponse(
  request: NextRequest,
  targetHost: string,
): NextResponse {
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.protocol = "https:";
  redirectUrl.host = targetHost;

  return NextResponse.redirect(redirectUrl, 307);
}

export function proxy(request: NextRequest) {
  const countryCode = getCountryCode(request)?.toUpperCase();

  if (shouldRedirectAuTraffic(request, countryCode)) {
    return createRedirectResponse(request, AU_TARGET_HOST);
  }

  if (shouldRedirectUsTraffic(request, countryCode)) {
    return createRedirectResponse(request, US_TARGET_HOST);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml).*)",
  ],
};
