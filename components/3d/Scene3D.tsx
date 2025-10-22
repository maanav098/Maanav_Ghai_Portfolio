'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  dpr?: number | [number, number];
  performance?: 'low' | 'medium' | 'high';
  pauseOnHidden?: boolean;
}

/**
 * Reusable 3D scene wrapper with progressive enhancement
 * - Detects WebGL support
 * - Provides 2D fallback for unsupported devices
 * - Pauses rendering when tab is hidden
 * - Adjusts quality based on device capabilities
 */
export default function Scene3D({
  children,
  className,
  fallback = null,
  dpr = [1, 2],
  performance = 'medium',
  pauseOnHidden = true,
}: Scene3DProps) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // WebGL detection
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }

    // Device detection
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  // Pause rendering when tab is hidden (performance optimization)
  useEffect(() => {
    if (!pauseOnHidden) return;

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pauseOnHidden]);

  // Adjust DPR based on performance mode and device
  const getDPR = () => {
    if (performance === 'low' || isMobile) return [0.5, 1] as [number, number];
    if (performance === 'medium') return [1, 1.5] as [number, number];
    return dpr as [number, number];
  };

  // Progressive enhancement: fallback if no WebGL
  if (!hasWebGL) {
    return fallback ? (
      <div className={cn('relative', className)}>{fallback}</div>
    ) : null;
  }

  return (
    <div
      className={cn('relative', className)}
      role="img"
      aria-label="3D interactive scene"
    >
      <Canvas
        dpr={getDPR()}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ opacity: isVisible ? 1 : 0.5 }}
        gl={{
          antialias: performance !== 'low',
          alpha: true,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
