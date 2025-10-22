# 3D Integration Guide

## Overview
This portfolio features performant 3D elements using React Three Fiber (R3F) and Three.js, with progressive enhancement and accessibility in mind.

## Architecture

### Core Components

#### `components/3d/Scene3D.tsx`
- **Purpose**: Reusable 3D canvas wrapper with WebGL detection
- **Features**:
  - Automatic WebGL support detection
  - Progressive enhancement with 2D fallbacks
  - Performance optimization (adjustable DPR based on device)
  - Pauses rendering when tab is hidden
  - Mobile device detection for power management
  - ARIA labels for accessibility

#### `components/3d/FloatingShapes.tsx`
- **Purpose**: Animated geometric shapes for hero background
- **Features**:
  - Low-poly geometries (sphere, torus, octahedron, icosahedron)
  - Theme-aware colors (sage for light, cyan/purple for dark)
  - Glassmorphic materials with transparency
  - Gentle floating animations using useFrame
  - Minimal draw calls (~4 meshes)

#### `components/3d/SkillOrbs.tsx`
- **Purpose**: Interactive 3D skill visualization
- **Features**:
  - Hoverable spheres representing skills
  - Size based on proficiency level
  - Text labels appear on hover
  - Click animations with scale effects
  - Particle background for depth
  - Color-coded by skill category

### Integration Points

1. **Hero Section** (`components/Hero.tsx`)
   - 3D floating shapes as background layer
   - Lazy loaded with `next/dynamic`
   - 2D fallback: gradient background

2. **Skills Section** (`components/Skills.tsx`)
   - Toggle between grid view and 3D interactive view
   - 3D view shows skill orbs in 3D space
   - Maintains traditional grid as default

## Performance Optimizations

### 1. Lazy Loading
```typescript
const Scene3D = dynamic(() => import('./3d/Scene3D'), { ssr: false })
```
- Components load only when needed
- No SSR overhead for 3D scenes

### 2. Device Detection
- Mobile devices use lower DPR ([0.5, 1])
- Desktop uses higher quality ([1, 1.5])
- Low-power mode on mobile

### 3. Rendering Optimization
- Pause rendering when tab is hidden
- Uses requestAnimationFrame only when visible
- Low-poly geometries (max 32 segments)

### 4. Progressive Enhancement
- WebGL detection with canvas test
- 2D fallback for unsupported devices
- Graceful degradation

## Accessibility

### Keyboard Controls
- All interactive elements are keyboard accessible
- Focus-visible styles on buttons
- Skip to 2D view option available

### ARIA Labels
```jsx
<div role="img" aria-label="3D interactive scene">
```

### Screen Reader Support
- Descriptive alt text for 3D scenes
- Toggle buttons clearly labeled
- Instructions provided for interactions

## SEO Considerations

1. **Server-Side Rendering**
   - All 3D components use `ssr: false`
   - Critical content remains in HTML
   - Search engines see full text content

2. **Content Structure**
   - Important information not hidden in canvas
   - Semantic HTML maintained
   - Fallback content always available

## Deployment Checklist

- [x] Low-poly models (<5000 vertices per mesh)
- [x] Fallback for no-WebGL devices
- [x] Lazy loading with loading states
- [x] Pause rendering when not visible
- [x] Keyboard accessible controls
- [x] ARIA labels on 3D containers
- [x] Mobile-friendly with reduced quality
- [ ] Monitor performance with Lighthouse
- [ ] Test on low-end devices

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS 14+, Android 9+)
- ⚠️ Graceful degradation for older browsers

## Future Enhancements

### Low Priority
- [ ] Add scroll-triggered camera animations
- [ ] Implement physics-based interactions
- [ ] Add more complex geometries
- [ ] Integrate with project showcase (3D product viewers)

### Performance Monitoring
- [ ] Add FPS counter in dev mode
- [ ] Track render time per frame
- [ ] Memory usage monitoring
- [ ] Network performance for assets

## Troubleshooting

### "WebGL not supported"
- Ensure browser supports WebGL 1.0+
- Check GPU drivers are updated
- Try disabling hardware acceleration and re-enabling

### Poor performance
- Check DPR settings in Scene3D
- Reduce particle count in SkillOrbs
- Use performance="low" prop on Scene3D
- Verify rendering pauses on hidden tabs

### 3D not loading
- Check browser console for errors
- Verify dynamic imports are working
- Ensure @react-three/fiber is installed
- Clear build cache and rebuild

## Dependencies

```json
{
  "@react-three/fiber": "^8.15.19",
  "@react-three/drei": "^9.92.7",
  "three": "^0.160.0",
  "@types/three": "^0.160.0",
  "gsap": "^3.12.5"
}
```

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
