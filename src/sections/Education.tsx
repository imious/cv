import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { EDUCATION } from '@/lib/site'

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="03" title="Education" />

        <div className="space-y-6 sm:space-y-8">
          {EDUCATION.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 100}>
              <article className="glass rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-mono2 text-xs font-medium tracking-wider text-[#1a1a1a]/55">{ed.period}</p>
                  {ed.status && (
                    <span className="glass-chip rounded-full px-3 py-1 text-[11px] font-semibold text-indigo-700">
                      {ed.status}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-2xl">
                  {ed.title}
                </h3>

                <div className={`mt-6 grid gap-4 ${ed.lines.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {ed.lines.map((l) => (
                    <div key={l.school} className="glass-chip flex items-center gap-4 rounded-2xl p-4">
                      <img
                        src={l.logo}
                        alt={`${l.school} logo`}
                        className="h-9 w-auto max-w-[104px] shrink-0 object-contain"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold leading-tight text-[#1a1a1a]">{l.school}</p>
                        {l.degree && <p className="mt-0.5 text-[13px] text-[#1a1a1a]/65">{l.degree}</p>}
                        <p className="font-mono2 mt-1 text-[11px] text-[#1a1a1a]/45">{l.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
