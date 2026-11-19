import Image from 'next/image'
import { ArrowDown, Sprout } from 'lucide-react'
import { FallingLeaves } from './falling-leaves'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex flex-col overflow-hidden bg-forest-950 lg:min-h-svh"
    >
      <div className="relative order-2 aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/hero-forest.png"
          alt="A cute worried monkey sits on a thick branch of a huge old tree, holding a plastic water bottle while sunlight streams through the green forest."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%] lg:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/10 to-transparent lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-forest-950 via-forest-950/70 via-35% to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-forest-950/80 to-transparent lg:block" />
        <div
          aria-hidden="true"
          className="absolute -top-10 right-[8%] h-[120%] w-[40%] origin-top -rotate-[18deg] animate-rays bg-gradient-to-b from-sun-300/40 via-sun-300/10 to-transparent mix-blend-screen blur-xl"
        />
        <div
          aria-hidden="true"
          className="absolute -top-10 right-[30%] h-[110%] w-[18%] origin-top -rotate-[14deg] animate-rays bg-gradient-to-b from-sun-300/30 via-sun-300/5 to-transparent mix-blend-screen blur-xl [animation-delay:2s]"
        />
      </div>

      <FallingLeaves />

      <div className="relative z-10 order-1 mx-auto flex w-full max-w-7xl items-center px-5 pb-6 pt-28 sm:px-8 lg:min-h-svh lg:pb-24 lg:pt-32">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest-300/40 bg-forest-900/60 px-4 py-1.5 text-sm font-semibold text-forest-100 backdrop-blur">
            <Sprout className="size-4 text-forest-300" aria-hidden="true" />
            A walk through the forest
          </p>
          <h1
            id="hero-title"
            className="text-balance font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
          >
            Save nature,{' '}
            <span className="text-forest-300">say no to plastic</span>
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-forest-100 sm:text-xl">
            Small changes today can protect our planet tomorrow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#problem"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun-400 px-7 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-forest-950/40 transition-all hover:-translate-y-0.5 hover:bg-sun-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore the Problem
              <ArrowDown
                className="size-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border-2 border-forest-200/70 bg-forest-950/30 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-forest-50 hover:text-forest-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Take Action
            </a>
          </div>
        </div>
      </div>

      <aside className="pointer-events-none absolute bottom-8 right-8 z-10 hidden max-w-60 animate-float rounded-3xl rounded-br-none bg-cream/95 p-4 text-sm leading-snug text-forest-900 shadow-xl lg:block">
        <p className="font-display font-bold">Hmm, where does this go?</p>
        <p className="mt-1 text-forest-800">
          A plastic bottle can take around 450 years to break down.
        </p>
      </aside>
    </section>
  )
}
