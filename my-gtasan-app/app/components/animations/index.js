// Animation utilities barrel export with dynamic imports for heavy components
export { default as ScrollRevealWrapper } from './ScrollRevealWrapper';
export { default as AutoAnimateWrapper } from './AutoAnimateWrapper';

// Lazy load heavy components (Three.js and Lottie) to reduce bundle size
import dynamic from 'next/dynamic';

export const ThreeDBackground = dynamic(() => import('./ThreeDBackground'), {
  ssr: false,
  loading: () => null,
});

export const LottieAnimation = dynamic(() => import('./LottieAnimation'), {
  ssr: false,
  loading: () => null,
});

export {
  AnimatedDiv,
  AnimatedSection,
  fadeInUp,
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from './FramerMotionWrapper';
