import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogPosts';

const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];
const defaultLocale = 'en';

// IMPORTANT: Only include pages that actually exist in app/[locale]/
// These are the 19 pages currently created
const staticRoutes = [
  '',
  '/about',
  '/acceptable-use',
  '/blog',
  '/community',
  '/contact',
  '/cookie-policy',
  '/faq',
  '/for-ios',
  '/for-pc',
  '/gta-6',
  '/gta-cars',
  '/gta-cheats',
  '/gta-vice-city',
  '/how-to-install',
  '/is-safe-to-download',
  '/mod-apk-vs-original',
  '/privacy-policy',
  '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  // Use proper ISO 8601 date format for lastModified
  const currentDate = new Date().toISOString();

  // Generate URLs for all locales and routes
  // IMPORTANT: English (default locale) should NOT have /en/ prefix due to localePrefix: 'as-needed'
  const allUrls = locales.flatMap((locale) =>
    staticRoutes.map((route) => {
      // For default locale (en), don't add locale prefix
      // For other locales, add locale prefix
      let path;
      if (locale === defaultLocale) {
        path = route === '' ? '' : route;
      } else {
        path = route === '' ? `/${locale}` : `/${locale}${route}`;
      }

      const url = `${baseUrl}${path}`;

      // Determine priority based on route importance (Google accepts 0.0 to 1.0)
      const priority = getPriority(route, locale);

      return {
        url,
        lastModified: currentDate,
        changeFrequency: 'weekly' as 'weekly',
        priority,
      };
    })
  );

  // Generate URLs for blog posts across all locales
  const blogUrls = locales.flatMap((locale) =>
    blogPosts.map((post) => {
      // For default locale (en), don't add locale prefix
      const path = locale === defaultLocale ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;
      const url = `${baseUrl}${path}`;

      // Use ISO 8601 format for blog post dates
      const postDate = post.publishedDate
        ? new Date(post.publishedDate).toISOString()
        : currentDate;

      return {
        url,
        lastModified: postDate,
        changeFrequency: 'monthly' as 'monthly',
        priority: parseFloat((locale === defaultLocale ? 0.85 : 0.80).toFixed(2)),
      };
    })
  );

  // Combine static and blog URLs
  const combinedUrls = [...allUrls, ...blogUrls];

  // Sort by priority (highest first) for better crawling order
  return combinedUrls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

/**
 * Calculate priority for each route
 * Higher priority = crawled more frequently by search engines
 * Google accepts values from 0.0 to 1.0
 */
function getPriority(route: string, locale: string): number {
  // Homepage gets highest priority
  if (route === '') {
    return locale === defaultLocale ? 1.0 : 0.95;
  }

  // High-value content pages
  const highPriority = [
    '/gta-6',
    '/for-ios',
    '/for-pc',
    '/gta-cheats',
    '/gta-vice-city',
    '/how-to-install',
    '/gta-cars',
    '/mod-apk-vs-original',
  ];

  if (highPriority.includes(route)) {
    return locale === defaultLocale ? 0.9 : 0.85;
  }

  // Medium priority pages
  const mediumPriority = ['/faq', '/is-safe-to-download', '/about', '/contact', '/blog'];

  if (mediumPriority.includes(route)) {
    return locale === defaultLocale ? 0.8 : 0.75;
  }

  // Legal/Policy pages - still important but change less frequently
  const legalPages = [
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/acceptable-use',
  ];

  if (legalPages.includes(route)) {
    return 0.7;
  }

  // Community, etc. - lower priority
  return 0.6;
}
