import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth trailing effect for the outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.tagName?.toLowerCase() === 'input' ||
        target.tagName?.toLowerCase() === 'textarea' ||
        target.tagName?.toLowerCase() === 'select' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor globally, except over iframes/canvas where custom cursor might lose track
  useEffect(() => {
    document.body.style.cursor = 'none';
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.style.cursor = 'none';
    });

    return () => {
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        el.style.cursor = 'pointer';
      });
    };
  }, []);

  return (
    <>
      {/* Small dot that exactly follows cursor instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      
      {/* Larger trailing ring/blob */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-emerald-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)",
          borderColor: isHovering ? "rgba(16, 185, 129, 0.8)" : "rgba(16, 185, 129, 0.5)"
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
    </>
  );
}
