'use client';

import { motion } from 'framer-motion';
import InternalLink from './InternalLink';
import Image from 'next/image';

export default function GTAOnlineFeature() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900/40 to-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
            Explore GTA Online Multiplayer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Join millions of players worldwide in Grand Theft Auto Online. Experience heists, businesses, races, and endless adventures in Los Santos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff87]/20 to-[#00a2ff]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-[#00ff87]/50 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    GTA Online: The Ultimate Multiplayer Experience
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                    Since 2013, GTA Online has evolved into one of the most popular online games. Build your criminal empire, complete epic heists, run businesses, and dominate Los Santos with friends.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🎮', text: 'Multiplayer Missions' },
                    { icon: '💰', text: 'Epic Heists' },
                    { icon: '🏢', text: 'Own Businesses' },
                    { icon: '🏎️', text: '700+ Vehicles' },
                    { icon: '🔫', text: 'Arsenal of Weapons' },
                    { icon: '🌍', text: 'Open World PvP' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 bg-gray-900/40 p-3 rounded-lg border border-gray-800"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-sm text-gray-300 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <InternalLink
                    href="/gta-online"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300 group"
                  >
                    <span>Explore GTA Online Guide</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </InternalLink>
                </motion.div>
              </div>

              {/* Right Side - Stats & Highlights */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-gradient-to-br from-[#00ff87]/10 to-[#00a2ff]/10 p-6 rounded-xl border border-[#00ff87]/30">
                  <h4 className="text-xl font-bold text-white mb-4">Latest Updates 2025</h4>
                  <ul className="space-y-3">
                    {[
                      { title: 'Cluckin Bell Farm Raid', desc: 'New heist with massive payouts' },
                      { title: 'Agents of Sabotage', desc: 'Tactical spy missions' },
                      { title: 'Bottom Dollar Bounties', desc: 'Bounty hunting contracts' },
                    ].map((update, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00ff87] mt-1 flex-shrink-0">▸</span>
                        <div>
                          <p className="text-white font-semibold text-sm">{update.title}</p>
                          <p className="text-gray-400 text-xs">{update.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { number: '10+', label: 'Years Active' },
                    { number: '50+', label: 'Major Updates' },
                    { number: '1000+', label: 'Missions' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-900/60 p-4 rounded-lg text-center border border-gray-800">
                      <p className="text-2xl font-bold text-[#00ff87] mb-1">{stat.number}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                  <p className="text-sm text-gray-300 text-center">
                    <span className="text-[#00ff87] font-semibold">Free updates</span> with new content every month. No paid DLC required!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
