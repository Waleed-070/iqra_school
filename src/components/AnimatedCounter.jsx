import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * AnimatedCounter.jsx - Animates a number counting up when it scrolls into view.
 */
function AnimatedCounter({ value, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Extract number and suffix
  const numberMatch = value.match(/\d+/);
  const numberPart = numberMatch ? parseInt(numberMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 50,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numberPart);
    }
  }, [isInView, motionValue, numberPart]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <p ref={ref} className={className}>
      0{suffix}
    </p>
  );
}

export default AnimatedCounter;
