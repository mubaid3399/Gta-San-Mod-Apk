'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SystemRequirementsFeatures() {
 const t = useTranslations();

 const featuresData = [
 { key: 'unlimitedExploration', title: t('systemRequirements.features.unlimitedExploration.title'), description: t('systemRequirements.features.unlimitedExploration.description') },
 { key: 'dynamicWeather', title: t('systemRequirements.features.dynamicWeather.title'), description: t('systemRequirements.features.dynamicWeather.description') },
 { key: 'enhancedAudio', title: t('systemRequirements.features.enhancedAudio.title'), description: t('systemRequirements.features.enhancedAudio.description') },
 { key: 'personalizedGrowth', title: t('systemRequirements.features.personalizedGrowth.title'), description: t('systemRequirements.features.personalizedGrowth.description') },
 { key: 'expandedVehicles', title: t('systemRequirements.features.expandedVehicles.title'), description: t('systemRequirements.features.expandedVehicles.description') },
 { key: 'sideActivities', title: t('systemRequirements.features.sideActivities.title'), description: t('systemRequirements.features.sideActivities.description') },
 ];

 return (
 <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8">
 <div className="container mx-auto max-w-6xl">
 {/* Two Column Layout */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Left Side - Features List */}
 <div>
 <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-white">
 {t('systemRequirements.featuresTitle')}
 </h3>

 <div className="space-y-6">
 {featuresData.map((feature) => (
 <div
 key={feature.key}
 className="p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
 <h4 className="text-lg font-semibold text-white mb-2">
 {feature.title}
 </h4>
 <p className="text-gray-300 text-sm leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 </div>

 {/* Right Side - Static Image */}
 <div>
 <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-800">
 <Image
 src="/features-image.png"
 alt="GTA San Andreas - Gang Scene"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
