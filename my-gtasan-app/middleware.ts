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
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // Redirect http to https in production
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

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
