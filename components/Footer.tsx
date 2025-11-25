'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-ice-800/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-ice-100 mb-4">About ASEP</h3>
            <p className="text-ice-400 text-sm leading-relaxed">
              An action-adventure game set on the frozen planet of Estra.
              Explore detailed story scripts, cinematics, and game design documentation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-ice-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-ice-400 hover:text-ice-200 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/scripts" className="text-ice-400 hover:text-ice-200 text-sm transition-colors">
                  Story Scripts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ice-400 hover:text-ice-200 text-sm transition-colors">
                  About Game
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/MANOJ-user-source/asep-story-scripts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ice-400 hover:text-ice-200 text-sm transition-colors flex items-center gap-1"
                >
                  GitHub
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-ice-100 mb-4">Creator</h3>
            <p className="text-ice-400 text-sm mb-4">
              Game Design & Story<br />
              <span className="text-ice-300 font-semibold">Manoj Tiwari Ramchandra</span>
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/MANOJ-user-source"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:bg-ice-900/40 transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5 text-ice-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ice-800/30 text-center">
          <p className="text-ice-500 text-sm">
            © {new Date().getFullYear()} ASEP. All rights reserved. • Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ice-400 hover:text-ice-200 transition-colors"
            >
              Next.js
            </a>
            {' '}& {' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ice-400 hover:text-ice-200 transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
