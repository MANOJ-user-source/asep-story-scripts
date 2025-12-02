'use client';

import { useState, useEffect, useCallback } from 'react';

interface Bookmark {
  pageUrl: string;
  scrollPosition: number;
  sectionId?: string;
  timestamp: string;
  pageTitle?: string;
}

interface BookmarkReturn {
  bookmarks: Bookmark[];
  currentBookmark: Bookmark | null;
  saveBookmark: (pageTitle?: string, sectionId?: string) => void;
  removeBookmark: (pageUrl: string) => void;
  goToBookmark: (pageUrl: string) => void;
  hasBookmark: (pageUrl: string) => boolean;
}

export function useBookmark(pageUrl: string): BookmarkReturn {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [currentBookmark, setCurrentBookmark] = useState<Bookmark | null>(null);

  // Load all bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('reading-bookmarks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Bookmark[];
        setBookmarks(parsed);

        // Find current page bookmark
        const current = parsed.find(b => b.pageUrl === pageUrl);
        setCurrentBookmark(current || null);
      } catch (error) {
        console.error('Error loading bookmarks:', error);
      }
    }
  }, [pageUrl]);

  // Save bookmark for current page
  const saveBookmark = useCallback((pageTitle?: string, sectionId?: string) => {
    const scrollPosition = window.scrollY;

    const newBookmark: Bookmark = {
      pageUrl,
      scrollPosition,
      sectionId,
      timestamp: new Date().toISOString(),
      pageTitle: pageTitle || document.title,
    };

    setBookmarks(prevBookmarks => {
      // Remove existing bookmark for this page
      const filtered = prevBookmarks.filter(b => b.pageUrl !== pageUrl);
      const updated = [...filtered, newBookmark];

      // Save to localStorage
      localStorage.setItem('reading-bookmarks', JSON.stringify(updated));

      return updated;
    });

    setCurrentBookmark(newBookmark);

    // Show notification
    window.dispatchEvent(new CustomEvent('bookmark-saved', {
      detail: { bookmark: newBookmark }
    }));
  }, [pageUrl]);

  // Remove bookmark
  const removeBookmark = useCallback((urlToRemove: string) => {
    setBookmarks(prevBookmarks => {
      const filtered = prevBookmarks.filter(b => b.pageUrl !== urlToRemove);
      localStorage.setItem('reading-bookmarks', JSON.stringify(filtered));
      return filtered;
    });

    if (urlToRemove === pageUrl) {
      setCurrentBookmark(null);
    }

    // Show notification
    window.dispatchEvent(new CustomEvent('bookmark-removed', {
      detail: { pageUrl: urlToRemove }
    }));
  }, [pageUrl]);

  // Navigate to bookmark
  const goToBookmark = useCallback((urlToGo: string) => {
    const bookmark = bookmarks.find(b => b.pageUrl === urlToGo);
    if (bookmark) {
      if (bookmark.pageUrl === pageUrl) {
        // Same page, just scroll
        window.scrollTo({
          top: bookmark.scrollPosition,
          behavior: 'smooth'
        });
      } else {
        // Different page, navigate
        window.location.href = bookmark.pageUrl;
      }
    }
  }, [bookmarks, pageUrl]);

  // Check if page has bookmark
  const hasBookmark = useCallback((urlToCheck: string) => {
    return bookmarks.some(b => b.pageUrl === urlToCheck);
  }, [bookmarks]);

  return {
    bookmarks,
    currentBookmark,
    saveBookmark,
    removeBookmark,
    goToBookmark,
    hasBookmark,
  };
}
