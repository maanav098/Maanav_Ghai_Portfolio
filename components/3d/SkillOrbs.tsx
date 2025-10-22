'use client';

import { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  position: [number, number, number];
  skill: {
    name: string;
    color: string;
    proficiency: number; // 0-100
  };
  onHover?: (hovered: boolean) => void;
}

function SkillOrb({ position, skill, onHover }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous gentle rotation
    meshRef.current.rotation.y += 0.005;

    // Scale animation on hover
    const targetScale = hovered ? 1.2 : clicked ? 0.9 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );

    // Float effect
    if (!hovered) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.2;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    onHover?.(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover?.(false);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  // Calculate size based on proficiency
  const size = 0.3 + (skill.proficiency / 100) * 0.4;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.3}
          metalness={0.7}
        />

        {/* Skill name label */}
        {hovered && (
          <>
            <Text
              position={[0, size + 0.5, 0]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {skill.name}
            </Text>
            <Text
              position={[0, size + 0.3, 0]}
              fontSize={0.15}
              color="#cccccc"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.01}
              outlineColor="#000000"
            >
              {skill.proficiency}%
            </Text>
          </>
        )}
      </mesh>
    </Float>
  );
}

export default function SkillOrbs({ theme = 'dark' }: { theme?: string }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Define skills with positions in 3D space
  const skills = [
    { name: 'React', color: '#61DAFB', proficiency: 95, position: [-2, 1, 0] },
    { name: 'TypeScript', color: '#3178C6', proficiency: 90, position: [0, 2, -1] },
    { name: 'Next.js', color: '#000000', proficiency: 88, position: [2, 1.5, 0] },
    { name: 'Three.js', color: '#049EF4', proficiency: 75, position: [-1.5, -0.5, 1] },
    { name: 'Node.js', color: '#339933', proficiency: 85, position: [1.5, -0.5, 0.5] },
    { name: 'Tailwind', color: '#06B6D4', proficiency: 92, position: [0, -1.5, -0.5] },
  ];

  const isDark = theme === 'dark';
  const ambientIntensity = isDark ? 0.3 : 0.6;

  return (
    <group>
      <ambientLight intensity={ambientIntensity} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color={isDark ? '#B06AB3' : '#8FB996'} />

      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          position={skill.position as [number, number, number]}
          skill={skill}
          onHover={(hovered) => setHoveredSkill(hovered ? skill.name : null)}
        />
      ))}

      {/* Particle effect background */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(
              Array.from({ length: 300 }, () => (Math.random() - 0.5) * 10)
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color={isDark ? '#6DD5FA' : '#5A7D7C'}
          transparent
          opacity={0.3}
        />
      </points>
    </group>
  );
}
