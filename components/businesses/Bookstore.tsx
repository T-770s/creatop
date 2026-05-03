'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FlyingPage({ speed, radius, phase }: { speed: number; radius: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(phase);
  useFrame((_, delta) => {
    time.current += delta * speed;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(time.current) * radius;
    ref.current.position.z = Math.sin(time.current) * radius;
    ref.current.position.y = 1.5 + Math.sin(time.current * 1.3 + phase) * 1.2;
    ref.current.rotation.x = time.current * 0.8;
    ref.current.rotation.y = time.current * 0.5;
    ref.current.rotation.z = Math.sin(time.current * 0.6) * 0.3;
  });
  return (
    <mesh ref={ref} castShadow>
      <planeGeometry args={[0.4, 0.55]} />
      <meshStandardMaterial
        color="#F4F0E8"
        roughness={0.9}
        side={THREE.DoubleSide}
        emissive="#E8C84A"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}

function BookShelf({ position }: { position: [number, number, number] }) {
  const colors = ['#2D4A7A', '#8B2020', '#1F5C1F', '#5C3D1F', '#4A1F5C', '#1F4A5C'];
  return (
    <group position={position}>
      {/* Shelf */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 0.06, 0.3]} />
        <meshStandardMaterial color="#3D2B1F" roughness={0.5} metalness={0.2} />
      </mesh>
      {/* Books */}
      {colors.map((c, i) => (
        <Float key={i} speed={0.8 + i * 0.2} floatIntensity={0.05}>
          <mesh position={[(i - 2.5) * 0.38, 0.2 + Math.random() * 0.05, 0]} castShadow>
            <boxGeometry args={[0.3, 0.38 + Math.random() * 0.12, 0.22]} />
            <meshStandardMaterial color={c} roughness={0.6} metalness={0.1} emissive={c} emissiveIntensity={0.08} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function OpenBook({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const angle = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const target = hovered ? Math.PI * 0.35 : Math.PI * 0.5;
    angle.current += (target - angle.current) * delta * 3;
    ref.current.children[0].rotation.y = angle.current;
    ref.current.children[1].rotation.y = -angle.current;
  });

  return (
    <group
      ref={ref}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Left page */}
      <mesh castShadow>
        <boxGeometry args={[0.55, 0.75, 0.02]} />
        <meshStandardMaterial color="#F4F0E8" roughness={0.9} side={THREE.DoubleSide} emissive={hovered ? '#E8C84A' : '#000'} emissiveIntensity={hovered ? 0.1 : 0} />
      </mesh>
      {/* Right page */}
      <mesh castShadow>
        <boxGeometry args={[0.55, 0.75, 0.02]} />
        <meshStandardMaterial color="#EEE8D8" roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      {/* Spine */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[0.05, 0.75, 0.04]} />
        <meshStandardMaterial color="#2D4A7A" roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
}

export default function BookstoreExperience() {
  return (
    <Canvas
      camera={{ position: [0, 2, 7], fov: 52 }}
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: '#0A0D14', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.2} color="#1A2040" />
      <pointLight position={[0, 6, 0]} intensity={2} color="#E8C84A" distance={14} castShadow />
      <pointLight position={[-3, 3, 2]} intensity={1} color="#4A90D9" distance={10} />
      <spotLight position={[2, 5, 3]} angle={0.5} intensity={1.5} color="#F4F0E8" penumbra={0.3} castShadow />

      {/* Flying pages in orbit */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FlyingPage key={i} speed={0.15 + i * 0.02} radius={2.5 + (i % 3) * 0.6} phase={(i / 8) * Math.PI * 2} />
      ))}

      {/* Bookshelves */}
      <BookShelf position={[0, -0.2, -2]} />
      <BookShelf position={[0, 0.6, -2]} />
      <BookShelf position={[0, 1.4, -2]} />

      {/* Featured open book */}
      <OpenBook position={[0, -0.3, 1]} />

      {/* Floating dust sparkles */}
      <Sparkles count={60} scale={6} size={1} speed={0.08} opacity={0.3} color="#E8C84A" />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#070A14" roughness={0.8} />
      </mesh>

      <Environment preset="night" />
    </Canvas>
  );
}
