'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface ScriptCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  index: number;
}

export default function ScriptCard({
  title,
  description,
  slug,
  date,
  tags,
  index,
}: ScriptCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/scripts/${slug}`}>
        <motion.article
          whileHover={{
            scale: 1.03,
            y: -8,
            rotateX: 2,
            rotateY: 2,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass rounded-xl p-6 h-full cursor-pointer group transition-all duration-300 hover:glow hover:shadow-2xl hover:border-ice-400"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-bold text-ice-100 group-hover:gradient-text transition-all">
                {title}
              </h2>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="text-ice-400 group-hover:text-ice-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </div>

            <p className="text-ice-300 mb-4 flex-grow line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-ice-900/40 text-ice-300 border border-ice-700 group-hover:border-ice-500 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="text-sm text-ice-400 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date}
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
