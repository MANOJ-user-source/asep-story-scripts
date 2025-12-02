'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (activeId) {
      const activeElement = document.querySelector(`button[data-toc-id="${activeId}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed left-4 top-20 z-[60] glass rounded-lg p-3 hover:bg-ice-500/10 transition-all"
        aria-label="Toggle table of contents"
      >
        <svg
          className="w-6 h-6 text-ice-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      {/* Desktop TOC - Always visible */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block fixed left-0 top-20 bottom-0 w-72 p-6 overflow-y-auto border-r border-ice-500/20 bg-gradient-to-b from-[#0a0e1a]/95 to-[#0c1428]/95 backdrop-blur-sm z-10"
      >
        <div className="sticky top-0">
          <h3 className="text-sm font-bold mb-6 text-ice-100 uppercase tracking-widest flex items-center gap-2">
            <svg className="w-5 h-5 text-ice-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            On This Page
          </h3>
          <nav>
            <ul className="space-y-1">
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                >
                  <motion.button
                    whileHover={{ x: 2 }}
                    onClick={() => scrollToSection(item.id)}
                    data-toc-id={item.id}
                    className={`text-left text-sm transition-all w-full py-2 px-3 rounded-md ${
                      activeId === item.id
                        ? 'text-ice-100 font-semibold bg-ice-500/20 border-l-2 border-ice-400'
                        : 'text-ice-400 hover:text-ice-200 hover:bg-ice-900/20 border-l-2 border-transparent'
                    }`}
                  >
                    {item.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {/* Mobile TOC - Slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
            />

            {/* Slide-in panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-full w-80 max-w-[85vw] p-6 overflow-y-auto glass border-r border-ice-500/20 z-[60]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-ice-100 uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-5 h-5 text-ice-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  On This Page
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-ice-500/10 rounded-lg transition-all"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-ice-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                    >
                      <motion.button
                        whileHover={{ x: 2 }}
                        onClick={() => scrollToSection(item.id)}
                        data-toc-id={item.id}
                        className={`text-left text-sm transition-all w-full py-2 px-3 rounded-md ${
                          activeId === item.id
                            ? 'text-ice-100 font-semibold bg-ice-500/20 border-l-2 border-ice-400'
                            : 'text-ice-400 hover:text-ice-200 hover:bg-ice-900/20 border-l-2 border-transparent'
                        }`}
                      >
                        {item.title}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
