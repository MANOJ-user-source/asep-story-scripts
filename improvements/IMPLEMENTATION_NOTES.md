# Implementation Notes & Code Examples

Detailed technical guidance for implementing each improvement.

---

## 2. Text Readability Improvements

### Implementation Steps:

1. **Update Paragraph component:**
```tsx
function Paragraph({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <p className={`
      text-ice-300
      leading-relaxed
      max-w-prose
      mx-auto
      mb-6
      ${italic ? 'italic text-ice-400' : ''}
    `}
    style={{ lineHeight: '1.9' }}
    >
      {children}
    </p>
  );
}
```

2. **Update Section component:**
```tsx
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="glass rounded-xl p-8 mb-8 scroll-mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-ice-100 border-b border-ice-700 pb-3">
        {title}
      </h2>
      <div className="space-y-6"> {/* Changed from space-y-4 */}
        {children}
      </div>
    </section>
  );
}
```

3. **Update main content wrapper:**
```tsx
<div className="max-w-7xl mx-auto lg:ml-72">
  <div className="py-20 px-4 md:px-8"> {/* Added horizontal padding */}
    <main className="max-w-4xl mx-auto"> {/* Center content */}
      {/* Content */}
    </main>
  </div>
</div>
```

---

## 3. Consolidated FAB Settings Menu

### File Structure:
```
components/
├── SettingsFAB.tsx          (Main component)
├── SettingsFABContext.tsx   (Context for state)
└── settings/
    ├── SnowControl.tsx
    ├── ThemeControl.tsx
    ├── FontSizeControl.tsx
    ├── ContrastControl.tsx
    ├── ReadingModeControl.tsx
    └── ReduceMotionControl.tsx
```

### Main Component:
```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SnowControl from './settings/SnowControl';
import ThemeControl from './settings/ThemeControl';
import FontSizeControl from './settings/FontSizeControl';
import ContrastControl from './settings/ContrastControl';
import ReadingModeControl from './settings/ReadingModeControl';
import ReduceMotionControl from './settings/ReduceMotionControl';

export default function SettingsFAB() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: '❄️', label: 'Snow', component: SnowControl },
    { icon: '🌙', label: 'Theme', component: ThemeControl },
    { icon: '🔤', label: 'Font Size', component: FontSizeControl },
    { icon: '🎨', label: 'Contrast', component: ContrastControl },
    { icon: '📖', label: 'Reading Mode', component: ReadingModeControl },
    { icon: '🎬', label: 'Motion', component: ReduceMotionControl },
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
      <div className="fixed bottom-6 right-6 z-[101]">
        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
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
                  <span className="glass px-3 py-2 rounded-lg text-sm text-ice-200 font-medium whitespace-nowrap">
                    {item.label}
                  </span>

                  {/* Icon Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-ice-500/20 transition-all shadow-lg"
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
          whileHover={{ scale: 1.05, rotate: isOpen ? 90 : 0 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full p-4 hover:bg-ice-500/20 transition-all shadow-xl"
          aria-label="Settings"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            )}
          </motion.svg>
        </motion.button>
      </div>
    </>
  );
}
```

### Integration:
```tsx
// In layout.tsx
import SettingsFAB from '@/components/SettingsFAB';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SnowEffect />
        <ReadingProgress />
        <Navigation />
        <SettingsFAB /> {/* Add here */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 5. Reduce Motion Toggle

### Hook Implementation:
```tsx
// hooks/useReducedMotion.ts
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
  };

  return { shouldReduceMotion, setReduceMotion };
}
```

### Context Provider:
```tsx
// context/MotionContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MotionContextType {
  shouldReduceMotion: boolean;
  setReduceMotion: (value: boolean) => void;
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
```

### Usage in Components:
```tsx
// In SnowEffect.tsx
import { useMotion } from '@/context/MotionContext';

export default function SnowEffect() {
  const { shouldReduceMotion } = useMotion();

  // Don't render if reduced motion is enabled
  if (shouldReduceMotion) return null;

  // Rest of component...
}
```

---

## 6. Reading Position Auto-Save

### Hook Implementation:
```tsx
// hooks/useReadingProgress.ts
'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface ReadingPosition {
  scrollPosition: number;
  sectionId: string | null;
  timestamp: string;
}

export function useReadingProgress() {
  const pathname = usePathname();
  const [savedPosition, setSavedPosition] = useState<ReadingPosition | null>(null);

  // Load saved position on mount
  useEffect(() => {
    const saved = localStorage.getItem(`reading-position-${pathname}`);
    if (saved) {
      try {
        setSavedPosition(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved position', e);
      }
    }
  }, [pathname]);

  // Save position on scroll (debounced)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const position: ReadingPosition = {
          scrollPosition: window.scrollY,
          sectionId: getCurrentSection(),
          timestamp: new Date().toISOString(),
        };

        localStorage.setItem(
          `reading-position-${pathname}`,
          JSON.stringify(position)
        );
      }, 2000); // Debounce 2 seconds
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const restorePosition = useCallback(() => {
    if (savedPosition) {
      window.scrollTo({
        top: savedPosition.scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [savedPosition]);

  const clearPosition = useCallback(() => {
    localStorage.removeItem(`reading-position-${pathname}`);
    setSavedPosition(null);
  }, [pathname]);

  return {
    savedPosition,
    restorePosition,
    clearPosition,
    hasSavedPosition: savedPosition !== null,
  };
}

function getCurrentSection(): string | null {
  // Find the section currently in view
  const sections = document.querySelectorAll('section[id]');

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      return section.id;
    }
  }

  return null;
}
```

### Component:
```tsx
// components/ContinueReading.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReadingProgress } from '@/hooks/useReadingProgress';

export default function ContinueReading() {
  const { savedPosition, restorePosition, clearPosition, hasSavedPosition } = useReadingProgress();

  if (!hasSavedPosition) return null;

  const timeSince = getTimeSince(savedPosition!.timestamp);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-50 glass rounded-xl p-4 shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-ice-200 font-medium mb-1">
              Continue reading?
            </p>
            <p className="text-ice-400 text-sm">
              You left off {timeSince} ago
              {savedPosition!.sectionId && ` at "${savedPosition!.sectionId}"`}
            </p>
          </div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restorePosition}
              className="px-4 py-2 bg-ice-500 hover:bg-ice-400 rounded-lg text-white font-medium transition-colors"
            >
              Continue
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearPosition}
              className="px-4 py-2 glass hover:bg-ice-900/40 rounded-lg text-ice-300 transition-colors"
            >
              Start Over
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function getTimeSince(timestamp: string): string {
  const now = new Date();
  const then = new Date(timestamp);
  const diff = now.getTime() - then.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? 's' : ''}`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  return 'just now';
}
```

---

## 8. Reading Mode Toggle

### Types:
```typescript
// types/reading-mode.ts
export type ReadingMode = 'normal' | 'immersive' | 'focus' | 'theater';

export interface ReadingModeState {
  mode: ReadingMode;
  setMode: (mode: ReadingMode) => void;
}
```

### Context:
```tsx
// context/ReadingModeContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ReadingMode, ReadingModeState } from '@/types/reading-mode';

const ReadingModeContext = createContext<ReadingModeState | undefined>(undefined);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ReadingMode>('normal');

  useEffect(() => {
    const saved = localStorage.getItem('readingMode') as ReadingMode;
    if (saved) setModeState(saved);
  }, []);

  const setMode = (newMode: ReadingMode) => {
    setModeState(newMode);
    localStorage.setItem('readingMode', newMode);
  };

  return (
    <ReadingModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (!context) {
    throw new Error('useReadingMode must be used within ReadingModeProvider');
  }
  return context;
}
```

### CSS Classes:
```css
/* In globals.css */

/* Immersive Mode - Hide UI */
.reading-mode-immersive nav,
.reading-mode-immersive aside,
.reading-mode-immersive footer,
.reading-mode-immersive .settings-fab {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.reading-mode-immersive nav:hover,
.reading-mode-immersive aside:hover,
.reading-mode-immersive .settings-fab:hover {
  opacity: 1;
  pointer-events: auto;
}

/* Focus Mode - Dim non-active sections */
.reading-mode-focus section:not(.active-section) {
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.reading-mode-focus section.active-section {
  opacity: 1;
}

/* Theater Mode - Narrow content */
.reading-mode-theater main {
  max-width: 800px !important;
  margin: 0 auto;
}
```

---

## Testing Templates

### Mobile Test Checklist:
```markdown
- [ ] iOS Safari (iPhone 12+)
- [ ] iOS Safari (iPhone SE)
- [ ] Android Chrome (Pixel 6)
- [ ] Android Chrome (Galaxy S21)
- [ ] iPad Safari
- [ ] Android Tablet
```

### Accessibility Test Checklist:
```markdown
- [ ] Screen reader (NVDA/JAWS)
- [ ] Keyboard-only navigation
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Semantic HTML structure
```

---

**Last Updated:** 2025-11-28
