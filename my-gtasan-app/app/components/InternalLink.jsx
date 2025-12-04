'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function InternalLink({ href, children, className = '' }) {
  const locale = useLocale();
  const localizedHref = locale === 'en' ? href : `/${locale}${href}`;

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  );
}
