import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/admin',
          '/.well-known/acme-challenge/',
          '/api/internal/',
        ],
        crawlDelay: 0, // No crawl delay - allow Google to crawl frequently
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
