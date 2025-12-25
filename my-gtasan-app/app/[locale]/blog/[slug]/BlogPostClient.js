'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';
import { notFound } from 'next/navigation';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../../utils/schemaMarkup';

const supportedLocales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

// Helper function to render text with internal links
const renderTextWithLinks = (text, localePrefix) => {
  if (!text) return null;

  // Define link patterns to replace
  const linkPatterns = [
    { pattern: /GTA Cheats page/g, url: `${localePrefix}/gta-cheats`, text: 'GTA Cheats page' },
    { pattern: /GTA Cars guide/g, url: `${localePrefix}/gta-cars`, text: 'GTA Cars guide' },
  ];

  const parts = [];
  let lastIndex = 0;
  let currentText = text;

  // Find all link matches
  const matches = [];
  linkPatterns.forEach(({ pattern, url, text: linkText }) => {
    const regex = new RegExp(pattern);
    let match;
    const tempText = text;
    while ((match = regex.exec(tempText)) !== null) {
      matches.push({
        index: match.index,
        length: match[0].length,
        url,
        text: linkText
      });
    }
  });

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);

  // Build parts array with text and links
  matches.forEach((match, i) => {
    // Add text before this link
    if (match.index > lastIndex) {
      parts.push(
        <span key={`text-${i}`}>
          {text.substring(lastIndex, match.index)}
        </span>
      );
    }

    // Add the link
    parts.push(
      <Link
        key={`link-${i}`}
        href={match.url}
        className="text-[#00ff87] hover:text-[#00a2ff] underline transition-colors"
      >
        {match.text}
      </Link>
    );

    lastIndex = match.index + match.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(
      <span key="text-final">{text.substring(lastIndex)}</span>
    );
  }

  return parts.length > 0 ? parts : text;
};

export default function BlogPost({ params }) {
  const pathname = usePathname();
  // params is already resolved by the server component, no need for use()
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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

  // Generate schema markup for the blog post
  const baseUrl = 'https://gtasanandreas.info';
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.coverImage}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}${localePrefix}` },
    { name: 'Blog', url: `${baseUrl}${localePrefix}/blog` },
    { name: post.title, url: `${baseUrl}${localePrefix}/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link
          href={buildHref('/blog')}
          className="inline-flex items-center gap-2 text-[#00ff87] hover:text-[#00ff87]/80 transition-colors text-sm font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="mb-6">
          <span className="inline-block bg-[#00ff87]/20 text-[#00ff87] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.publishedDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden mb-12 border border-[#00ff87]/20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gray-900/50 backdrop-blur border border-[#00ff87]/20 rounded-xl p-6 sm:p-8 mb-8">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {renderTextWithLinks(post.content.introduction, localePrefix)}
            </p>
          </div>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur border border-gray-700/30 rounded-xl p-6 sm:p-8 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
                {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                  {section.content}
                </p>
              )}

              {/* Image */}
              {section.image && (
                <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-lg overflow-hidden my-6 border border-[#00ff87]/20">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* List */}
              {section.list && (
                <ul className="space-y-2 ml-4 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-[#00ff87] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.afterList && (
                <p className="text-gray-300 leading-relaxed mt-4">
                  {section.afterList}
                </p>
              )}

              {/* Features */}
              {section.features && (
                <div className="space-y-4 mt-4">
                  {section.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/50 rounded-lg p-4 border border-[#00ff87]/10"
                    >
                      <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.afterFeatures && (
                <p className="text-gray-300 leading-relaxed mt-4">
                  {section.afterFeatures}
                </p>
              )}

              {/* Pricing */}
              {section.pricing && (
                <div className="space-y-4 mt-4">
                  {section.pricing.map((price, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                        {price.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {price.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.afterPricing && (
                <p className="text-gray-300 leading-relaxed mt-4 italic">
                  {section.afterPricing}
                </p>
              )}

              {/* System Requirements */}
              {section.requirements && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-[#00ff87]/10">
                    <h3 className="text-lg font-semibold text-[#00ff87] mb-3">
                      Minimum
                    </h3>
                    <ul className="space-y-2">
                      {section.requirements.minimum.map((req, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00ff87] mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-[#00a2ff]/10">
                    <h3 className="text-lg font-semibold text-[#00a2ff] mb-3">
                      Recommended
                    </h3>
                    <ul className="space-y-2">
                      {section.requirements.recommended.map((req, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00a2ff] mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.afterRequirements && (
                <p className="text-gray-300 leading-relaxed mt-4">
                  {section.afterRequirements}
                </p>
              )}

              {/* Error Fixes */}
              {section.errorFixes && (
                <div className="space-y-4 mt-4">
                  {section.errorFixes.map((error, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                        {error.title}
                      </h3>
                      <ul className="space-y-1">
                        {error.fixes.map((fix, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#00ff87] mt-1">→</span>
                            <span>{fix}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.afterFixes && (
                <p className="text-gray-300 leading-relaxed mt-4">
                  {section.afterFixes}
                </p>
              )}

              {/* Reasons */}
              {section.reasons && (
                <div className="space-y-4 mt-4">
                  {section.reasons.map((reason, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.afterReasons && (
                <p className="text-gray-300 leading-relaxed mt-4">
                  {section.afterReasons}
                </p>
              )}

              {/* Updates */}
              {section.updates && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {Object.entries(section.updates).map(([year, update]) => (
                    <div key={year} className="bg-gray-800/50 rounded-lg p-4 border border-[#00ff87]/10">
                      <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                        {update.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {update.description}
                      </p>
                      <ul className="space-y-2">
                        {update.items.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#00ff87] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* FAQs */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-[#00ff87]/30 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
                FAQs: Latest GTA 6 Updates (2025–2026)
              </h2>
              <div className="space-y-4">
                {post.content.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-[#00ff87] mb-2">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {post.content.conclusion && (
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-[#00ff87]/20 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-[#00ff87] to-[#00a2ff] rounded"></span>
                Final Thoughts
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {renderTextWithLinks(post.content.conclusion, localePrefix)}
              </p>
            </div>
          )}
        </article>

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            href={buildHref('/blog')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
