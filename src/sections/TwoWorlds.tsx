import Reveal from '@/components/Reveal'

const WORLDS = [
  {
    tag: 'World 01',
    title: 'Materials & research',
    text: 'Double M.Sc. in sustainable materials across KU Leuven and Milan-Bicocca, a thesis on laser powder bed fusion of stainless steels, and hands-on R&D at Toyota Motor Europe. I\'m at home in the lab: characterization, mechanical testing, simulation.',
    points: ['Additive manufacturing (L-PBF)', 'Microstructure & characterization', 'COMSOL · Thermo-Calc'],
  },
  {
    tag: 'World 02',
    title: 'Web & software',
    text: 'Four years building websites and web apps with JavaScript and Vue.js, designing interfaces in Adobe XD, and shipping WordPress projects. I like tools that are well made — including the one you\'re reading now.',
    points: ['JavaScript · Vue.js · HTML/CSS', 'UI design · Adobe XD', 'AI-assisted development'],
  },
]

export default function TwoWorlds() {
  return (
    <section className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2">
          {WORLDS.map((w, i) => (
            <Reveal key={w.tag} delay={i * 120}>
              <article className="glass group h-full rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-1.5 sm:p-9">
                <p className="font-mono2 text-[10px] font-medium uppercase tracking-[0.3em] text-indigo-700/70">
                  {w.tag}
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-[1.7rem]">
                  {w.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#1a1a1a]/70">{w.text}</p>
                <ul className="mt-6 space-y-2">
                  {w.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[13px] font-medium text-[#1a1a1a]/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600/70" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
