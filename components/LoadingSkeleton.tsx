'use client';

import { motion } from 'framer-motion';

export function CardSkeleton() {
  return (
    <div className="glass rounded-xl p-6 h-full">
      <div className="flex flex-col h-full">
        {/* Title skeleton */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 bg-ice-800/50 rounded-lg mb-3 w-3/4"
        />

        {/* Description skeleton */}
        <div className="space-y-2 mb-4 flex-grow">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            className="h-4 bg-ice-800/50 rounded w-full"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="h-4 bg-ice-800/50 rounded w-5/6"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="h-4 bg-ice-800/50 rounded w-4/6"
          />
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 + i * 0.1 }}
              className="h-6 w-16 bg-ice-800/50 rounded-full"
            />
          ))}
        </div>

        {/* Date skeleton */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="h-4 bg-ice-800/50 rounded w-32"
        />
      </div>
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Header skeleton */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-12 bg-ice-800/50 rounded-lg w-2/3 mb-8"
      />

      {/* Metadata skeleton */}
      <div className="glass rounded-xl p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                className="h-8 bg-ice-800/50 rounded mb-2 mx-auto w-16"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 + 0.2 }}
                className="h-4 bg-ice-800/50 rounded mx-auto w-20"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content paragraphs skeleton */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="space-y-2">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
            className="h-4 bg-ice-800/50 rounded w-full"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 + 0.1 }}
            className="h-4 bg-ice-800/50 rounded w-11/12"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 + 0.2 }}
            className="h-4 bg-ice-800/50 rounded w-10/12"
          />
        </div>
      ))}
    </div>
  );
}
