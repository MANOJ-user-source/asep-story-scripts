'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookmark } from '@/hooks/useBookmark';

interface MenuItem {
  icon: string;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function SettingsFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [readingMode, setReadingMode] = useState('normal');
  const pageUrl = typeof window !== 'undefined' ? window.location.pathname : '';
  const { currentBookmark, saveBookmark, removeBookmark, hasBookmark } = useBookmark(pageUrl);

  // Load reading mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('reading-mode') || 'normal';
    setReadingMode(savedMode);

    // Listen for reading mode changes
    const handleModeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setReadingMode(customEvent.detail.mode);
    };

    window.addEventListener('reading-mode-change', handleModeChange);
    return () => window.removeEventListener('reading-mode-change', handleModeChange);
  }, []);

  const toggleReadingMode = () => {
    const modes = ['normal', 'immersive', 'focus', 'theater'];
    const currentIndex = modes.indexOf(readingMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    const nextMode = modes[nextIndex];

    setReadingMode(nextMode);
    localStorage.setItem('reading-mode', nextMode);

    // Apply mode class to body
    document.body.setAttribute('data-reading-mode', nextMode);
    document.body.classList.remove('reading-mode-immersive', 'reading-mode-focus', 'reading-mode-theater');
    if (nextMode !== 'normal') {
      document.body.classList.add(`reading-mode-${nextMode}`);
    }

    // Dispatch event
    window.dispatchEvent(new CustomEvent('reading-mode-change', {
      detail: { mode: nextMode }
    }));
  };

  const handleBookmarkToggle = () => {
    if (hasBookmark(pageUrl)) {
      removeBookmark(pageUrl);
    } else {
      saveBookmark();
    }
  };

  const getReadingModeLabel = () => {
    const labels: Record<string, string> = {
      'normal': 'Normal',
      'immersive': 'Immersive',
      'focus': 'Focus',
      'theater': 'Theater'
    };
    return labels[readingMode] || 'Normal';
  };

  const menuItems: MenuItem[] = [
    {
      icon: '❄️',
      label: 'Snow',
      onClick: () => {
        // This will be handled by moving the snow control here
        window.dispatchEvent(new CustomEvent('toggle-snow-panel'));
      },
    },
    {
      icon: '🌙',
      label: 'Theme',
      onClick: () => {
        window.dispatchEvent(new CustomEvent('toggle-theme'));
      },
    },
    {
      icon: '🔤',
      label: 'Font Size',
      onClick: () => {
        window.dispatchEvent(new CustomEvent('toggle-font-panel'));
      },
    },
    {
      icon: '🎨',
      label: 'Contrast',
      onClick: () => {
        window.dispatchEvent(new CustomEvent('toggle-contrast'));
      },
    },
    {
      icon: '🎬',
      label: 'Motion',
      onClick: () => {
        window.dispatchEvent(new CustomEvent('toggle-motion'));
      },
    },
    {
      icon: '📖',
      label: `Reading: ${getReadingModeLabel()}`,
      onClick: toggleReadingMode,
      isActive: readingMode !== 'normal',
    },
    {
      icon: hasBookmark(pageUrl) ? '🔖' : '📑',
      label: hasBookmark(pageUrl) ? 'Remove Bookmark' : 'Add Bookmark',
      onClick: handleBookmarkToggle,
      isActive: hasBookmark(pageUrl),
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      {/* FAB Container */}
      <div className="fixed bottom-24 right-6 z-[101]">
        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  {/* Label */}
                  <span className="glass px-3 py-2 rounded-lg text-sm text-ice-200 font-medium whitespace-nowrap shadow-lg">
                    {item.label}
                  </span>

                  {/* Icon Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    className={`glass rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-ice-500/20 transition-all shadow-lg ${
                      item.isActive ? 'bg-ice-500/30 ring-2 ring-ice-400/50' : ''
                    }`}
                    aria-label={item.label}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full p-4 hover:bg-ice-500/20 transition-all shadow-xl"
          aria-label="Settings"
          title="Open settings menu"
        >
          <motion.svg
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 text-ice-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            )}
          </motion.svg>
        </motion.button>
      </div>
    </>
  );
}
