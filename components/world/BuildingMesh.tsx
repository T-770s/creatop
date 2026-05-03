'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import type { BusinessDNA } from '@/data/businesses';

interface BuildingMeshProps {
  business: BusinessDNA;
  onClick?: () => void;
}

export default function BuildingMesh({ business, onClick }: BuildingMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const time = useRef(Math.random() * 100);

  const { building, colors } = business;

  const primaryColor = new THREE.Color(colors.primary);
  const glowColor = new THREE.Color(colors.glow);

  useFrame((_, delta) => {
    time.current += delta;
    if (meshRef.current) {
      const targetY = hovered ? 0.3 : 0;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.08;
      meshRef.current.rotation.y += delta * (hovered ? 0.5 : 0.1);
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (0.15 + Math.sin(time.current * 2) * 0.05) * (hovered ? 2 : 1) * building.glowIntensity;
    }
  });

  const getGeometry = () => {
    const s = building;
    switch (building.shape) {
      case 'tower':
        return <boxGeometry args={[s.width * 0.6, s.height, s.depth * 0.6]} />;
      case 'dome':
        return <sphereGeometry args={[s.width * 0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />;
      case 'pyramid':
        return <coneGeometry args={[s.width * 0.6, s.height, 4]} />;
      case 'organic':
        return <icosahedronGeometry args={[s.width * 0.5, 1]} />;
      case 'neon-sign':
        return <torusGeometry args={[s.width * 0.4, 0.1, 8, 32]} />;
      default:
        return <boxGeometry args={[s.width, s.height, s.depth]} />;
    }
  };

  return (
    <Float speed={1.5 + Math.random()} floatIntensity={hovered ? 0.5 : 0.2} rotationIntensity={0.1}>
      <group
        position={business.position}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        {/* Glow halo */}
        <mesh ref={glowRef} scale={1.6}>
          {getGeometry()}
          <meshBasicMaterial color={glowColor} transparent opacity={0.1} side={THREE.BackSide} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>

        {/* Main building */}
        <mesh ref={meshRef} castShadow>
          {getGeometry()}
          {building.shape === 'organic' ? (
            <MeshDistortMaterial
              color={primaryColor}
              distort={hovered ? 0.4 : 0.15}
              speed={hovered ? 3 : 1}
              roughness={0.2}
              metalness={0.8}
              emissive={glowColor}
              emissiveIntensity={hovered ? 0.6 : 0.2}
            />
          ) : (
            <meshStandardMaterial
              color={primaryColor}
              roughness={0.2}
              metalness={0.7}
              emissive={glowColor}
              emissiveIntensity={hovered ? 0.5 : 0.15}
            />
          )}
        </mesh>

        {/* Ground ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -building.height / 2, 0]}>
          <ringGeometry args={[building.width * 0.5, building.width * 0.8, 32]} />
          <meshBasicMaterial color={glowColor} transparent opacity={hovered ? 0.4 : 0.15} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
        </mesh>

        {/* Hover point light */}
        {hovered && (
          <pointLight color={colors.glow} intensity={3} distance={6} decay={2} />
        )}
      </group>
    </Float>
  );
}
