import BustCanvas from '../components/BustCanvas'

export default function Hero() {
  return (
    // The tall track gives the scroll room that spins the bust
    <section id="hero-track" className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Ambient glow */}
        <div className="hero-glow pointer-events-none absolute inset-0" />

        {/* 3D bust — full-bleed canvas behind the type */}
        <div className="absolute inset-0">
          <BustCanvas />
        </div>

        {/* Split name treatment: first name left, last name right of the bust */}
        <div className="pointer-events-none relative z-10 flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[1600px] items-center justify-between px-6 md:px-16">
            <h1 className="font-display text-[15vw] leading-none tracking-[0.04em] text-[#f1e9dd] md:text-[6.5vw]">
              IMAN
            </h1>
            <h1 className="font-display hidden text-[5.2vw] leading-none tracking-[0.04em] text-[#f1e9dd] md:block">
              BAREKATAIN
            </h1>
          </div>
        </div>

        {/* Mobile surname under the bust */}
        <div className="pointer-events-none relative z-10 -mt-[38vh] mb-[24vh] text-center md:hidden">
          <span className="font-display text-[8vw] leading-none tracking-[0.06em] text-[#f1e9dd]">
            BAREKATAIN
          </span>
        </div>

        {/* Tagline + meta */}
        <div className="pointer-events-none relative z-10 px-4 pb-32 text-center md:pb-24">
          <p
            className="font-display text-base italic text-[#c9c3ee] md:text-xl"
            style={{ textShadow: '0 2px 18px rgba(7,4,25,0.9)' }}
          >
            Materials Engineer — additive manufacturing &amp; sustainable materials
          </p>
          <p
            className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-[#e6e6e1]/70"
            style={{ textShadow: '0 2px 14px rgba(7,4,25,0.9)' }}
          >
            KU Leuven · University of Milan-Bicocca · Toyota Motor Europe
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="scroll-hint flex flex-col items-center gap-2 text-[#9a92d9]">
            <span className="text-[0.6rem] uppercase tracking-[0.35em]">Scroll</span>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
              <path d="M7 1v18M2 14l5 6 5-6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
