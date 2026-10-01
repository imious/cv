import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Center, useGLTF, useProgress } from '@react-three/drei'
import * as THREE from 'three'

// Rest orientation of the scan already faces the camera
const BASE_ROTATION = 0

function Bust() {
  const { scene } = useGLTF('/assets/head.glb')
  const group = useRef<THREE.Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  // Normalize the scan to a consistent height regardless of source units
  const normalized = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    box.getSize(size)
    const targetHeight = 1.72
    const scale = targetHeight / (size.y || 1)
    return { scale }
  }, [scene])

  // Track pointer for subtle parallax tilt
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    // Scroll progress through the hero track (0 → 1)
    const track = document.getElementById('hero-track')
    let progress = 0
    if (track) {
      const rect = track.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
    }

    // The bust spins ~1.6 turns as you scroll through the hero,
    // plus a very slow perpetual idle drift.
    const idle = state.clock.elapsedTime * 0.045
    const targetY = BASE_ROTATION + progress * Math.PI * 3.2 + idle
    const targetX = pointer.current.y * 0.1
    const targetZ = pointer.current.x * -0.05

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta)
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, targetZ, 4, delta)

    // Gentle breathing float
    group.current.position.y = -0.14 + Math.sin(state.clock.elapsedTime * 0.8) * 0.025
  })

  // Scale down a touch on narrow viewports
  const responsiveScale = normalized.scale * Math.min(1, viewport.width / 4.4 + 0.42)

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} scale={responsiveScale} />
      </Center>
    </group>
  )
}

function LoadingOverlay() {
  const { active } = useProgress()
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-[#9a92d9] transition-opacity duration-700 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-10 w-10 animate-spin rounded-full border border-[#362669] border-t-[#9a92d9]" />
      <span className="text-[0.65rem] uppercase tracking-[0.3em]">Loading model</span>
    </div>
  )
}

export default function BustCanvas() {
  const container = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)

  // Pause the render loop while the hero is scrolled out of view
  useEffect(() => {
    const el = container.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.02,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={container} className="relative h-full w-full">
      <LoadingOverlay />
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.05, 3.3], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.55} color="#f1e9dd" />
        <directionalLight position={[2.5, 3, 4]} intensity={1.6} color="#f1e9dd" />
        <spotLight position={[-4, 2, 2]} intensity={22} angle={0.6} penumbra={1} color="#8642ff" />
        <pointLight position={[3, -1, -3]} intensity={10} color="#9a92d9" />
        <pointLight position={[0, 2.5, -4]} intensity={14} color="#362669" />
        <Suspense fallback={null}>
          <Bust />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/assets/head.glb')
