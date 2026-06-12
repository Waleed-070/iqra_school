import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Avatar } from './Avatar';

export default function Hero3DContainer() {
  const [animation, setAnimation] = useState("Standing");
  const waveTimeout = useRef(null);

  const triggerWave = () => {
    // Clear any existing timeout so we don't switch back to Standing too early
    if (waveTimeout.current) clearTimeout(waveTimeout.current);

    setAnimation("Waving");

    // Return to Standing after waving for a few seconds
    waveTimeout.current = setTimeout(() => {
      setAnimation("Standing");
      waveTimeout.current = null;
    }, 3500);
  };

  useEffect(() => {
    // Initial wave 2 seconds after load
    const startWave = setTimeout(() => {
      triggerWave();
    }, 2000);

    return () => {
      clearTimeout(startWave);
      if (waveTimeout.current) clearTimeout(waveTimeout.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[750px] flex items-center justify-center overflow-visible">
      
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

      <Canvas shadows camera={{ position: [0, 0.5, 3.5], fov: 40, near: 0.1, far: 1000 }}>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} target={[0, 0, 0]} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <group
            position={[0, -1.12, 0]}
            onClick={triggerWave}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
          >
            <ContactShadows
              opacity={0.5}
              scale={10}
              blur={2}
              far={10}
              resolution={256}
              color="#000000"
            />
            <Avatar animation={animation} scale={1.2} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
