import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization - Enhanced for better LCP and Core Web Vitals
  // Updated: Blog-6 images added
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtasanandreas.info',
      },
    ],
  },

  // Aggressive Compression
  compress: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental optimizations for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      'lottie-react',
      'three',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
    // Enable aggressive CSS optimization
    cssChunking: 'strict',
  },

  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/:ext',
          },
        ],
      },
      {
        source: '/:path*.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'font/:ext',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'nonce-{NONCE}' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.youtube.com https://*.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://*.google.com https://*.googlebot.com; frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://*.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; media-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; upgrade-insecure-requests;",
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Rewrites for static files
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/ads.txt',
          destination: '/ads.txt',
          locale: false,
        },
      ],
    };
  },

  // Redirects for old URLs (if needed)
  async redirects() {
    return [];
  },

  // Webpack optimization - Aggressive bundle size reduction
  webpack: (config, { isServer }) => {
    // Enable aggressive minification
    config.optimization.minimize = true;

    // Increase performance budgets
    config.performance = {
      maxEntrypointSize: 400000, // 400 KB (reduced from 512KB)
      maxAssetSize: 400000,
    };

    // Tree shaking optimization
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    // Module concatenation (scope hoisting)
    config.optimization.concatenateModules = true;

    // Split chunks more aggressively
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk (React, Next.js)
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Common libraries
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules/.test(module.identifier());
            },
            name(module) {
              const packageNameMatch = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              const packageName = packageNameMatch ? packageNameMatch[1] : '';
              return `lib.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // Shared components
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }

    return config;
  },

  // Production source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,

  // Development source maps configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Suppress source map warnings in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  // PoweredBy header disabled
  poweredByHeader: false,

  // Trailing slashes
  trailingSlash: false,
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
