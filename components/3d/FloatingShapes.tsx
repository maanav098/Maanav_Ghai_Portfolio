'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  floatIntensity?: number;
  geometry: 'sphere' | 'torus' | 'octahedron' | 'icosahedron';
}

function FloatingShape({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  color = '#5A7D7C',
  speed = 1,
  floatIntensity = 1,
  geometry,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle rotation
    meshRef.current.rotation.x += 0.001 * speed;
    meshRef.current.rotation.y += 0.002 * speed;

    // Subtle floating motion
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2 * floatIntensity;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function FloatingShapes({ theme = 'dark' }: { theme?: string }) {
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#6DD5FA' : '#5A7D7C';
  const accentColor = isDark ? '#B06AB3' : '#8FB996';

  return (
    <group>
      {/* Ambient lighting for subtle illumination */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color={accentColor} intensity={0.5} />

      {/* Low-poly floating shapes with glassmorphic material */}
      <FloatingShape
        position={[-3, 2, -2]}
        scale={0.6}
        color={primaryColor}
        speed={0.8}
        geometry="icosahedron"
      />
      <FloatingShape
        position={[3, -1, -3]}
        scale={0.8}
        color={accentColor}
        speed={1.2}
        geometry="octahedron"
      />
      <FloatingShape
        position={[2, 3, -1]}
        scale={0.5}
        color={primaryColor}
        speed={1}
        geometry="torus"
      />
      <FloatingShape
        position={[-2, -2, -2]}
        scale={0.4}
        color={accentColor}
        speed={0.6}
        geometry="sphere"
        floatIntensity={1.5}
      />
    </group>
  );
}
