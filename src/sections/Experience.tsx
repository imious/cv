import Reveal from '../components/Reveal'

const jobs = [
  {
    logo: '/assets/toyota.svg',
    period: '2025',
    role: 'Materials Development Intern',
    org: 'Toyota Motor Europe — Zaventem, Belgium',
    body: "Three months at Toyota's main European R&D hub, developing a new 3D-printed material. Details under NDA.",
  },
  {
    logo: '/assets/tamkar.png',
    period: '2022',
    role: 'R&D Intern',
    org: 'Tamkar Industrial Group — Isfahan, Iran',
    body: 'Research, supervision, translation and communication with foreign partners. Named intern of the month.',
  },
  {
    logo: '/assets/libratech.png',
    period: '2018 — 2022',
    role: 'Web Developer & UI Designer',
    org: 'Libratech IT Solutions — Isfahan, Iran',
    body: 'Part-time: websites and web-based applications with HTML, CSS, JavaScript, Vue.js and WordPress; UI design in Adobe XD.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">03 — Experience</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-[#f1e9dd] md:text-6xl">
            From <span className="italic text-[#9a92d9]">Toyota's R&amp;D hub</span> to the web.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {jobs.map((j, i) => (
            <Reveal
              key={j.role}
              delay={i * 100}
              className="group border-t hairline py-10 transition-colors duration-500 last:border-b hover:bg-[#160f39]/40 md:py-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                <div className="logo-chip md:ml-4">
                  <img src={j.logo} alt={`${j.org} logo`} loading="lazy" />
                </div>
                <div className="md:w-40 md:flex-none">
                  <p className="font-display text-xl text-[#9a92d9]">{j.period}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-[#f1e9dd] md:text-3xl">{j.role}</h3>
                  <p className="mt-1 text-sm font-normal text-[#e6e6e1]">{j.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#e6e6e1]/65">
                    {j.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
