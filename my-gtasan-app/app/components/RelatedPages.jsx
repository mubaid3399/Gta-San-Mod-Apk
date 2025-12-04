'use client';

import InternalLink from './InternalLink';
import { useTranslations } from 'next-intl';

export default function RelatedPages({ pages = [] }) {
  const t = useTranslations();

  if (!pages || pages.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Related Pages
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <InternalLink
              key={index}
              href={page.href}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#00ff87]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff87]/20 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                {page.icon && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff87]/20 to-[#00a2ff]/20 border border-[#00ff87]/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {page.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00ff87] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {page.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-[#00ff87] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </InternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}
