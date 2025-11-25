'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GtaCheatsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale version of the page
    router.push('/en/gta-cheats');
  }, [router]);

  return null;
}
