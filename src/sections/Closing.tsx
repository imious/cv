import Reveal from '../components/Reveal'

const honors = [
  { year: '2018', text: 'Top 1% in the national university entrance exam (Konkur), mathematical physics' },
  { year: '2020–22', text: 'Top 5% GPA in the final four B.Sc. semesters, IUT materials department (avg. 17/20)' },
  { year: '2020–22', text: 'Distinguished B.Sc. student, Department of Materials Engineering, IUT' },
  { year: '2022', text: 'Intern of the month, Tamkar Industrial Co.' },
  { year: '2014', text: 'Web blogging contest winner, high school' },
]

const voluntary = [
  {
    period: '2018 — 2023',
    title: 'Saleh NGO charity',
    body: 'Providing facilities for orphaned children and holding celebrations for them.',
  },
  {
    period: '2018 — 2020',
    title: 'Aria Cultural Center, IUT',
    body: 'Celebrations, tours and environmental games — including the 2018 Yaldā Night for 1000+ guests, a mobile stage built on a tractor-trailer, and the Karino breakfast contest (2018, 2019).',
  },
  {
    period: '2018 — 2020',
    title: 'Theater Cultural Center, IUT',
    body: "Ticket sales, arrangement and conduction of 'All thieves are not thieves'; council member in 2019.",
  },
]

const references = [
  {
    name: 'Prof. Kim Vanmeensel',
    role: 'Associate Professor, Faculty of Engineering Science, KU Leuven',
    email: 'kim.vanmeensel@kuleuven.be',
  },
  {
    name: 'Prof. Mahmood Meratian',
    role: 'Associate Professor, Materials Science & Engineering, IUT',
    email: 'meratian@cc.iut.ac.ir',
  },
  {
    name: 'Aurelie Serre',
    role: 'Manager, Organic & Chemical Management — Material Engineering, Toyota Motor Europe',
    email: 'aurelie.serre@toyota-europe.com',
  },
]

export default function Closing() {
  return (
    <>
      {/* Honors + voluntary */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">
                  05 — Honors
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight text-[#f1e9dd] md:text-5xl">
                  Recognition <span className="italic text-[#9a92d9]">along the way</span>.
                </h2>
              </Reveal>
              <div className="mt-12">
                {honors.map((h, i) => (
                  <Reveal
                    key={h.text}
                    delay={i * 80}
                    className="flex gap-6 border-t hairline py-5 last:border-b"
                  >
                    <span className="font-display w-20 flex-none text-lg text-[#9a92d9]">
                      {h.year}
                    </span>
                    <p className="text-sm leading-relaxed text-[#e6e6e1]/80">{h.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">
                  06 — Beyond the lab
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight text-[#f1e9dd] md:text-5xl">
                  Community &amp; <span className="italic text-[#9a92d9]">culture</span>.
                </h2>
              </Reveal>
              <div className="mt-12 space-y-10">
                {voluntary.map((v, i) => (
                  <Reveal key={v.title} delay={i * 100}>
                    <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#9a92d9]">
                      {v.period}
                    </p>
                    <h3 className="font-display mt-2 text-xl text-[#f1e9dd]">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#e6e6e1]/65">{v.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(134,66,255,0.25), transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-40">
          <Reveal className="text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">07 — Contact</p>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-5xl leading-[1.05] text-[#f1e9dd] md:text-7xl">
              Let's build <span className="italic text-[#9a92d9]">better materials</span> together.
            </h2>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:iman.barekatain@gmail.com" className="pill-btn">
                iman.barekatain@gmail.com
              </a>
              <a href="tel:+393458378961" className="pill-btn">
                +39 345 837 8961
              </a>
            </div>
            <p className="mt-6 text-xs tracking-[0.2em] text-[#e6e6e1]/50">
              ALSO: IMAN.BAREKATAIN@STUDET.KULEUVEN.BE · I.BAREKATAIN@CAMPUS.UNIMIB.IT · +32 495 76
              87 93
            </p>
          </Reveal>

          {/* References */}
          <div className="mt-24 grid gap-px overflow-hidden rounded-2xl bg-[#9a92d9]/15 md:grid-cols-3">
            {references.map((r, i) => (
              <Reveal key={r.name} delay={i * 120} className="bg-[#0a0521] p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#9a92d9]">Reference</p>
                <h3 className="font-display mt-3 text-lg text-[#f1e9dd]">{r.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#e6e6e1]/60">{r.role}</p>
                <a
                  href={`mailto:${r.email}`}
                  className="mt-4 block break-all text-xs text-[#9a92d9] underline-offset-4 transition-colors hover:text-[#f1e9dd] hover:underline"
                >
                  {r.email}
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t hairline pt-8 text-[0.65rem] uppercase tracking-[0.25em] text-[#e6e6e1]/40 md:flex-row">
            <span>© 2026 Iman Barekatain</span>
            <span>Materials Engineering · L-PBF · Sustainability</span>
          </div>
        </div>
      </footer>
    </>
  )
}
