'use client';

import { useTranslations } from 'next-intl';
import FAQSection from '../../components/FAQSection';
import ContentSection from '../../components/sections/ContentSection';
import FeatureCard from '../../components/ui/FeatureCard';
import ForPCHeroSection from './components/ForPCHeroSection';
import { motion } from 'framer-motion';
import RelatedPages from '../../components/RelatedPages';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ForPCContent() {
  const t = useTranslations('forPC');
  const tGameplayFeatures = useTranslations('gameplayFeatures');
  const tGameplay = useTranslations('gtaGameplay');
  const tMissions = useTranslations('missions');
  const tFaq = useTranslations('faq');

  // Get gameplayFeatures from translations
  const gameplayFeaturesTranslated = tGameplayFeatures.raw('data');

  // Convert forPC FAQs from translations into the expected format
  const faqRaw = t.raw('faqs');
  let forPCFAQsTranslated = [];
  if (Array.isArray(faqRaw)) {
    forPCFAQsTranslated = faqRaw.map((faq, index) => ({
      id: (index + 1).toString(),
      question: faq.question,
      answer: faq.answer,
    }));
  } else if (faqRaw?.questions) {
    forPCFAQsTranslated = Object.values(faqRaw.questions).map((faq, index) => ({
      id: (index + 1).toString(),
      question: faq.question,
      answer: faq.answer,
    }));
  }

  // Get mission data from translations
  const secretMissionsTranslated = tMissions.raw('secret');
  const mainMissionsTranslated = tMissions.raw('main');

  const relatedPages = [
    {
      href: '/how-to-install',
      icon: '📥',
      title: 'PC Installation Guide',
      description: 'Detailed instructions for installing GTA San Andreas on Windows PC with system requirements.'
    },
    {
      href: '/gta-cheats',
      icon: '⌨️',
      title: 'PC Cheats & Codes',
      description: 'All keyboard cheats and console commands for GTA San Andreas PC version.'
    },
    {
      href: '/for-ios',
      icon: '📱',
      title: 'Compare with iOS Version',
      description: 'See the differences between PC and mobile versions of the game.'
    },
    {
      href: '/gta-cars',
      icon: '🚗',
      title: 'Vehicle Database',
      description: 'Complete list of all cars, bikes, and vehicles with performance stats.'
    },
    {
      href: '/mod-apk-vs-original',
      icon: '⚖️',
      title: 'MOD vs Original',
      description: 'Compare the differences between modded and original versions.'
    },
    {
      href: '/faq',
      icon: '❓',
      title: 'FAQ',
      description: 'Frequently asked questions about GTA San Andreas PC version.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ForPCHeroSection />

      {/* Main Content Section */}
      <ContentSection
        title={t('hero.title')}
        subtitle={t('storySection.title')}
        description={t('storySection.introduction')}
        bgColor="white"
      >
        <div className="space-y-6">
          <p className="text-base sm:text-lg leading-8 text-gray-300">
            {t('whyLoveIt.content.0')}
          </p>
          <p className="text-base sm:text-lg leading-8 text-gray-300">
            {t('whyLoveIt.content.1')}
          </p>
          <p className="text-base sm:text-lg leading-8 text-gray-300">
            {t('whyLoveIt.content.2')}
          </p>
        </div>
      </ContentSection>

      {/* Gameplay and Features Section */}
      <ContentSection
        title={tGameplay('title')}
        bgColor="light"
      >
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.isArray(gameplayFeaturesTranslated) && gameplayFeaturesTranslated.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg leading-8 text-gray-300">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </ContentSection>

      {/* Secret and Main Missions Section */}
      <ContentSection
        title={t('overview.title')}
        description={t('overview.description')}
        bgColor="white"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Secret Missions Column */}
          <motion.div variants={staggerItem}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🕵️</span>
              {tMissions('secretMissionsTitle')}
            </h3>
            <div className="space-y-4">
              {secretMissionsTranslated.map((mission) => (
                <FeatureCard
                  key={mission.title}
                  title={mission.title}
                  description={mission.description}
                  variant="blue"
                />
              ))}
            </div>
          </motion.div>

          {/* Main Missions Column */}
          <motion.div variants={staggerItem}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              {tMissions('mainMissionsTitle')}
            </h3>
            <div className="space-y-4">
              {mainMissionsTranslated.map((mission) => (
                <FeatureCard
                  key={mission.title}
                  title={mission.title}
                  description={mission.description}
                  variant="amber"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </ContentSection>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-gray-900/50 to-[#030712]">
        <FAQSection faqs={forPCFAQsTranslated} />
      </div>

      {/* Related Pages Section */}
      <RelatedPages pages={relatedPages} />
    </main>
  );
}
