'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CopySceneButtonProps {
  sceneTitle: string;
  contentSelector?: string;
}

export default function CopySceneButton({ sceneTitle, contentSelector = 'main' }: CopySceneButtonProps) {
  const [copied, setCopied] = useState(false);

  const copySceneContent = async () => {
    try {
      const mainContent = document.querySelector(contentSelector);
      if (!mainContent) return;

      // Extract text content, preserving structure
      let textContent = `${sceneTitle}\n${'='.repeat(sceneTitle.length)}\n\n`;

      // Get all text nodes while preserving structure
      const walker = document.createTreeWalker(
        mainContent,
        NodeFilter.SHOW_TEXT,
        null
      );

      let node;
      while ((node = walker.nextNode())) {
        const text = node.textContent?.trim();
        if (text && text.length > 0) {
          textContent += text + '\n';
        }
      }

      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={copySceneContent}
      className="glass rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-ice-500/20 transition-all"
      title="Copy scene text"
    >
      {copied ? (
        <>
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm text-green-400 font-medium">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5 text-ice-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-ice-300 font-medium">Copy Text</span>
        </>
      )}
    </motion.button>
  );
}
