import { Leaf } from 'lucide-react'

const links = [
  { href: '#problem', label: 'The Problem' },
  { href: '#impact', label: 'Impact' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#action', label: 'Take Action' },
]

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 border-t border-forest-700/60 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="flex items-center justify-center gap-2 font-display text-lg font-bold text-white md:justify-start">
            <Leaf className="size-5 text-forest-400" aria-hidden="true" />
            Green Canopy
          </p>
          <p className="mt-2 text-forest-100">
            Designed for a Plastic-Free Future{' '}
            <span role="img" aria-label="Earth globe">
              🌍
            </span>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline-offset-4 hover:text-sun-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
