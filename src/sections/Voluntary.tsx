import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { VOLUNTARY } from '@/lib/site'

export default function Voluntary() {
  return (
    <section id="voluntary" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="05" title="Beyond work" />

        <div className="glass rounded-[1.75rem] p-7 sm:p-9">
          <ul className="divide-y divide-[#1a1a1a]/8">
            {VOLUNTARY.map((v, i) => (
              <Reveal as="li" key={v.org} delay={i * 80} className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-6">
                <p className="font-mono2 pt-0.5 text-xs font-medium tracking-wider text-[#1a1a1a]/50">{v.period}</p>
                <div>
                  <p className="text-[15px] font-semibold text-[#1a1a1a]">{v.org}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#1a1a1a]/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
