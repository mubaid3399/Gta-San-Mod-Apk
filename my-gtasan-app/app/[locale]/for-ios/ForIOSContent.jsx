'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCloud, faVolumeHigh, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ForIOSHeroSection from './components/ForIOSHeroSection';
import Footer from '../../components/Footer';

export default function ForIOSContent() {
  const t = useTranslations('forIOS');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Get data from translations
  const iosContent = {
    hero: {
      title: t('hero.title'),
      subtitle: t('hero.subtitle')
    },
    introduction: {
      title: t('introduction.title'),
      description: t('introduction.description'),
      points: t.raw('introduction.points')
    },
    history: {
      title: t('history.title'),
      timeline: t.raw('history.timeline')
    },
    whyConfused: {
      title: t('whyConfused.title'),
      reasons: t.raw('whyConfused.reasons')
    },
    features: {
      title: t('features.title'),
      items: t.raw('features.items')
    },
    comparison: {
      title: t('comparison.title'),
      sections: t.raw('comparison.sections')
    },
    whyPopular: {
      title: t('whyPopular.title'),
      reasons: t.raw('whyPopular.reasons')
    },
    misconceptions: {
      title: t('misconceptions.title'),
      items: t.raw('misconceptions.items')
    },
    installation: {
      title: t('installation.title'),
      steps: t.raw('installation.steps')
    },
    tips: {
      title: t('tips.title'),
      items: t.raw('tips.items')
    },
    features2025: {
      title: t('features2025.title'),
      features: t.raw('features2025.features'),
      note: t('features2025.note')
    },
    faq: {
      title: t('faq.title'),
      questions: t.raw('faq.data')
    },
    conclusion: {
      title: t('conclusion.title'),
      description: t('conclusion.description')
    }
  };

  const featureIcons = [faGamepad, faVolumeHigh, faCloud, faGamepad, faVolumeHigh];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ForIOSHeroSection />

      {/* Introduction Section */}
      <section className="container introduction-section max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.introduction.title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {iosContent.introduction.description}
          </p>
          <div className="grid gap-4 mt-8">
            {iosContent.introduction.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start p-4 rounded-lg bg-[#030712]/5 border border-white/10 hover:bg-[#030712]/10 transition-all"
              >
                <span className="text-[#00ff87] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-300">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* History Timeline */}
      <section className="container content-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.history.title}
          </h2>
          <div className="space-y-4">
            {iosContent.history.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-lg border border-[#00ff87]/30 bg-gradient-to-r from-[#00ff87]/10 to-transparent hover:border-[#00ff87]/60 transition-all"
              >
                <div className="text-4xl font-bold text-[#00ff87] min-w-20">{item.year}</div>
                <div className="flex-1">
                  <p className="text-gray-300 text-lg">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Confused */}
      <section className="container content-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.whyConfused.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {iosContent.whyConfused.reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00ff87]/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-3xl text-[#00ff87]">•</div>
                  <p className="text-gray-300">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container feature-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.features.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {iosContent.features.items.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00ff87]/50 transition-all group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl text-[#00ff87] group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={featureIcons[idx]} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="container comparison-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.comparison.title}
          </h2>
          {iosContent.comparison.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#00ff87]">{section.name}</h3>
              {section.items ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                        <th className="text-left py-4 px-4 text-[#00ff87] font-bold">iOS Version</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Other Version</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.items.map((item, i) => (
                        <tr key={i} className="border-b border-white/10 hover:bg-[#030712]/5 transition-colors">
                          <td className="py-4 px-4 text-white">{item.feature}</td>
                          <td className="py-4 px-4 text-gray-300">{item.ios}</td>
                          <td className="py-4 px-4 text-gray-300">{item.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-300 text-lg">{section.description}</p>
              )}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Why Popular Section */}
      <section className="container content-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.whyPopular.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {iosContent.whyPopular.reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-white/10 hover:border-[#00ff87]/50 transition-all flex items-center gap-4"
              >
                <span className="text-3xl">⭐</span>
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Misconceptions Section */}
      <section className="container content-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.misconceptions.title}
          </h2>
          <div className="space-y-4">
            {iosContent.misconceptions.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-white/10 bg-gradient-to-r from-red-500/10 to-transparent hover:border-red-500/50 transition-all"
              >
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-red-400">❌ Myth: {item.myth}</p>
                  <p className="text-gray-300">✓ Truth: {item.truth}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Installation Section */}
      <section className="container download-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.installation.title}
          </h2>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-[#00ff87]/30 rounded-2xl p-8">
            <ol className="space-y-4">
              {iosContent.installation.steps.map((step, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-2xl font-bold text-[#00ff87] bg-[#00ff87]/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-gray-300 pt-2">{step}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </section>

      {/* Tips Section */}
      <section className="container tips-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.tips.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {iosContent.tips.items.map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-[#00a2ff]/10 to-transparent border border-[#00a2ff]/30 hover:border-[#00a2ff]/60 transition-all"
              >
                <p className="text-gray-300 leading-relaxed flex gap-3">
                  <span className="text-[#00ff87] flex-shrink-0">💡</span>
                  <span>{tip}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2025 Features Section */}
      <section className="container feature-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.features2025.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {iosContent.features2025.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-[#00ff87]/20 to-[#00ff87]/5 border border-[#00ff87]/30 hover:border-[#00ff87]/60 transition-all text-center group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">✓</span>
                <p className="text-gray-300 mt-2 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-400 text-center italic mt-6">
            {iosContent.features2025.note}
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container faq-section max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.faq.title}
          </h2>
          <div className="space-y-4">
            {iosContent.faq.questions.map((qa, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-lg border border-white/10 overflow-hidden hover:border-[#00ff87]/50 transition-all"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all flex justify-between items-start gap-4"
                >
                  <span className="text-lg font-semibold text-white text-left">{qa.q}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-[#00ff87] flex-shrink-0 transition-transform ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-white/10 bg-[#030712]/5"
                  >
                    <p className="text-gray-300 leading-relaxed">{qa.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Conclusion Section */}
      <section className="container content-section max-w-6xl mx-auto px-4 sm:px-6 py-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 p-8 rounded-2xl bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border border-white/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {iosContent.conclusion.title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {iosContent.conclusion.description}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
