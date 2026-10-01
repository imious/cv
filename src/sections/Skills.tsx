import Reveal from '../components/Reveal'

const groups = [
  {
    label: 'Characterization',
    items: ['XRD', 'XRF', 'TEM', 'SEM', 'Optical microscopy', 'AFM'],
  },
  {
    label: 'Mechanical testing',
    items: ['Hardness', 'Toughness', 'Wear', 'Tensile'],
  },
  {
    label: 'Simulation & software',
    items: ['COMSOL Multiphysics', 'Thermo-Calc', 'ImageJ', 'Key to Steel'],
  },
  {
    label: 'Programming',
    items: ['Python', 'JavaScript / Vue.js', 'HTML', 'CSS', 'AI-assisted development'],
  },
  {
    label: 'Design & office',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Microsoft Office', 'WordPress'],
  },
]

const languages = [
  { name: 'Persian', level: 'Native', detail: '' },
  {
    name: 'English',
    level: 'Advanced',
    detail: 'IELTS Academic 8.0 — R 9 · L 8.5 · S 7 · W 7',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-glow relative">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9a92d9]">04 — Skills</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-[#f1e9dd] md:text-6xl">
            A lab bench <span className="italic text-[#9a92d9]">and a keyboard</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 90}>
              <p className="border-b hairline pb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#9a92d9]">
                {g.label}
              </p>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-[#e6e6e1]/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Languages */}
          <Reveal delay={groups.length * 90}>
            <p className="border-b hairline pb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#9a92d9]">
              Languages
            </p>
            <ul className="mt-5 space-y-4">
              {languages.map((l) => (
                <li key={l.name}>
                  <p className="text-sm text-[#e6e6e1]">
                    {l.name} <span className="text-[#9a92d9]">— {l.level}</span>
                  </p>
                  {l.detail && <p className="mt-1 text-xs text-[#e6e6e1]/55">{l.detail}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
