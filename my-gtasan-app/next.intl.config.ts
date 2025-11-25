import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Use the request locale if available, otherwise use the default
  let locale = await requestLocale;

  // Validate that the requested locale is supported
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
