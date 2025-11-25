'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '../../../Assets/for-pc-hero.png';

export default function ForPCHeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={heroImage}
            alt="GTA San Andreas for PC hero background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg"
            >
              GTA San Andreas for PC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 text-center drop-shadow-lg max-w-2xl px-4"
            >
              Experience the ultimate GTA San Andreas with premium mods and enhancements for PC
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r cursor-pointer from-[#00ff87] to-[#00a2ff] text-black font-bold py-4 px-12 rounded-full hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300 text-xl"
            >
              Download for PC
            </motion.button>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-sm">Scroll to explore</span>
              <svg
                className="w-6 h-6 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
