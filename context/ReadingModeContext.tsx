'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ReadingMode = 'normal' | 'immersive' | 'focus' | 'theater';

interface ReadingModeContextType {
  mode: ReadingMode;
  setMode: (mode: ReadingMode) => void;
  toggleReadingMode: () => void;
}

const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ReadingMode>('normal');

  // Load saved mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('reading-mode') as ReadingMode;
    if (savedMode && ['normal', 'immersive', 'focus', 'theater'].includes(savedMode)) {
      setModeState(savedMode);
    }
  }, []);

  // Apply mode class to document body
  useEffect(() => {
    document.body.setAttribute('data-reading-mode', mode);

    // Apply specific classes for each mode
    const bodyClasses = document.body.classList;
    bodyClasses.remove('reading-mode-immersive', 'reading-mode-focus', 'reading-mode-theater');

    if (mode !== 'normal') {
      bodyClasses.add(`reading-mode-${mode}`);
    }
  }, [mode]);

  const setMode = (newMode: ReadingMode) => {
    setModeState(newMode);
    localStorage.setItem('reading-mode', newMode);

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('reading-mode-change', {
      detail: { mode: newMode }
    }));
  };

  const toggleReadingMode = () => {
    const modes: ReadingMode[] = ['normal', 'immersive', 'focus', 'theater'];
    const currentIndex = modes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setMode(modes[nextIndex]);
  };

  return (
    <ReadingModeContext.Provider value={{ mode, setMode, toggleReadingMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (context === undefined) {
    throw new Error('useReadingMode must be used within a ReadingModeProvider');
  }
  return context;
}
