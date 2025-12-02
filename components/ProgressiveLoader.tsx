'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContentLoader from './ContentLoader';

interface ProgressiveLoaderProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  showSkeleton?: boolean;
  skeletonVariant?: 'text' | 'card' | 'hero' | 'list' | 'scene' | 'qte';
}

/**
 * ProgressiveLoader - Loads and reveals children progressively with stagger animation
 *
 * @param children - Array of React elements to load progressively
 * @param delay - Initial delay before starting to load items (ms)
 * @param staggerDelay - Delay between each item reveal (ms)
 * @param showSkeleton - Show skeleton screens while loading
 * @param skeletonVariant - Type of skeleton to show
 */
export default function ProgressiveLoader({
  children,
  delay = 0,
  staggerDelay = 100,
  showSkeleton = false,
  skeletonVariant = 'text',
}: ProgressiveLoaderProps) {
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set());
  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    childrenArray.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setLoadedIndices((prev) => {
          const newSet = new Set(prev);
          newSet.add(index);
          return newSet;
        });
      }, delay + index * staggerDelay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [delay, staggerDelay]);

  return (
    <div className="space-y-4">
      {childrenArray.map((child, index) => {
        const isLoaded = loadedIndices.has(index);

        if (showSkeleton) {
          return (
            <ContentLoader
              key={index}
              isLoading={!isLoaded}
              variant={skeletonVariant}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="stagger-item"
              >
                {child}
              </motion.div>
            </ContentLoader>
          );
        }

        return (
          <AnimatePresence key={index}>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: 0,
                }}
                className="stagger-item"
              >
                {child}
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
}

// ============================================
// LAZY LOAD WRAPPER
// ============================================

interface LazyLoadWrapperProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  fadeInDuration?: number;
}

/**
 * LazyLoadWrapper - Loads content when it enters the viewport
 *
 * @param children - Content to lazy load
 * @param threshold - Intersection observer threshold (0-1)
 * @param rootMargin - Margin around root for early loading
 * @param placeholder - Content to show before loading
 * @param fadeInDuration - Duration of fade-in animation
 */
export function LazyLoadWrapper({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  placeholder,
  fadeInDuration = 0.5,
}: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, hasLoaded]);

  return (
    <div ref={setRef}>
      <AnimatePresence mode="wait">
        {!isVisible && placeholder && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {placeholder}
          </motion.div>
        )}
        {isVisible && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: fadeInDuration }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// BATCH LOADER
// ============================================

interface BatchLoaderProps {
  children: ReactNode[];
  batchSize?: number;
  batchDelay?: number;
  showLoadMoreButton?: boolean;
  loadMoreText?: string;
}

/**
 * BatchLoader - Loads children in batches with optional "Load More" button
 *
 * @param children - Array of React elements to load in batches
 * @param batchSize - Number of items per batch
 * @param batchDelay - Delay between auto-loading batches (0 = manual only)
 * @param showLoadMoreButton - Show manual "Load More" button
 * @param loadMoreText - Text for load more button
 */
export function BatchLoader({
  children,
  batchSize = 5,
  batchDelay = 0,
  showLoadMoreButton = true,
  loadMoreText = 'Load More',
}: BatchLoaderProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [visibleCount, setVisibleCount] = useState(batchSize);

  useEffect(() => {
    if (batchDelay === 0 || visibleCount >= childrenArray.length) return;

    const timeout = setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + batchSize, childrenArray.length));
    }, batchDelay);

    return () => clearTimeout(timeout);
  }, [visibleCount, batchSize, batchDelay, childrenArray.length]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + batchSize, childrenArray.length));
  };

  const hasMore = visibleCount < childrenArray.length;

  return (
    <div className="space-y-4">
      <ProgressiveLoader staggerDelay={50}>
        {childrenArray.slice(0, visibleCount)}
      </ProgressiveLoader>

      {hasMore && showLoadMoreButton && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
            className="glass px-6 py-3 rounded-lg text-ice-300 hover:bg-ice-500/20 transition-all"
          >
            {loadMoreText}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

// ============================================
// SECTION LOADER (for scenes/sections)
// ============================================

interface SectionLoaderProps {
  sections: {
    id: string;
    content: ReactNode;
  }[];
  autoLoad?: boolean;
  threshold?: number;
}

/**
 * SectionLoader - Progressively loads sections as user scrolls
 * Perfect for long story scenes
 *
 * @param sections - Array of section objects with id and content
 * @param autoLoad - Auto-load sections as they enter viewport
 * @param threshold - Intersection threshold for auto-load
 */
export function SectionLoader({
  sections,
  autoLoad = true,
  threshold = 0.1,
}: SectionLoaderProps) {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(
    new Set([sections[0]?.id])
  );

  const handleSectionVisible = (sectionId: string) => {
    if (autoLoad) {
      setLoadedSections((prev) => {
        const newSet = new Set(prev);
        newSet.add(sectionId);
        return newSet;
      });
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        const isLoaded = loadedSections.has(section.id);
        const isPrevious = index === 0 || loadedSections.has(sections[index - 1]?.id);

        // Auto-load if previous section is loaded
        if (autoLoad && isPrevious && !isLoaded) {
          setTimeout(() => handleSectionVisible(section.id), 100);
        }

        return (
          <div key={section.id}>
            {isLoaded ? (
              <LazyLoadWrapper
                threshold={threshold}
                placeholder={
                  <ContentLoader isLoading={true} variant="scene">
                    <div />
                  </ContentLoader>
                }
              >
                {section.content}
              </LazyLoadWrapper>
            ) : (
              <ContentLoader isLoading={true} variant="scene">
                <div />
              </ContentLoader>
            )}
          </div>
        );
      })}
    </div>
  );
}
