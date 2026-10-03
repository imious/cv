import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { CONTACT, REFERENCES, CV_PDF } from '@/lib/site'

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 px-6 pb-10 pt-20 sm:px-10 sm:pt-28">
      <div className="mx-auto max-w-4xl">
        <SectionHead index="06" title="Contact & references" />

        <Reveal>
          <div className="glass-deep rounded-[2rem] p-7 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl">
                  Let's talk.
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#1a1a1a]/65">
                  Open to roles in materials engineering, R&D, and web development — or anything that sits between the two.
                </p>
              </div>
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
            </div>

            <div className="mt-8 grid gap-x-8 gap-y-3 border-t border-[#1a1a1a]/10 pt-7 text-[15px] sm:grid-cols-2">
              <a href={`mailto:${CONTACT.emails[0]}`} className="u-link w-fit font-medium text-[#1a1a1a]/85">
                {CONTACT.emails[0]}
              </a>
              <a href={`mailto:${CONTACT.emails[1]}`} className="u-link w-fit font-medium text-[#1a1a1a]/85">
                {CONTACT.emails[1]}
              </a>
              <p className="font-mono2 text-[13px] text-[#1a1a1a]/55">{CONTACT.phones.join(' · ')}</p>
              <p className="font-mono2 text-[13px] text-[#1a1a1a]/55">{CONTACT.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass mt-5 rounded-[2rem] p-7 sm:p-10">
            <h3 className="font-display text-lg font-bold tracking-tight text-[#1a1a1a]">References</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {REFERENCES.map((r) => (
                <div key={r.name}>
                  <p className="text-[15px] font-semibold text-[#1a1a1a]">{r.name}</p>
                  <p className="mt-1 text-[13px] leading-snug text-[#1a1a1a]/60">{r.role}</p>
                  <a
                    href={`mailto:${r.email}`}
                    className="u-link mt-2 inline-block break-all text-[13px] font-medium text-indigo-700"
                  >
                    {r.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="font-mono2 mt-12 flex items-center justify-between text-[11px] tracking-wide text-[#1a1a1a]/40">
          <span>© 2026 Iman Barekatain</span>
          <span className="hidden sm:inline">Materials × Web</span>
        </p>
      </div>
    </footer>
  )
}
