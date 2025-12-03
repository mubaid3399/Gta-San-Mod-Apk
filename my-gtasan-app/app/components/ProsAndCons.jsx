'use client';

import { useTranslations } from 'next-intl';

export default function ProsAndCons() {
 const t = useTranslations();

 const pros = [
 {
 id: 'gameplay',
 title: t('prosAndCons.pros.gameplay.title'),
 description: t('prosAndCons.pros.gameplay.description'),
 icon: '🎮',
 },
 {
 id: 'replayValue',
 title: t('prosAndCons.pros.replayValue.title'),
 description: t('prosAndCons.pros.replayValue.description'),
 icon: '🔄',
 },
 {
 id: 'optimization',
 title: t('prosAndCons.pros.optimization.title'),
 description: t('prosAndCons.pros.optimization.description'),
 icon: '⚡',
 },
 {
 id: 'missions',
 title: t('prosAndCons.pros.missions.title'),
 description: t('prosAndCons.pros.missions.description'),
 icon: '🎯',
 },
 {
 id: 'storyline',
 title: t('prosAndCons.pros.storyline.title'),
 description: t('prosAndCons.pros.storyline.description'),
 icon: '📖',
 },
 {
 id: 'customization',
 title: t('prosAndCons.pros.customization.title'),
 description: t('prosAndCons.pros.customization.description'),
 icon: '🎨',
 },
 {
 id: 'world',
 title: t('prosAndCons.pros.world.title'),
 description: t('prosAndCons.pros.world.description'),
 icon: '🗺️',
 },
 ];

 const cons = [
 {
 id: 'fileSize',
 title: t('prosAndCons.cons.fileSize.title'),
 description: t('prosAndCons.cons.fileSize.description'),
 icon: '💾',
 },
 {
 id: 'difficulty',
 title: t('prosAndCons.cons.difficulty.title'),
 description: t('prosAndCons.cons.difficulty.description'),
 icon: '🎪',
 },
 {
 id: 'performance',
 title: t('prosAndCons.cons.performance.title'),
 description: t('prosAndCons.cons.performance.description'),
 icon: '🔥',
 },
 ];

 return (
 <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Section Header */}
 <div className="mb-16 text-center">
 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('prosAndCons.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 </div>

 {/* Pros Section */}
 <div className="mb-20">
 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-8 flex items-center gap-2">
 <span className="text-2xl">✅</span>
 {t('prosAndCons.prosTitle')}
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {pros.map((pro) => (
 <div
 key={pro.id}
 className="group p-6 rounded-lg bg-green-50 border border-green-200 hover:shadow-lg hover:border-green-400 transition-all duration-300"
 style={{ backgroundColor: '#1a2a1f', borderColor: '#00ff87', backgroundImage: 'none' }}
 >
 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
 {pro.icon}
 </div>
 <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-600 transition-colors duration-300">
 {pro.title}
 </h4>
 <p className="text-gray-300 text-sm leading-relaxed">
 {pro.description}
 </p>
 </div>
 ))}
 </div>
 </div>

 {/* Cons Section */}
 <div>
 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 mb-8 flex items-center gap-2">
 <span className="text-2xl">❌</span>
 {t('prosAndCons.consTitle')}
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {cons.map((con) => (
 <div
 key={con.id}
 className="group p-6 rounded-lg bg-red-50 border border-red-200 hover:shadow-lg hover:border-red-400 transition-all duration-300"
 style={{ backgroundColor: '#2a1a1f', borderColor: '#ff4444', backgroundImage: 'none' }}
 >
 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
 {con.icon}
 </div>
 <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
 {con.title}
 </h4>
 <p className="text-gray-300 text-sm leading-relaxed">
 {con.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
