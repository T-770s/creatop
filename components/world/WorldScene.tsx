'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Preload, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { BUSINESSES } from '@/data/businesses';
import BuildingMesh from './BuildingMesh';
import ParticleField from './ParticleField';
import { useRouter } from 'next/navigation';

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[120, 120, 40, 40]} />
      <meshStandardMaterial
        color="#050510"
        roughness={0.8}
        metalness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      (ref.current.material as THREE.LineBasicMaterial).opacity =
        0.08 + Math.sin(Date.now() * 0.001) * 0.02;
    }
  });
  return (
    <gridHelper
      ref={ref}
      args={[120, 60, '#6D28D9', '#1E1B4B']}
      position={[0, -1.49, 0]}
    />
  );
}

function AtmosphericLights() {
  return (
    <>
      <ambientLight intensity={0.15} color="#1a1040" />
      <directionalLight position={[20, 30, 10]} intensity={0.4} color="#8B5CF6" castShadow />
      <directionalLight position={[-20, 20, -10]} intensity={0.2} color="#06B6D4" />
      <pointLight position={[0, 10, 0]} intensity={1} color="#6D28D9" distance={40} decay={2} />
      <pointLight position={[15, 5, -15]} intensity={0.8} color="#06B6D4" distance={30} decay={2} />
      <pointLight position={[-15, 5, 10]} intensity={0.6} color="#D4AF37" distance={25} decay={2} />
    </>
  );
}

interface WorldSceneProps {
  onBusinessSelect?: (slug: string) => void;
}

export default function WorldScene({ onBusinessSelect }: WorldSceneProps) {
  const router = useRouter();

  const handleSelect = (slug: string) => {
    if (onBusinessSelect) onBusinessSelect(slug);
    else router.push(`/business/${slug}`);
  };

  return (
    <Canvas
      camera={{ position: [0, 18, 28], fov: 55, near: 0.1, far: 500 }}
      shadows
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
      style={{ background: '#030303' }}
    >
      <fog attach="fog" args={['#030303', 30, 90]} />

      <Suspense fallback={null}>
        <AtmosphericLights />
        <Ground />
        <GridFloor />
        <Stars radius={80} depth={60} count={4000} factor={3} saturation={0.5} fade speed={0.5} />

        {/* Multi-layer particle fields */}
        <ParticleField count={2000} radius={25} color="#6D28D9" speed={0.03} />
        <ParticleField count={800} radius={15} color="#06B6D4" speed={0.05} />
        <ParticleField count={400} radius={8} color="#D4AF37" speed={0.08} />

        {/* Business buildings */}
        {BUSINESSES.map(business => (
          <BuildingMesh
            key={business.id}
            business={business}
            onClick={() => handleSelect(business.slug)}
          />
        ))}

        <Preload all />
      </Suspense>

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration offset={[0.0005, 0.0005]} />
      </EffectComposer>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={8}
        maxDistance={60}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
