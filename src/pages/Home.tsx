import { lazy, Suspense } from 'react'
import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import TwoWorlds from '@/sections/TwoWorlds'
import Experience from '@/sections/Experience'
import Research from '@/sections/Research'
import Education from '@/sections/Education'
import Skills from '@/sections/Skills'
import Voluntary from '@/sections/Voluntary'
import Footer from '@/sections/Footer'

const HeadCanvas = lazy(() => import('@/components/HeadCanvas'))

export default function Home() {
  return (
    <div className="noise relative min-h-screen">
      {/* Ambient liquid-glass background */}
      <div className="bg-scene fixed inset-0 -z-20" aria-hidden="true">
        <div className="blob left-[8%] top-[12%] h-[34vw] w-[34vw] bg-indigo-300/60" style={{ animationDelay: '0s' }} />
        <div className="blob right-[4%] top-[42%] h-[28vw] w-[28vw] bg-pink-300/50" style={{ animationDelay: '-8s' }} />
        <div className="blob bottom-[6%] left-[22%] h-[30vw] w-[30vw] bg-sky-300/50" style={{ animationDelay: '-15s' }} />
      </div>

      {/* Fixed 3D head — spins on scroll */}
      <Suspense fallback={null}>
        <HeadCanvas />
      </Suspense>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <TwoWorlds />
        <Experience />
        <Research />
        <Education />
        <Skills />
        <Voluntary />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
