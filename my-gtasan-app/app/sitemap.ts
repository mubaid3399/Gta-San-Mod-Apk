import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '../i18n.config';

// Define all static routes relative to each locale
const staticRoutes = [
  '',
  '/about',
  '/acceptable-use',
  '/community',
  '/contact',
  '/cookie-policy',
  '/faq',
  '/for-ios',
  '/for-pc',
  '/gta-cars',
  '/gta-cheats',
  '/how-to-install',
  '/is-safe-to-download',
  '/mod-apk-vs-original',
  '/privacy-policy',
  '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  // Generate URLs for all locales and routes
  const allUrls = locales.flatMap((locale) =>
    staticRoutes.map((route) => {
      const path = route === '' ? `/${locale}` : `/${locale}${route}`;
      const url = `${baseUrl}${path}`;

      // Determine priority based on route importance
      const priority = getPriority(route, locale);

      // Determine change frequency
      const changefreq = getChangeFrequency(route);

      return {
        url,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: changefreq as
          | 'always'
          | 'hourly'
          | 'daily'
          | 'weekly'
          | 'monthly'
          | 'yearly'
          | 'never',
        priority,
      };
    })
  );

  // Sort by priority (highest first) for better crawling order
  return allUrls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

/**
 * Calculate priority for each route
 * Higher priority = crawled more frequently by search engines
 */
function getPriority(route: string, locale: string): number {
  // Homepage gets highest priority
  if (route === '') {
    return locale === defaultLocale ? 1.0 : 0.95;
  }

  // High-value content pages
  const highPriority = [
    '/for-ios',
    '/for-pc',
    '/gta-cheats',
    '/how-to-install',
    '/gta-cars',
    '/mod-apk-vs-original',
  ];

  if (highPriority.includes(route)) {
    return locale === defaultLocale ? 0.9 : 0.85;
  }

  // Medium priority pages
  const mediumPriority = ['/faq', '/is-safe-to-download', '/about', '/contact'];

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

/**
 * Determine update frequency for each route
 * This helps search engines understand expected change patterns
 */
function getChangeFrequency(
  route: string
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Homepage and main content - updated frequently
  if (
    route === '' ||
    route === '/gta-cheats' ||
    route === '/gta-cars' ||
    route === '/faq'
  ) {
    return 'weekly';
  }

  // Pages that update occasionally
  const weeklyUpdate = ['/for-ios', '/for-pc', '/how-to-install'];
  if (weeklyUpdate.includes(route)) {
    return 'monthly';
  }

  // Legal/Policy pages rarely change
  const rarelyChange = [
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/acceptable-use',
  ];
  if (rarelyChange.includes(route)) {
    return 'yearly';
  }

  // Default to monthly
  return 'monthly';
}
