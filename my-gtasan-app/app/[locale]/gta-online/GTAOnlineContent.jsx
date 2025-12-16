'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GTAOnlineContent({ locale }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[#030712]">
      {/* Hero Section */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="container mx-auto">
          <div className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/heroimage2.webp"
              alt="GTA Online Complete Guide 2025"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg"
              >
                GTA Online Complete Guide
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium text-center drop-shadow-md"
              >
                Everything You Need to Know in 2025
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
              The Complete Guide to GTA Online
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 mb-6">
              Grand Theft Auto Online has become one of the most popular games in the world. Millions of players enjoy this game every day. This guide will help you learn everything about GTA Online. You will find information about cars, weapons, missions, and much more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is GTA Online */}
      <section className="relative w-full bg-gray-900/20 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white">
              What is GTA Online?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  GTA Online is the multiplayer part of Grand Theft Auto 5. Rockstar Games created this fantastic game in 2013. The game takes place in Los Santos, a big city based on Los Angeles. Players can do many things in this virtual world.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff87] mt-1">✓</span>
                    <span>Complete missions and heists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff87] mt-1">✓</span>
                    <span>Race cars and motorcycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff87] mt-1">✓</span>
                    <span>Buy and run businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff87] mt-1">✓</span>
                    <span>Play with friends worldwide</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong className="text-white">Released:</strong> October 1, 2013</p>
                  <p><strong className="text-white">Developer:</strong> Rockstar North</p>
                  <p><strong className="text-white">Platform:</strong> PC, PS5, PS4, Xbox Series X/S, Xbox One</p>
                  <p><strong className="text-white">Genre:</strong> Open World, Action-Adventure</p>
                  <p><strong className="text-white">Players:</strong> Multiplayer (up to 30 players)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History & Updates */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white">
              Major Updates Through the Years
            </h2>
            <div className="space-y-6">
              {[
                { year: '2013-2015', title: 'Foundation Years', desc: 'Basic updates, new weapons, vehicles. First heists arrived in 2015.' },
                { year: '2016-2017', title: 'Business Era', desc: 'Bikers, gunrunning, and import-export businesses changed how players make money.' },
                { year: '2018-2019', title: 'Entertainment Expansion', desc: 'Nightclubs and casino opened. Arena War added new competitive modes.' },
                { year: '2020', title: 'Solo Revolution', desc: 'Cayo Perico Heist introduced solo-playable heists for the first time.' },
                { year: '2021', title: 'Street Culture', desc: 'Los Santos Tuners added car meets. The Contract featured Franklin Clinton.' },
                { year: '2022', title: 'Criminal Evolution', desc: 'Drug Wars and Criminal Enterprises improved core features.' },
                { year: '2023', title: 'Mercenary Work', desc: 'San Andreas Mercenaries brought tactical missions.' },
                { year: '2024', title: 'Diverse Operations', desc: 'Bottom Dollar Bounties, Agents of Sabotage, and Cluckin Bell Farm Raid.' },
              ].map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-[#00ff87]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded-full text-sm font-bold text-white">
                        {update.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{update.title}</h3>
                      <p className="text-gray-300">{update.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="relative w-full bg-gray-900/20 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              System Requirements for PC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Minimum Requirements */}
              <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Minimum Requirements
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-400">Operating System</p>
                    <p className="font-semibold text-white">Windows 10 64-bit</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Processor</p>
                    <p className="font-semibold text-white">Intel Core 2 Quad Q6600</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Memory</p>
                    <p className="font-semibold text-white">4 GB RAM</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Graphics Card</p>
                    <p className="font-semibold text-white">NVIDIA 9800 GT 1GB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Storage</p>
                    <p className="font-semibold text-white">72 GB available space</p>
                  </div>
                </div>
              </div>

              {/* Recommended Requirements */}
              <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#00a2ff]/10 p-6 rounded-lg border border-[#00ff87]/30">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Recommended Requirements
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-400">Operating System</p>
                    <p className="font-semibold text-white">Windows 10 64-bit</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Processor</p>
                    <p className="font-semibold text-white">Intel Core i5-3470</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Memory</p>
                    <p className="font-semibold text-white">8 GB RAM</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Graphics Card</p>
                    <p className="font-semibold text-white">NVIDIA GTX 660 2GB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Storage</p>
                    <p className="font-semibold text-white">72 GB available space</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Version */}
            <div className="mt-8 bg-gray-900/60 p-6 rounded-lg border border-[#00a2ff]/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Enhanced Version 2025
              </h3>
              <p className="text-gray-300 mb-4">
                The new enhanced version features ray tracing, faster loading, and improved graphics. Minimum specs: Windows 10 64-bit, Intel Core i7-4770, 8GB RAM, NVIDIA GTX 1630, 105GB storage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Making Money */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              How to Make Money in GTA Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Missions',
                  desc: 'Complete jobs for NPCs. Easy way to earn starting cash.',
                  earnings: '$10K - $30K per mission'
                },
                {
                  icon: '💰',
                  title: 'Heists',
                  desc: 'Big multi-part missions. Requires teamwork. High payouts.',
                  earnings: '$400K - $2M per heist'
                },
                {
                  icon: '🏢',
                  title: 'Businesses',
                  desc: 'Own nightclubs, bunkers, drug labs for passive income.',
                  earnings: '$50K - $700K per sale'
                },
                {
                  icon: '🏁',
                  title: 'Races',
                  desc: 'Win races for cash and reputation. Multiple race types.',
                  earnings: '$5K - $20K per race'
                },
                {
                  icon: '📞',
                  title: 'Contact Missions',
                  desc: 'Simple missions from characters. Great for beginners.',
                  earnings: '$15K - $25K per mission'
                },
                {
                  icon: '🎲',
                  title: 'Weekly Events',
                  desc: 'Participate in double money events. Changes weekly.',
                  earnings: '2X normal payouts'
                },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-[#00ff87]/50 hover:shadow-lg hover:shadow-[#00ff87]/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{method.desc}</p>
                  <p className="text-[#00ff87] font-semibold text-sm">{method.earnings}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties & Businesses */}
      <section className="relative w-full bg-gray-900/20 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              Properties and Businesses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-900/50 border-b border-gray-700">
                    <th className="p-4 font-semibold text-white">Property Type</th>
                    <th className="p-4 font-semibold text-white">Starting Price</th>
                    <th className="p-4 font-semibold text-white">Income Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Apartment', price: '$200,000', income: 'None (needed for heists)' },
                    { type: 'Nightclub', price: '$1,000,000', income: '$50,000 per hour' },
                    { type: 'Bunker', price: '$1,165,000', income: '$700,000 per sale' },
                    { type: 'Acid Lab', price: '$750,000', income: '$300,000 per sale' },
                    { type: 'Agency', price: '$2,010,000', income: '$1,000,000 per contract' },
                    { type: 'Salvage Yard', price: '$1,670,000', income: '$500,000 per robbery' },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                      <td className="p-4 text-white font-semibold">{item.type}</td>
                      <td className="p-4 text-gray-300">{item.price}</td>
                      <td className="p-4 text-[#00ff87]">{item.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Vehicles */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              Top Vehicles to Own
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Grotti Vigilante', type: 'Super', speed: '147 mph', price: '$3,750,000', special: 'Rocket boost' },
                { name: 'Pegassi Toreador', type: 'Sports', speed: '135 mph', price: '$4,000,000', special: 'Submarine mode' },
                { name: 'Oppressor Mk II', type: 'Motorcycle', speed: '130 mph', price: '$8,000,000', special: 'Flying + missiles' },
                { name: 'Pegassi Zentorno', type: 'Super', speed: '125 mph', price: '$725,000', special: 'Bulletproof rear' },
                { name: 'Karin Kuruma (Armoured)', type: 'Sports', speed: '108 mph', price: '$525,000', special: 'Full armour' },
              ].map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-[#00a2ff]/50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                      <p className="text-gray-400 text-sm">{vehicle.type}</p>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                      <div>
                        <p className="text-sm text-gray-400">Top Speed</p>
                        <p className="font-semibold text-[#00ff87]">{vehicle.speed}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Price</p>
                        <p className="font-semibold text-white">{vehicle.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Special</p>
                        <p className="font-semibold text-[#00a2ff]">{vehicle.special}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Weapons */}
      <section className="relative w-full bg-gray-900/20 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              Best Weapons to Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Combat MG Mk II', type: 'Machine Gun', damage: 'Very High', price: '$119,000' },
                { name: 'Heavy Sniper Mk II', type: 'Sniper', damage: 'Extreme', price: '$165,375' },
                { name: 'Special Carbine', type: 'Assault Rifle', damage: 'High', price: '$14,750' },
                { name: 'Assault Shotgun', type: 'Shotgun', damage: 'High', price: '$10,000' },
                { name: 'RPG', type: 'Heavy', damage: 'Explosive', price: '$26,250' },
                { name: 'Minigun', type: 'Heavy', damage: 'High', price: '$47,000' },
              ].map((weapon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 hover:shadow-lg hover:shadow-[#00a2ff]/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{weapon.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white font-semibold">{weapon.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Damage:</span>
                      <span className="text-[#00ff87] font-semibold">{weapon.damage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">{weapon.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips for Beginners */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              Tips for New Players
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#00ff87]/10 to-transparent p-6 rounded-lg border border-[#00ff87]/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>✅</span> Do These Things
                </h3>
                <ul className="space-y-3">
                  {[
                    'Complete the tutorial to learn basics',
                    'Save money for essential purchases',
                    'Buy a cheap apartment for heists',
                    'Do contact missions to earn starting cash',
                    'Join a crew to play with others',
                    'Use cover during combat',
                    'Upgrade weapons for better performance',
                    'Buy the Kuruma for mission protection',
                    'Watch for weekly sales and bonuses',
                    'Be patient - wealth builds over time'
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#00ff87] mt-1 flex-shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-transparent p-6 rounded-lg border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>❌</span> Avoid These Mistakes
                </h3>
                <ul className="space-y-3">
                  {[
                    'Spending all money on one expensive car',
                    'Starting fights with high-level players',
                    'Ignoring your business products',
                    'Not using snacks and armour',
                    'Forgetting to save progress',
                    'Buying properties without research',
                    'Wasting money on cosmetics early',
                    'Playing solo when team needed',
                    'Missing limited-time events',
                    'Using vehicles without insurance'
                  ].map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full bg-gray-900/20 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is GTA Online still popular in 2025?',
                  a: 'Yes, millions of players still enjoy the game daily. Regular updates keep it fresh and the community remains very active worldwide.'
                },
                {
                  q: 'Can I play GTA Online alone?',
                  a: 'Yes, many missions work solo. The Cayo Perico Heist is perfect for one player. You can also run businesses alone and complete most activities.'
                },
                {
                  q: 'How much does GTA Online cost?',
                  a: 'You need to buy Grand Theft Auto 5 first. The online mode is included free. Prices vary by platform and sales, typically $20-$40.'
                },
                {
                  q: 'What is the fastest way to make money?',
                  a: 'The Cayo Perico Heist pays well ($1-2M per run). Drug businesses provide passive income. Participate in weekly bonus events for double money.'
                },
                {
                  q: 'Are there cheats for GTA Online?',
                  a: 'No, using cheats gets you permanently banned. Rockstar Games has strict anti-cheat measures. Play fair to keep your account safe.'
                },
                {
                  q: 'Can I transfer my character between platforms?',
                  a: 'One-time character transfers from old-gen to new-gen consoles are supported. PC transfers are separate. Check Rockstar Social Club for details.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/40 p-6 rounded-lg border border-gray-800"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <span className="text-[#00ff87] flex-shrink-0">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-300 pl-6">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Start Your GTA Online Journey Today
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Grand Theft Auto Online offers endless entertainment with something for everyone. Whether you enjoy racing, shooting, or business management, you'll find exciting activities. The game continues growing after over 10 years with regular free updates keeping things fresh.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Start your criminal career today and build your empire in Los Santos. Join millions of players in this virtual world. The streets of Grand Theft Auto are waiting for you!
            </p>
            <div className="bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20 p-6 rounded-lg border border-[#00ff87]/30">
              <p className="text-gray-300 text-sm">
                Remember to play responsibly, help new players, and report bad behaviour to keep the community friendly. Most importantly, have fun playing GTA Online with friends!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
