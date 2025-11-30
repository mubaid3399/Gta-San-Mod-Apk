'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes, faGamepad, faStar } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'GTA San Andreas MOD APK vs Original Game - Complete Comparison 2025',
  description:
    'Complete comparison between GTA San Andreas MOD APK and original game. Features, gameplay, cost, graphics, safety, and which one to choose.',
  keywords:
    'GTA San Andreas MOD APK vs original, GTA San Andreas comparison, GTA San Andreas unlimited money vs original',
  alternates: {
    canonical: 'https://gtasanandreas.info/mod-apk-vs-original',
  },
};

export default function ModVsOriginal() {
  const [selectedView, setSelectedView] = useState('features');

  const featureComparison = [
    {
      feature: 'Initial Cost',
      modapk: 'FREE',
      original: '$4.99 - $6.99',
      winner: 'MOD APK',
      explanation: 'MOD APK is completely free, while original costs from App Store/Play Store',
    },
    {
      feature: 'Unlimited Money',
      modapk: 'YES - Unlimited from start',
      original: 'NO - Earn through gameplay',
      winner: 'MOD APK',
      explanation: 'MOD starts with infinite cash. Original requires grinding missions for money',
    },
    {
      feature: 'All Weapons Unlocked',
      modapk: 'YES - All available',
      original: 'NO - Unlock progressively',
      winner: 'MOD APK',
      explanation: 'Every weapon is ready to use immediately in MOD version',
    },
    {
      feature: 'All Missions Available',
      modapk: 'YES - From beginning',
      original: 'NO - Story progression',
      winner: 'MOD APK',
      explanation: 'Play missions in any order. Original requires story progression',
    },
    {
      feature: 'Vehicle Count',
      modapk: '90+ vehicles available',
      original: '~90 vehicles (unlock needed)',
      winner: 'Tie',
      explanation: 'Same vehicle count, but MOD unlocks all immediately',
    },
    {
      feature: 'Graphics Quality',
      modapk: 'Enhanced/High',
      original: 'Standard/Original',
      winner: 'MOD APK',
      explanation: 'MOD includes texture improvements and visual enhancements',
    },
    {
      feature: 'Story Campaign',
      modapk: 'Complete - 100+ missions',
      original: 'Complete - 100+ missions',
      winner: 'Tie',
      explanation: 'Both have the full original GTA San Andreas story',
    },
    {
      feature: 'Multiplayer Support',
      modapk: 'NO - Single player only',
      original: 'NO - Single player only',
      winner: 'Tie',
      explanation: 'Neither has multiplayer (original never had online)',
    },
    {
      feature: 'Cheat Codes',
      modapk: 'YES - All + exclusive cheats',
      original: 'YES - 100+ cheats available',
      winner: 'MOD APK',
      explanation: 'MOD includes all original cheats plus exclusive ones',
    },
    {
      feature: 'Data Collection',
      modapk: 'NONE - Anonymous',
      original: 'Minimal - Rockstar Games',
      winner: 'MOD APK',
      explanation: 'MOD collects nothing. Original may collect basic analytics',
    },
    {
      feature: 'Offline Play',
      modapk: 'YES - Fully offline',
      original: 'YES - Fully offline',
      winner: 'Tie',
      explanation: 'Both work completely offline without internet',
    },
    {
      feature: 'Game Size',
      modapk: '2.5-3GB',
      original: '2.5-3GB',
      winner: 'Tie',
      explanation: 'Both are similar in download size',
    },
    {
      feature: 'System Requirements',
      modapk: 'Android 6.0+ / 2GB RAM',
      original: 'Android 6.0+ / 2GB RAM',
      winner: 'Tie',
      explanation: 'Same minimum requirements on Android',
    },
    {
      feature: 'Customization',
      modapk: 'Full character customization',
      original: 'Full character customization',
      winner: 'Tie',
      explanation: 'Both allow extensive character modifications',
    },
    {
      feature: 'Regular Updates',
      modapk: 'Manual updates available',
      original: 'Automatic via Play Store',
      winner: 'Original',
      explanation: 'Original gets automatic updates. MOD requires manual download',
    },
    {
      feature: 'Official Support',
      modapk: 'Community support only',
      original: 'Rockstar Games support',
      winner: 'Original',
      explanation: 'Original has official Rockstar support',
    },
    {
      feature: 'Legal Status',
      modapk: 'Gray area - Use at own risk',
      original: 'Legal - Official product',
      winner: 'Original',
      explanation: 'MOD is technically unauthorized modification',
    },
    {
      feature: 'Performance',
      modapk: 'Optimized for most devices',
      original: 'Official optimization',
      winner: 'Comparable',
      explanation: 'Both perform similarly on compatible devices',
    },
  ];

  const prosCons = {
    modapk: {
      pros: [
        'Completely FREE - save $5-7',
        'Unlimited money - no grinding needed',
        'All weapons unlocked from start',
        'Play missions in any order',
        'Enhanced graphics and visuals',
        'Exclusive MOD-only features',
        'No account registration required',
        'Full offline gameplay',
        'Works on rooted devices',
        'Customize game difficulty',
      ],
      cons: [
        'Not officially supported by Rockstar',
        'No automatic updates',
        'May trigger antivirus warnings (false positive)',
        'Limited customer support',
        'Some devices may have compatibility issues',
        'Manual installation required',
        'Gray legal area',
        'No online features',
        'Installation can fail on low-end devices',
        'Requires Unknown Sources permission',
      ],
    },
    original: {
      pros: [
        'Official Rockstar Games product',
        'Automatic updates from Play Store',
        'Fully supported and legal',
        'Customer support available',
        'Guaranteed compatibility',
        'One-click installation',
        'No antivirus warnings',
        'Regular security updates',
        'Optimized by developers',
        'Professional support team',
      ],
      cons: [
        'Costs $4.99 - $6.99 to purchase',
        'Requires grinding for money',
        'Weapons unlock progressively',
        'Story-based mission progression',
        'Standard graphics (non-enhanced)',
        'Requires Play Store account',
        'Internet needed for download',
        'Takes longer to unlock content',
        'No exclusive features',
        'Limited customization options',
      ],
    },
  };

  const recommendations = [
    {
      userType: 'Budget Players',
      recommendation: 'MOD APK',
      reason: 'FREE and includes all features. Perfect if you want to try before buying original.',
    },
    {
      userType: 'Casual Gamers',
      recommendation: 'MOD APK',
      reason: 'Unlimited money lets you enjoy instantly without grinding missions.',
    },
    {
      userType: 'Speed Runners',
      recommendation: 'MOD APK',
      reason: 'All missions unlocked - play in any order and complete faster.',
    },
    {
      userType: 'Legal-Only Players',
      recommendation: 'Original',
      reason: 'Official product with full legal protection and support.',
    },
    {
      userType: 'Console Gamers Moving to Mobile',
      recommendation: 'Original',
      reason: 'Authentic experience matching console versions.',
    },
    {
      userType: 'Players Who Want Support',
      recommendation: 'Original',
      reason: 'Rockstar Games official support and automatic updates.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030712] via-black to-[#030712]">
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              MOD APK vs Original Game
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Complete side-by-side comparison. See which version is right for you.
            </p>
          </div>

          {/* View Selector */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {[
              { id: 'features', label: 'Features Comparison' },
              { id: 'pros-cons', label: 'Pros & Cons' },
              { id: 'recommendations', label: 'Who Should Choose What' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedView === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Features Comparison Table */}
          {selectedView === 'features' && (
            <div className="space-y-4 mb-16">
              {featureComparison.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.feature}</h3>
                      <p className="text-sm text-gray-400">{item.explanation}</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                      <p className="text-xs text-gray-400 mb-2">MOD APK</p>
                      <p className="text-white font-semibold">{item.modapk}</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-blue-500/20">
                      <p className="text-xs text-gray-400 mb-2">Original Game</p>
                      <p className="text-white font-semibold">{item.original}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${
                        item.winner === 'MOD APK'
                          ? 'bg-purple-500/30 text-purple-300'
                          : item.winner === 'Original'
                          ? 'bg-blue-500/30 text-blue-300'
                          : 'bg-gray-600/30 text-gray-300'
                      }`}
                    >
                      {item.winner} Wins
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pros & Cons */}
          {selectedView === 'pros-cons' && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* MOD APK */}
              <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-purple-400 mb-6">MOD APK</h2>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-green-400 mb-4">✓ Pros</h3>
                  <ul className="space-y-3">
                    {prosCons.modapk.pros.map((pro, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-4">✗ Cons</h3>
                  <ul className="space-y-3">
                    {prosCons.modapk.cons.map((con, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-red-400 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Original */}
              <div className="bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">Original Game</h2>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-green-400 mb-4">✓ Pros</h3>
                  <ul className="space-y-3">
                    {prosCons.original.pros.map((pro, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-4">✗ Cons</h3>
                  <ul className="space-y-3">
                    {prosCons.original.cons.map((con, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-red-400 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Recommendations */}
          {selectedView === 'recommendations' && (
            <div className="space-y-4 mb-16">
              {recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border border-[#00ff87]/20 rounded-xl p-6 hover:border-[#00ff87]/50 transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-white">{rec.userType}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faGamepad} className="w-6 h-6 text-[#00ff87]" />
                      <p className="text-lg font-bold bg-gradient-to-r from-[#00ff87] to-[#00a2ff] bg-clip-text text-transparent">
                        {rec.recommendation}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">{rec.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary Box */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Choose MOD APK If */}
            <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Choose MOD APK If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">•</span>
                  <span>You want it 100% FREE with unlimited features</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">•</span>
                  <span>You don't want to grind for money and weapons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">•</span>
                  <span>You want enhanced graphics and visual improvements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">•</span>
                  <span>You value privacy and don't want data collection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">•</span>
                  <span>You want to try before buying the original</span>
                </li>
              </ul>
            </div>

            {/* Choose Original If */}
            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Choose Original If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>You prefer official, legally approved games</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>You want automatic updates and official support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>$5 is a reasonable price for a premium game</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>You want 100% guaranteed compatibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>You enjoy the challenge of grinding and progression</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20 border border-[#00ff87]/50 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FontAwesomeIcon icon={faStar} className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Expert Recommendation</h3>
              <FontAwesomeIcon icon={faStar} className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              For most players looking for an <strong>unlimited, unrestricted GTA San Andreas experience without spending money</strong>,
              MOD APK is the superior choice. It's FREE, has all features unlocked immediately, and includes enhanced graphics. If you
              value official support and legal certainty, the original game ($5) is the safer option.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg transition-all">
                Download MOD APK
              </button>
              <button className="px-8 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-bold transition-all">
                Buy Original
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
