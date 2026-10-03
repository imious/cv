import { Suspense, useEffect, useMemo, useRef, useState, Component, type ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import * as THREE from 'three'

const MODEL_URL = `${import.meta.env.BASE_URL}assets/head.glb`

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 1024)
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 1024)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return mobile
}

function HeadModel({ mobile }: { mobile: boolean }) {
  const { scene } = useGLTF(MODEL_URL)
  const group = useRef<THREE.Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const vpSize = useThree((s) => s.size)
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  // Center the scan; keep raw dimensions for viewport-fit scaling
  const { centered, raw } = useMemo(() => {
    const clone = scene.clone(true)
    const box = new THREE.Box3().setFromObject(clone)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    clone.position.sub(center)
    return { centered: clone, raw: size }
  }, [scene])

  // World-space size of the viewport at the model's depth
  const dist = camera.position.z
  const viewH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist
  const viewW = viewH * (vpSize.width / vpSize.height)
  const base = mobile
    ? Math.min((viewW * 0.86) / raw.x, (viewH * 0.42) / raw.y)
    : Math.min((viewW * 0.44) / raw.x, (viewH * 0.68) / raw.y)

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
    const t = state.clock.elapsedTime
    const scroll = window.scrollY
    // 0 at top of page → 1 once past the hero
    const p = Math.min(scroll / (window.innerHeight * 1.1), 1)

    // Spin driven by scroll + slow idle rotation
    const idle = reduced ? 0 : t * 0.12
    const targetY = scroll * 0.0038 + idle
    // Gentle nod from cursor + slight tilt while scrolling
    const targetX = reduced
      ? 0
      : pointer.current.y * 0.14 + Math.min(scroll * 0.00035, 0.35)

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 5, delta)

    // Placement: right side on desktop, upper area on mobile.
    // As you scroll, the model recedes toward the edge and shrinks.
    const targetPosX = mobile ? 0 : viewW / 2 - (base * raw.x) / 2 + 0.85 * p - 0.12
    const targetPosY = mobile ? viewH / 2 - (base * raw.y) / 2 - 0.12 + 0.3 * p : -0.08 + 0.1 * p
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetPosX, 4, delta)
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetPosY, 4, delta)

    const s = base * (1 - 0.42 * p)
    const cur = group.current.scale.x || s
    group.current.scale.setScalar(THREE.MathUtils.damp(cur, s, 4, delta))
  })

  return (
    <Float
      speed={reduced ? 0 : 1.4}
      rotationIntensity={0}
      floatIntensity={reduced ? 0 : 0.35}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={group} scale={base}>
        <primitive object={centered} />
      </group>
    </Float>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#ffffff" />
      {/* Iridescent rims to match the glass palette */}
      <directionalLight position={[-4, 1, -2]} intensity={1.1} color="#818cf8" />
      <directionalLight position={[4, -2, -3]} intensity={0.8} color="#f9a8d4" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#bae6fd" />
    </>
  )
}

function Rig() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 3.4)
  }, [camera])
  return null
}

class GLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function HeadCanvas() {
  const mobile = useIsMobile()
  const wrapRef = useRef<HTMLDivElement>(null)

  // Fade the model as it recedes, keeping text sections readable
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / (window.innerHeight * 1.1), 1)
        if (wrapRef.current) {
          wrapRef.current.style.opacity = String((mobile ? 0.92 : 1) * (1 - 0.62 * p))
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [mobile])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: mobile ? 0.92 : 1 }}
    >
      <GLBoundary>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 3.4], fov: 38 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <Rig />
          <Lights />
          <Suspense fallback={null}>
            <HeadModel mobile={mobile} />
          </Suspense>
        </Canvas>
      </GLBoundary>
    </div>
  )
}

useGLTF.preload(MODEL_URL)
