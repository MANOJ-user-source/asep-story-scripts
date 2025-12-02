'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [userPreference, setUserPreference] = useState<boolean | null>(null);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check localStorage for user override
    const saved = localStorage.getItem('reduceMotion');
    if (saved !== null) {
      setUserPreference(saved === 'true');
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldReduceMotion = userPreference !== null ? userPreference : prefersReducedMotion;

  const setReduceMotion = (value: boolean) => {
    setUserPreference(value);
    localStorage.setItem('reduceMotion', String(value));

    // Dispatch event for other components to listen
    window.dispatchEvent(new CustomEvent('reduce-motion-change', { detail: value }));
  };

  return { shouldReduceMotion, setReduceMotion, prefersReducedMotion };
}
