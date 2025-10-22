# 3D Feature Examples

## Quick Start

### 1. Basic 3D Scene
```tsx
import Scene3D from '@/components/3d/Scene3D'
import FloatingShapes from '@/components/3d/FloatingShapes'

function MyComponent() {
  return (
    <div className="h-screen">
      <Scene3D 
        className="w-full h-full"
        performance="medium"
        fallback={<div>Loading...</div>}
      >
        <FloatingShapes theme="dark" />
      </Scene3D>
    </div>
  )
}
```

### 2. Interactive Skill Orbs
```tsx
import Scene3D from '@/components/3d/Scene3D'
import SkillOrbs from '@/components/3d/SkillOrbs'

function SkillsSection() {
  return (
    <div className="h-[600px]">
      <Scene3D performance="high">
        <SkillOrbs theme="light" />
      </Scene3D>
    </div>
  )
}
```

### 3. Custom 3D Object with Animation
```tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Scene3D from '@/components/3d/Scene3D'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5A7D7C" />
    </mesh>
  )
}

export default function MyScene() {
  return (
    <Scene3D className="h-96">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Scene3D>
  )
}
```

### 4. Scroll-Driven 3D Animation
```tsx
'use client'

import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import Scene3D from '@/components/3d/Scene3D'

function ScrollResponsiveObject() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setScrollY(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <mesh rotation-y={scrollY * Math.PI * 2} position-y={scrollY * 3}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#8FB996" />
    </mesh>
  )
}

export default function ScrollScene() {
  return (
    <Scene3D className="fixed top-0 right-0 w-64 h-64">
      <ambientLight />
      <ScrollResponsiveObject />
    </Scene3D>
  )
}
```

## Advanced Patterns

### Toggle Between 2D and 3D
```tsx
'use client'

import { useState } from 'react'
import Scene3D from '@/components/3d/Scene3D'
import SkillOrbs from '@/components/3d/SkillOrbs'

function SkillsWithToggle() {
  const [is3D, setIs3D] = useState(false)

  return (
    <div>
      <button onClick={() => setIs3D(!is3D)}>
        {is3D ? '2D View' : '3D View'}
      </button>

      {is3D ? (
        <Scene3D className="h-[600px]">
          <SkillOrbs />
        </Scene3D>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {/* Traditional 2D grid */}
        </div>
      )}
    </div>
  )
}
```

### Responsive 3D Quality
```tsx
import { useEffect, useState } from 'react'
import Scene3D from '@/components/3d/Scene3D'

function ResponsiveScene() {
  const [performance, setPerformance] = useState<'low' | 'medium' | 'high'>('medium')

  useEffect(() => {
    // Detect device capabilities
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    const cores = navigator.hardwareConcurrency || 4
    
    if (isMobile || cores < 4) {
      setPerformance('low')
    } else if (cores >= 8) {
      setPerformance('high')
    }
  }, [])

  return (
    <Scene3D 
      performance={performance}
      dpr={performance === 'high' ? [1, 2] : [0.5, 1]}
    >
      {/* Your 3D content */}
    </Scene3D>
  )
}
```

### Performance Monitoring (Dev Only)
```tsx
'use client'

import { PerformanceMonitor, usePerformanceToggle } from '@/lib/performanceMonitor'
import Scene3D from '@/components/3d/Scene3D'

export default function MonitoredScene() {
  const { showStats } = usePerformanceToggle()

  return (
    <>
      <PerformanceMonitor show={showStats} />
      <Scene3D className="h-screen">
        {/* Your 3D scene */}
      </Scene3D>
    </>
  )
}
```

## Best Practices

### ✅ DO
- Lazy load 3D components with `next/dynamic`
- Provide 2D fallbacks for progressive enhancement
- Use low-poly geometries (< 5000 vertices)
- Pause rendering when tab is hidden
- Add ARIA labels for accessibility
- Test on mobile devices
- Monitor performance with built-in tools

### ❌ DON'T
- Don't use high-poly models without LOD
- Don't render complex scenes on initial load
- Don't forget keyboard accessibility
- Don't ignore WebGL fallbacks
- Don't use large textures (> 2048px)
- Don't animate 60+ objects simultaneously
- Don't block main thread with heavy computations

## Performance Targets

| Metric | Target | Action if Below |
|--------|--------|----------------|
| FPS | ≥ 60 | Reduce poly count, lower DPR |
| Memory | < 100MB | Compress textures, reduce meshes |
| Load Time | < 3s | Lazy load, code split |
| Draw Calls | < 100 | Batch meshes, merge geometries |

## Troubleshooting

### Low FPS
1. Check performance mode (`performance="low"`)
2. Reduce DPR: `dpr={[0.5, 1]}`
3. Lower poly count in geometries
4. Remove expensive materials (transmission, refraction)

### Not Loading on Mobile
1. Verify WebGL support detection
2. Check fallback rendering
3. Test on actual devices (not just DevTools)
4. Reduce initial bundle size

### Keyboard Navigation Issues
1. Ensure focusable elements have `tabIndex`
2. Add keyboard event listeners
3. Test with screen readers
4. Provide skip links

## Resources

- [Scene3D Component Docs](../components/3d/Scene3D.tsx)
- [Performance Monitor](../lib/performanceMonitor.tsx)
- [3D Integration Guide](./3D_INTEGRATION.md)
- [R3F Docs](https://docs.pmnd.rs/react-three-fiber)
