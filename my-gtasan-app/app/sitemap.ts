import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  // Define all pages
  const pages = [
    '',
    '/for-pc',
    '/gta-cheats',
    '/gta-cars',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/acceptable-use',
    '/about',
    '/contact',
  ];

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = locale === 'en'
        ? `${baseUrl}${page || '/'}`
        : `${baseUrl}/${locale}${page || ''}`;

      entries.push({
        url,
        lastModified: new Date('2025-01-15'),
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1.0 : 0.9,
      });
    });
  });

  return entries;
}
