'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection({
  backgroundImage,
  buttonText,
  onButtonClick,
  scrollIndicatorText = 'Scroll to explore',
  showScrollIndicator = true,
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-8 px-4 sm:px-6 lg:px-8 mt-24"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[60vh] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content - Download Button */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onButtonClick}
              className="bg-gradient-to-r cursor-pointer from-[#00ff87] to-[#00a2ff] text-black font-bold py-4 px-12 rounded-full hover:shadow-lg hover:shadow-[#00ff87]/50 transition-all duration-300 text-xl"
            >
              {buttonText}
            </motion.button>
          </div>

          {/* Animated scroll indicator */}
          {showScrollIndicator && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/70 text-sm">{scrollIndicatorText}</span>
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
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
