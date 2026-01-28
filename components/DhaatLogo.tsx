export default function DhaatLogo({
  size = 220,
}: {
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 500 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dhaat Arabic Logo"
    >
      {/* Main Arabic Calligraphy */}
      <path
        d="
          M420 170
          C390 190 340 195 300 185
          C260 175 220 160 185 150
          C145 140 95 140 70 165
          C55 180 60 200 90 210
          C120 220 170 215 220 205
          C270 195 320 180 360 160
          C395 145 430 140 450 150
        "
        stroke="#0A5C36"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Vertical Alif */}
      <path
        d="M260 30 L260 170"
        stroke="#0A5C36"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Dots */}
      <circle cx="210" cy="105" r="7" fill="#C7FF1A" />
      <circle cx="235" cy="115" r="7" fill="#C7FF1A" />
    </svg>
  )
}
