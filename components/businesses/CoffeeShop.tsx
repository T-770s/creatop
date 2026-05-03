'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

function SteamParticles({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const time = useRef(0);

  const { positions, speeds, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2;
      pos[i * 3 + 1] = Math.random() * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      spd[i] = 0.2 + Math.random() * 0.4;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, speeds: spd, phases: ph };
  }, [count]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  useFrame((_, delta) => {
    time.current += delta;
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta;
      arr[i * 3] += Math.sin(time.current + phases[i]) * 0.004;
      if (arr[i * 3 + 1] > 3.5) arr[i * 3 + 1] = 0;
    }
    pos.needsUpdate = true;
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = 0.4 + Math.sin(time.current) * 0.1;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.08}
        color="#E8E0D0"
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CoffeeCup({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * (hovered ? 1.2 : 0.3);
      ref.current.scale.setScalar(
        THREE.MathUtils.lerp(ref.current.scale.x, hovered ? 1.12 : 1, delta * 5)
      );
    }
  });

  return (
    <Float speed={2} floatIntensity={0.3}>
      <group
        ref={ref}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        {/* Cup body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.22, 0.5, 32]} />
          <meshStandardMaterial
            color="#6F4E37"
            roughness={0.2}
            metalness={0.6}
            emissive="#3D2B1F"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
        {/* Coffee liquid */}
        <mesh position={[0, 0.22, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.04, 32]} />
          <meshStandardMaterial color="#1A0A05" roughness={0.05} metalness={0} />
        </mesh>
        {/* Cup rim */}
        <mesh position={[0, 0.26, 0]}>
          <torusGeometry args={[0.28, 0.015, 8, 32]} />
          <meshStandardMaterial color="#8B6340" roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.38, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.14, 0.03, 8, 20, Math.PI]} />
          <meshStandardMaterial color="#C4956A" roughness={0.3} metalness={0.5} />
        </mesh>
        {/* Saucer */}
        <mesh position={[0, -0.28, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.46, 0.05, 32]} />
          <meshStandardMaterial color="#EDE0CC" roughness={0.4} metalness={0.1} />
        </mesh>
        {hovered && <pointLight color="#FF9500" intensity={2} distance={3} decay={2} />}
      </group>
    </Float>
  );
}

function WoodenTable() {
  return (
    <group>
      {/* Table top */}
      <mesh position={[0, -0.6, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2.0, 1.9, 0.1, 32]} />
        <meshStandardMaterial color="#4A2F1A" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Table edge detail */}
      <mesh position={[0, -0.64, 0]}>
        <torusGeometry args={[1.95, 0.025, 8, 64]} />
        <meshStandardMaterial color="#6B4423" roughness={0.3} metalness={0.3} />
      </mesh>
      {/* Table leg */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 12]} />
        <meshStandardMaterial color="#3D2414" roughness={0.5} />
      </mesh>
      {/* Leg base */}
      <mesh position={[0, -1.78, 0]} receiveShadow>
        <cylinderGeometry args={[0.6, 0.5, 0.06, 16]} />
        <meshStandardMaterial color="#3D2414" roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function CoffeeShopExperience() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 52 }}
      shadows
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 1.5]}
      style={{ background: '#1A0F08', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.25} color="#FF9500" />
      <pointLight position={[2, 5, 2]} intensity={4} color="#FFD700" distance={14} decay={2} castShadow />
      <pointLight position={[-2, 3, -2]} intensity={2} color="#FF6600" distance={10} decay={2} />
      <spotLight
        position={[0, 6, 0]}
        intensity={3}
        angle={0.45}
        penumbra={0.6}
        color="#FFF5E0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Warm fill light from below */}
      <pointLight position={[0, -1, 0]} intensity={0.5} color="#8B4513" distance={6} decay={2} />

      <WoodenTable />

      <CoffeeCup position={[-0.8, -0.48, 0.3]} />
      <CoffeeCup position={[0.75, -0.48, -0.15]} />
      <CoffeeCup position={[0.05, -0.48, -0.55]} />

      <group position={[0, -0.35, 0]}>
        <SteamParticles count={50} />
      </group>

      <Sparkles count={25} scale={4} size={1.2} speed={0.15} opacity={0.35} color="#FFD700" />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.85, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#120A04" roughness={0.9} />
      </mesh>

      <Environment preset="night" />
    </Canvas>
  );
}
