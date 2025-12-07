'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Character } from '@/data/characters';

interface CharacterCardProps extends Character {
  index: number;
}

export default function CharacterCard({
  id,
  name,
  role,
  description,
  status,
  traits,
  index,
}: CharacterCardProps) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-xl overflow-hidden group"
    >
      <Link href={`/characters/${id}`}>
        <div className="p-6">
          {/* Header with name and status */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-ice-100 group-hover:text-ice-300 transition-colors">
              {name}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>

          {/* Role badge */}
          <div className="mb-4">
            <span className={`text-xs px-3 py-1 rounded-full ${roleColors[role] || 'bg-ice-700/30 text-ice-300'}`}>
              {role}
            </span>
          </div>

          {/* Description */}
          <p className="text-ice-400 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Traits */}
          {traits && traits.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {traits.slice(0, 3).map((trait) => (
                <span
                  key={trait}
                  className="text-xs px-2 py-1 bg-ice-900/50 text-ice-400 rounded"
                >
                  {trait}
                </span>
              ))}
              {traits.length > 3 && (
                <span className="text-xs px-2 py-1 text-ice-500">
                  +{traits.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* View more indicator */}
          <div className="mt-4 pt-4 border-t border-ice-800/50 flex items-center justify-between">
            <span className="text-ice-500 text-sm">View Profile</span>
            <motion.span
              className="text-ice-400"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
