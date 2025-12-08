'use client';

import { ReactNode, useState, useEffect } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Wrapper that only renders children on the client side.
 * During SSG/SSR, renders the fallback (or nothing).
 * This is useful for components that use framer-motion.
 */
export default function ClientWrapper({ children, fallback = null }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
