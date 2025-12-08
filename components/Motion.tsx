'use client';

import { motion, HTMLMotionProps, MotionProps } from 'framer-motion';
import { ComponentType, forwardRef, useState, useEffect } from 'react';

// Create motion components that are safe for SSG
// They render as regular HTML during SSR/SSG and as motion components on client

type MotionComponent<T extends keyof JSX.IntrinsicElements> = ComponentType<HTMLMotionProps<T>>;

function createSafeMotion<T extends keyof JSX.IntrinsicElements>(
  Component: MotionComponent<T>,
  fallbackTag: T
) {
  return forwardRef<HTMLElement, HTMLMotionProps<T>>((props, ref) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      // During SSG/SSR, strip motion props and render plain HTML
      const {
        initial, animate, exit, transition, variants,
        whileHover, whileTap, whileFocus, whileDrag, whileInView,
        drag, dragConstraints, dragElastic, dragMomentum, dragSnapToOrigin,
        layout, layoutId, onAnimationStart, onAnimationComplete,
        onDragStart, onDragEnd, onDrag, onViewportEnter, onViewportLeave,
        ...htmlProps
      } = props as any;

      const Tag = fallbackTag as any;
      return <Tag ref={ref} {...htmlProps} />;
    }

    return <Component ref={ref as any} {...props} />;
  });
}

// Export safe motion components
export const SafeMotionDiv = createSafeMotion(motion.div, 'div');
export const SafeMotionSpan = createSafeMotion(motion.span, 'span');
export const SafeMotionButton = createSafeMotion(motion.button, 'button');
export const SafeMotionNav = createSafeMotion(motion.nav, 'nav');
export const SafeMotionH1 = createSafeMotion(motion.h1, 'h1');
export const SafeMotionH2 = createSafeMotion(motion.h2, 'h2');
export const SafeMotionP = createSafeMotion(motion.p, 'p');
export const SafeMotionA = createSafeMotion(motion.a, 'a');
export const SafeMotionSection = createSafeMotion(motion.section, 'section');
export const SafeMotionArticle = createSafeMotion(motion.article, 'article');
export const SafeMotionUl = createSafeMotion(motion.ul, 'ul');
export const SafeMotionLi = createSafeMotion(motion.li, 'li');

// Re-export motion for convenience
export { motion };
