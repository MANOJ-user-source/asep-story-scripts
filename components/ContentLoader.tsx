'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentLoaderProps {
  isLoading: boolean;
  children: ReactNode;
  variant?: 'text' | 'card' | 'hero' | 'list' | 'scene' | 'qte' | 'custom';
  customSkeleton?: ReactNode;
  delay?: number;
  fadeInDuration?: number;
}

/**
 * ContentLoader - Displays skeleton screens during loading with smooth reveal animations
 *
 * @param isLoading - Whether content is currently loading
 * @param children - The actual content to display when loaded
 * @param variant - Type of skeleton to show ('text', 'card', 'hero', 'list', 'scene', 'qte', 'custom')
 * @param customSkeleton - Custom skeleton component (used when variant='custom')
 * @param delay - Delay before showing skeleton (prevents flash for quick loads)
 * @param fadeInDuration - Duration of fade-in animation in seconds
 */
export default function ContentLoader({
  isLoading,
  children,
  variant = 'text',
  customSkeleton,
  delay = 200,
  fadeInDuration = 0.5,
}: ContentLoaderProps) {
  // Show skeleton based on variant
  const renderSkeleton = () => {
    if (variant === 'custom' && customSkeleton) {
      return customSkeleton;
    }

    switch (variant) {
      case 'text':
        return <TextSkeleton />;
      case 'card':
        return <CardSkeleton />;
      case 'hero':
        return <HeroSkeleton />;
      case 'list':
        return <ListSkeleton />;
      case 'scene':
        return <SceneSkeleton />;
      case 'qte':
        return <QTESkeleton />;
      default:
        return <TextSkeleton />;
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay / 1000 }}
        className="w-full"
      >
        {renderSkeleton()}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: fadeInDuration }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SKELETON COMPONENTS
// ============================================

function TextSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-ice-500/20 rounded w-3/4"></div>
      <div className="h-4 bg-ice-500/20 rounded w-full"></div>
      <div className="h-4 bg-ice-500/20 rounded w-5/6"></div>
      <div className="h-4 bg-ice-500/20 rounded w-4/5"></div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 animate-pulse space-y-4">
      <div className="h-6 bg-ice-500/20 rounded w-1/3"></div>
      <div className="space-y-3">
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-5/6"></div>
        <div className="h-4 bg-ice-500/20 rounded w-4/5"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-10 bg-ice-500/20 rounded w-24"></div>
        <div className="h-10 bg-ice-500/20 rounded w-24"></div>
      </div>
    </div>
  );
}

function HeroSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-ice-500/20 rounded w-2/3 mx-auto"></div>
      <div className="h-8 bg-ice-500/20 rounded w-1/2 mx-auto"></div>
      <div className="space-y-3 max-w-2xl mx-auto">
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-ice-500/20 rounded w-4/5 mx-auto"></div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="h-12 bg-ice-500/20 rounded w-32"></div>
        <div className="h-12 bg-ice-500/20 rounded w-32"></div>
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="h-10 w-10 bg-ice-500/20 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-ice-500/20 rounded w-3/4"></div>
            <div className="h-3 bg-ice-500/20 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SceneSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Scene header */}
      <div className="space-y-3">
        <div className="h-8 bg-ice-500/20 rounded w-1/2"></div>
        <div className="h-4 bg-ice-500/20 rounded w-1/4"></div>
      </div>

      {/* Scene content */}
      <div className="space-y-4">
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-11/12"></div>
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-5/6"></div>
      </div>

      {/* Dialogue box */}
      <div className="glass rounded-lg p-4 space-y-3">
        <div className="h-5 bg-ice-500/20 rounded w-1/4"></div>
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-4/5"></div>
      </div>

      {/* More content */}
      <div className="space-y-4">
        <div className="h-4 bg-ice-500/20 rounded w-full"></div>
        <div className="h-4 bg-ice-500/20 rounded w-11/12"></div>
        <div className="h-4 bg-ice-500/20 rounded w-5/6"></div>
      </div>
    </div>
  );
}

function QTESkeleton() {
  return (
    <div className="glass rounded-xl p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-6 bg-ice-500/20 rounded w-1/3 mx-auto"></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-24 bg-ice-500/20 rounded-lg"></div>
          <div className="h-24 bg-ice-500/20 rounded-lg"></div>
        </div>
        <div className="h-3 bg-ice-500/20 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  );
}

// ============================================
// PROGRESS BAR COMPONENT
// ============================================

interface LoadingProgressProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
}

export function LoadingProgress({
  progress,
  label = 'Loading',
  showPercentage = true,
}: LoadingProgressProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {label && (
        <div className="flex justify-between items-center text-sm text-ice-300">
          <span>{label}</span>
          {showPercentage && <span>{Math.round(progress)}%</span>}
        </div>
      )}
      <div className="h-2 bg-ice-900/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
          }}
        />
      </div>
    </div>
  );
}

// ============================================
// SPINNER COMPONENT
// ============================================

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function Spinner({ size = 'md', label }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`${sizeClasses[size]} border-3 border-ice-500/20 border-t-sky-500 rounded-full`}
      />
      {label && <p className="text-sm text-ice-300">{label}</p>}
    </div>
  );
}

// ============================================
// DOTS LOADER COMPONENT
// ============================================

export function DotsLoader({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-3 h-3 bg-sky-500 rounded-full"
          />
        ))}
      </div>
      {label && <p className="text-sm text-ice-300">{label}</p>}
    </div>
  );
}

// ============================================
// PULSE LOADER COMPONENT
// ============================================

export function PulseLoader({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative w-12 h-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute inset-0 border-2 border-sky-500 rounded-full"
          />
        ))}
      </div>
      {label && <p className="text-sm text-ice-300">{label}</p>}
    </div>
  );
}
