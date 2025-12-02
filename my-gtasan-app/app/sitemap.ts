import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  // Define all main pages
  const pages = [
    '',
    'for-pc',
    'for-ios',
    'gta-cheats',
    'gta-cars',
    'how-to-install',
    'is-safe-to-download',
    'mod-apk-vs-original',
    'faq',
    'all-features',
  ];

  // Define legal/meta pages (no locale prefix)
  const staticPages = [
    'privacy-policy',
    'terms-of-service',
    'cookie-policy',
    'acceptable-use',
    'about',
    'contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add localized pages
  pages.forEach((page) => {
    locales.forEach((locale) => {
      const isHomepage = page === '';
      const url = isHomepage
        ? locale === 'en'
          ? `${baseUrl}/`
          : `${baseUrl}/${locale}`
        : locale === 'en'
        ? `${baseUrl}/${page}`
        : `${baseUrl}/${locale}/${page}`;

      const priority =
        page === '' ? 1.0 : ['for-pc', 'for-ios', 'gta-cheats', 'gta-cars', 'how-to-install'].includes(page) ? 0.9 : 0.85;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority,
      });
    });
  });

  // Add static pages (priority 0.8)
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    });
  });

  return sitemapEntries;
}
