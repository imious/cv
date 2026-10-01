import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Closing from './sections/Closing'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Anchor navigation through Lenis
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: 0 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])

  return (
    <div id="top" className="min-h-screen bg-[#070419] text-[#e6e6e1]">
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Experience />
        <Skills />
        <Closing />
      </main>
    </div>
  )
}
