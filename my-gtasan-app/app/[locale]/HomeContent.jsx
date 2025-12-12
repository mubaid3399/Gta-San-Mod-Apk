'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SystemRequirementsTable from '../components/SystemRequirementsTable';
import SystemRequirementsFeatures from '../components/SystemRequirementsFeatures';
import GTAFeaturesDetail from '../components/GTAFeaturesDetail';
import GTAGameplayVideo from '../components/GTAGameplayVideo';
import GTATimeline from '../components/GTATimeline';
import TipsAndTricks from '../components/TipsAndTricks';
import GameplayControls from '../components/GameplayControls';
import DownloadInstallation from '../components/DownloadInstallation';
import ComparisonSection from '../components/ComparisonSection';
import ProsAndCons from '../components/ProsAndCons';
import SafetyPrecautions from '../components/SafetyPrecautions';
import FAQSection from '../components/FAQSection';
import RelatedPages from '../components/RelatedPages';
import InternalLink from '../components/InternalLink';

export default function HomeContent() {
  const t = useTranslations();

  const relatedPages = [
    {
      href: '/for-ios',
      icon: '📱',
      title: 'GTA San Andreas for iOS',
      description: 'Download and play GTA San Andreas on your iPhone and iPad with touch controls and optimized performance.'
    },
    {
      href: '/for-pc',
      icon: '💻',
      title: 'GTA San Andreas for PC',
      description: 'Experience the full PC version with enhanced graphics, mod support, and keyboard/mouse controls.'
    },
    {
      href: '/gta-cars',
      icon: '🚗',
      title: 'Complete Car Database',
      description: 'Explore all vehicles in GTA San Andreas with detailed stats, speeds, and locations.'
    },
    {
      href: '/gta-cheats',
      icon: '🎮',
      title: 'All Cheats & Codes',
      description: 'Unlock all cheats for weapons, vehicles, money, and special abilities across all platforms.'
    },
    {
      href: '/how-to-install',
      icon: '📥',
      title: 'Installation Guide',
      description: 'Step-by-step instructions to install GTA San Andreas on Android, iOS, and PC.'
    },
    {
      href: '/faq',
      icon: '❓',
      title: 'Frequently Asked Questions',
      description: 'Get answers to common questions about downloading, installing, and playing the game.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#030712]" style={{ backgroundColor: '#030712' }}>
      {/* Hero Section - After navbar, 60vh height in container with rounded corners */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="container mx-auto">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src="/heroimage2.jpg"
              alt="GTA San Andreas MOD APK 2025 - Unlimited Money and Features Unlocked - Download Now"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <p className="text-white text-lg sm:text-2xl font-semibold text-center px-4">
                Explore the Ultimate Gaming Experience
              </p>
            </div>

            {/* Animated scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/70 text-sm">Scroll to explore</span>
                <svg className="w-6 h-6 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Content Title */}
          <div className="mb-12 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t('content.title')}
            </h1>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              {t('content.paragraph1')}
            </p>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              {t('content.paragraph2')}
            </p>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              {t('content.paragraph3')}
            </p>
          </div>

        </div>
      </section>

      {/* System Requirements Section */}
      <SystemRequirementsTable />

      {/* System Requirements Features Section */}
      <SystemRequirementsFeatures />

      {/* GTA Features Detail Section */}
      <GTAFeaturesDetail />

      {/* GTA Gameplay Video Section */}
      <GTAGameplayVideo />

      {/* GTA Timeline Section */}
      <GTATimeline />

      {/* Tips and Tricks Section */}
      <TipsAndTricks />

      {/* Gameplay and Controls Section */}
      <GameplayControls />

      {/* Download and Installation Section */}
      <DownloadInstallation />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Pros and Cons Section */}
      <ProsAndCons />

      {/* Safety Precautions Section */}
      <SafetyPrecautions />

      {/* FAQ Section */}
      <FAQSection />

      {/* Related Pages Section */}
      <RelatedPages pages={relatedPages} />
    </main>
  );
}
