import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n.config';

export default createMiddleware({
  locales: locales as unknown as string[],
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|.*\\.(?:jpg|png|gif|svg|ico|jpeg|webp)|favicon.ico).*)',
  ],
};
