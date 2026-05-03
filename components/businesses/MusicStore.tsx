'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

function SoundWave({ radius, speed, color, yOffset }: { radius: number; speed: number; color: string; yOffset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random() * 100);
  useFrame((_, delta) => {
    t.current += delta * speed;
    if (!ref.current) return;
    const s = 1 + Math.sin(t.current) * 0.3;
    ref.current.scale.set(s, 1, s);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = (0.15 + Math.sin(t.current * 1.5) * 0.1);
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, yOffset, 0]}>
      <ringGeometry args={[radius, radius + 0.08, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function NoteParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;
  const t = useRef(0);

  const { pos, vel, phases } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const v = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      p[i*3] = (Math.random() - 0.5) * 6;
      p[i*3+1] = (Math.random() - 0.5) * 4;
      p[i*3+2] = (Math.random() - 0.5) * 4;
      v[i] = 0.3 + Math.random() * 0.7;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { pos: p, vel: v, phases: ph };
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos.slice(), 3));
    return g;
  }, [pos]);

  useFrame((_, delta) => {
    t.current += delta;
    if (!ref.current) return;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i*3+1] += vel[i] * delta * 0.5;
      arr[i*3] += Math.sin(t.current * 0.5 + phases[i]) * 0.006;
      if (arr[i*3+1] > 3) arr[i*3+1] = -3;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.07} color="#A855F7" transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Guitar({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  const [hov, setHov] = useState(false);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * (hov ? 1.5 : 0.2);
  });
  return (
    <Float speed={2} floatIntensity={0.4}>
      <group ref={ref} position={position} onPointerEnter={() => setHov(true)} onPointerLeave={() => setHov(false)}>
        {/* Body */}
        <mesh castShadow>
          <torusGeometry args={[0.3, 0.18, 12, 32]} />
          <meshStandardMaterial color="#7C3AED" roughness={0.2} metalness={0.8} emissive="#A855F7" emissiveIntensity={hov ? 0.8 : 0.2} />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.06, 1.2, 8]} />
          <meshStandardMaterial color="#EC4899" roughness={0.3} metalness={0.6} emissive="#EC4899" emissiveIntensity={0.2} />
        </mesh>
        {/* Strings */}
        {[-0.06, -0.02, 0.02, 0.06].map((x, i) => (
          <mesh key={i} position={[x, 0.3, 0.2]}>
            <cylinderGeometry args={[0.003, 0.003, 1.5, 4]} />
            <meshBasicMaterial color="#22D3EE" />
          </mesh>
        ))}
        {hov && <pointLight color="#A855F7" intensity={4} distance={4} decay={2} />}
      </group>
    </Float>
  );
}

export default function MusicStoreExperience() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 55 }}
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: '#0D0A1A', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.1} color="#1A0D2A" />
      <pointLight position={[0, 8, 0]} intensity={3} color="#A855F7" distance={20} castShadow />
      <pointLight position={[-3, 3, 3]} intensity={2} color="#22D3EE" distance={12} />
      <pointLight position={[3, 1, -3]} intensity={1.5} color="#EC4899" distance={10} />

      {/* Sound waves emanating from center */}
      {[1.2, 2.2, 3.2, 4.2, 5.2].map((r, i) => (
        <SoundWave key={i} radius={r} speed={0.8 + i * 0.2} color={['#A855F7', '#22D3EE', '#EC4899', '#6D28D9', '#06B6D4'][i]} yOffset={-0.8} />
      ))}

      {/* Music note particles */}
      <NoteParticles />

      {/* Instruments */}
      <Guitar position={[-2.5, 0.5, 0]} />
      <Guitar position={[2.5, 0.5, 0]} />
      <Guitar position={[0, 1, -2]} />

      {/* Sparkles */}
      <Sparkles count={80} scale={6} size={2} speed={0.4} opacity={0.6} color="#A855F7" />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#080510" roughness={0.3} metalness={0.5} />
      </mesh>

      <Environment preset="night" />
    </Canvas>
  );
}
