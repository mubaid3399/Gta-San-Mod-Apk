'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import InternalLink from './InternalLink';

export default function GTATimeline() {
 const t = useTranslations();

 const timelineEvents = [
 {
 id: 'gta1',
 year: '1997',
 title: t('gtaTimeline.events.gta1.title'),
 description: t('gtaTimeline.events.gta1.description'),
 link: null, // No dedicated page yet
 },
 {
 id: 'gtalc',
 year: '1999',
 title: t('gtaTimeline.events.gtaLondon.title'),
 description: t('gtaTimeline.events.gtaLondon.description'),
 link: null, // No dedicated page yet
 },
 {
 id: 'gta3',
 year: '2001',
 title: t('gtaTimeline.events.gta3.title'),
 description: t('gtaTimeline.events.gta3.description'),
 link: '/gta-3',
 },
 {
 id: 'gtavc',
 year: '2002',
 title: t('gtaTimeline.events.gtaViceCity.title'),
 description: t('gtaTimeline.events.gtaViceCity.description'),
 link: '/gta-vice-city',
 },
 {
 id: 'gtasa',
 year: '2004',
 title: t('gtaTimeline.events.gtaSanAndreas.title'),
 description: t('gtaTimeline.events.gtaSanAndreas.description'),
 link: '/', // Home page is about San Andreas
 },
 {
 id: 'gta4',
 year: '2008',
 title: t('gtaTimeline.events.gta4.title'),
 description: t('gtaTimeline.events.gta4.description'),
 link: null, // No dedicated page yet
 },
 {
 id: 'gta5',
 year: '2013',
 title: t('gtaTimeline.events.gta5.title'),
 description: t('gtaTimeline.events.gta5.description'),
 link: null, // No dedicated page yet
 },
 {
 id: 'gtasa2025',
 year: '2025',
 title: t('gtaTimeline.events.gtaSA2025.title'),
 description: t('gtaTimeline.events.gtaSA2025.description'),
 link: '/', // Links to home page for latest version
 },
 ];

 return (
 <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Section Title */}
 <div className="mb-16 text-center">
 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('gtaTimeline.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
 {t('gtaTimeline.subtitle')}
 </p>
 </div>

 {/* Timeline Container */}
 <div className="relative">
 {/* Vertical Line - Desktop: center, Mobile: left */}
 <motion.div
 className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00ff87] to-[#00a2ff]"
 initial={{ scaleY: 0 }}
 whileInView={{ scaleY: 1 }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 viewport={{ once: true }}
 style={{ originY: 0 }}
 ></motion.div>

 {/* Timeline Events */}
 <motion.div
 className="space-y-12"
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={{
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.2,
 delayChildren: 0.1,
 },
 },
 }}
 >
 {timelineEvents.map((event, index) => (
 <motion.div
 key={event.id}
 variants={{
 hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
 visible: {
 opacity: 1,
 x: 0,
 transition: { duration: 0.6, ease: 'easeOut' },
 },
 }}
 className={`flex items-start gap-4 md:gap-0 ${
 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
 } flex-row`}
 >
 {/* Mobile & Tablet: Always right side, Desktop: Alternating */}
 <div className={`w-full md:w-1/2 ${
 index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
 } pl-16 md:pl-0`}>
 <div className="p-4 sm:p-6 rounded-lg bg-gray-900/30 border border-gray-800 hover:shadow-lg transition-all duration-300">
 <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3">
 <span className="text-lg sm:text-2xl font-bold text-[#00ff87] whitespace-nowrap">{event.year}</span>
 <div className="h-0.5 flex-grow bg-gradient-to-r from-[#00ff87] to-transparent hidden sm:block"></div>
 </div>
 <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
 {event.title}
 </h3>
 <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
 {event.description}
 </p>
 {event.link && (
 <InternalLink
 href={event.link}
 className="inline-flex items-center gap-2 text-sm sm:text-base text-[#00ff87] hover:text-[#00a2ff] font-semibold transition-colors duration-200 group"
 >
 {t('gtaTimeline.readMore')}
 <svg
 className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
 </svg>
 </InternalLink>
 )}
 </div>
 </div>

 {/* Center Dot - Hidden on mobile, visible on desktop */}
 <div className="hidden md:flex w-0 justify-center">
 <div className="relative">
 {/* Glow effect */}
 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] opacity-40 blur-lg animate-pulse" style={{ width: '32px', height: '32px', top: '-8px', left: '-8px' }}></div>
 {/* Main dot */}
 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] border-4 border-white shadow-2xl z-10 relative"></div>
 </div>
 </div>

 {/* Mobile Dot - Visible only on mobile, positioned on left */}
 <div className="md:hidden absolute left-0 top-6">
 <div className="relative">
 {/* Glow effect */}
 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] opacity-40 blur-lg animate-pulse" style={{ width: '28px', height: '28px', top: '-6px', left: '-6px' }}></div>
 {/* Main dot */}
 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] border-3 border-white shadow-2xl z-10 relative"></div>
 </div>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </div>

 </div>
 </section>
 );
}
