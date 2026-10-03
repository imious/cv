import Reveal from '@/components/Reveal'

export default function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="font-mono2 text-xs font-medium tracking-[0.2em] text-indigo-700/70">{index}</span>
        <span className="h-px flex-1 bg-[#1a1a1a]/10" aria-hidden="true" />
      </div>
      <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
