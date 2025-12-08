'use client';

import { ReactNode, useState, useEffect } from 'react';
import { MotionProvider } from '@/context/MotionContext';

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSG/SSR, render children without MotionProvider to avoid useContext errors
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <MotionProvider>
      {children}
    </MotionProvider>
  );
}
