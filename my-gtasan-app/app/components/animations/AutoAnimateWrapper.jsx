'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function AutoAnimateWrapper({ children, className = '', ...props }) {
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className={className} {...props}>
      {children}
    </div>
  );
}
