import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { RESEARCH } from '@/lib/site'

export default function Research() {
  return (
    <section id="research" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="02" title="Research" />

        <div className="space-y-6 sm:space-y-8">
          {RESEARCH.map((r, i) => (
            <Reveal key={r.kind} delay={i * 100}>
              <article className="glass rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <p className="font-mono2 text-[10px] font-medium uppercase tracking-[0.3em] text-indigo-700/70">
                  {r.kind}
                </p>
                <h3 className="font-display mt-3 max-w-2xl text-xl font-bold leading-snug tracking-tight text-[#1a1a1a] sm:text-2xl">
                  {r.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1a1a1a]/70">{r.text}</p>
                <p className="mt-5 border-t border-[#1a1a1a]/10 pt-4 text-[13px] font-medium text-[#1a1a1a]/60">
                  {r.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
