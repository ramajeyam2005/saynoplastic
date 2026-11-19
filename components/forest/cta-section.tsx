'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Leaf, TreePine } from 'lucide-react'
import { pledgeItems } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Fireflies } from './falling-leaves'
import { Reveal } from './reveal'
import { TreelineDivider } from './treeline-divider'

export function CtaSection() {
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState<boolean[]>(() =>
    pledgeItems.map(() => false),
  )
  const done = checked.filter(Boolean).length

  const toggle = (index: number) =>
    setChecked((current) => current.map((v, i) => (i === index ? !v : v)))

  return (
    <section
      id="action"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-forest-900 text-white"
    >
      <Image
        src="/images/hero-forest.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/80 via-forest-950/80 to-forest-950"
      />
      <Fireflies count={10} />
      <TreelineDivider className="-mt-px text-forest-50" />

      <div className="relative mx-auto max-w-3xl px-5 pb-24 pt-10 text-center sm:px-8 sm:pt-16">
        <Reveal>
          <span className="mx-auto grid size-16 animate-sway place-items-center rounded-full rounded-tr-none bg-forest-500 text-white shadow-lg shadow-forest-950/50">
            <TreePine className="size-8" aria-hidden="true" />
          </span>
          <h2
            id="cta-title"
            className="mt-6 text-balance font-display text-4xl font-black uppercase leading-tight sm:text-6xl"
          >
            Be the change, <span className="text-forest-300">keep the earth green</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-forest-100">
            Every bottle you refuse and every bag you reuse is a seed for a
            healthier forest. Make your pledge today.
          </p>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="pledge-panel"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-400 px-8 py-4 text-lg font-bold text-forest-950 shadow-xl shadow-forest-950/40 transition-all hover:-translate-y-1 hover:bg-sun-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Leaf className="size-5" aria-hidden="true" />
            Start Your Green Journey
          </button>
        </Reveal>

        <div
          id="pledge-panel"
          hidden={!open}
          className="mt-10 rounded-[2.5rem_0.75rem_2.5rem_0.75rem] bg-cream p-6 text-left text-forest-900 shadow-2xl sm:p-8"
        >
          <h3 className="font-display text-2xl font-bold">My green pledge</h3>
          <p className="mt-1 text-forest-800">Tick the habits you will start.</p>

          <ul className="mt-5 space-y-3">
            {pledgeItems.map((item, index) => (
              <li key={item}>
                <label
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-3.5 font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-forest-600',
                    checked[index]
                      ? 'border-forest-500 bg-forest-100'
                      : 'border-forest-200 bg-white hover:border-forest-400',
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={() => toggle(index)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors',
                      checked[index]
                        ? 'border-forest-600 bg-forest-600 text-white'
                        : 'border-forest-300 bg-white',
                    )}
                  >
                    {checked[index] && <Check className="size-4" />}
                  </span>
                  {item}
                </label>
              </li>
            ))}
          </ul>

          <div className="mt-6" aria-live="polite">
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={pledgeItems.length}
              aria-valuenow={done}
              aria-label="Pledge progress"
              className="h-3 overflow-hidden rounded-full bg-forest-100"
            >
              <div
                className="h-full rounded-full bg-forest-500 transition-all duration-500"
                style={{ width: `${(done / pledgeItems.length) * 100}%` }}
              />
            </div>
            <p className="mt-3 font-semibold">
              {done === 0 && 'Pick your first habit to plant your first tree.'}
              {done > 0 &&
                done < pledgeItems.length &&
                `${done} of ${pledgeItems.length} habits planted. Keep growing!`}
              {done === pledgeItems.length &&
                'Amazing! You are a true guardian of the forest.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
