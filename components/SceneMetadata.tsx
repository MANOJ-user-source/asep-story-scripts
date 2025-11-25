'use client';

import { motion } from 'framer-motion';

interface SceneMetadataProps {
  wordCount: number;
  readTime: number;
  lastUpdated: string;
  version: string;
}

export default function SceneMetadata({ wordCount, readTime, lastUpdated, version }: SceneMetadataProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 mb-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-ice-300 mb-1">
            {wordCount.toLocaleString()}
          </div>
          <div className="text-sm text-ice-500">Words</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-ice-300 mb-1">
            {readTime} min
          </div>
          <div className="text-sm text-ice-500">Read Time</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-ice-300 mb-1">
            v{version}
          </div>
          <div className="text-sm text-ice-500">Version</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-ice-300 mb-1">
            {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
          <div className="text-sm text-ice-500">Updated</div>
        </div>
      </div>
    </motion.div>
  );
}
