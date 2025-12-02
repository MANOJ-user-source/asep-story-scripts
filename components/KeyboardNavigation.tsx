'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface KeyboardNavigationProps {
  prevUrl?: string;
  nextUrl?: string;
}

export default function KeyboardNavigation({ prevUrl, nextUrl }: KeyboardNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input, textarea, or contenteditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          if (prevUrl) {
            e.preventDefault();
            router.push(prevUrl);
          }
          break;
        case 'ArrowRight':
          if (nextUrl) {
            e.preventDefault();
            router.push(nextUrl);
          }
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          router.push('/');
          break;
        case 's':
        case 'S':
          e.preventDefault();
          router.push('/scripts');
          break;
        case '?':
          // Show keyboard shortcuts help
          e.preventDefault();
          showKeyboardHelp();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevUrl, nextUrl, router]);

  const showKeyboardHelp = () => {
    const helpContent = `
KEYBOARD SHORTCUTS:

Navigation:
  ←     Previous scene
  →     Next scene
  H     Home page
  S     Scripts page
  ?     Show this help

Tips:
  - Use arrow keys to navigate between scenes
  - Press ESC to close modals
  - Tab to move through interactive elements
    `.trim();

    alert(helpContent);
  };

  return null; // This component doesn't render anything
}
