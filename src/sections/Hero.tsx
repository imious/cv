import { CV_PDF, CONTACT } from '@/lib/site'

function Staggered({ text, base = 0 }: { text: string; base?: number }) {
  return (
    <>
      {text.split('').map((ch, i) =>
        ch === ' ' ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span key={i} className="letter-span" style={{ animationDelay: `${base + i * 38}ms` }}>
            {ch}
          </span>
        )
      )}
    </>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center px-6 pt-24 pb-16 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* On mobile the model floats above; text sits lower. On desktop: 60/40 split. */}
        <div className="flex flex-col justify-end lg:block">
          <div className="max-w-[640px] pt-[38svh] lg:pt-0">
            <p className="font-mono2 mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-indigo-700/80 sm:text-xs">
              Materials engineer · Web developer
            </p>

            <h1 className="font-display text-[13.5vw] font-bold leading-[0.98] tracking-[-0.02em] text-[#1a1a1a] sm:text-7xl lg:text-[5.4rem]">
              <Staggered text="Iman" base={100} />
              <br />
              <span className="text-indigo-700">
                <Staggered text="Barekatain" base={340} />
              </span>
            </h1>

            <p className="letter-span mt-6 max-w-md text-base leading-relaxed text-[#1a1a1a]/70 sm:text-lg" style={{ animationDelay: '900ms' }}>
              I work in two worlds: materials science — additive manufacturing, characterization,
              research — and the web, where I've designed and built sites and interfaces for years.
            </p>

            <div className="letter-span mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '1050ms' }}>
              <a
                href={CV_PDF}
                download="Iman-Barekatain-CV.pdf"
                className="flex h-12 items-center gap-2.5 rounded-full bg-indigo-700 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-700/25 transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV (PDF)
              </a>
              <a 
                href={`mailto:${CONTACT.emails[0]}`} 
                className="glass-chip flex h-12 items-center rounded-full px-6 text-sm font-semibold text-[#1a1a1a] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                style={margin: 0.5rem}
              >
                Get in touch
              </a>
            </div>

            <p className="letter-span font-mono2 mt-8 text-[11px] tracking-wide text-[#1a1a1a]/50 sm:text-xs" style={{ animationDelay: '1200ms' }}>
              {CONTACT.location} · {CONTACT.emails[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
        <span className="hint-dot font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/45">
          Scroll — my head spins &#129497;
        </span>
      </div>
    </section>
  )
}
