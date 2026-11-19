import { problems } from '@/lib/content'
import { ProblemIllustration } from './illustrations'
import { Reveal } from './reveal'
import { TreelineDivider } from './treeline-divider'

export function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="relative overflow-hidden bg-forest-50"
    >
      <TreelineDivider className="-mt-px text-forest-950" flip />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-forest-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[60%] size-80 rounded-full bg-sun-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest-600">
            Why it matters
          </p>
          <h2
            id="problem-title"
            className="mt-3 text-balance font-display text-3xl font-black text-forest-900 sm:text-5xl"
          >
            What plastic does to our forest home
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-forest-800">
            Plastic is useful for a moment, but it stays for a very long time.
            Here is how it harms the places we love, one layer at a time.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {problems.map((problem, index) => (
            <li key={problem.id}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[3rem_0.75rem_3rem_0.75rem] border border-forest-200 bg-white shadow-md shadow-forest-900/5 transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.6deg] hover:shadow-xl hover:shadow-forest-900/15">
                  <div className="relative h-44 overflow-hidden">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                      <ProblemIllustration id={problem.id} />
                    </div>
                    <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-forest-900/85 font-display text-base font-bold text-forest-50">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl font-bold text-forest-900">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-forest-800">
                      {problem.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
