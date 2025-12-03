import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  // ⚠️ CRITICAL FIX: Only include pages that actually exist to prevent 404 errors
  // Reason: 404 errors in sitemap damage domain trust and cause ranking drops
  // Pages will be added back when content is created

  const existingPages = [
    { slug: '', priority: 1.0, changefreq: 'weekly' as const }, // Homepage
    { slug: 'for-pc', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'for-ios', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-cheats', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'gta-cars', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'how-to-install', priority: 0.9, changefreq: 'weekly' as const },
    { slug: 'is-safe-to-download', priority: 0.83, changefreq: 'weekly' as const },
    { slug: 'mod-apk-vs-original', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'faq', priority: 0.85, changefreq: 'weekly' as const },
    { slug: 'about', priority: 0.75, changefreq: 'monthly' as const },
    { slug: 'contact', priority: 0.75, changefreq: 'monthly' as const },
    { slug: 'privacy-policy', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'terms-of-service', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'cookie-policy', priority: 0.6, changefreq: 'monthly' as const },
    { slug: 'acceptable-use', priority: 0.6, changefreq: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const staticPages = ['privacy-policy', 'terms-of-service', 'cookie-policy', 'acceptable-use'];

  // Add localized pages
  existingPages.forEach((page) => {
    locales.forEach((locale) => {
      const isHomepage = page.slug === '';

      // Don't localize static pages
      if (staticPages.includes(page.slug) && locale !== 'en') {
        return;
      }

      const url = isHomepage
        ? locale === 'en'
          ? `${baseUrl}/`
          : `${baseUrl}/${locale}`
        : locale === 'en'
        ? `${baseUrl}/${page.slug}`
        : `${baseUrl}/${locale}/${page.slug}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changefreq,
        priority: page.priority,
      });
    });
  });

  return sitemapEntries;
}
