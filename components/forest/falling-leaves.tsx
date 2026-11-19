const leaves = [
  { left: '6%', delay: '0s', duration: '15s', size: 22, color: '#67b878' },
  { left: '18%', delay: '4s', duration: '18s', size: 16, color: '#9ad3a2' },
  { left: '31%', delay: '9s', duration: '14s', size: 20, color: '#f4c84f' },
  { left: '47%', delay: '2s', duration: '17s', size: 14, color: '#3d9958' },
  { left: '62%', delay: '7s', duration: '16s', size: 24, color: '#9ad3a2' },
  { left: '74%', delay: '11s', duration: '19s', size: 18, color: '#c4a074' },
  { left: '88%', delay: '5s', duration: '15s', size: 20, color: '#67b878' },
]

export function FallingLeaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {leaves.map((leaf, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          width={leaf.size}
          height={leaf.size}
          className="absolute top-0 animate-fall opacity-0"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        >
          <path
            d="M20 3C10 3 4 8 4 15c0 2 .6 3.800 1.600 5.200C6.500 13 11 9 17 7.500 12 10.500 8.500 14.500 7.500 20.500c1.200.9 2.600 1.500 4.500 1.500 6 0 9-6 8-19Z"
            fill={leaf.color}
          />
        </svg>
      ))}
    </div>
  )
}

export function Fireflies({ count = 14 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="absolute size-1.5 animate-twinkle rounded-full bg-sun-300 shadow-[0_0_12px_4px_rgba(248,222,138,0.6)]"
          style={{
            left: `${(index * 37 + 8) % 96}%`,
            top: `${(index * 53 + 12) % 90}%`,
            animationDelay: `${(index % 7) * 0.6}s`,
            animationDuration: `${3 + (index % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}
