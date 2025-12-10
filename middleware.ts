import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Determine locale based on domain
  let locale: "fr" | "en" = "fr"; // Default to French

  if (
    hostname.includes("accesshomeequity.ca") ||
    hostname.includes("accesshomeequity") ||
    // For local development, you can use a query param or subdomain
    hostname.includes("en.localhost")
  ) {
    locale = "en";
  }

  // Clone the request headers and set the locale
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
