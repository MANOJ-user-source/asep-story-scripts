'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getScriptNavigation } from '@/data/scripts';

interface ScriptNavigationProps {
  currentSlug: string;
}

export default function ScriptNavigation({ currentSlug }: ScriptNavigationProps) {
  const { prev, next } = getScriptNavigation(currentSlug);

  if (!prev && !next) return null;

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-8">
      <div className="glass rounded-xl p-6">
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
          {/* Previous Button */}
          {prev ? (
            <Link href={`/scripts/${prev.slug}`} className="flex-1">
              <motion.div
                whileHover={{ x: -5 }}
                className="h-full p-4 rounded-lg bg-ice-900/40 hover:bg-ice-800/40 transition-colors cursor-pointer group"
              >
                <div className="flex items-center text-ice-400 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Script
                </div>
                <div className="text-ice-100 font-semibold line-clamp-2">
                  {prev.title}
                </div>
              </motion.div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {/* Next Button */}
          {next ? (
            <Link href={`/scripts/${next.slug}`} className="flex-1">
              <motion.div
                whileHover={{ x: 5 }}
                className="h-full p-4 rounded-lg bg-ice-900/40 hover:bg-ice-800/40 transition-colors cursor-pointer group text-right"
              >
                <div className="flex items-center justify-end text-ice-400 text-sm mb-2">
                  Next Script
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-ice-100 font-semibold line-clamp-2">
                  {next.title}
                </div>
              </motion.div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
