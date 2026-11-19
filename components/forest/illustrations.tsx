import type { ProblemId } from '@/lib/content'

function Bottle({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number
  y: number
  rotate?: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <rect x="-3" y="-20" width="6" height="5" rx="1.500" fill="#2b7c9c" />
      <path
        d="M-4 -15h8l3 5v22a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-22Z"
        fill="#bfe6f2"
        fillOpacity="0.85"
        stroke="#6fb6cf"
        strokeWidth="1"
      />
      <rect x="-7" y="-4" width="14" height="6" fill="#2b7c9c" fillOpacity="0.5" />
    </g>
  )
}

function SoilScene() {
  return (
    <>
      <rect width="160" height="110" fill="#d9ecc8" />
      <circle cx="128" cy="22" r="12" fill="#f8de8a" />
      <path d="M0 52c30-10 60 4 90-2s50-8 70 0v60H0Z" fill="#7a5233" />
      <path d="M0 74c30-6 60 6 90 0s50-6 70 0v36H0Z" fill="#5c3d27" />
      <path d="M0 92c30-4 60 4 90 0s50-4 70 0v18H0Z" fill="#432c1a" />
      <path d="M0 52c30-10 60 4 90-2s50-8 70 0v6c-20-8-40-6-70 0S30 46 0 58Z" fill="#4fa564" />
      <path d="M44 52c0-14 2-22 6-30" stroke="#2b7c46" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 24c-10-2-16 2-18 8 8 2 15-1 18-8Z" fill="#67b878" />
      <path d="M50 22c8-6 16-4 20 2-8 4-16 4-20-2Z" fill="#3d9958" />
      <path d="M88 66c12-6 22 0 30 4-4 8-18 10-30 6Z" fill="#e9f4f8" fillOpacity="0.9" stroke="#b4d3de" />
      <path d="M100 80c8-2 14 2 18 6-6 4-14 4-18 0Z" fill="#cfe7f0" fillOpacity="0.9" />
      <path d="M112 54c6-10 10-12 18-14-2 8-6 12-12 16Z" fill="#c4a074" />
    </>
  )
}

function WaterScene() {
  return (
    <>
      <rect width="160" height="110" fill="#d6efee" />
      <circle cx="128" cy="20" r="11" fill="#f8de8a" />
      <path d="M0 34c20-8 36-8 54 0 18 8 34 8 52 0 18-8 36-8 54 0v76H0Z" fill="#5fb4c4" />
      <path d="M0 58c20-8 36-8 54 0 18 8 34 8 52 0 18-8 36-8 54 0v52H0Z" fill="#3b95ad" />
      <path d="M0 82c20-8 36-8 54 0 18 8 34 8 52 0 18-8 36-8 54 0v28H0Z" fill="#2a7a95" />
      <path d="M0 98c24-6 40 6 62 0 20-6 40 6 62 0 14-4 24-2 36 2v10H0Z" fill="#1f6178" />
      <Bottle x={48} y={42} rotate={70} scale={1.100} />
      <g transform="translate(108 78)">
        <ellipse cx="0" cy="0" rx="14" ry="7" fill="#f4a94f" />
        <path d="M13 0l10-7v14Z" fill="#f4a94f" />
        <circle cx="-8" cy="-1.500" r="1.600" fill="#0a2214" />
      </g>
      <path d="M20 94c4-4 8-4 12 0M32 100c4-4 8-4 12 0" stroke="#c5e6c3" strokeWidth="1.500" fill="none" opacity="0.6" />
    </>
  )
}

function WildlifeScene() {
  return (
    <>
      <rect width="160" height="110" fill="#d6efee" />
      <path d="M0 40c20-8 36-8 54 0 18 8 34 8 52 0 18-8 36-8 54 0v70H0Z" fill="#5fb4c4" />
      <path d="M0 70c20-8 36-8 54 0 18 8 34 8 52 0 18-8 36-8 54 0v40H0Z" fill="#3b95ad" />
      <g transform="translate(78 62)">
        <ellipse cx="-22" cy="12" rx="12" ry="6" fill="#67b878" transform="rotate(-25 -22 12)" />
        <ellipse cx="24" cy="14" rx="12" ry="6" fill="#67b878" transform="rotate(25 24 14)" />
        <ellipse cx="-18" cy="-12" rx="10" ry="5" fill="#67b878" transform="rotate(25 -18 -12)" />
        <ellipse cx="0" cy="0" rx="30" ry="22" fill="#2b7c46" />
        <ellipse cx="0" cy="-2" rx="24" ry="16" fill="#3d9958" />
        <path d="M-14-8 0-14 14-8 14 4 0 10-14 4Z M0-14V10 M-14-2 14-2" stroke="#1f6136" strokeWidth="1.500" fill="none" />
        <circle cx="38" cy="-4" r="9" fill="#67b878" />
        <circle cx="41" cy="-6" r="1.800" fill="#0a2214" />
        <path d="M40 0q3 2 5 0" stroke="#0a2214" strokeWidth="1.200" fill="none" strokeLinecap="round" />
      </g>
      <path
        d="M96 40c10-6 24-4 30 4s0 20-10 22c-8 2-14-6-12-12-8 0-16-6-8-14Z"
        fill="#eef6f9"
        fillOpacity="0.85"
        stroke="#b4d3de"
      />
      <path d="M104 46c6 4 8 10 6 16" stroke="#b4d3de" fill="none" />
    </>
  )
}

function HealthScene() {
  return (
    <>
      <rect width="160" height="110" fill="#e3f2da" />
      <path d="M52 22h56l-6 74a8 8 0 0 1-8 7H66a8 8 0 0 1-8-7Z" fill="#e9f6fb" stroke="#9ccbdc" strokeWidth="2" />
      <path d="M56 46h48l-4 50a6 6 0 0 1-6 5H66a6 6 0 0 1-6-5Z" fill="#8fd0e3" fillOpacity="0.85" />
      <path d="M56 46c10-5 16 5 26 0s14-5 22 0" stroke="#bfe6f2" strokeWidth="2" fill="none" />
      {[
        [72, 62, '#e8573d'],
        [88, 72, '#f4c84f'],
        [78, 84, '#2b5fc4'],
        [94, 58, '#e8573d'],
        [68, 76, '#f4c84f'],
        [96, 88, '#2b5fc4'],
      ].map(([cx, cy, fill], index) => (
        <circle key={index} cx={cx as number} cy={cy as number} r="2.200" fill={fill as string} />
      ))}
      <g transform="translate(128 36)">
        <circle r="14" fill="#f8de8a" stroke="#d9a93a" strokeWidth="2" />
        <circle cx="-5" cy="-3" r="1.600" fill="#0a2214" />
        <circle cx="5" cy="-3" r="1.600" fill="#0a2214" />
        <path d="M-6 6q6-4 12 0" stroke="#0a2214" strokeWidth="1.600" fill="none" strokeLinecap="round" />
      </g>
      <path d="M26 30c4-8 10-8 14 0-4 8-10 8-14 0Z" fill="#9ad3a2" />
    </>
  )
}

function AirScene() {
  return (
    <>
      <rect width="160" height="110" fill="#e6e6dc" />
      <circle cx="42" cy="34" r="22" fill="#b5b8ae" />
      <circle cx="72" cy="24" r="26" fill="#9ea299" />
      <circle cx="102" cy="34" r="22" fill="#8a8f85" />
      <circle cx="124" cy="22" r="16" fill="#a8aca2" />
      <circle cx="70" cy="52" r="14" fill="#b5b8ae" />
      <path d="M0 96c30-6 60 4 90-2s50-4 70 0v16H0Z" fill="#5c3d27" />
      <path d="M52 94c6-10 14-14 20-26 4 8 12 12 14 20 4-4 4-10 6-14 8 10 12 22 6 30-6 8-30 8-46 0Z" fill="#f08a2c" />
      <path d="M62 94c4-6 8-8 10-16 3 5 8 8 8 14 3-2 4-5 4-8 5 6 6 12 2 16-6 4-18 4-24-6Z" fill="#f4c84f" />
      <rect x="40" y="90" width="12" height="8" rx="2" fill="#c8d9df" transform="rotate(-12 46 94)" />
      <rect x="98" y="88" width="14" height="9" rx="2" fill="#c8d9df" transform="rotate(10 105 92)" />
    </>
  )
}

function EnvironmentScene() {
  return (
    <>
      <rect width="160" height="110" fill="#f2f8e9" />
      <path d="M0 90c30-8 60 4 90-2s50-4 70 0v22H0Z" fill="#7a9a54" />
      <g transform="translate(80 54)">
        <path d="M-22-36h44M-22 36h44" stroke="#5c3d27" strokeWidth="6" strokeLinecap="round" />
        <path d="M-17-34c0 20 8 24 17 34-9 10-17 14-17 34h34c0-20-8-24-17-34 9-10 17-14 17-34Z" fill="#e9f6fb" fillOpacity="0.8" stroke="#8b5e3c" strokeWidth="3" strokeLinejoin="round" />
        <path d="M-11-30c0 10 5 14 11 20 6-6 11-10 11-20Z" fill="#f8de8a" />
        <path d="M-12 32c3-12 8-16 12-22 4 6 9 10 12 22Z" fill="#f4c84f" />
      </g>
      <Bottle x={34} y={72} rotate={-18} scale={1.200} />
      <path d="M126 92c0-12 2-20 8-28" stroke="#2b7c46" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M134 66c-10 0-16 4-18 10 8 2 15-2 18-10Z" fill="#67b878" />
      <path d="M134 64c6-6 14-4 18 2-8 4-14 4-18-2Z" fill="#3d9958" />
    </>
  )
}

const scenes: Record<ProblemId, () => React.JSX.Element> = {
  soil: SoilScene,
  water: WaterScene,
  wildlife: WildlifeScene,
  health: HealthScene,
  air: AirScene,
  environment: EnvironmentScene,
}

export function ProblemIllustration({ id }: { id: ProblemId }) {
  const Scene = scenes[id]
  return (
    <svg
      viewBox="0 0 160 110"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <Scene />
    </svg>
  )
}
