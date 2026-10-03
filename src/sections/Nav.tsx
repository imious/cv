import { useEffect, useState } from 'react'
import { CV_PDF } from '@/lib/site'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ${
          scrolled ? 'glass-deep' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight text-[#1a1a1a]">
          Iman&nbsp;Barekatain
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="u-link text-[13px] font-medium text-[#1a1a1a]/70 transition-colors hover:text-[#1a1a1a]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={CV_PDF}
          download="Iman-Barekatain-CV.pdf"
          className="glass-chip flex h-11 items-center gap-2 rounded-full px-4 text-[13px] font-semibold text-indigo-700 transition-transform duration-300 hover:scale-[1.04] active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </nav>
    </header>
  )
}
