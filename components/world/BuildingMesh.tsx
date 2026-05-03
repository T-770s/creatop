'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import type { BusinessDNA } from '@/data/businesses';

interface BuildingMeshProps {
  business: BusinessDNA;
  onClick?: () => void;
}

export default function BuildingMesh({ business, onClick }: BuildingMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const time = useRef(Math.random() * 100);

  // Stable random values — computed once per mount
  const { floatSpeed, floatPhase } = useMemo(() => ({
    floatSpeed: 1.2 + Math.random() * 0.8,
    floatPhase: Math.random() * Math.PI * 2,
  }), []);

  const { building, colors } = business;
  const primaryColor = useMemo(() => new THREE.Color(colors.primary), [colors.primary]);
  const glowColor = useMemo(() => new THREE.Color(colors.glow), [colors.glow]);

  useFrame((_, delta) => {
    time.current += delta;

    if (groupRef.current) {
      // Smooth hover lift
      const targetY = hovered ? 0.4 : 0;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.07;
      // Gentle rotation always, faster on hover
      groupRef.current.rotation.y += delta * (hovered ? 0.6 : 0.08);
    }

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      const pulse = 0.12 + Math.sin(time.current * 1.8 + floatPhase) * 0.04;
      mat.opacity = pulse * (hovered ? 2.2 : 1) * building.glowIntensity;
    }

    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = hovered
        ? 0.5 + Math.sin(time.current * 3) * 0.15
        : 0.1 + Math.sin(time.current * 1.5) * 0.05;
      // Pulse ring scale
      const rs = 1 + Math.sin(time.current * 2 + floatPhase) * 0.06;
      ringRef.current.scale.setScalar(rs);
    }
  });

  const geometryProps = useMemo(() => {
    const s = building;
    return { s };
  }, [building]);

  const Geometry = () => {
    const { s } = geometryProps;
    switch (s.shape) {
      case 'tower':
        return <boxGeometry args={[s.width * 0.55, s.height, s.depth * 0.55]} />;
      case 'dome':
        return <sphereGeometry args={[s.width * 0.52, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.62]} />;
      case 'pyramid':
        return <coneGeometry args={[s.width * 0.6, s.height, 4]} />;
      case 'organic':
        return <icosahedronGeometry args={[s.width * 0.52, 1]} />;
      case 'neon-sign':
        return <torusGeometry args={[s.width * 0.42, 0.12, 12, 48]} />;
      default:
        return <boxGeometry args={[s.width, s.height, s.depth]} />;
    }
  };

  return (
    <Float speed={floatSpeed} floatIntensity={hovered ? 0.6 : 0.25} rotationIntensity={0.08}>
      <group
        position={business.position}
        onClick={onClick}
        onPointerEnter={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = 'none'; }}
      >
        {/* Outer glow halo */}
        <mesh ref={glowRef} scale={1.65}>
          <Geometry />
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={0.1}
            side={THREE.BackSide}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Main building */}
        <group ref={groupRef}>
          <mesh castShadow receiveShadow>
            <Geometry />
            {building.shape === 'organic' ? (
              <MeshDistortMaterial
                color={primaryColor}
                distort={hovered ? 0.45 : 0.18}
                speed={hovered ? 4 : 1.2}
                roughness={0.15}
                metalness={0.85}
                emissive={glowColor}
                emissiveIntensity={hovered ? 0.7 : 0.22}
              />
            ) : (
              <meshStandardMaterial
                color={primaryColor}
                roughness={0.18}
                metalness={0.75}
                emissive={glowColor}
                emissiveIntensity={hovered ? 0.55 : 0.18}
                envMapIntensity={1.2}
              />
            )}
          </mesh>
        </group>

        {/* Ground glow ring */}
        <mesh
          ref={ringRef}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -building.height / 2 - 0.01, 0]}
        >
          <ringGeometry args={[building.width * 0.45, building.width * 0.9, 48]} />
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Hover point light */}
        {hovered && (
          <pointLight
            color={colors.glow}
            intensity={4}
            distance={7}
            decay={2}
          />
        )}
      </group>
    </Float>
  );
}
