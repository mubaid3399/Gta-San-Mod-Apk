'use client';

import { useTranslations } from 'next-intl';

export default function ComparisonSection() {
 const t = useTranslations();

 const comparisonData = [
 {
 id: 'features',
 category: t('comparison.items.features.category'),
 original: t('comparison.items.features.original'),
 mod: t('comparison.items.features.mod'),
 },
 {
 id: 'graphics',
 category: t('comparison.items.graphics.category'),
 original: t('comparison.items.graphics.original'),
 mod: t('comparison.items.graphics.mod'),
 },
 {
 id: 'progression',
 category: t('comparison.items.progression.category'),
 original: t('comparison.items.progression.original'),
 mod: t('comparison.items.progression.mod'),
 },
 {
 id: 'performance',
 category: t('comparison.items.performance.category'),
 original: t('comparison.items.performance.original'),
 mod: t('comparison.items.performance.mod'),
 },
 {
 id: 'balance',
 category: t('comparison.items.balance.category'),
 original: t('comparison.items.balance.original'),
 mod: t('comparison.items.balance.mod'),
 },
 {
 id: 'experience',
 category: t('comparison.items.experience.category'),
 original: t('comparison.items.experience.original'),
 mod: t('comparison.items.experience.mod'),
 },
 ];

 return (
 <section className="relative w-full bg-gray-800 bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Section Header */}
 <div className="mb-16 text-center">
 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('comparison.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
 {t('comparison.subtitle')}
 </p>
 </div>

 {/* Comparison Table */}
 <div className="rounded-xl shadow-lg border border-gray-800 mb-12 overflow-hidden">
 <table className="w-full min-w-full">
 {/* Table Header */}
 <thead>
 <tr className="bg-gradient-to-r from-[#00ff87]/10 to-[#00a2ff]/10 border-b border-gray-800">
 <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-white text-xs sm:text-sm md:text-base">
 {t('comparison.category')}
 </th>
 <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-white text-xs sm:text-sm md:text-base">
 {t('comparison.original')}
 </th>
 <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold text-white text-xs sm:text-sm md:text-base">
 {t('comparison.modVersion')}
 </th>
 </tr>
 </thead>

 {/* Table Body */}
 <tbody>
 {comparisonData.map((item, index) => (
 <tr
 key={item.id}
 className={`border-b border-gray-800 hover:bg-gray-800 hover:bg-gray-900/30 transition-colors duration-300 ${
 index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-900/30'
 }`}
 >
 <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-white text-xs sm:text-sm md:text-base">
 {item.category}
 </td>
 <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
 {item.original}
 </td>
 <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
 <span className="text-[#00ff87] font-semibold">{item.mod}</span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {/* Personal Note Section */}
 <div className="bg-blue-900/40 border border-blue-800 rounded-xl p-6 sm:p-8">
 <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
 <span className="text-2xl">💡</span>
 {t('comparison.personalNote')}
 </h3>
 <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
 {t('comparison.personalNoteText')}
 </p>
 </div>
 </div>
 </section>
 );
}
