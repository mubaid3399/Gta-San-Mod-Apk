'use client';

import { useTranslations } from 'next-intl';

export default function SystemRequirementsTable() {
 const t = useTranslations();

 const requirementsData = [
 { key: 'appName', label: t('systemRequirements.data.appName'), value: t('systemRequirements.data.appName') },
 { key: 'lastUpdated', label: t('systemRequirements.data.lastUpdated'), value: t('systemRequirements.data.lastUpdatedValue') },
 { key: 'currentVersion', label: t('systemRequirements.data.currentVersion'), value: t('systemRequirements.data.currentVersionValue') },
 { key: 'category', label: t('systemRequirements.data.category'), value: t('systemRequirements.data.categoryValue') },
 { key: 'developer', label: t('systemRequirements.data.developer'), value: t('systemRequirements.data.developerValue') },
 { key: 'modFeatures', label: t('systemRequirements.data.modFeatures'), value: t('systemRequirements.data.modFeaturesValue') },
 { key: 'minimumAndroid', label: t('systemRequirements.data.minimumAndroid'), value: t('systemRequirements.data.minimumAndroidValue') },
 { key: 'gameSize', label: t('systemRequirements.data.gameSize'), value: t('systemRequirements.data.gameSizeValue') },
 { key: 'multiplayer', label: t('systemRequirements.data.multiplayer'), value: t('systemRequirements.data.multiplayerValue') },
 { key: 'availability', label: t('systemRequirements.data.availability'), value: t('systemRequirements.data.availabilityValue') },
 { key: 'storage', label: t('systemRequirements.data.storage'), value: t('systemRequirements.data.storageValue') },
 { key: 'devicePerformance', label: t('systemRequirements.data.devicePerformance'), value: t('systemRequirements.data.devicePerformanceValue') },
 { key: 'installationFiles', label: t('systemRequirements.data.installationFiles'), value: t('systemRequirements.data.installationFilesValue') },
 { key: 'googlePlayStore', label: t('systemRequirements.data.googlePlayStore'), value: t('systemRequirements.data.googlePlayStoreValue') },
 ];

 return (
 <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Section Title */}
 <div className="mb-12 text-center">
 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('systemRequirements.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 </div>

 {/* Table Container */}
 <div className="rounded-xl shadow-lg border border-gray-800 overflow-hidden">
 <table className="w-full min-w-full">
 {/* Table Header */}
 <thead>
 <tr className="bg-gray-800/30 border-b border-gray-800">
 <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-white text-xs sm:text-sm md:text-base">
 {t('systemRequirements.appName')}
 </th>
 <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-white text-xs sm:text-sm md:text-base">
 {t('systemRequirements.information')}
 </th>
 </tr>
 </thead>

 {/* Table Body */}
 <tbody>
 {requirementsData.map((item, index) => (
 <tr
 key={item.key}
 className={`border-b border-gray-800 transition-all duration-300 ${
 index % 2 === 0
 ? 'bg-[#030712] hover:bg-[#030712]/60 hover:backdrop-blur-sm hover:shadow-lg'
 : 'bg-gray-900/20 hover:backdrop-blur-sm hover:shadow-lg'
 }`}
 >
 <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-white text-xs sm:text-sm md:text-base">
 {item.label}
 </td>
 <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-300 text-xs sm:text-sm md:text-base">
 {item.value}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {/* Additional Info */}
 <div className="mt-12 p-6 rounded-xl bg-gray-900/40 border border-gray-700">
 <p className="text-gray-300 text-center">
 <span className="font-semibold text-white">Note: </span>
 Make sure your device meets the minimum requirements for optimal gameplay experience.
 </p>
 </div>
 </div>
 </section>
 );
}
