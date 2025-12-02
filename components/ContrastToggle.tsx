'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('highContrast');
    if (saved) {
      const isHigh = saved === 'true';
      setHighContrast(isHigh);
      if (isHigh) {
        document.documentElement.setAttribute('data-contrast', 'high');
      }
    }
  }, []);

  const toggleContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    if (newState) {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
    localStorage.setItem('highContrast', String(newState));
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleContrast}
      className="p-2.5 glass rounded-lg hover:bg-ice-900/40 transition-colors"
      aria-label={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
      title={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
    >
      {highContrast ? (
        <svg
          className="w-5 h-5 text-ice-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-ice-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      )}
    </motion.button>
  );
}
