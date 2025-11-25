'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 gradient-text"
        >
          About ASEP
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-ice-100">The Game</h2>
          <p className="text-ice-300 leading-relaxed mb-4">
            ASEP is an action-adventure game set on the frozen planet of Estra. Experience
            intense cinematic sequences, engaging Quick Time Events, and a story-driven narrative
            that unfolds through carefully crafted scenes.
          </p>
          <p className="text-ice-300 leading-relaxed">
            This documentation provides detailed story scripts, gameplay mechanics, and design
            documentation for ASEP, created by Manoj Tiwari Ramchandra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-ice-100">Key Features</h2>
          <ul className="space-y-3 text-ice-300">
            <li className="flex items-start">
              <span className="text-ice-400 mr-3">✓</span>
              <span>Cinematic story-driven gameplay</span>
            </li>
            <li className="flex items-start">
              <span className="text-ice-400 mr-3">✓</span>
              <span>Dynamic Quick Time Events (QTE)</span>
            </li>
            <li className="flex items-start">
              <span className="text-ice-400 mr-3">✓</span>
              <span>Immersive sci-fi environment on frozen planet Estra</span>
            </li>
            <li className="flex items-start">
              <span className="text-ice-400 mr-3">✓</span>
              <span>Consequence-based gameplay mechanics</span>
            </li>
            <li className="flex items-start">
              <span className="text-ice-400 mr-3">✓</span>
              <span>Detailed story scripts and design documentation</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8 border-ice-500/30"
        >
          <h2 className="text-3xl font-bold mb-4 text-ice-100">About the Creator</h2>
          <p className="text-ice-400 text-sm leading-relaxed">
            ASEP is created and designed by Manoj Tiwari Ramchandra. This documentation serves
            as a comprehensive guide to the game's story, mechanics, and design philosophy.
            All content is original work and represents the creative vision for this
            action-adventure experience set in a frozen sci-fi world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
