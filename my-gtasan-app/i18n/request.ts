import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from '../i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Use the request locale if available, otherwise use the default
  let locale = await requestLocale;

  // Validate that the requested locale is supported
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  // Dynamically import messages based on locale
  const messages = await (async () => {
    switch (locale) {
      case 'de':
        return (await import('../messages/de.json')).default;
      case 'fr':
        return (await import('../messages/fr.json')).default;
      case 'it':
        return (await import('../messages/it.json')).default;
      case 'es':
        return (await import('../messages/es.json')).default;
      case 'pt':
        return (await import('../messages/pt.json')).default;
      case 'ru':
        return (await import('../messages/ru.json')).default;
      case 'ja':
        return (await import('../messages/ja.json')).default;
      default:
        return (await import('../messages/en.json')).default;
    }
  })();

  return {
    locale,
    messages,
  };
});
