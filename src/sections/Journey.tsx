import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'

function useTimelineProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Line draws as the section travels through the viewport
      const progress = Math.min(Math.max((vh * 0.75 - rect.top) / rect.height, 0), 1)
      el.style.setProperty('--line-progress', progress.toFixed(4))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}

const education = [
  {
    logo: '/assets/ku-leuven.svg',
    period: 'Sep 2023 — Present · final semester',
    title: 'M.Sc. Materials Engineering',
    place: 'KU Leuven, Belgium',
    note: 'SUMA double degree in sustainable materials — #1 university in Belgium, #48 globally.',
  },
  {
    logo: '/assets/unimib.svg',
    period: 'Sep 2023 — Present · final semester',
    title: 'M.Sc. Materials Science & Nanotechnology',
    place: 'University of Milan-Bicocca, Italy',
    note: 'SUMA double degree in sustainable materials — #10 in Italy, #299 globally.',
  },
  {
    logo: '/assets/iut.png',
    period: 'Sep 2018 — Feb 2023',
    title: 'B.Sc. Metallurgy & Materials Engineering',
    place: 'Isfahan University of Technology, Iran',
    note: '#4 university in Iran, #338 globally for materials science.',
  },
]

const research = [
  {
    period: "Master's thesis",
    title: 'Laser beam shaping on Mn, N-stabilized stainless steels made by L-PBF',
    body: 'Investigating how laser distribution profiles — Gaussian vs. ring — affect microstructure and vaporization behavior of austenitic stainless steels stabilized with manganese and nitrogen, through a joint simulation-and-experiment approach.',
    meta: 'Promoter: Prof. Kim Vanmeensel · KU Leuven',
  },
  {
    period: "Bachelor's thesis",
    title: 'Artificial intelligence in materials science & engineering',
    body: 'A report on recent advances and applications of machine learning in solid-state materials science.',
    meta: 'Advisor: Prof. Mahmood Meratian · IUT',
  },
  {
    period: 'Article · postponed',
    title: 'Enhancing a ceramic matrix composite with nano-additives',
    body: 'Employed the SPS method and its parameters; performed Archimedes density, pin-on-disk wear, compression and Charpy impact tests; explored powder metallurgy, powder sintering and chemical dispersion methods.',
    meta: '',
  },
]

export default function Journey() {
  const lineRef = useTimelineProgress()

  return (
    <section id="education" className="section-glow relative">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">01 — Education</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-[#f1e9dd] md:text-6xl">
            Two continents, <span className="italic text-[#9a92d9]">three universities</span>, one
            materials obsession.
          </h2>
        </Reveal>

        {/* Timeline with scroll-drawn line */}
        <div ref={lineRef} className="relative mt-16 md:mt-24">
          <div className="timeline-track ml-2 md:ml-4" />
          <div className="timeline-line ml-2 md:ml-4" />

          <div className="space-y-16 md:space-y-20">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 120} className="relative pl-10 md:pl-16">
                <span className="timeline-dot" style={{ left: 'calc(0.5rem - 4px)' }} />
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
                  <div className="logo-chip">
                    <img src={e.logo} alt={`${e.place} logo`} loading="lazy" />
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#9a92d9]">
                      {e.period}
                    </p>
                    <h3 className="font-display mt-2 text-2xl text-[#f1e9dd] md:text-3xl">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm font-normal text-[#e6e6e1]">{e.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#e6e6e1]/65">{e.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Research */}
        <div id="research" className="mt-32 md:mt-44">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">02 — Research</p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-[#f1e9dd] md:text-6xl">
              Where lasers meet <span className="italic text-[#9a92d9]">microstructure</span>.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-[#9a92d9]/15 md:mt-20 md:grid-cols-3">
            {research.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 140}
                className="flex flex-col bg-[#0a0521] p-8 transition-colors duration-500 hover:bg-[#160f39] md:p-10"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#9a92d9]">
                  {r.period}
                </p>
                <h3 className="font-display mt-4 text-xl leading-snug text-[#f1e9dd]">{r.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#e6e6e1]/65">{r.body}</p>
                {r.meta && (
                  <p className="mt-6 border-t hairline pt-4 text-xs text-[#9a92d9]">{r.meta}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#9a92d9]">
              Research interests
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                'Additive manufacturing',
                'Composites',
                'Powder metallurgy',
                'Artificial intelligence',
                'Sustainability',
                'Biomaterials',
              ].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
