import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: locales as unknown as string[],
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Add secure cookie headers
  response.headers.set(
    'Set-Cookie',
    response.headers.get('Set-Cookie')?.replace(/; ?$/, '') + '; HttpOnly; Secure; SameSite=Strict' || 'HttpOnly; Secure; SameSite=Strict'
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|.*\\.(?:jpg|png|gif|svg|ico|jpeg|webp)|favicon.ico|sitemap.xml|robots.txt|ads.txt).*)',
  ],
};
