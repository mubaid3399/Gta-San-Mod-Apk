'use client';

import { useTranslations } from 'next-intl';

export default function TipsAndTricks() {
  const t = useTranslations();

  const tips = [
    {
      id: 'savingFrequently',
      title: t('tipsAndTricks.tips.savingFrequently.title'),
      description: t('tipsAndTricks.tips.savingFrequently.description'),
      icon: '💾',
    },
    {
      id: 'cheatCodes',
      title: t('tipsAndTricks.tips.cheatCodes.title'),
      description: t('tipsAndTricks.tips.cheatCodes.description'),
      icon: '🎮',
    },
    {
      id: 'upgradeSkills',
      title: t('tipsAndTricks.tips.upgradeSkills.title'),
      description: t('tipsAndTricks.tips.upgradeSkills.description'),
      icon: '⬆️',
    },
    {
      id: 'exploreMap',
      title: t('tipsAndTricks.tips.exploreMap.title'),
      description: t('tipsAndTricks.tips.exploreMap.description'),
      icon: '🗺️',
    },
    {
      id: 'manageFinance',
      title: t('tipsAndTricks.tips.manageFinance.title'),
      description: t('tipsAndTricks.tips.manageFinance.description'),
      icon: '💰',
    },
    {
      id: 'vehicleCustomisation',
      title: t('tipsAndTricks.tips.vehicleCustomisation.title'),
      description: t('tipsAndTricks.tips.vehicleCustomisation.description'),
      icon: '🚗',
    },
    {
      id: 'sideActivities',
      title: t('tipsAndTricks.tips.sideActivities.title'),
      description: t('tipsAndTricks.tips.sideActivities.description'),
      icon: '🎯',
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('tipsAndTricks.title')}
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('tipsAndTricks.subtitle')}
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="group p-6 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-xl hover:border-[#00ff87] dark:hover:border-[#00ff87] transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#00ff87] transition-colors duration-300">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {tip.description}
              </p>

              {/* Accent line */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00ff87] to-transparent transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r cursor-pointer from-[#00ff87] to-[#00a2ff] text-black font-bold py-4 px-12 rounded-full hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300 text-lg">
            {t('tipsAndTricks.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
