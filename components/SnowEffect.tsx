'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotion } from '@/context/MotionContext';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
  type: 'circle' | 'flake';
}

interface WindStreak {
  id: number;
  top: number;
  animationDuration: number;
  opacity: number;
  height: number;
  delay: number;
}

export default function SnowEffect() {
  const { shouldReduceMotion } = useMotion();
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [windStreaks, setWindStreaks] = useState<WindStreak[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [intensity, setIntensity] = useState<'light' | 'normal' | 'heavy'>('normal');
  const [showControls, setShowControls] = useState(false);
  const [gust, setGust] = useState({ active: false, strength: 0 });

  // Listen for toggle event from FAB menu
  useEffect(() => {
    const handleToggle = () => setShowControls(prev => !prev);
    window.addEventListener('toggle-snow-panel', handleToggle);
    return () => window.removeEventListener('toggle-snow-panel', handleToggle);
  }, []);

  useEffect(() => {
    // Check localStorage for saved preferences
    const savedEnabled = localStorage.getItem('snowEnabled');
    const savedIntensity = localStorage.getItem('snowIntensity') as 'light' | 'normal' | 'heavy';

    if (savedEnabled !== null) setIsEnabled(savedEnabled === 'true');
    if (savedIntensity) setIntensity(savedIntensity);
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setSnowflakes([]);
      setWindStreaks([]);
      return;
    }

    const flakeCount = intensity === 'light' ? 30 : intensity === 'normal' ? 50 : 80;
    const flakes: Snowflake[] = [];
    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 12 + 12, // Slower: 12-24 seconds
        opacity: Math.random() * 0.5 + 0.2, // Slightly more subtle
        size: Math.random() * 4 + 2, // Varying sizes from 2px to 6px
        delay: Math.random() * 8,
        type: Math.random() > 0.7 ? 'flake' : 'circle', // More snowflake emojis
      });
    }
    setSnowflakes(flakes);

    const streakCount = intensity === 'light' ? 5 : intensity === 'normal' ? 8 : 12;
    const streaks: WindStreak[] = [];
    for (let i = 0; i < streakCount; i++) {
      streaks.push({
        id: i,
        top: Math.random() * 100,
        animationDuration: Math.random() * 4 + 3, // Slower: 3-7 seconds
        opacity: Math.random() * 0.15 + 0.05, // More subtle: 0.05-0.2
        height: Math.random() * 1.5 + 0.5, // Thinner streaks
        delay: Math.random() * 8,
      });
    }
    setWindStreaks(streaks);
  }, [isEnabled, intensity]);

  useEffect(() => {
    if (!isEnabled) return;

    const gustInterval = setInterval(() => {
      const gustStrength = (Math.random() - 0.5) * 400; // Reduced to -200 to 200 for calmer effect
      setGust({ active: true, strength: gustStrength });

      setTimeout(() => {
        setGust({ active: false, strength: 0 });
      }, 8000); // Longer gust duration for smoother transitions
    }, 15000); // Less frequent gusts - every 15 seconds

    return () => clearInterval(gustInterval);
  }, [isEnabled]);

  const toggleSnow = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('snowEnabled', String(newState));
  };

  const changeIntensity = (newIntensity: 'light' | 'normal' | 'heavy') => {
    setIntensity(newIntensity);
    localStorage.setItem('snowIntensity', newIntensity);
  };

  // Don't render snow if reduced motion is enabled
  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Snow Controls Panel - Centered Modal */}
      <AnimatePresence>
        {showControls && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowControls(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] glass rounded-xl p-6 shadow-2xl min-w-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-ice-200 uppercase tracking-wider">
                    Snow Effects
                  </div>
                  <button
                    onClick={() => setShowControls(false)}
                    className="text-ice-400 hover:text-ice-200 transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* On/Off Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ice-300 font-medium">Enabled</span>
                  <button
                    type="button"
                    onClick={toggleSnow}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isEnabled ? 'bg-ice-500' : 'bg-ice-800'
                    }`}
                    aria-label={isEnabled ? 'Disable snow' : 'Enable snow'}
                    title={isEnabled ? 'Disable snow' : 'Enable snow'}
                  >
                    <motion.div
                      animate={{ x: isEnabled ? 24 : 2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    />
                  </button>
                </div>

                {/* Intensity Buttons */}
                {isEnabled && (
                  <div className="space-y-3 pt-2">
                    <span className="text-sm text-ice-400 font-medium">Intensity</span>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changeIntensity('light')}
                        className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${
                          intensity === 'light'
                            ? 'bg-ice-500 text-white'
                            : 'text-ice-400 hover:bg-ice-900/40'
                        }`}
                      >
                        Light
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changeIntensity('normal')}
                        className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${
                          intensity === 'normal'
                            ? 'bg-ice-500 text-white'
                            : 'text-ice-400 hover:bg-ice-900/40'
                        }`}
                      >
                        Normal
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changeIntensity('heavy')}
                        className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${
                          intensity === 'heavy'
                            ? 'bg-ice-500 text-white'
                            : 'text-ice-400 hover:bg-ice-900/40'
                        }`}
                      >
                        Heavy
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Snowflakes & Wind */}
      <AnimatePresence>
        {isEnabled && (
          <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* Wind Streaks */}
            <AnimatePresence>
              {gust.active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  {windStreaks.map((streak) => (
                    <motion.div
                      key={streak.id}
                      className="absolute"
                      style={{
                        top: `${streak.top}%`,
                        left: '-50%',
                        width: '200%',
                        height: `${streak.height}px`,
                        filter: 'blur(15px)',
                        background: `linear-gradient(to right, transparent, rgba(255, 255, 255, ${streak.opacity}), transparent)`,
                      }}
                      animate={{
                        x: gust.strength * 2,
                      }}
                      transition={{
                        duration: streak.animationDuration,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Snowflakes */}
            {snowflakes.map((flake) => {
              const swayAmount = flake.size * 15; // Gentle sway based on size
              const swayDuration = flake.animationDuration * 0.8; // Slightly faster than fall

              return flake.type === 'flake' ? (
                <motion.div
                  key={flake.id}
                  initial={{ y: -10, rotate: Math.random() * 360 }}
                  animate={{
                    y: '110vh',
                    x: [
                      gust.strength,
                      gust.strength + swayAmount,
                      gust.strength - swayAmount,
                      gust.strength + swayAmount,
                      gust.strength
                    ],
                    rotate: [null, Math.random() * 360 - 180],
                  }}
                  transition={{
                    y: {
                      duration: flake.animationDuration,
                      delay: flake.delay,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    x: {
                      duration: swayDuration,
                      delay: flake.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    rotate: {
                      duration: flake.animationDuration * 0.5,
                      delay: flake.delay,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                  className="absolute text-white"
                  style={{
                    left: `${flake.left}%`,
                    fontSize: `${flake.size * 5}px`,
                    opacity: flake.opacity,
                    filter: `blur(${flake.size * 0.1}px)`,
                  }}
                >
                  ❄
                </motion.div>
              ) : (
                <motion.div
                  key={flake.id}
                  initial={{ y: -10 }}
                  animate={{
                    y: '110vh',
                    x: [
                      gust.strength,
                      gust.strength + swayAmount,
                      gust.strength - swayAmount,
                      gust.strength + swayAmount,
                      gust.strength
                    ],
                  }}
                  transition={{
                    y: {
                      duration: flake.animationDuration,
                      delay: flake.delay,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    x: {
                      duration: swayDuration,
                      delay: flake.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  }}
                  className="absolute rounded-full bg-white shadow-sm"
                  style={{
                    left: `${flake.left}%`,
                    width: `${flake.size}px`,
                    height: `${flake.size}px`,
                    opacity: flake.opacity,
                    filter: `blur(${flake.size * 0.1}px)`,
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
