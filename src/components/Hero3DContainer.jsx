import { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useProgress } from '@react-three/drei';
import { useInView } from 'framer-motion';
import { Avatar } from './Avatar';
import { useTransition } from '../context/TransitionContext';

// We no longer need ModelLoaderNotifier, as we rely on the Avatar's onFirstFrame callback

export default function Hero3DContainer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [animation, setAnimation] = useState("Standing");
  const [isMobile, setIsMobile] = useState(false);
  const waveTimeout = useRef(null);
  const { transitionState, setIsHomeModelLoaded } = useTransition();
  const hasLoadedRef = useRef(false);

  const handleModelLoaded = useCallback(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    // 1. The Avatar has officially rendered its very first frame (visibly in Standing pose).
    // We give it an extra 400ms just to let the scene settle gracefully.
    setTimeout(() => {
      // 2. Start waving while the transition bars are still covering the screen!
      setAnimation("Waving");
      
      // 3. Give the arm 300ms to lift into the air (accounts for the crossfade)
      setTimeout(() => {
        // 4. Retract the transition bars! The user will see the character mid-wave.
        setIsHomeModelLoaded(true);

        // 5. Return to Standing (idle) after waving
        waveTimeout.current = setTimeout(() => {
          setAnimation("Standing");
          waveTimeout.current = null;
        }, 3500);

      }, 300);
    }, 400);
  }, [setIsHomeModelLoaded]);

  const triggerWave = () => {
    if (waveTimeout.current) clearTimeout(waveTimeout.current);

    setAnimation("Waving");

    waveTimeout.current = setTimeout(() => {
      setAnimation("Standing");
      waveTimeout.current = null;
    }, 3500);
  };

  // Handle mobile screen size check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      if (waveTimeout.current) clearTimeout(waveTimeout.current);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] sm:h-[500px] lg:h-[750px] flex items-center justify-center overflow-visible">
      
      {/* Architectural Archway Frame (Signature Element) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] h-[85%] border-t border-l border-r border-gold-500/40 bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none"
        style={{ borderRadius: '50vw 50vw 0 0' }}
      >
        {/* Inner Arch decorative line */}
        <div 
          className="absolute inset-2 border-t border-l border-r border-gold-500/20 pointer-events-none" 
          style={{ borderRadius: '48vw 48vw 0 0' }} 
        />
        {/* Arch Glow */}
        <div className="absolute inset-0 bg-gold-500/5 filter blur-3xl rounded-t-full" />
      </div>

      <Canvas 
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        frameloop={isInView || transitionState !== 'idle' ? 'always' : 'demand'}
        camera={{ position: [0, 0.5, 3.5], fov: 40, near: 0.1, far: 1000 }}
        style={{ touchAction: 'pan-y' }}
      >
        {!isMobile && (
          <OrbitControls target={[0, 0, 0]} enableZoom={false} enablePan={false} />
        )}
        <Environment preset="city" />
        {/* Removed ModelLoaderNotifier */}

        <Suspense fallback={null}>
          <group
            position={[0, -1.12, 0]}
            onClick={triggerWave}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
          >
            <Avatar animation={animation} scale={1.2} onFirstFrame={handleModelLoaded} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
