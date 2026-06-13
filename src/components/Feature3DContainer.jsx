import * as THREE from 'three';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF, Center, Html } from '@react-three/drei';
import { Avatar } from './Avatar';

function Chair(props) {
  const { scene } = useGLTF('/models/chair.glb');
  return <primitive object={scene} {...props} />;
}

const vec = new THREE.Vector3();
const posVec = new THREE.Vector3();

function CameraRig({ isZoomed, targetObj, posObj, defaultPos, defaultTarget, controlsRef }) {
  useFrame((state) => {
    if (!controlsRef.current) return;

    if (isZoomed && targetObj && posObj) {
      targetObj.getWorldPosition(vec);
      posObj.getWorldPosition(posVec);
    } else {
      vec.set(...defaultTarget);
      posVec.set(...defaultPos);
    }

    // Smoothly interpolate camera position and target
    state.camera.position.lerp(posVec, 0.05);
    controlsRef.current.target.lerp(vec, 0.05);
    controlsRef.current.update();
  });
  return null;
}

function Desk({ isZoomed, onZoomIn, ...props }) {
  const { scene } = useGLTF('/models/pc_desk.glb');
  const monitorRef = useRef();
  const camSpotRef = useRef();

  return (
    <group {...props}>
      <Center bottom disableY>
        <primitive object={scene} />

        {/* Reference points for the camera to move to */}
        <group ref={monitorRef} position={[0.01, 1.33, -0.51]} />
        <group ref={camSpotRef} position={[0.01, 1.33, 1.0]} /> {/* Spot slightly further back from the screen */}

        {/* Iframe projected onto the monitor screen */}
        <Html
          transform
          wrapperClass="monitor-screen"
          distanceFactor={0.5}
          position={[0.01, 1.32, -0.51]} 
          rotation={[0, 0, 0]} 
          scale={[1.08, 0.78, 1]}
          occlude="blending" 
        >
          <div className="relative" style={{ backfaceVisibility: "hidden" }}>
            {/* Outer Breathing Neon Glow (Not clipped by overflow-hidden) */}
            {!isZoomed && (
              <div className="absolute -inset-6 border-[8px] border-emerald-300 rounded-2xl shadow-[0_0_100px_rgba(52,211,153,1),inset_0_0_50px_rgba(52,211,153,0.8)] animate-pulse pointer-events-none" />
            )}

            <div
              className="w-[800px] h-[500px] bg-slate-900 overflow-hidden rounded-lg flex items-center justify-center pointer-events-auto relative group"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://iqravirtualschool.com/"
                className="w-full h-full"
              />
              
              {/* HTML Overlay to perfectly intercept clicks when not zoomed in */}
              {!isZoomed && (
                <div 
                  className="absolute inset-0 cursor-pointer flex items-center justify-center group/overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    onZoomIn(monitorRef.current, camSpotRef.current);
                  }}
                >
                  {/* Hover state background */}
                  <div className="absolute inset-0 bg-black/0 group-hover/overlay:bg-white/10 transition-colors duration-300 pointer-events-none" />
                  
                  <div className="-translate-y-40 bg-emerald-600 text-white px-14 py-8 rounded-[3rem] font-black text-5xl tracking-widest opacity-0 group-hover/overlay:opacity-100 transition-all duration-300 pointer-events-none shadow-[0_0_60px_rgba(5,150,105,1)] border-[6px] border-emerald-400 transform scale-95 group-hover/overlay:scale-100 flex items-center gap-6">
                    <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span>Click to Interact</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Html>
      </Center>
    </group>
  );
}

export default function Feature3DContainer() {
  const [scale, setScale] = useState(1.2);
  const [position, setPosition] = useState([-0.75, -1.5, -1]);
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomRefs, setZoomRefs] = useState({ target: null, pos: null });
  const controlsRef = useRef();

  const handleZoomIn = (targetObj, posObj) => {
    setZoomRefs({ target: targetObj, pos: posObj });
    setIsZoomed(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth < 640) {
        // Mobile screens: smaller scale, shifted right
        setScale(0.85);
        setPosition([0.1, -1.1, -1]);
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

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-visible z-10 select-none">
      {/* Explicit Exit Zoom Button */}
      {isZoomed && (
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={() => setIsZoomed(false)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>Exit Screen</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0.5, 3.5], fov: 40, near: 0.1, far: 1000 }}
        style={{ touchAction: 'pan-y' }}
        onPointerMissed={() => setIsZoomed(false)} // Click outside to zoom back out
      >
        <CameraRig 
          isZoomed={isZoomed} 
          targetObj={zoomRefs.target} 
          posObj={zoomRefs.pos} 
          defaultPos={[0, 0.5, 3.5]} 
          defaultTarget={[position[0], position[1] + 1.5, position[2]]}
          controlsRef={controlsRef}
        />

        {/* OrbitControls always rendered so CameraRig has a target, but interaction disabled when zooming or on mobile */}
        <OrbitControls
          ref={controlsRef}
          enabled={!isMobile && !isZoomed}
          enableZoom={false}
          enablePan={false}
          target={[position[0], position[1] + 1.5, position[2]]}
        />
        
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
            rotation={[0, Math.PI / 1.5, 0]}
            scale={scale}
          >
            <Avatar animation="Typing2" scale={1.2} visible={!isZoomed} />
            <Chair position={[0, 0, 0.2]} rotation={[0, Math.PI / 2, 0]} scale={1.2} />
            <Desk position={[0, 0, 1.05]} rotation={[0, Math.PI, 0]} scale={0.85} isZoomed={isZoomed} onZoomIn={handleZoomIn} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the models
useGLTF.preload('/models/chair.glb');
useGLTF.preload('/models/pc_desk.glb');
