'use client';

import { motion } from 'framer-motion';
import { ScrollRevealWrapper } from '../animations';

const bgColorMap = {
 white: 'bg-[#030712]',
 light: 'bg-gray-900/30',
 dark: 'bg-gray-800 bg-black',
};

export default function ContentSection({
 title,
 subtitle,
 description,
 bgColor = 'white',
 children,
 id,
}) {
 return (
 <ScrollRevealWrapper animation="fade-in-up" duration={800}>
 <section
 id={id}
 className={`relative w-full ${bgColorMap[bgColor]} text-white py-20 px-4 sm:px-6 lg:px-8`}
 >
 <div className="container mx-auto max-w-4xl">
 {/* Section Header */}
 {(title || subtitle || description) && (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 viewport={{ once: true }}
 className="mb-12 text-center"
 >
 {title && (
 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
 {title}
 </h2>
 )}

 {subtitle && (
 <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-300">
 {subtitle}
 </h3>
 )}

 {/* Decorative Line */}
 {(title || subtitle) && (
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 )}

 {description && (
 <p className="text-base sm:text-lg text-gray-300">
 {description}
 </p>
 )}
 </motion.div>
 )}

 {/* Content */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 viewport={{ once: true }}
 >
 {children}
 </motion.div>
 </div>
 </section>
 </ScrollRevealWrapper>
 );
}
