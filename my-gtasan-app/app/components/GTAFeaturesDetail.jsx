'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function GTAFeaturesDetail() {
  const t = useTranslations();

  const mainFeatures = [
    { id: 'unlimitedMoney', title: 'Unlimited Money' },
    { id: 'cleoMod', title: 'Cleo Mod' },
    { id: 'hdGraphics', title: 'HD Graphics & Graphics Mod' },
    { id: 'unlockedEverything', title: 'Unlocked Everything & Unlocked Version' },
    { id: 'unlimitedHealth', title: 'Unlimited Health & Unlimited Weapons' },
    { id: 'modMenu', title: 'Mod Menu & Cheat Menu' },
    { id: 'realCars', title: 'Real Cars Pack & Spawn Vehicles' },
    { id: 'zombieMod', title: 'Zombie Mod & Expanded Maps' },
    { id: 'cloudSave', title: 'Cloud Save & Save Anywhere' },
    { id: 'controllerSupport', title: 'Controller Support & Improved Controls' },
    { id: 'lowEndOptimization', title: 'Low-End Optimization & Performance Optimization' },
    { id: 'installationGuide', title: 'Installation Guide & APK + OBB' },
    { id: 'allClothes', title: 'All Clothes Available & Costume Unlock' },
    { id: 'hqAudio', title: 'HQ Audio & Enhanced Audio' },
    { id: 'allMissions', title: 'All Missions Open & Mission Unlocker' },
    { id: 'characterUpgrade', title: 'Character Upgrade & Skill Boost' },
    { id: 'visualTexture', title: 'Visual Texture Pack & Realistic Graphics' },
    { id: 'multiplayer', title: 'Multiplayer Mode & Story Expansion' },
    { id: 'unlimitedLives', title: 'Unlimited Lives & Real Environment' },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('gtaFeatures.title')}
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainFeatures.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:bg-gray-100/60 dark:hover:bg-gray-800/40 hover:backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] flex items-center justify-center">
                  <svg className="w-4 h-4 text-black font-bold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('gtaFeatures.storylineTitle')}
            </h3>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {/* CJ's Journey - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('gtaFeatures.storyline.cjJourney.title')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('gtaFeatures.storyline.cjJourney.description')}
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800">
                <Image src="/cj-journey.jpg" alt="CJ's Journey" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

            {/* Gang Conflicts - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800 order-2 lg:order-1">
                <Image src="/gang-conflicts.jpg" alt="Gang Conflicts" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('gtaFeatures.storyline.gangConflicts.title')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('gtaFeatures.storyline.gangConflicts.description')}
                </p>
              </div>
            </div>

            {/* Character Development - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('gtaFeatures.storyline.characterDev.title')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('gtaFeatures.storyline.characterDev.description')}
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800">
                <Image src="/character-dev.jpg" alt="Character Development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

            {/* 2025 Updates - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800 order-2 lg:order-1">
                <Image src="/new-updates.jpg" alt="2025 Updates" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('gtaFeatures.storyline.updates2025.title')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('gtaFeatures.storyline.updates2025.description')}
                </p>
              </div>
            </div>

            {/* Relatable Gameplay - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('gtaFeatures.storyline.gameplay.title')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('gtaFeatures.storyline.gameplay.description')}
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800">
                <Image src="/gameplay.jpg" alt="Relatable Gameplay" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>

          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('gtaFeatures.videoTitle')}
            </h3>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
          </div>

          <div className="w-full">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg dark:shadow-2xl"
                src="https://www.youtube.com/embed/k35GQwNFs50"
                title="The Full Story of Grand Theft Auto San Andreas - Before You Play GTA Trilogy Remaster"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 w-full">
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
              {t('gtaFeatures.videoDescription')}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r cursor-pointer from-[#00ff87] to-[#00a2ff] text-black font-bold py-4 px-12 rounded-full hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300 text-lg">
            {t('gtaFeatures.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
