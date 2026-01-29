import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface Product3DViewerProps {
  imageUrl: string;
  productName: string;
}

function ProductBoard({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load the product image as a texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle auto-rotation when not being controlled
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Main display board */}
      <RoundedBox
        ref={meshRef}
        args={[3.5, 2.5, 0.15]}
        radius={0.05}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? '#1a1a1a' : '#0a0a0a'}
          metalness={0.3}
          roughness={0.7}
        />
      </RoundedBox>

      {/* Product image on front */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[3.2, 2.2]} />
        <meshStandardMaterial 
          map={texture} 
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>

      {/* Back panel */}
      <mesh position={[0, 0, -0.08]}>
        <planeGeometry args={[3.2, 2.2]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.5}
          roughness={0.8}
        />
      </mesh>

      {/* Circuit trace decorations on sides */}
      <mesh position={[1.8, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.15, 2.3]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-1.8, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[0.15, 2.3]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} />
      </mesh>

      {/* LED indicator */}
      <mesh position={[1.5, 1.1, 0.1]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial 
          color="#22c55e" 
          emissive="#22c55e" 
          emissiveIntensity={2}
        />
      </mesh>

      {/* Bottom mounting */}
      <mesh position={[0, -1.35, 0]}>
        <boxGeometry args={[2, 0.1, 0.3]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[3, 2, 0.1]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

export default function Product3DViewer({ imageUrl, productName }: Product3DViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
      {/* Loading overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onAnimationComplete={() => setIsLoading(false)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-secondary"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
            />
            <span className="text-sm text-muted-foreground">Loading 3D View...</span>
          </div>
        </motion.div>
      )}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#0ea5e9" />
        <pointLight position={[0, 3, 3]} intensity={0.5} color="#ffffff" />
        
        <ProductBoard imageUrl={imageUrl} />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        <Environment preset="studio" />
      </Canvas>

      {/* Interaction hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs text-muted-foreground flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}
