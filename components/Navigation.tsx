'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import FontSizeControl from './FontSizeControl';
import ContrastToggle from './ContrastToggle';

const MotionNav = motion.nav;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold gradient-text">
                ASEP
              </span>
            </MotionDiv>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/scripts">Story Scripts</NavLink>
              <NavLink href="/about">About Game</NavLink>
            </div>
            <FontSizeControl />
            <ContrastToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <FontSizeControl />
            <ContrastToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ice-300 hover:text-ice-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-ice-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/scripts" onClick={() => setIsOpen(false)}>
              Story Scripts
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
              About Game
            </MobileNavLink>
          </div>
        </MotionDiv>
      )}
    </MotionNav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <MotionSpan
        whileHover={{ scale: 1.05 }}
        className="text-ice-300 hover:text-ice-100 transition-colors cursor-pointer font-medium"
      >
        {children}
      </MotionSpan>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div className="block px-3 py-2 rounded-md text-base font-medium text-ice-300 hover:text-ice-100 hover:bg-ice-900/30 transition-colors">
        {children}
      </div>
    </Link>
  );
}
