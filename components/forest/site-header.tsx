'use client'

import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#problem', label: 'The Problem' },
  { href: '#impact', label: 'Impact' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#action', label: 'Take Action' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'bg-forest-950/90 shadow-lg shadow-forest-950/20 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold text-forest-50"
        >
          <span className="grid size-9 place-items-center rounded-full rounded-tr-none bg-forest-500 text-white">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          Green Canopy
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-forest-100 transition-colors hover:bg-forest-50/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid size-10 place-items-center rounded-full bg-forest-50/10 text-forest-50 md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={cn(
          'mx-auto max-w-7xl flex-col gap-1 px-5 pb-4 md:hidden',
          open ? 'flex' : 'hidden',
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-semibold text-forest-100 hover:bg-forest-50/10"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
