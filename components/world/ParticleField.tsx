'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  speed?: number;
}

export default function ParticleField({
  count = 3000,
  radius = 30,
  color = '#8B5CF6',
  speed = 0.04,
}: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);
  const time = useRef(0);

  const { positions, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.4 + Math.random() * 0.6);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, phases: ph };
  }, [count, radius]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    geo.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [positions, phases]);

  useFrame((_, delta) => {
    time.current += delta * speed;
    if (!mesh.current) return;

    const pos = mesh.current.geometry.attributes.position;
    const posArray = pos.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const origX = positions[i * 3];
      const origY = positions[i * 3 + 1];
      const origZ = positions[i * 3 + 2];
      const phase = phases[i];
      const drift = Math.sin(time.current + phase) * 0.3;
      posArray[i * 3] = origX + Math.cos(phase + time.current * 0.3) * drift;
      posArray[i * 3 + 1] = origY + Math.sin(phase * 0.7 + time.current * 0.2) * drift;
      posArray[i * 3 + 2] = origZ + Math.cos(phase * 1.3 + time.current * 0.4) * drift * 0.5;
    }
    pos.needsUpdate = true;
    mesh.current.rotation.y = time.current * 0.02;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
