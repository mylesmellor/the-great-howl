import { getAnecdote } from '../content/anecdotes'

// Each fragment gets a different rotation, offset, alignment and paper character
const VARIATIONS = {
  drawer_4: { rotate: -3.2, offsetX: '5%', align: 'left', stainX: '75%', stainY: '25%', tearSide: 'right', creaseAngle: 32 },
  kitchen_1: { rotate: 2.8, offsetX: '45%', align: 'right', stainX: '15%', stainY: '65%', tearSide: 'bottom', creaseAngle: -18 },
  chord_1: { rotate: -1.4, offsetX: '60%', align: 'right', stainX: '80%', stainY: '70%', tearSide: 'right', creaseAngle: 45 },
  kitchen_4: { rotate: 1.6, offsetX: '10%', align: 'left', stainX: '55%', stainY: '35%', tearSide: 'bottom', creaseAngle: -25 },
}

export default function AnecdoteFragment({ id, quiet = false, onOpenStory }) {
  const anecdote = getAnecdote(id)
  if (!anecdote) return null

  const v = VARIATIONS[id] || { rotate: -1, offsetX: 0, stainX: '50%', stainY: '50%', tearSide: 'right' }

  // Split text into lines at natural breaks
  const words = anecdote.text.split(' ')
  const mid = Math.ceil(words.length / 2)
  const lines =
    words.length > 6
      ? [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
      : [anecdote.text]

  // Jagged edge clip-paths
  const tearRight = `polygon(
    0% 0%, 97% 0%, 98% 3%, 96% 6%, 98% 10%, 97% 14%, 99% 18%,
    97% 22%, 98% 27%, 96% 32%, 98% 37%, 97% 42%, 99% 47%,
    97% 52%, 98% 57%, 96% 62%, 98% 67%, 97% 72%, 99% 77%,
    97% 82%, 98% 87%, 96% 92%, 98% 96%, 97% 100%, 0% 100%
  )`
  const tearBottom = `polygon(
    0% 0%, 100% 0%, 100% 95%,
    97% 96%, 94% 98%, 91% 95%, 88% 97%, 85% 94%, 82% 97%,
    79% 95%, 76% 98%, 73% 95%, 70% 97%, 67% 94%, 64% 97%,
    61% 95%, 58% 98%, 55% 95%, 52% 97%, 49% 94%, 46% 97%,
    43% 95%, 40% 98%, 37% 95%, 34% 97%, 31% 94%, 28% 97%,
    25% 95%, 22% 98%, 19% 95%, 16% 97%, 13% 94%, 10% 97%,
    7% 95%, 4% 98%, 0% 96%
  )`

  const handleClick = () => {
    if (onOpenStory) onOpenStory(anecdote.story)
  }

  return (
    <div
      className="relative inline-block cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
      style={{
        transform: `rotate(${v.rotate}deg)`,
        marginLeft: v.offsetX,
        maxWidth: 340,
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick() }}
      aria-label={`Read the full story`}
    >
      {/* The paper scrap */}
      <div
        className="relative"
        style={{
          clipPath: v.tearSide === 'right' ? tearRight : tearBottom,
        }}
      >
        {/* Base paper colour — aged, yellowed */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#3D3529',
          }}
        />

        {/* Paper texture — mottled patches */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              `radial-gradient(ellipse at ${v.stainX} ${v.stainY}, rgba(90,75,55,0.5) 0%, transparent 50%)`,
              'radial-gradient(ellipse at 15% 20%, rgba(60,52,40,0.4) 0%, transparent 40%)',
              'radial-gradient(ellipse at 85% 80%, rgba(70,60,45,0.3) 0%, transparent 45%)',
            ].join(', '),
          }}
        />

        {/* Coffee/water stain ring */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 60,
            height: 60,
            left: v.stainX,
            top: v.stainY,
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(120,90,50,0.12)',
            background: 'radial-gradient(ellipse at center, rgba(100,80,45,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Dirt / smudge marks */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'linear-gradient(125deg, transparent 30%, rgba(50,42,30,0.25) 50%, transparent 70%)',
              'linear-gradient(240deg, transparent 40%, rgba(80,65,45,0.15) 55%, transparent 65%)',
            ].join(', '),
          }}
        />

        {/* Crease / fold line — angled */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            bottom: '-10%',
            left: '38%',
            width: 1,
            background: 'linear-gradient(180deg, transparent 10%, rgba(80,65,45,0.25) 40%, rgba(80,65,45,0.15) 60%, transparent 90%)',
            transform: `rotate(${v.creaseAngle}deg)`,
          }}
        />

        {/* Edge darkening — handling wear */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 15px rgba(30,25,18,0.4), inset 0 0 4px rgba(30,25,18,0.3)',
          }}
        />

        {/* Faint ruled lines */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ opacity: 0.06 }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-px"
              style={{
                backgroundColor: '#8B7E6A',
                marginTop: i === 0 ? 16 : 20,
              }}
            />
          ))}
        </div>

        {/* The scribbled text */}
        <div
          className="relative px-5 py-4"
          style={{
            opacity: quiet ? 0.65 : 0.85,
          }}
        >
          {lines.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: quiet ? '1rem' : '1.2rem',
                lineHeight: 1.7,
                color: '#D4C5B0',
                transform: i > 0 ? `translateX(${2 + i * 3}px)` : undefined,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Drop shadow beneath the scrap */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translate(3px, 3px) rotate(${v.rotate * 0.3}deg)`,
          backgroundColor: 'rgba(15,12,8,0.3)',
          filter: 'blur(6px)',
          clipPath: v.tearSide === 'right' ? tearRight : tearBottom,
        }}
      />
    </div>
  )
}
