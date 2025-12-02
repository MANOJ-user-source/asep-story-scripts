'use client';

import { useState, useEffect, useCallback } from 'react';

interface ContentLoaderOptions {
  minLoadingTime?: number; // Minimum time to show loading state (prevents flash)
  simulateDelay?: number; // Simulate network delay for testing
  enableProgressTracking?: boolean;
}

interface ContentLoaderReturn {
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  stopLoading: () => void;
  setProgress: (progress: number) => void;
  withLoading: <T>(asyncFn: () => Promise<T>) => Promise<T>;
}

/**
 * Hook for managing content loading states with progress tracking
 *
 * @param options - Configuration options
 * @returns Loading state and control functions
 */
export function useContentLoader(
  options: ContentLoaderOptions = {}
): ContentLoaderReturn {
  const {
    minLoadingTime = 300,
    simulateDelay = 0,
    enableProgressTracking = false,
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  // Start loading
  const startLoading = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    setLoadingStartTime(Date.now());
  }, []);

  // Stop loading (respects minimum loading time)
  const stopLoading = useCallback(() => {
    const elapsed = loadingStartTime ? Date.now() - loadingStartTime : 0;
    const remainingTime = Math.max(0, minLoadingTime - elapsed);

    setTimeout(() => {
      setIsLoading(false);
      setProgress(100);
      setLoadingStartTime(null);
    }, remainingTime);
  }, [loadingStartTime, minLoadingTime]);

  // Wrap async function with loading state
  const withLoading = useCallback(
    async <T,>(asyncFn: () => Promise<T>): Promise<T> => {
      startLoading();

      try {
        // Simulate delay if specified
        if (simulateDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, simulateDelay));
        }

        const result = await asyncFn();
        return result;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading, simulateDelay]
  );

  // Auto-increment progress if tracking is enabled
  useEffect(() => {
    if (!enableProgressTracking || !isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // Cap at 90% until manually completed
        return prev + Math.random() * 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading, enableProgressTracking]);

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading,
    setProgress,
    withLoading,
  };
}

// ============================================
// PROGRESSIVE LOADING HOOK
// ============================================

interface ProgressiveLoadItem {
  id: string;
  loaded: boolean;
  data?: any;
}

interface ProgressiveLoadReturn {
  items: ProgressiveLoadItem[];
  isComplete: boolean;
  progress: number;
  loadItem: (id: string, data?: any) => void;
  reset: () => void;
}

/**
 * Hook for progressive/lazy loading of multiple items
 *
 * @param itemIds - Array of item IDs to track
 * @returns Progressive loading state and control functions
 */
export function useProgressiveLoad(itemIds: string[]): ProgressiveLoadReturn {
  const [items, setItems] = useState<ProgressiveLoadItem[]>(() =>
    itemIds.map((id) => ({ id, loaded: false }))
  );

  // Mark item as loaded
  const loadItem = useCallback((id: string, data?: any) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, loaded: true, data } : item
      )
    );
  }, []);

  // Reset all items
  const reset = useCallback(() => {
    setItems((prev) => prev.map((item) => ({ ...item, loaded: false, data: undefined })));
  }, []);

  // Calculate progress
  const loadedCount = items.filter((item) => item.loaded).length;
  const progress = itemIds.length > 0 ? (loadedCount / itemIds.length) * 100 : 0;
  const isComplete = loadedCount === itemIds.length;

  return {
    items,
    isComplete,
    progress,
    loadItem,
    reset,
  };
}

// ============================================
// LAZY LOAD HOOK (for images, components, etc.)
// ============================================

interface LazyLoadOptions {
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
  once?: boolean; // Only trigger once
}

interface LazyLoadReturn {
  ref: (node: HTMLElement | null) => void;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

/**
 * Hook for lazy loading elements when they enter the viewport
 *
 * @param options - Intersection observer options
 * @returns Ref to attach to element and visibility state
 */
export function useLazyLoad(options: LazyLoadOptions = {}): LazyLoadReturn {
  const { threshold = 0.1, rootMargin = '50px', once = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!node) return;

    // Skip if already been visible and once is true
    if (once && hasBeenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible) {
          setHasBeenVisible(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, threshold, rootMargin, once, hasBeenVisible]);

  return {
    ref: setNode,
    isVisible,
    hasBeenVisible,
  };
}

// ============================================
// PRELOAD HOOK (for critical resources)
// ============================================

interface PreloadOptions {
  priority?: 'high' | 'low';
  as?: 'image' | 'script' | 'style' | 'font';
}

/**
 * Hook to preload critical resources
 *
 * @param urls - Array of resource URLs to preload
 * @param options - Preload options
 */
export function usePreload(urls: string[], options: PreloadOptions = {}) {
  const { priority = 'high', as = 'image' } = options;

  useEffect(() => {
    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = as;
      if (priority === 'high') {
        link.setAttribute('fetchpriority', 'high');
      }
      document.head.appendChild(link);
    });
  }, [urls, priority, as]);
}
