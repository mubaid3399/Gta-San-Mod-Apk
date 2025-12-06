'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

export default function Blog() {
  const pathname = usePathname();

  const localePrefix = (() => {
    const parts = pathname.split('/').filter(Boolean);
    const maybeLocale = parts[0];
    return maybeLocale && supportedLocales.includes(maybeLocale.toLowerCase())
      ? `/${maybeLocale.toLowerCase()}`
      : '';
  })();

  const buildHref = (path) => {
    if (path === '/') {
      return localePrefix || '/';
    }
    return `${localePrefix}${path}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            GTA San Andreas Blog
          </h1>
          <p className="text-gray-400 text-lg">
            News, Updates & Gaming Insights
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={buildHref(`/blog/${post.slug}`)}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl overflow-hidden hover:border-[#00ff87]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff87]/20 h-full flex flex-col">
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#00ff87]/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff87] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700">
                    <span>{post.publishedDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
