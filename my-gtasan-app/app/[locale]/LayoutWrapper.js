'use client';

import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isGTA6Page = pathname.includes('/gta-6');

  return (
    <div style={{ backgroundColor: isGTA6Page ? 'transparent' : '#030712' }}>
      {children}
    </div>
  );
}
