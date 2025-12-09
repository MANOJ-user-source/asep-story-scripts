'use client';

import { ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MotionProvider } from '@/context/MotionContext';

// Dynamic imports with ssr: false for framer-motion components
const Navigation = dynamic(() => import('./Navigation'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const ReadingProgress = dynamic(() => import('./ReadingProgress'), { ssr: false });
const MotionToggle = dynamic(() => import('./MotionToggle'), { ssr: false });
const MotionAttributeSync = dynamic(() => import('./MotionAttributeSync'), { ssr: false });

interface AppShellProps {
  children: ReactNode;
}

// Simple loading placeholder for SSG
function LoadingPlaceholder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ice-950 via-ice-900 to-ice-950">
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-ice-900/50 backdrop-blur-md border-b border-ice-700/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-ice-400 to-ice-200 bg-clip-text text-transparent">
            ASEP
          </span>
        </div>
      </div>
      <main className="relative z-10 pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-ice-400 to-ice-200 bg-clip-text text-transparent mb-4">
            ASEP
          </div>
          <div className="text-ice-400 animate-pulse">Loading...</div>
        </div>
      </main>
    </div>
  );
}

export default function AppShell({ children }: AppShellProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSG, render a static placeholder - DO NOT render children
  // because children contain framer-motion components
  if (!mounted) {
    return <LoadingPlaceholder />;
  }

  return (
    <MotionProvider>
      <MotionAttributeSync />
      <ReadingProgress />
      <Navigation />
      <MotionToggle />
      <main className="relative z-10 pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </MotionProvider>
  );
}
