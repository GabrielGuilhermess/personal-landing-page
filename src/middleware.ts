import { NextResponse, type NextRequest } from "next/server";
import {
  isLocale,
  resolveLocaleFromAcceptLanguage,
} from "./i18n/locale";

const LOCALE_HEADER = "x-landing-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = resolveLocaleFromAcceptLanguage(
      request.headers.get("accept-language"),
    );
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}`;

    return NextResponse.redirect(redirectUrl);
  }

  const routeLocale = pathname.slice(1);

  if (!isLocale(routeLocale)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, routeLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/", "/pt", "/en"],
};
