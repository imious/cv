import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { SKILL_GROUPS, LANGUAGES } from '@/lib/site'

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="04" title="Skills & languages" />

        <div className="grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="glass h-full rounded-[1.75rem] p-7 sm:p-8">
                <h3 className="font-display text-lg font-bold tracking-tight text-[#1a1a1a]">{g.title}</h3>
                <dl className="mt-5 space-y-5">
                  {g.items.map((it) => (
                    <div key={it.head}>
                      <dt className="font-mono2 text-[10px] font-medium uppercase tracking-[0.25em] text-indigo-700/70">
                        {it.head}
                      </dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-[#1a1a1a]/75">{it.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass mt-5 rounded-[1.75rem] p-7 sm:p-8">
            <h3 className="font-display text-lg font-bold tracking-tight text-[#1a1a1a]">Languages</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {LANGUAGES.map((l) => (
                <div key={l.name} className="glass-chip rounded-2xl p-4">
                  <p className="text-[15px] font-semibold text-[#1a1a1a]">{l.name}</p>
                  <p className="mt-0.5 text-[13px] font-medium text-indigo-700">{l.level}</p>
                  {l.detail && <p className="font-mono2 mt-2 text-[11px] leading-relaxed text-[#1a1a1a]/50">{l.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
