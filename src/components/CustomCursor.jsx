import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // Smooth trailing effect for the outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      setIsVisible(true);
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

    const handleMouseLeave = () => setIsVisible(false);
    const handleBlur = () => setIsVisible(false); // Hides when interacting with iframe

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('blur', handleBlur);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Hide default cursor globally, except over iframes/canvas where custom cursor might lose track
  useEffect(() => {
    if (isTouchDevice) return;

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
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s ease-in-out', pointerEvents: 'none' }} className="fixed inset-0 z-[9999]">
      {/* Small dot that exactly follows cursor instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      
      {/* Larger trailing ring/blob */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-emerald-400/50 rounded-full pointer-events-none"
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
    </div>
  );
}
