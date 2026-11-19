import { Ban, GlassWater, Recycle, ShoppingBag, Sprout } from 'lucide-react'
import { solutions } from '@/lib/content'
import { Reveal } from './reveal'
import { TreelineDivider } from './treeline-divider'

const icons = {
  bottle: GlassWater,
  bag: ShoppingBag,
  'single-use': Ban,
  recycle: Recycle,
  alternatives: Sprout,
} as const

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="relative overflow-hidden bg-forest-50"
    >
      <TreelineDivider className="-mt-px text-forest-950" flip />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-48 size-80 rounded-full bg-forest-200/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest-600">
            Grow the solution
          </p>
          <h2
            id="solutions-title"
            className="mt-3 text-balance font-display text-3xl font-black text-forest-900 sm:text-5xl"
          >
            Five simple ways to plant a plastic-free habit
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-forest-800">
            You do not need to be perfect. Start with one habit and let it grow.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {solutions.map((solution, index) => {
            const Icon = icons[solution.id]
            return (
              <li
                key={solution.id}
                className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
              >
                <Reveal delay={index * 90} className="h-full">
                  <div className="group relative flex h-full gap-5 rounded-[0.75rem_3rem_0.75rem_3rem] border border-forest-200 bg-white p-6 shadow-md shadow-forest-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-400 hover:shadow-xl hover:shadow-forest-900/15 sm:p-8">
                    <div className="relative size-16 shrink-0 self-start">
                      <span className="grid size-16 place-items-center rounded-full rounded-tl-none bg-forest-600 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-forest-500">
                        <Icon className="size-8" aria-hidden="true" />
                      </span>
                      <span className="absolute -bottom-2 -right-2 grid size-7 place-items-center rounded-full bg-sun-400 text-sm font-black text-forest-950">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-forest-900">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-pretty leading-relaxed text-forest-800">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
