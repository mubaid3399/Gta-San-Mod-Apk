'use client';

import { useTranslations } from 'next-intl';

export default function DownloadInstallation() {
 const t = useTranslations();

 const steps = [
 {
 number: t('downloadInstallation.steps.step1.number'),
 title: t('downloadInstallation.steps.step1.title'),
 description: t('downloadInstallation.steps.step1.description'),
 icon: t('downloadInstallation.steps.step1.icon'),
 },
 {
 number: t('downloadInstallation.steps.step2.number'),
 title: t('downloadInstallation.steps.step2.title'),
 description: t('downloadInstallation.steps.step2.description'),
 icon: t('downloadInstallation.steps.step2.icon'),
 },
 {
 number: t('downloadInstallation.steps.step3.number'),
 title: t('downloadInstallation.steps.step3.title'),
 description: t('downloadInstallation.steps.step3.description'),
 icon: t('downloadInstallation.steps.step3.icon'),
 },
 {
 number: t('downloadInstallation.steps.step4.number'),
 title: t('downloadInstallation.steps.step4.title'),
 description: t('downloadInstallation.steps.step4.description'),
 icon: t('downloadInstallation.steps.step4.icon'),
 },
 {
 number: t('downloadInstallation.steps.step5.number'),
 title: t('downloadInstallation.steps.step5.title'),
 description: t('downloadInstallation.steps.step5.description'),
 icon: t('downloadInstallation.steps.step5.icon'),
 },
 ];

 const tips = [
 {
 title: t('downloadInstallation.tipsSection.tips.tip1.title'),
 description: t('downloadInstallation.tipsSection.tips.tip1.description'),
 },
 {
 title: t('downloadInstallation.tipsSection.tips.tip2.title'),
 description: t('downloadInstallation.tipsSection.tips.tip2.description'),
 },
 {
 title: t('downloadInstallation.tipsSection.tips.tip3.title'),
 description: t('downloadInstallation.tipsSection.tips.tip3.description'),
 },
 {
 title: t('downloadInstallation.tipsSection.tips.tip4.title'),
 description: t('downloadInstallation.tipsSection.tips.tip4.description'),
 },
 ];

 return (
 <section className="relative w-full bg-gradient-to-b from-white to-gray-100 text-white py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#030712', backgroundImage: 'none' }}>
 <div className="container mx-auto max-w-6xl">
 {/* Section Header */}
 <div className="mb-16 text-center">
 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
 {t('downloadInstallation.title')}
 </h2>
 <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-8"></div>
 <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
 {t('downloadInstallation.subtitle')}
 </p>
 </div>

 {/* Steps Section */}
 <div className="mb-20">
 <div className="space-y-6">
 {steps.map((step, index) => (
 <div
 key={index}
 className="flex flex-col sm:flex-row gap-4 sm:gap-6 group hover:bg-gray-800 hover:bg-gray-800/30 p-4 sm:p-6 rounded-lg transition-all duration-300 bg-gray-800/30"
 >
 {/* Step Number with Icon */}
 <div className="flex-shrink-0">
 <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00ff87] to-[#00a2ff] group-hover:shadow-lg group-hover:shadow-[#00ff87]/50 transition-all duration-300">
 <span className="text-xl sm:text-2xl">{step.icon}</span>
 </div>
 <div className="text-center mt-2 text-xs sm:text-sm font-bold text-[#00ff87]">
 {step.number}
 </div>
 </div>

 {/* Step Content */}
 <div className="flex-grow">
 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#00ff87] transition-colors duration-300">
 {step.title}
 </h3>
 <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
 {step.description}
 </p>
 <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00ff87] to-transparent transition-all duration-300"></div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Tips Section */}
 <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4 sm:p-8 lg:p-10 mb-12">
 <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
 {t('downloadInstallation.tipsSection.title')}
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
 {tips.map((tip, index) => (
 <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-800 hover:bg-gray-800 transition-colors duration-300 bg-gray-800/50">
 <div className="flex-shrink-0">
 <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00ff87]/30">
 <span className="text-sm sm:text-lg text-[#00ff87]">✓</span>
 </div>
 </div>
 <div className="flex-grow">
 <h4 className="text-sm sm:text-base font-bold text-white mb-1">
 {tip.title}
 </h4>
 <p className="text-xs sm:text-sm text-gray-300">
 {tip.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>

 </div>
</section>
 );
}
