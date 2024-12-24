import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const i18nMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Jalankan middleware i18n
  const responseI18 = i18nMiddleware(request);
  if (responseI18.status === 200) {
    responseI18.headers.set("x-pathname", request.nextUrl.pathname) // set dan kirim header pathname 
    return responseI18;
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(id|en)/:path*"],
};
