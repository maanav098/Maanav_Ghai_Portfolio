'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

/**
 * Hook to animate 3D object properties based on scroll position
 * @param scrollProgress - normalized scroll progress (0-1)
 * @param config - animation configuration
 */
export function useScrollAnimation(
  scrollProgress: number,
  config: {
    position?: { from: [number, number, number]; to: [number, number, number] };
    rotation?: { from: [number, number, number]; to: [number, number, number] };
    scale?: { from: number; to: number };
  }
) {
  const ref = useRef<any>(null);

  useFrame(() => {
    if (!ref.current) return;

    // Animate position
    if (config.position) {
      ref.current.position.x = gsap.utils.interpolate(
        config.position.from[0],
        config.position.to[0],
        scrollProgress
      );
      ref.current.position.y = gsap.utils.interpolate(
        config.position.from[1],
        config.position.to[1],
        scrollProgress
      );
      ref.current.position.z = gsap.utils.interpolate(
        config.position.from[2],
        config.position.to[2],
        scrollProgress
      );
    }

    // Animate rotation
    if (config.rotation) {
      ref.current.rotation.x = gsap.utils.interpolate(
        config.rotation.from[0],
        config.rotation.to[0],
        scrollProgress
      );
      ref.current.rotation.y = gsap.utils.interpolate(
        config.rotation.from[1],
        config.rotation.to[1],
        scrollProgress
      );
      ref.current.rotation.z = gsap.utils.interpolate(
        config.rotation.from[2],
        config.rotation.to[2],
        scrollProgress
      );
    }

    // Animate scale
    if (config.scale) {
      const scale = gsap.utils.interpolate(
        config.scale.from,
        config.scale.to,
        scrollProgress
      );
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return ref;
}

/**
 * Hook to track scroll progress for a specific section
 */
export function useScrollProgress(sectionId?: string) {
  const progress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress (0 when section starts entering, 1 when fully passed)
        const start = rect.top - windowHeight;
        const end = rect.top + rect.height;
        const range = windowHeight + rect.height;
        
        progress.current = Math.max(0, Math.min(1, -start / range));
      } else {
        // Global scroll progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        progress.current = Math.max(0, Math.min(1, window.scrollY / scrollHeight));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return progress;
}
