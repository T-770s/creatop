'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles } from '@react-three/drei';
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
    (ref.current.material as THREE.PointsMaterial).opacity = 0.4 + Math.sin(time.current) * 0.1;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.08} color="#E8E0D0" transparent opacity={0.4} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function CoffeeCup({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={2} floatIntensity={0.3}>
      <group ref={ref} position={position}>
        {/* Cup body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.22, 0.5, 32]} />
          <meshStandardMaterial color="#6F4E37" roughness={0.2} metalness={0.6} emissive="#3D2B1F" emissiveIntensity={0.3} />
        </mesh>
        {/* Coffee inside */}
        <mesh position={[0, 0.22, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.05, 32]} />
          <meshStandardMaterial color="#1A0A05" roughness={0.1} metalness={0} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.38, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.14, 0.03, 8, 20, Math.PI]} />
          <meshStandardMaterial color="#C4956A" roughness={0.3} metalness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function MenuItem({ text, price, position, color }: { text: string; price: string; position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const [hov, setHov] = useState(false);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, hov ? 1.15 : 1, delta * 6));
    }
  });
  return (
    <group
      ref={ref}
      position={position}
      onPointerEnter={() => setHov(true)}
      onPointerLeave={() => setHov(false)}
    >
      <mesh>
        <planeGeometry args={[1.6, 0.35]} />
        <meshStandardMaterial color={hov ? color : '#1A0F08'} roughness={0.5} transparent opacity={0.9} emissive={color} emissiveIntensity={hov ? 0.4 : 0.05} />
      </mesh>
    </group>
  );
}

function useState<T>(init: T): [T, (v: T) => void] {
  const [s, setS] = (require('react') as typeof import('react')).useState(init);
  return [s, setS];
}

export default function CoffeeShopExperience() {
  return (
    <Canvas
      camera={{ position: [0, 2, 7], fov: 50 }}
      shadows
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 1.5]}
      style={{ background: '#1A0F08', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.3} color="#FF9500" />
      <pointLight position={[2, 4, 2]} intensity={3} color="#FFD700" distance={12} decay={2} castShadow />
      <pointLight position={[-2, 2, -2]} intensity={1.5} color="#FF6600" distance={8} decay={2} />
      <spotLight position={[0, 6, 0]} intensity={2} angle={0.4} penumbra={0.5} color="#FFF5E0" castShadow />

      {/* Table */}
      <mesh position={[0, -0.6, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.8, 1.6, 0.12, 32]} />
        <meshStandardMaterial color="#3D2B1F" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#2D1F14" roughness={0.5} />
      </mesh>

      {/* Coffee cups */}
      <CoffeeCup position={[-1, -0.48, 0.3]} />
      <CoffeeCup position={[0.8, -0.48, -0.2]} />
      <CoffeeCup position={[0, -0.48, -0.6]} />

      {/* Steam */}
      <group position={[0, -0.4, 0]}>
        <SteamParticles count={40} />
      </group>

      {/* Sparkles */}
      <Sparkles count={30} scale={5} size={1.5} speed={0.2} opacity={0.4} color="#FFD700" />

      <Environment preset="night" />
    </Canvas>
  );
}
