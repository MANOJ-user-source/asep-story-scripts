'use client';

import { useEffect } from 'react';
import { useMotion } from '@/context/MotionContext';

export default function MotionAttributeSync() {
  const { shouldReduceMotion } = useMotion();

  useEffect(() => {
    // Apply data attribute to document element
    if (shouldReduceMotion) {
      document.documentElement.setAttribute('data-reduce-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduce-motion');
    }
  }, [shouldReduceMotion]);

  return null; // This component doesn't render anything
}
