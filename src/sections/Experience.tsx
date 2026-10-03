import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { EXPERIENCE } from '@/lib/site'

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="01" title="Experience" />

        <ol className="relative">
          <span className="absolute bottom-2 left-0 top-2 hidden w-px bg-[#1a1a1a]/10 sm:block" aria-hidden="true" />
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.org} delay={i * 90} className="relative sm:pl-10">
              <span
                className="absolute left-[-4.5px] top-9 hidden h-[9px] w-[9px] rounded-full border-2 border-indigo-600 bg-[#e4e5f9] sm:block"
                aria-hidden="true"
              />
              <div className="glass mb-6 grid gap-5 rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-1 sm:mb-8 sm:grid-cols-[120px_1fr] sm:p-8">
                <p className="font-mono2 pt-1 text-xs font-medium tracking-wider text-[#1a1a1a]/55">
                  {job.period}
                </p>
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="glass-chip flex h-11 min-w-11 items-center justify-center rounded-xl px-2">
                      <img
                        src={job.logo}
                        alt={`${job.org} logo`}
                        className={job.wide ? 'h-5 w-auto max-w-[72px] object-contain' : 'h-7 w-7 object-contain'}
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight text-[#1a1a1a]">{job.role}</h3>
                      <p className="text-sm font-medium text-indigo-700">
                        {job.org} <span className="text-[#1a1a1a]/45">· {job.place}</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#1a1a1a]/70">{job.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
