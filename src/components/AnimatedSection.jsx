/**
 * AnimatedSection.jsx - Wrapper component for scroll-triggered animations.
 * Uses Framer Motion's whileInView to animate children as they enter the viewport.
 */
import { motion } from 'framer-motion';

function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  /* Calculate initial position based on direction */
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const { x, y } = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
