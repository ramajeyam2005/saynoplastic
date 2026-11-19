'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

function decimalsOf(value: number) {
  const [, fraction = ''] = String(value).split('.')
  return fraction.length
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(0)
  const decimals = decimalsOf(value)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    let frame = 0

    const run = () => {
      if (reduceMotion) {
        setCurrent(value)
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(value * eased)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  const finalText = `${prefix}${value}${suffix}`

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {prefix}
        {current.toFixed(decimals)}
        {suffix}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  )
}
