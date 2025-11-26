import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  // Define all pages
  const pages = ['', '/for-pc', '/gta-cheats', '/gta-cars'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = locale === 'en'
        ? `${baseUrl}${page || '/'}`
        : `${baseUrl}/${locale}${page || ''}`;

      sitemapEntries.push({
        url,
        lastModified: new Date('2025-01-15'),
        changeFrequency: page === '' ? 'weekly' : 'weekly',
        priority: page === '' ? 1.0 : 0.9,
      });
    });
  });

  return sitemapEntries;
}
