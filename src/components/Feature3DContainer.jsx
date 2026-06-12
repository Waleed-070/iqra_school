import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF, Center } from '@react-three/drei';
import { Avatar } from './Avatar';

function Chair(props) {
  const { scene } = useGLTF('/models/chair.glb');
  return <primitive object={scene} {...props} />;
}

function Desk(props) {
  const { scene } = useGLTF('/models/pc_desk.glb');
  // Wrapping the desk in a <Center> component fixes its pivot point so it rotates from the center
  return (
    <group {...props}>
      <Center bottom disableY>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function Feature3DContainer() {
  const [scale, setScale] = useState(1.2);
  const [position, setPosition] = useState([-0.75, -1.5, -1]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile screens: smaller scale, shifted slightly to fit
        setScale(0.85);
        setPosition([-0.4, -1.1, -1]);
      } else if (window.innerWidth < 1024) {
        // Tablet screens
        setScale(1.0);
        setPosition([-0.6, -1.3, -1]);
      } else {
        // Desktop screens
        setScale(1.2);
        setPosition([-0.75, -1.5, -1]);
      }
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-visible z-10">
      <Canvas shadows camera={{ position: [0, 0.5, 3.5], fov: 40, near: 0.1, far: 1000 }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
          target={[0, 0, 0]} 
        />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          {/* Soft 3D floor plane - dynamically moves up/down with the character */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, position[1], 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#FAFAF9" /> {/* Matches Stone White background */}
          </mesh>

          <group 
            position={position}
            rotation={[0, Math.PI / 1.65, 0]}
            scale={scale}
          >
            <ContactShadows
              opacity={0.3}
              scale={10}
              blur={2}
              far={10}
              resolution={256}
              color="#1C352D" // Deep Pine shadow
            />
            <Avatar animation="Typing2" scale={1.2} />
            <Chair position={[0, 0, 0.2]} rotation={[0, Math.PI / 2, 0]} scale={1.2} />
            <Desk position={[0, 0, 1.14]} rotation={[0, Math.PI, 0]} scale={0.85} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the models
useGLTF.preload('/models/chair.glb');
useGLTF.preload('/models/pc_desk.glb');
