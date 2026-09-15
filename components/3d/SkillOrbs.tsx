'use client';

import { useMemo, useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Text } from '@react-three/drei';
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
  const targetScaleRef = useRef(new THREE.Vector3(1, 1, 1));
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous gentle rotation
    meshRef.current.rotation.y += 0.005;

    // Scale animation on hover
    const targetScale = hovered ? 1.2 : clicked ? 0.9 : 1;
    targetScaleRef.current.set(targetScale, targetScale, targetScale);
    meshRef.current.scale.lerp(targetScaleRef.current, 0.1);

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
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[size, 24, 24]} />
      <meshPhysicalMaterial
        color={skill.color}
        emissive={skill.color}
        emissiveIntensity={hovered ? 0.62 : 0.22}
        roughness={0.24}
        metalness={0.12}
        clearcoat={0.85}
        clearcoatRoughness={0.16}
        transmission={0.58}
        thickness={1.1}
        transparent
        opacity={0.92}
      />

      <mesh scale={0.42}>
        <sphereGeometry args={[size, 18, 18]} />
        <meshBasicMaterial color={skill.color} transparent opacity={0.34} />
      </mesh>

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
  );
}

interface SkillOrbsProps {
  theme?: 'dark' | 'light';
  onSkillChange?: (name: string | null) => void;
}

export default function SkillOrbs({
  theme = 'dark',
  onSkillChange,
}: SkillOrbsProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Define skills with positions in 3D space
  const skills = [
    { name: 'React', color: '#7FD9FF', proficiency: 95, position: [-1.25, 0.9, -0.2] },
    { name: 'TypeScript', color: '#4F93FF', proficiency: 90, position: [0.0, 1.35, -0.7] },
    { name: 'Next.js', color: '#DDE3F1', proficiency: 88, position: [1.25, 0.95, -0.1] },
    { name: 'Three.js', color: '#4FC6E4', proficiency: 75, position: [-1.1, -0.35, 0.6] },
    { name: 'Node.js', color: '#70D89A', proficiency: 85, position: [1.1, -0.35, 0.55] },
    { name: 'Tailwind', color: '#44D8CF', proficiency: 92, position: [0, -1.15, -0.35] },
  ];

  const isDark = theme === 'dark';
  const ambientIntensity = isDark ? 0.42 : 0.62;
  const particlePositions = useMemo(
    () => new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 10)),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.24,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.12,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={ambientIntensity} />
      <pointLight position={[4, 4, 5]} intensity={0.8} color={isDark ? '#9DE7FF' : '#8CCBD0'} />
      <pointLight position={[-4, -3, 4]} intensity={0.44} color={isDark ? '#98B8FF' : '#8FB996'} />
      <pointLight position={[0, -3, 5]} intensity={0.38} color={isDark ? '#66E4D7' : '#B6DCC2'} />

      <mesh rotation={[Math.PI / 2.35, 0, 0.26]}>
        <torusGeometry args={[1.65, 0.012, 14, 140]} />
        <meshBasicMaterial color={isDark ? '#84e6ff' : '#7cb9be'} transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.46, 0.1]}>
        <torusGeometry args={[1.35, 0.01, 14, 120]} />
        <meshBasicMaterial color={isDark ? '#c1d3ff' : '#9fb8c7'} transparent opacity={0.16} />
      </mesh>

      {skills.map((skill) => (
        <SkillOrb
          key={skill.name}
          position={skill.position as [number, number, number]}
          skill={skill}
          onHover={(hovered) => onSkillChange?.(hovered ? skill.name : null)}
        />
      ))}

      {/* Particle effect background */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.014}
          color={isDark ? '#8FEFFF' : '#5A7D7C'}
          transparent
          opacity={0.2}
        />
      </points>
    </group>
  );
}
