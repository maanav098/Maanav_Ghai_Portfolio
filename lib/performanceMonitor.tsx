'use client';

import { useEffect, useState } from 'react';

interface PerformanceStats {
  fps: number;
  drawCalls: number;
  triangles: number;
  memory?: number;
}

/**
 * Performance monitor for 3D scenes (dev mode only)
 * Displays FPS, draw calls, and memory usage
 */
export function usePerformanceMonitor(enabled: boolean = process.env.NODE_ENV === 'development') {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    drawCalls: 0,
    triangles: 0,
  });

  useEffect(() => {
    if (!enabled) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        setStats((prev) => ({
          ...prev,
          fps,
          memory: (performance as any).memory?.usedJSHeapSize 
            ? Math.round((performance as any).memory.usedJSHeapSize / 1048576) 
            : undefined,
        }));

        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [enabled]);

  return stats;
}

/**
 * Performance monitor display component
 */
export function PerformanceMonitor({ show = false }: { show?: boolean }) {
  const stats = usePerformanceMonitor(show);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-black/80 text-white p-4 rounded-lg font-mono text-xs backdrop-blur">
      <div className="font-bold mb-2">Performance Stats</div>
      <div className="space-y-1">
        <div className={stats.fps < 30 ? 'text-red-400' : stats.fps < 50 ? 'text-yellow-400' : 'text-green-400'}>
          FPS: {stats.fps}
        </div>
        <div>Draw Calls: {stats.drawCalls}</div>
        <div>Triangles: {stats.triangles.toLocaleString()}</div>
        {stats.memory && (
          <div className={stats.memory > 100 ? 'text-yellow-400' : ''}>
            Memory: {stats.memory} MB
          </div>
        )}
      </div>
      <div className="mt-2 pt-2 border-t border-white/20 text-[10px] opacity-60">
        Press Shift+P to toggle
      </div>
    </div>
  );
}

/**
 * Hook to toggle performance monitor with keyboard shortcut
 */
export function usePerformanceToggle() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Shift + P toggles performance monitor
      if (e.shiftKey && e.key === 'P') {
        setShowStats((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return { showStats, setShowStats };
}
