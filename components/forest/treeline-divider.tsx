import { cn } from '@/lib/utils'

type TreelineDividerProps = {
  className?: string
  flip?: boolean
}

const trees = [60, 250, 440, 640, 840, 1040, 1230, 1400]

export function TreelineDivider({ className, flip }: TreelineDividerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={cn(
        'block h-10 w-full sm:h-16 lg:h-24',
        flip && 'rotate-180',
        className,
      )}
    >
      <path
        fill="currentColor"
        d="M0 120V76C120 56 200 80 320 64S520 52 640 68 840 84 960 64 1200 54 1320 70 1400 72 1440 64V120Z"
      />
      <g fill="currentColor">
        {trees.map((x, index) => {
          const height = 36 + (index % 3) * 10
          return (
            <path
              key={x}
              d={`M${x - 18} 80 ${x} ${80 - height - 20} ${x + 18} 80Z`}
            />
          )
        })}
      </g>
    </svg>
  )
}
