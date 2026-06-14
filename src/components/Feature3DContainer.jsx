import * as THREE from 'three';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF, Center, useTexture, Text } from '@react-three/drei';
import { useInView } from 'framer-motion';
import { Avatar } from './Avatar';

function Chair(props) {
  const { scene } = useGLTF('/models/chair.glb');
  return <primitive object={scene} {...props} />;
}

const vec = new THREE.Vector3();
const posVec = new THREE.Vector3();

function CameraRig({ isZoomed, position, scale }) {
  useFrame((state) => {
    // Calculate approximate world position of the monitor center
    const monitorWorldX = position[0] + (0.351 * scale);
    const monitorWorldY = position[1] + (1.3125 * scale);
    const monitorWorldZ = position[2] + (-0.515 * scale);

    // We add an X offset to orbit the camera to the right, rotating the Y viewing angle!
    const targetPos = isZoomed 
      ? vec.set(monitorWorldX - 0.75, monitorWorldY, monitorWorldZ + 0.9) 
      : vec.set(0, 0.5, 3.5);

    const targetLook = isZoomed
      ? posVec.set(monitorWorldX, monitorWorldY, monitorWorldZ) 
      : posVec.set(position[0], position[1] + 1.5, position[2]);

    state.camera.position.lerp(targetPos, 0.05);
    state.camera.lookAt(targetLook);
  });
  return null;
}

function Desk({ isZoomed, setIsZoomed, isMobile, ...props }) {
  const { scene } = useGLTF('/models/pc_desk.glb');
  const logoTexture = useTexture('/ivsl3-logo.png');
  const [hovered, setHovered] = useState(false);

  return (
    <group {...props}>
      <Center bottom disableY>
        <primitive object={scene} />

        <group 
          position={[0.01, 1.3125, -0.515]} 
          rotation={[0, 0, -0.01]} 
          scale={1.15}
          onClick={(e) => {
            e.stopPropagation();
            if (!isZoomed) {
              setIsZoomed(true);
            }
          }}
          onPointerOver={() => {
            if (!isZoomed) {
              document.body.style.cursor = 'pointer';
            }
            setHovered(true);
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
            setHovered(false);
          }}
        >
          <mesh>
            <planeGeometry args={[0.85, 0.35]} />
            <meshBasicMaterial color="#F0F0F0" />
          </mesh>
          
          <mesh position={[0, 0, 0.001]} scale={1.15}>
            <planeGeometry args={[0.25, 0.25]} />
            <meshBasicMaterial map={logoTexture} transparent depthWrite={false} />
          </mesh>

          {/* Hover Tooltip (WebGL) */}
          {hovered && !isMobile && !isZoomed && (
            <group position={[0, 0, 0.02]}>
              <mesh position={[0, 0, -0.001]}>
                <planeGeometry args={[0.45, 0.12]} />
                <meshBasicMaterial color="#059669" transparent opacity={0.9} /> {/* Emerald-600 background */}
              </mesh>
              <Text fontSize={0.045} color="white" fontWeight="bold" anchorX="center" anchorY="middle">
                Click to Zoom
              </Text>
            </group>
          )}
        </group>
      </Center>
    </group>
  );
}

export default function Feature3DContainer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const [scale, setScale] = useState(1.2);
  const [position, setPosition] = useState([-0.75, -1.5, -1]);
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth < 640) {
        // Mobile screens: Make it prominent
        setScale(1.0);
        setPosition([0, -1.2, -1.2]);
      } else if (window.innerWidth < 1024) {
        // Tablet screens
        setScale(1.0);
        setPosition([0.0, -1.3, -1]);
      } else {
        // Desktop screens
        setScale(1.2);
        setPosition([-0.15, -1.5, -1]);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[50vh] md:h-[600px] min-h-[400px] flex items-center justify-center overflow-visible z-10 select-none">
      
      {/* Highly Visible Exit Zoom Button */}
      {isZoomed && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(false);
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(5,150,105,0.6)] text-white flex items-center gap-3 cursor-pointer group animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-black tracking-widest uppercase text-base">Zoom Out</span>
        </button>
      )}

      <Canvas
        dpr={[1, 1.5]}
        frameloop={isInView ? 'always' : 'demand'}
        camera={{ position: [0, 0.5, 3.5], fov: 40, near: 0.1, far: 1000 }}
        style={{ touchAction: 'pan-y' }}
      >
        <CameraRig isZoomed={isZoomed} position={position} scale={scale} />
        
        <Environment preset="city" />

        <Suspense fallback={null}>
          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, position[1], 0]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#FAFAF9" /> {/* Matches Stone White background */}
          </mesh>

          {/* Wall */}
          <mesh position={[0, position[1] + 25, -5]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#EAE7E0" /> {/* Limestone color to contrast slightly with the floor */}
          </mesh>
          <group
            position={position}
            rotation={[0, Math.PI / 1.25, 0]}
            scale={scale}
          >
            <Avatar animation="Typing2" scale={1.2} visible={!isZoomed} />
            <Chair position={[0, 0, 0.2]} rotation={[0, Math.PI / 2, 0]} scale={1.2} />
            <Desk position={[0, 0, 1.10]} rotation={[0, Math.PI, 0]} scale={0.91} isZoomed={isZoomed} setIsZoomed={setIsZoomed} isMobile={isMobile} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/chair.glb');
useGLTF.preload('/models/pc_desk.glb');