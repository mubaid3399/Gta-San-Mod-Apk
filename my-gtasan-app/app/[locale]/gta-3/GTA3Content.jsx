'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faDownload,
  faMapMarkedAlt,
  faCar,
  faGun,
  faChevronDown,
  faCheckCircle,
  faStar,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import RelatedPages from '../../components/RelatedPages';

export default function GTA3Content() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeCheatTab, setActiveCheatTab] = useState('pc');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Cheats data
  const cheats = {
    pc: [
      { code: 'GUNSGUNSGUNS', description: 'All weapons' },
      { code: 'IFIWEREARICHMAN', description: 'More money ($250,000)' },
      { code: 'MOREPOLICEPLEASE', description: 'Increase wanted level' },
      { code: 'NOPOLICEPLEASE', description: 'Decrease wanted level' },
      { code: 'GESUNDHEIT', description: 'Full health' },
      { code: 'TORTOISEPOISE', description: 'Full armour' },
      { code: 'BANGBANGBANG', description: 'Destroy all cars' },
      { code: 'MADWEATHER', description: 'Change weather' },
      { code: 'ANICESETOFWHEELS', description: 'Invisible cars' },
      { code: 'CHITTYCHITTYBB', description: 'Cars drive on water' },
      { code: 'CORNERSLIKEMAD', description: 'Improved car handling' },
      { code: 'NASTYLIMBSCHEAT', description: 'Pedestrians attack each other' }
    ],
    playstation: [
      { code: 'R2, R2, L1, R2, Left, Down, Right, Up, Left, Down, Right, Up', description: 'All Weapons' },
      { code: 'R2, R2, L1, R1, Left, Down, Right, Up, Left, Down, Right, Up', description: 'Full Health' },
      { code: 'R2, R2, L1, L2, Left, Down, Right, Up, Left, Down, Right, Up', description: 'Full Armour' },
      { code: 'R2, R2, L1, R2, Left, Right, Left, Right, Left, Right', description: 'Raise Wanted Level' },
      { code: 'R2, R2, L1, R2, Up, Down, Up, Down, Up, Down', description: 'Lower Wanted Level' },
      { code: 'R1, L1, R2, L1, Left, R1, R1, Triangle', description: 'Better Driving' },
      { code: 'Circle, Circle, Circle, Square, Square, Square, Square, Square, L1, Triangle, Circle, Triangle', description: 'Faster Time' },
      { code: 'L1, L2, R1, R2, R2, R1, L2, Triangle', description: 'Change Weather' }
    ],
    mobile: [
      { code: 'Multi-finger tap', description: 'Access cheat menu on Android/iOS' },
      { code: 'Pause menu', description: 'Cheats available through pause screen' },
      { code: 'Modified APK', description: 'Download cheat menu enabled versions' }
    ]
  };

  // FAQ data
  const faqs = [
    {
      question: 'Can I play GTA 3 on PS5?',
      answer: 'Yes. The GTA 3 Definitive Edition runs on PS5 with improved graphics and 60 FPS performance. You can also play the PS4 version through backward compatibility.'
    },
    {
      question: 'Is GTA 3 free in 2025?',
      answer: 'No. GTA 3 costs money on all platforms. Prices range from $4.99 on mobile to $9.99 on PC for the original. The Definitive Edition costs around $19.99 when sold separately.'
    },
    {
      question: 'Does GTA 3 have multiplayer in 2025?',
      answer: 'No official multiplayer exists. Community mods for PC enable online play through third-party servers. Console and mobile versions remain single-player only.'
    },
    {
      question: 'What is the best platform for GTA 3 in 2025?',
      answer: 'PC offers the best experience with mod support, better graphics options, and mouse/keyboard controls. PS5 and Xbox Series X provide excellent console experiences with smooth performance.'
    },
    {
      question: 'Can I use cheats on mobile GTA 3?',
      answer: 'Yes. Android and iOS versions support cheats through touch gestures or modified APK files. Some cheats differ slightly from console versions.'
    },
    {
      question: 'Does GTA 3 support ray tracing?',
      answer: 'No. Even the Definitive Edition does not include ray tracing. Graphics improvements focus on textures, models, and lighting, but not cutting-edge technology.'
    },
    {
      question: 'How big is the GTA 3 download in 2025?',
      answer: 'File sizes vary by platform. PC needs about 2 GB. Mobile versions require 1.4-1.5 GB. Definitive Edition on consoles takes approximately 6 GB.'
    },
    {
      question: 'Is GTA 3 Definitive Edition fixed now?',
      answer: 'Most major bugs from the 2021 launch are patched. Rockstar released multiple updates improving stability and graphics. Some minor issues remain, but the game is much better than at release.'
    }
  ];

  const relatedPages = [
    {
      href: '/gta-vice-city',
      icon: '🏖️',
      title: 'GTA Vice City',
      description: 'Explore the complete guide to GTA Vice City with missions, cheats, and more.'
    },
    {
      href: '/gta-cheats',
      icon: '🎮',
      title: 'All GTA Cheats',
      description: 'Complete collection of cheats for all GTA games in one place.'
    },
    {
      href: '/for-pc',
      icon: '💻',
      title: 'GTA for PC',
      description: 'Download and play GTA games on PC with mods and enhancements.'
    },
    {
      href: '/gta-cars',
      icon: '🚗',
      title: 'GTA Cars Database',
      description: 'Browse all vehicles from the GTA series with stats and locations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
            >
              Grand Theft Auto III: The Game That Changed Everything
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Complete guide to GTA 3 - Download, cheats, missions, and everything you need to master Liberty City in 2025
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <span className="text-white font-semibold">14.5M+ Copies Sold</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <FontAwesomeIcon icon={faGamepad} className="text-green-400" />
                <span className="text-white font-semibold">2001 Classic</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <FontAwesomeIcon icon={faGlobe} className="text-blue-400" />
                <span className="text-white font-semibold">All Platforms</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Gta 3 images/banner iamge.webp"
                alt="GTA 3 Banner - Liberty City"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              The Birth of a Gaming Legend
            </motion.h2>

            <motion.div variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I still remember the day I first played Grand Theft Auto 3 on my friend's PS2. The box art showed a dark city skyline. When the game started, I felt something different. This was not just another video game. This was freedom.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                GTA III came out on October 22, 2001, for PlayStation 2. Rockstar Games took a considerable risk. They moved the series from a 2D top-down view to a full 3D view. Players could now walk through Liberty City and see it from any angle. You could drive cars, steal vehicles, and complete missions however you wanted.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The game sold over 14.5 million copies worldwide. It won countless awards. More importantly, it changed the entire gaming industry. Every open-world game that came after borrowed ideas from GTA 3.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                    Why GTA 3 Mattered
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>First true 3D open-world experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Freedom to explore Liberty City your way</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Living, breathing city with realistic atmosphere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Dark, mature storytelling</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/Gta 3 images/gta 3 image main.webp"
                    alt="GTA 3 Gameplay"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gameplay Guide Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              GTA 3 Gameplay Guide for Beginners
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faGamepad} className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Basic Controls</h3>
                <p className="text-gray-300 leading-relaxed">
                  Master WASD movement on PC, analog sticks on console, or touch controls on mobile. Learn shooting, driving, and navigation basics.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="text-3xl text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Understanding Liberty City</h3>
                <p className="text-gray-300 leading-relaxed">
                  Explore three main islands: Portland (industrial), Staunton Island (business), and Shoreside Vale (wealthy district).
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-pink-900/20 to-red-900/20 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faStar} className="text-3xl text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Starting Your Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  Begin with Claude's escape and meet 8-Ball. Early missions teach driving, shooting, and survival in Liberty City.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-16 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/Gta 3 images/body image gta 3.webp"
                  alt="GTA 3 Liberty City Gameplay"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Mode Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              GTA 3 Story Mode Explained
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-8">
              The story of Grand Theft Auto III follows Claude Speed (though the game never says his full name). He is a bank robber double-crossed during a heist. His girlfriend, Catalina, shoots him and leaves him for dead.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-xl border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Main Story Arc</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Claude escapes custody and starts working for various crime bosses in Liberty City. Each boss gives missions that build the story.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Major Characters</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Luigi Goterelli</strong> - Runs a club, gives early missions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Joey Leone</strong> - Mechanic and mafia son</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Salvatore Leone</strong> - Head of Leone family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Asuka Kasen</strong> - Yakuza gang leader</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Donald Love</strong> - Mysterious businessman</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/Gta 3 images/All Charcters image.webp"
                    alt="GTA 3 Characters"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-xl border border-red-500/30">
              <h4 className="text-xl font-bold text-white mb-3">The Ending</h4>
              <p className="text-gray-300 leading-relaxed">
                Without spoiling too much, the story comes full circle. Claude faces Catalina in a showdown. The ending feels satisfying after all the betrayals and violence. What made the story special was its tone - GTA 3 did not try to be heroic. Claude was a criminal, and the game never pretended otherwise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cheats Section */}
      <section className="py-20 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              GTA 3 All Cheat Codes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-12 text-lg">
              Updated for 2025 - All working cheats for PC, PlayStation, and Mobile
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
              <div className="relative mb-12 rounded-xl overflow-hidden">
                <Image
                  src="/Gta 3 images/cheats code image.webp"
                  alt="GTA 3 Cheats"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Cheat Tabs */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button
                  onClick={() => setActiveCheatTab('pc')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeCheatTab === 'pc'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  PC Cheats
                </button>
                <button
                  onClick={() => setActiveCheatTab('playstation')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeCheatTab === 'playstation'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  PlayStation Cheats
                </button>
                <button
                  onClick={() => setActiveCheatTab('mobile')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeCheatTab === 'mobile'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Mobile Cheats
                </button>
              </div>

              {/* Cheats List */}
              <div className="grid md:grid-cols-2 gap-4">
                {cheats[activeCheatTab].map((cheat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-white/10"
                  >
                    <div className="font-mono text-blue-400 text-sm mb-2 break-all">
                      {cheat.code}
                    </div>
                    <div className="text-gray-300">
                      {cheat.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                <p className="text-yellow-200">
                  <strong>Important note:</strong> Using cheats turns off achievements. Save your game before using them.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              How to Download GTA 3 in 2025
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-white/10">
                <FontAwesomeIcon icon={faDownload} className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">PC Download</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">1.</span>
                    <span>Open Steam or Rockstar Games Launcher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">2.</span>
                    <span>Search for "Grand Theft Auto III"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">3.</span>
                    <span>Purchase the game (around $9.99)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">4.</span>
                    <span>Download and install automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">5.</span>
                    <span>Launch and play!</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-black/30 rounded-lg">
                  <p className="text-sm text-gray-400"><strong>Requirements:</strong></p>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• Windows 7 or higher</li>
                    <li>• Intel Core i5 processor</li>
                    <li>• 4 GB RAM</li>
                    <li>• 2 GB storage</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📱</span> Android Download
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Available on Google Play Store for $4.99. Requires Android 7.0+, 2GB RAM, and 1.5GB storage.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Touch controls or controller support</li>
                    <li>• Cloud save functionality</li>
                    <li>• Optimized for mobile devices</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🍎</span> iOS Download
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Available on App Store for $4.99. Works on iPhone 5+ and iPad 3+, requires iOS 8.0 or later.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Optimized touch controls</li>
                    <li>• iCloud save support</li>
                    <li>• Retina display support</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎮</span> Console (PS4/PS5/Xbox)
                  </h4>
                  <p className="text-gray-300">
                    GTA 3 Definitive Edition available on PlayStation Store and Xbox Store. Features 60 FPS on PS5/Xbox Series X and updated graphics.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weapons & Vehicles Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Weapons & Vehicles Guide
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Weapons */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-xl border border-white/10">
                <FontAwesomeIcon icon={faGun} className="text-4xl text-red-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Best Weapons</h3>

                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Sniper Rifle</h4>
                    <p className="text-gray-300 text-sm">Perfect for long-range kills and assassination missions.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Rocket Launcher</h4>
                    <p className="text-gray-300 text-sm">Destroys vehicles instantly, essential for explosive missions.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">M16 Assault Rifle</h4>
                    <p className="text-gray-300 text-sm">High accuracy and damage, best all-around weapon.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">SPAZ Shotgun</h4>
                    <p className="text-gray-300 text-sm">Automatic shotgun, devastating at close range.</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    <strong>Tip:</strong> Visit Ammu-Nation stores to buy weapons and ammunition. Keep your arsenal stocked for challenging missions.
                  </p>
                </div>
              </motion.div>

              {/* Vehicles */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-xl border border-white/10">
                <FontAwesomeIcon icon={faCar} className="text-4xl text-blue-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Best Vehicles</h3>

                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Cheetah</h4>
                    <p className="text-gray-300 text-sm">Fastest sports car in the game, perfect for races and escapes.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Infernus</h4>
                    <p className="text-gray-300 text-sm">Top speed supercar with excellent handling.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Patriot (Bulletproof)</h4>
                    <p className="text-gray-300 text-sm">Military SUV, very durable, best for combat missions.</p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">PCJ-600</h4>
                    <p className="text-gray-300 text-sm">Fast motorcycle, great for weaving through traffic.</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-200 text-sm">
                    <strong>Pro Tip:</strong> The Bulletproof Patriot from specific missions is one of the best vehicles. It resists damage and has good speed.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div variants={fadeInUp} className="mt-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-green-400" />
                Liberty City Map Guide
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Portland</h4>
                  <p className="text-gray-300 mb-3">The starting island with industrial areas and rough neighborhoods.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Red Light District - Your first hideout</li>
                    <li>• Saint Mark's - Salvatore's mansion</li>
                    <li>• Chinatown - Joey's garage</li>
                    <li>• Industrial Area - Warehouses and import/export</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Staunton Island</h4>
                  <p className="text-gray-300 mb-3">The business district in the middle of Liberty City.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Bedford Point - Second hideout</li>
                    <li>• Fort Staunton - Construction site</li>
                    <li>• Belleville Park - Large park area</li>
                    <li>• Aspatria - Stadium and hospital</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-3">Shoreside Vale</h4>
                  <p className="text-gray-300 mb-3">Wealthy area with mansions and the airport.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Pike Creek - Third hideout</li>
                    <li>• Cedar Grove - Cartel mansion</li>
                    <li>• Francis International Airport - Many vehicles</li>
                    <li>• Cochrane Dam - Scenic location</li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/Gta 3 images/map image.webp"
                    alt="GTA 3 Liberty City Map"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hidden Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Hidden Packages & Rewards
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-300 text-lg text-center mb-12">
              Liberty City hides 100 packages. Finding them all rewards you with weapons at your safehouses!
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { packages: '10', reward: 'Pistol at hideout' },
                { packages: '20', reward: 'Uzi at hideout' },
                { packages: '30', reward: 'Grenades at hideout' },
                { packages: '40', reward: 'Shotgun at hideout' },
                { packages: '50', reward: 'Body Armour at hideout' },
                { packages: '60', reward: 'Molotov Cocktails at hideout' },
                { packages: '70', reward: 'AK-47 at hideout' },
                { packages: '80', reward: 'Sniper Rifle at hideout' },
                { packages: '90', reward: 'M16 at hideout' },
                { packages: '100', reward: 'Rocket Launcher + $1,000,000!' }
              ].map((item, index) => (
                <div key={index} className={`p-6 rounded-xl border ${
                  item.packages === '100'
                    ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/50'
                    : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${
                      item.packages === '100' ? 'text-yellow-400' : 'text-blue-400'
                    }`}>
                      {item.packages} Packages
                    </span>
                    <span className="text-gray-300">{item.reward}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Package Locations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Portland - 33 packages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Construction sites</li>
                    <li>• Behind buildings</li>
                    <li>• Under bridges</li>
                    <li>• Docks area</li>
                    <li>• Chinatown alleys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Staunton Island - 36</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Park areas</li>
                    <li>• Building rooftops</li>
                    <li>• Near the stadium</li>
                    <li>• Casino area</li>
                    <li>• Parking garages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Shoreside Vale - 31</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Airport terminals</li>
                    <li>• Dam area</li>
                    <li>• Lighthouse</li>
                    <li>• Mansion grounds</li>
                    <li>• Near bridges</li>
                  </ul>
                </div>
              </div>
              <p className="text-yellow-200 mt-6 text-sm">
                <strong>Tip:</strong> Each package is a small spinning pickup with green light. Listen for a distinct sound when nearby. Use online maps for exact locations!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-center mb-12 text-lg">
              What's new in GTA 3 for 2025?
            </motion.p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFAQ === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8">
              Final Thoughts
            </motion.h2>

            <motion.div variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Grand Theft Auto III changed gaming forever. Walking through Liberty City in 2001 felt magical. That feeling still exists today, even if the graphics look dated.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I spent hundreds of hours in this game - from completing the story to finding every hidden package to just driving around causing chaos. The freedom it offered was unprecedented.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you play the original on PS2, the PC version with mods, or the Definitive Edition on modern consoles, GTA 3 remains worth experiencing. It's a piece of gaming history that still delivers fun gameplay.
              </p>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-white/10">
                <p className="text-white text-xl font-semibold mb-4">
                  Liberty City awaits. Time to steal some cars.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                    <span>Complete Story Mode</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                    <span>Find 100 Hidden Packages</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                    <span>Master All Missions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <RelatedPages pages={relatedPages} />
        </div>
      </section>
    </div>
  );
}
