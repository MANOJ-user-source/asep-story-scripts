'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MotionContextType {
  shouldReduceMotion: boolean;
  setReduceMotion: (value: boolean) => void;
  prefersReducedMotion: boolean;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const motionState = useReducedMotion();

  return (
    <MotionContext.Provider value={motionState}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within MotionProvider');
  }
  return context;
}
