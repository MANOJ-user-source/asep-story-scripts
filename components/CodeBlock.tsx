'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={copyToClipboard}
        className="absolute right-4 top-4 z-10 px-3 py-1.5 text-xs font-medium rounded-md glass text-ice-300 hover:text-ice-100 transition-colors"
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </motion.button>

      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} glass rounded-xl p-6 overflow-x-auto`}
            style={{ ...style, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
          >
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 text-ice-600 select-none">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
