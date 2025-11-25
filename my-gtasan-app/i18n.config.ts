export const defaultLocale = 'en';
export const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'] as const;
export type Locale = (typeof locales)[number];
