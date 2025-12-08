'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getCharacterById, allCharacters } from '@/data/characters';

export default function CharacterPageClient({ id }: { id: string }) {
  const character = getCharacterById(id);

  if (!character) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ice-100 mb-4">Character Not Found</h1>
          <p className="text-ice-400 mb-8">The character you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/characters">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 glass rounded-xl text-ice-100"
            >
              Back to Characters
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    alive: 'bg-green-500/20 text-green-300 border-green-500/50',
    deceased: 'bg-red-500/20 text-red-300 border-red-500/50',
    unknown: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
  };

  const roleColors: Record<string, string> = {
    'Protagonist': 'bg-ice-500/30 text-ice-200',
    'Supporting Character': 'bg-purple-500/30 text-purple-200',
    'Key Character': 'bg-cyan-500/30 text-cyan-200',
    'Minor Character': 'bg-gray-500/30 text-gray-300',
    'Background Character': 'bg-gray-600/30 text-gray-400',
  };

  // Find related characters
  const relatedCharacters = character.relationships
    ?.map((rel) => {
      const found = allCharacters.find(
        (c) => c.name.toLowerCase().includes(rel.name.toLowerCase()) || c.id === rel.name.toLowerCase()
      );
      return found ? { ...found, relation: rel.relation } : null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/characters">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center text-ice-400 hover:text-ice-200 mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Character Database
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl p-8 mb-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {character.name}
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className={`px-4 py-1 rounded-full text-sm ${roleColors[character.role] || 'bg-ice-700/30 text-ice-300'}`}>
                  {character.role}
                </span>
                <span className={`px-4 py-1 rounded-full text-sm border ${statusColors[character.status]}`}>
                  {character.status.charAt(0).toUpperCase() + character.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-ice-300 text-lg leading-relaxed">
            {character.description}
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* First Appearance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-ice-200 mb-3 flex items-center">
              <span className="mr-2">📍</span> First Appearance
            </h3>
            <p className="text-ice-400">{character.firstAppearance}</p>
          </motion.div>

          {/* Affiliation */}
          {character.affiliation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-ice-200 mb-3 flex items-center">
                <span className="mr-2">🏢</span> Affiliation
              </h3>
              <p className="text-ice-400">{character.affiliation}</p>
            </motion.div>
          )}

          {/* Traits */}
          {character.traits && character.traits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-ice-200 mb-3 flex items-center">
                <span className="mr-2">✨</span> Character Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {character.traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-ice-800/50 text-ice-300 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Relationships */}
          {character.relationships && character.relationships.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-ice-200 mb-3 flex items-center">
                <span className="mr-2">👥</span> Relationships
              </h3>
              <div className="space-y-2">
                {character.relationships.map((rel, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-ice-300">{rel.name}</span>
                    <span className="text-ice-500">{rel.relation}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Full Bio */}
        {character.fullBio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-ice-100 mb-6 border-b border-ice-700 pb-3">
              Full Biography
            </h2>
            <div className="text-ice-300 leading-relaxed whitespace-pre-line">
              {character.fullBio}
            </div>
          </motion.div>
        )}

        {/* Related Characters */}
        {relatedCharacters && relatedCharacters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-ice-100 mb-6 border-b border-ice-700 pb-3">
              Related Characters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCharacters.map((relChar: any) => (
                <Link key={relChar.id} href={`/characters/${relChar.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-ice-900/30 rounded-lg p-4 hover:bg-ice-800/30 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-ice-200 font-medium">{relChar.name}</h4>
                        <p className="text-ice-500 text-sm">{relChar.role}</p>
                      </div>
                      <span className="text-ice-400 text-xs bg-ice-800/50 px-2 py-1 rounded">
                        {relChar.relation}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
