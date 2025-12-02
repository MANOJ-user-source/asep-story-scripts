'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type FontSize = 'small' | 'medium' | 'large';

export default function FontSizeControl() {
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedSize = localStorage.getItem('fontSize') as FontSize | null;
    if (savedSize) {
      setFontSize(savedSize);
      document.documentElement.setAttribute('data-font-size', savedSize);
    }
  }, []);

  const changeFontSize = (size: FontSize) => {
    setFontSize(size);
    document.documentElement.setAttribute('data-font-size', size);
    localStorage.setItem('fontSize', size);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1 glass rounded-lg p-1">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeFontSize('small')}
        className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
          fontSize === 'small'
            ? 'bg-ice-500 text-white'
            : 'text-ice-400 hover:text-ice-200'
        }`}
        aria-label="Small font size"
        title="Small text"
      >
        A
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeFontSize('medium')}
        className={`px-2.5 py-1 rounded text-sm font-semibold transition-colors ${
          fontSize === 'medium'
            ? 'bg-ice-500 text-white'
            : 'text-ice-400 hover:text-ice-200'
        }`}
        aria-label="Medium font size"
        title="Medium text"
      >
        A
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeFontSize('large')}
        className={`px-3 py-1 rounded text-base font-semibold transition-colors ${
          fontSize === 'large'
            ? 'bg-ice-500 text-white'
            : 'text-ice-400 hover:text-ice-200'
        }`}
        aria-label="Large font size"
        title="Large text"
      >
        A
      </motion.button>
    </div>
  );
}
