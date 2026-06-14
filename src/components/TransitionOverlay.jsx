import React, { useEffect, useState } from 'react';
import { useTransition } from '../context/TransitionContext';
import './TransitionOverlay.css';

export default function TransitionOverlay() {
  const { transitionState, setTransitionState, targetPath, isHomeModelLoaded } = useTransition();
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (transitionState === 'enter') {
      setIsShowing(true); // Bars sweep in
    } else if (transitionState === 'exit') {
      // If navigating to Home, wait for the 3D model
      if (targetPath === '/' && !isHomeModelLoaded) {
        // Wait...
      } else {
        setIsShowing(false); // Bars sweep out
        setTimeout(() => {
          setTransitionState('idle');
        }, 1000); // Give enough time for the retract animation to finish
      }
    }
  }, [transitionState, targetPath, isHomeModelLoaded, setTransitionState]);

  // If we are completely idle, don't render to save DOM nodes
  if (transitionState === 'idle') return null;

  return (
    <div className={`transition-overlay ${isShowing ? 'show' : ''}`}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className="transition-bar" />
      ))}
      <img 
        src="/ivsl3-logo.png" 
        alt="IQRA Logo" 
        className="transition-logo" 
      />
    </div>
  );
}
