'use client';

import { useTranslations } from 'next-intl';

export default function SafetyPrecautions() {
 const t = useTranslations();

 const precautions = [
 {
 id: 'trusted',
 number: '01',
 title: t('safety.precautions.trusted.title'),
 description: t('safety.precautions.trusted.description'),
 icon: '✅',
 },
 {
 id: 'backup',
 number: '02',
 title: t('safety.precautions.backup.title'),
 description: t('safety.precautions.backup.description'),
 icon: '💾',
 },
 {
 id: 'unknown',
 number: '03',
 title: t('safety.precautions.unknown.title'),
 description: t('safety.precautions.unknown.description'),
 icon: '🔒',
 },
 {
 id: 'storage',
 number: '04',
 title: t('safety.precautions.storage.title'),
 description: t('safety.precautions.storage.description'),
 icon: '💿',
 },
 {
 id: 'antivirus',
 number: '05',
 title: t('safety.precautions.antivirus.title'),
 description: t('safety.precautions.antivirus.description'),
 icon: '🛡️',
 },
 {
 id: 'cheats',
 number: '06',
 title: t('safety.precautions.cheats.title'),
 description: t('safety.precautions.cheats.description'),
 icon: '⚠️',
 },
 {
 id: 'update',
 number: '07',
 title: t('safety.precautions.update.title'),
 description: t('safety.precautions.update.description'),
 icon: '🔄',
 },
 {
 id: 'monitor',
 number: '08',
 title: t('safety.precautions.monitor.title'),
 description: t('safety.precautions.monitor.description'),
 icon: '📊',
 },
 ];

 return (
 <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Section Header */}
 <div className="mb-16 text-center">
 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('safety.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
 {t('safety.subtitle')}
 </p>
 </div>

 {/* Precautions Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
 {precautions.map((precaution) => (
 <div
 key={precaution.id}
 className="group p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300 overflow-hidden"
 style={{ backgroundColor: '#1a2a3f', borderColor: '#00a2ff', backgroundImage: 'none' }}
 >
 {/* Number Badge */}
 <div className="flex items-start gap-4 min-w-0">
 <div className="flex-shrink-0">
 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] group-hover:shadow-lg group-hover:shadow-[#00ff87]/50 transition-all duration-300">
 <span className="font-bold text-white text-lg">{precaution.number}</span>
 </div>
 </div>

 {/* Content */}
 <div className="flex-grow min-w-0">
 <div className="flex items-start gap-2 mb-2 flex-wrap">
 <span className="text-2xl flex-shrink-0">{precaution.icon}</span>
 <h3 className="text-lg font-bold text-white group-hover:text-[#00ff87] transition-colors duration-300 break-words">
 {precaution.title}
 </h3>
 </div>
 <p className="text-gray-300 text-sm leading-relaxed break-words">
 {precaution.description}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Important Note */}
 <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6 sm:p-8 overflow-hidden" style={{ backgroundColor: '#2a2a1a', borderLeftColor: '#ffaa00', backgroundImage: 'none' }}>
 <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-3 flex items-center gap-2 break-words">
 <span className="text-2xl flex-shrink-0">⚠️</span>
 <span>{t('safety.importantNote')}</span>
 </h3>
 <p className="text-amber-800 text-sm sm:text-base leading-relaxed break-words">
 {t('safety.importantNoteText')}
 </p>
 </div>
 </div>
 </section>
 );
}
