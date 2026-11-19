import Image from 'next/image'
import { stats, wasteFate } from '@/lib/content'
import { AnimatedCounter } from './animated-counter'
import { Fireflies } from './falling-leaves'
import { Reveal } from './reveal'
import { TreelineDivider } from './treeline-divider'

export function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="relative isolate overflow-hidden bg-forest-950 text-forest-50"
    >
      <Image
        src="/images/forest-canopy.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950"
      />
      <Fireflies />
      <TreelineDivider className="-mt-px text-forest-50" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sun-300">
            The impact in numbers
          </p>
          <h2
            id="impact-title"
            className="mt-3 text-balance font-display text-3xl font-black text-white sm:text-5xl"
          >
            The facts behind the forest floor
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-forest-100">
            Every figure here comes from a published source, so you can check
            it yourself.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={
                index < 3
                  ? 'lg:col-span-2'
                  : 'lg:col-span-3'
              }
            >
              <Reveal delay={index * 90} className="h-full">
                <div className="flex h-full flex-col rounded-[2.5rem_0.75rem_2.5rem_0.75rem] border border-forest-300/20 bg-forest-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-forest-300/50 hover:bg-forest-800/70 sm:p-8">
                  <p className="font-display text-4xl font-black leading-tight text-sun-300 sm:text-4xl xl:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-1 flex-1 text-forest-100">{stat.detail}</p>
                  <p className="mt-4 text-sm text-forest-200">
                    Source:{' '}
                    <a
                      href={stat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline decoration-forest-300/60 underline-offset-4 hover:text-sun-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-400"
                    >
                      {stat.source}
                    </a>
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <figure className="rounded-[2.5rem_0.75rem_2.5rem_0.75rem] border border-forest-300/20 bg-forest-50 p-6 text-forest-900 shadow-xl sm:p-10">
            <figcaption>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Where does plastic waste end up?
              </h3>
              <p className="mt-2 text-forest-800">
                Share of global plastic waste by how it was handled in 2019.
              </p>
            </figcaption>

            <div
              role="img"
              aria-label={`Fate of global plastic waste: ${wasteFate
                .map((item) => `${item.percent} percent ${item.label.toLowerCase()}`)
                .join(', ')}.`}
              className="mt-6 flex h-12 w-full overflow-hidden rounded-full bg-forest-100 sm:h-14"
            >
              {wasteFate.map((item) => (
                <div
                  key={item.label}
                  style={{ width: `${item.percent}%` }}
                  className={`${item.className} flex items-center justify-center text-sm font-bold text-forest-950 transition-[filter] hover:brightness-110`}
                >
                  <span aria-hidden="true">{item.percent}%</span>
                </div>
              ))}
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {wasteFate.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`size-3.5 shrink-0 rounded-full ${item.className}`}
                  />
                  <span className="font-semibold">
                    {item.label} ({item.percent}%)
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-forest-700">
              Source:{' '}
              <a
                href="https://www.oecd.org/environment/plastics/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 hover:text-forest-600"
              >
                OECD Global Plastics Outlook
              </a>
              . Percentages are rounded.
            </p>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
