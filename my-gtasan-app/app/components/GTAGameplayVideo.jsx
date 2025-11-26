'use client';

import { useTranslations } from 'next-intl';

export default function GTAGameplayVideo() {
  const t = useTranslations();

  return (
    <section className="relative w-full bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('gtaGameplay.title')}
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="w-full">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg dark:shadow-2xl"
                src="https://www.youtube.com/embed/es9Gzf0H1Rc"
                title="GRAND THEFT AUTO San Andreas Mobile - Gameplay Story Walkthrough Part 1 (iOS Android)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 w-full">
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
              {t('gtaGameplay.description')}
            </p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:bg-gray-100/60 dark:hover:bg-gray-800/40 transition-all duration-300">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] flex items-center justify-center">
                <svg className="w-4 h-4 text-black font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('gtaGameplay.features.realisticGraphics')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('gtaGameplay.featuresDesc.realisticGraphics')}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:bg-gray-100/60 dark:hover:bg-gray-800/40 transition-all duration-300">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] flex items-center justify-center">
                <svg className="w-4 h-4 text-black font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('gtaGameplay.features.smoothControls')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('gtaGameplay.featuresDesc.smoothControls')}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:bg-gray-100/60 dark:hover:bg-gray-800/40 transition-all duration-300">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] flex items-center justify-center">
                <svg className="w-4 h-4 text-black font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('gtaGameplay.features.immersiveExperience')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('gtaGameplay.featuresDesc.immersiveExperience')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
