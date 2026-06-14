import React, { createContext, useContext, useState, useCallback } from 'react';

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [transitionState, setTransitionState] = useState('idle'); // 'idle', 'enter', 'exit'
  const [isHomeModelLoaded, setIsHomeModelLoaded] = useState(false);
  const [targetPath, setTargetPath] = useState(null);
  
  const startTransition = useCallback((path, onEnterComplete) => {
    setTargetPath(path);
    setTransitionState('enter');
    
    // Crucial fix: Reset the loaded state so we don't accidentally reuse the 
    // "true" state from a previous visit to the home page!
    setIsHomeModelLoaded(false);
    
    // Wait for the bars to come down (10 bars * 0.05s delay + 0.5s duration)
    // About 1 second total.
    setTimeout(() => {
      onEnterComplete(); // Change the route
      
      // Tell overlay to exit (retract bars). 
      // If targetPath is '/', overlay will wait for isHomeModelLoaded.
      setTransitionState('exit');
    }, 1000); 
  }, []);

  return (
    <TransitionContext.Provider value={{
      transitionState,
      setTransitionState,
      startTransition,
      isHomeModelLoaded,
      setIsHomeModelLoaded,
      targetPath
    }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
