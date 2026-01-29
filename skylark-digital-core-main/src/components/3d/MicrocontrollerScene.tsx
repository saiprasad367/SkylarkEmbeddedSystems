import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

// Microcontroller chip component
function Chip({ position = [0, 0, 0] as [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main chip body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.3, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Chip surface detail */}
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[1.6, 0.02, 1.6]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Pins - Left side */}
      {[-0.7, -0.35, 0, 0.35, 0.7].map((z, i) => (
        <mesh key={`left-${i}`} position={[-1.15, 0, z]}>
          <boxGeometry args={[0.3, 0.05, 0.08]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      ))}
      
      {/* Pins - Right side */}
      {[-0.7, -0.35, 0, 0.35, 0.7].map((z, i) => (
        <mesh key={`right-${i}`} position={[1.15, 0, z]}>
          <boxGeometry args={[0.3, 0.05, 0.08]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      ))}
      
      {/* Pins - Top side */}
      {[-0.7, -0.35, 0, 0.35, 0.7].map((x, i) => (
        <mesh key={`top-${i}`} position={[x, 0, -1.15]}>
          <boxGeometry args={[0.08, 0.05, 0.3]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      ))}
      
      {/* Pins - Bottom side */}
      {[-0.7, -0.35, 0, 0.35, 0.7].map((x, i) => (
        <mesh key={`bottom-${i}`} position={[x, 0, 1.15]}>
          <boxGeometry args={[0.08, 0.05, 0.3]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      ))}
      
      {/* LED indicator */}
      <mesh position={[0.5, 0.18, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
        <meshStandardMaterial 
          color="#00d4aa" 
          emissive="#00d4aa"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

// PCB Board component
function PCBBoard() {
  const boardRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Main PCB */}
      <mesh position={[0, -0.5, 0]} ref={boardRef}>
        <boxGeometry args={[5, 0.15, 4]} />
        <meshStandardMaterial 
          color="#0a5f38" 
          metalness={0.3} 
          roughness={0.6}
        />
      </mesh>
      
      {/* Circuit traces */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`trace-h-${i}`} position={[0, -0.42, -1.5 + i * 0.4]}>
          <boxGeometry args={[4.5, 0.01, 0.03]} />
          <meshStandardMaterial 
            color="#d4af37" 
            metalness={0.95} 
            roughness={0.1}
          />
        </mesh>
      ))}
      
      {[...Array(6)].map((_, i) => (
        <mesh key={`trace-v-${i}`} position={[-2 + i * 0.8, -0.42, 0]}>
          <boxGeometry args={[0.03, 0.01, 3.5]} />
          <meshStandardMaterial 
            color="#d4af37" 
            metalness={0.95} 
            roughness={0.1}
          />
        </mesh>
      ))}
      
      {/* Via holes */}
      {[
        [-1.5, 1], [-0.5, 1.2], [0.5, 0.8], [1.5, 1.4],
        [-1.2, -1], [0, -1.3], [1.2, -0.9],
      ].map(([x, z], i) => (
        <mesh key={`via-${i}`} position={[x, -0.41, z]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      ))}
      
      {/* Capacitors */}
      <mesh position={[-1.8, -0.35, -0.5]}>
        <cylinderGeometry args={[0.12, 0.12, 0.25, 16]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[1.8, -0.35, 0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      
      {/* Resistors */}
      {[[-1, 1.3], [0.3, 1.3], [1.5, -1.3]].map(([x, z], i) => (
        <mesh key={`resistor-${i}`} position={[x, -0.38, z]}>
          <boxGeometry args={[0.2, 0.1, 0.08]} />
          <meshStandardMaterial color="#2d2d2d" />
        </mesh>
      ))}
    </group>
  );
}

// Signal particle
function SignalParticle({ delay = 0 }) {
  const particleRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame((state) => {
    if (particleRef.current && materialRef.current) {
      const t = (state.clock.elapsedTime + delay) % 4;
      particleRef.current.position.x = -2.5 + t * 1.25;
      materialRef.current.opacity = Math.sin(t * Math.PI / 4);
    }
  });

  return (
    <mesh ref={particleRef} position={[-2.5, -0.4, 0.4]}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#00d4aa" 
        emissive="#00d4aa"
        emissiveIntensity={3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#00d4aa" />
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group rotation={[0.2, 0.5, 0]}>
          <Chip position={[0, 0.3, 0]} />
          <PCBBoard />
          <SignalParticle delay={0} />
          <SignalParticle delay={1} />
          <SignalParticle delay={2} />
          <SignalParticle delay={3} />
        </group>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <Environment preset="city" />
    </>
  );
}

export default function MicrocontrollerScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
