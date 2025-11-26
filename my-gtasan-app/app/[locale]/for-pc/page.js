'use client';

import { useTranslations } from 'next-intl';
import Footer from '../../components/Footer';
import FAQSection from '../../components/FAQSection';
import ContentSection from '../../components/sections/ContentSection';
import FeatureCard from '../../components/ui/FeatureCard';
import ForPCHeroSection from './components/ForPCHeroSection';
import { motion } from 'framer-motion';

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

export default function ForPCPage() {
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
          <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300">
            {t('whyLoveIt.content.0')}
          </p>
          <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300">
            {t('whyLoveIt.content.1')}
          </p>
          <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300">
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
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300">
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
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
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
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
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
      <ContentSection
        title={tFaq('title')}
        bgColor="light"
      >
        <FAQSection faqs={forPCFAQsTranslated} />
      </ContentSection>

      {/* Footer */}
      <Footer />
    </main>
  );
}
