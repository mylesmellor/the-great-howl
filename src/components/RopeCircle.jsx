export default function RopeCircle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main frayed circle */}
      <circle
        cx="70"
        cy="70"
        r="55"
        fill="none"
        stroke="#5C5449"
        strokeWidth="1.2"
        strokeDasharray="5 3 2 4 7 3 4 2"
        strokeLinecap="round"
        strokeDashoffset="18"
        opacity="0.6"
      />
      {/* Second offset ring for frayed depth */}
      <circle
        cx="70"
        cy="70"
        r="52"
        fill="none"
        stroke="#5C5449"
        strokeWidth="0.6"
        strokeDasharray="3 8 2 6 4 10"
        strokeLinecap="round"
        strokeDashoffset="40"
        opacity="0.25"
      />
      {/* Break at top-right */}
      <path
        d="M 108 38 A 55 55 0 0 0 98 24"
        stroke="#3A3226"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  )
}
