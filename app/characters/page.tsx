'use client';

import { motion } from 'framer-motion';
import CharacterCard from '@/components/CharacterCard';
import { useState } from 'react';
import { allCharacters } from '@/data/characters';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const allRoles = Array.from(new Set(allCharacters.map((char) => char.role)));
  const allStatuses = ['alive', 'deceased', 'unknown'];

  const filteredCharacters = allCharacters.filter((char) => {
    const matchesSearch =
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !selectedRole || char.role === selectedRole;
    const matchesStatus = !selectedStatus || char.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Character Database
          </h1>
          <p className="text-ice-400 text-lg max-w-2xl mx-auto">
            Meet the characters of ASEP. Click on any character to learn more about their story, relationships, and role in the narrative.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="text"
              placeholder="Search characters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass rounded-xl px-6 py-4 text-ice-100 placeholder-ice-500 focus:outline-none focus:ring-2 focus:ring-ice-400/50"
            />
          </motion.div>

          {/* Role Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <div className="text-ice-400 text-sm font-medium">Filter by Role:</div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedRole(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedRole === null
                    ? 'bg-ice-500 text-white'
                    : 'glass text-ice-300 hover:text-ice-100'
                }`}
              >
                All Roles
              </button>
              {allRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRole === role
                      ? 'bg-ice-500 text-white'
                      : 'glass text-ice-300 hover:text-ice-100'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Status Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <div className="text-ice-400 text-sm font-medium">Filter by Status:</div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedStatus(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedStatus === null
                    ? 'bg-ice-500 text-white'
                    : 'glass text-ice-300 hover:text-ice-100'
                }`}
              >
                All
              </button>
              {allStatuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-ice-500 text-white'
                      : 'glass text-ice-300 hover:text-ice-100'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-ice-500 text-sm"
        >
          Showing {filteredCharacters.length} of {allCharacters.length} characters
        </motion.div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character, index) => (
            <CharacterCard key={character.id} {...character} index={index} />
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-ice-400"
          >
            <p className="text-xl">No characters found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
