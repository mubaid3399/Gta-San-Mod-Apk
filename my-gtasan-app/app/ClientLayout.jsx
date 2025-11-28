'use client';

import ScrollToTopButton from './components/ScrollToTopButton';

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}
