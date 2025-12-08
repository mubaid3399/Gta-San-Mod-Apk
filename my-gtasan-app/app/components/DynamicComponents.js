/**
 * Dynamic Component Loader
 *
 * This file provides lazy-loaded versions of heavy components to improve
 * initial page load performance and reduce Total Blocking Time (TBT).
 *
 * Benefits:
 * - Reduces initial JavaScript bundle size
 * - Improves Time to Interactive (TTI)
 * - Decreases Total Blocking Time (TBT)
 * - Better Core Web Vitals scores
 */

import dynamic from 'next/dynamic';

// ============================================================================
// 3D & WebGL Components (Very Heavy - Load only when visible)
// ============================================================================

export const ThreeDBackground = dynamic(
  () => import('./animations/ThreeDBackground'),
  {
    ssr: false, // Disable server-side rendering (not needed for visuals)
    loading: () => (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black" />
    ),
  }
);

// ============================================================================
// Animation Libraries (Heavy - Load lazily)
// ============================================================================

export const LottieAnimation = dynamic(
  () => import('./animations/LottieAnimation'),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-800/50 animate-pulse" />,
  }
);

export const FramerMotionWrapper = dynamic(
  () => import('./animations/FramerMotionWrapper'),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  }
);

export const ScrollRevealWrapper = dynamic(
  () => import('./animations/ScrollRevealWrapper'),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  }
);

export const AutoAnimateWrapper = dynamic(
  () => import('./animations/AutoAnimateWrapper'),
  {
    ssr: true, // Can SSR this one
    loading: () => null,
  }
);

// ============================================================================
// Below-the-Fold Components (Load after initial render)
// ============================================================================

export const FAQSection = dynamic(
  () => import('./FAQSection'),
  {
    ssr: true,
    loading: () => (
      <div className="w-full h-96 bg-gray-800/30 animate-pulse rounded-lg" />
    ),
  }
);

export const GTATimeline = dynamic(
  () => import('./GTATimeline'),
  {
    ssr: true,
    loading: () => (
      <div className="w-full h-96 bg-gray-800/30 animate-pulse rounded-lg" />
    ),
  }
);

export const SystemRequirementsFeatures = dynamic(
  () => import('./SystemRequirementsFeatures'),
  {
    ssr: true,
    loading: () => (
      <div className="w-full h-96 bg-gray-800/30 animate-pulse rounded-lg" />
    ),
  }
);

export const ComparisonSection = dynamic(
  () => import('./ComparisonSection'),
  {
    ssr: true,
    loading: () => (
      <div className="w-full h-96 bg-gray-800/30 animate-pulse rounded-lg" />
    ),
  }
);

export const TipsAndTricks = dynamic(
  () => import('./TipsAndTricks'),
  {
    ssr: true,
  }
);

export const GTAFeaturesDetail = dynamic(
  () => import('./GTAFeaturesDetail'),
  {
    ssr: true,
  }
);

export const ProsAndCons = dynamic(
  () => import('./ProsAndCons'),
  {
    ssr: true,
  }
);

export const SafetyPrecautions = dynamic(
  () => import('./SafetyPrecautions'),
  {
    ssr: true,
  }
);

export const GTAGameplayVideo = dynamic(
  () => import('./GTAGameplayVideo'),
  {
    ssr: false, // Video players don't need SSR
    loading: () => (
      <div className="w-full aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Loading video...</div>
      </div>
    ),
  }
);

// ============================================================================
// AdSense Component (Load after page interactive)
// ============================================================================

export const AdSenseAd = dynamic(
  () => import('./AdSenseAd'),
  {
    ssr: false,
    loading: () => <div className="w-full h-24 bg-transparent" />,
  }
);

// ============================================================================
// Usage Example:
// ============================================================================
//
// Instead of:
//   import FAQSection from './FAQSection';
//
// Use:
//   import { FAQSection } from './DynamicComponents';
//
// The component will be automatically code-split and loaded on demand!
// ============================================================================
