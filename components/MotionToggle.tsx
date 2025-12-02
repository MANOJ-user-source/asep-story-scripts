'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotion } from '@/context/MotionContext';

export default function MotionToggle() {
  const { shouldReduceMotion, setReduceMotion, prefersReducedMotion } = useMotion();
  const [showPanel, setShowPanel] = useState(false);

  // Listen for toggle event from FAB menu
  useEffect(() => {
    const handleToggle = () => setShowPanel(prev => !prev);
    window.addEventListener('toggle-motion', handleToggle);
    return () => window.removeEventListener('toggle-motion', handleToggle);
  }, []);

  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[101] glass rounded-xl p-4 shadow-xl min-w-[250px]"
        >
          <div className="space-y-4">
            <div className="text-xs font-bold text-ice-200 uppercase tracking-wider mb-2">
              Motion Settings
            </div>

            {/* System Preference Indicator */}
            {prefersReducedMotion && (
              <div className="text-xs text-ice-400 bg-ice-900/40 p-2 rounded">
                System preference: Reduced motion
              </div>
            )}

            {/* Motion Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span className="text-sm text-ice-300 font-medium block">Reduce Motion</span>
                <span className="text-xs text-ice-400">
                  {shouldReduceMotion ? 'Animations disabled' : 'Animations enabled'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setReduceMotion(!shouldReduceMotion)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  shouldReduceMotion ? 'bg-ice-500' : 'bg-ice-800'
                }`}
                aria-label={shouldReduceMotion ? 'Enable animations' : 'Disable animations'}
                title={shouldReduceMotion ? 'Enable animations' : 'Disable animations'}
              >
                <motion.div
                  animate={{ x: shouldReduceMotion ? 24 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-4 h-4 bg-white rounded-full"
                />
              </button>
            </div>

            {/* Info Text */}
            <div className="text-xs text-ice-400 pt-2 border-t border-ice-700">
              When enabled, animations like snow effects and transitions will be minimized for better comfort.
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPanel(false)}
              className="w-full px-3 py-2 text-sm text-ice-300 hover:text-ice-100 bg-ice-900/40 hover:bg-ice-800/60 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
