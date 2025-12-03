'use client';

import { lazy, Suspense } from 'react';

/**
 * Lazy-loads heavy animation components with fallback
 * Defers loading until after initial page load
 */
export default function LazyAnimationWrapper({
  component: Component,
  fallback = null,
  onLoad = null
}) {
  return (
    <Suspense fallback={fallback || <div className="w-full h-full bg-[#030712]" />}>
      <Component onLoad={onLoad} />
    </Suspense>
  );
}

/**
 * Higher-order component to lazy load a component with dynamic import
 */
export function createLazyComponent(importFn, fallback) {
  const LazyComponent = lazy(importFn);

  return function LazyWrapper(props) {
    return (
      <Suspense fallback={fallback || <div className="w-full h-full bg-[#030712]" />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
