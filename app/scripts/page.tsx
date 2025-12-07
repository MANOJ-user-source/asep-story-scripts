'use client';

import { motion } from 'framer-motion';
import ScriptCard from '@/components/ScriptCard';
import { useState } from 'react';
import { allScripts } from '@/data/scripts';

export default function ScriptsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(allScripts.flatMap((script) => script.tags))
  );

  const filteredScripts = allScripts.filter((script) => {
    const matchesSearch = script.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      script.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || script.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 gradient-text"
        >
          Story Scripts
        </motion.h1>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="text"
              placeholder="Search story scripts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass rounded-xl px-6 py-4 text-ice-100 placeholder-ice-500 focus:outline-none focus:ring-2 focus:ring-ice-400/50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-ice-500 text-white'
                  : 'glass text-ice-300 hover:text-ice-100'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-ice-500 text-white'
                    : 'glass text-ice-300 hover:text-ice-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Scripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScripts.map((script, index) => (
            <ScriptCard key={script.slug} {...script} index={index} />
          ))}
        </div>

        {filteredScripts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-ice-400"
          >
            <p className="text-xl">No scripts found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
