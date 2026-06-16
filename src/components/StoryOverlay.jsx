import { useEffect } from 'react'
import { getStory } from '../content/stories'

export default function StoryOverlay({ storyId, onClose }) {
  const story = getStory(storyId)

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!story) return null

  // Deckle / torn-page edge — subtle jitter so the box reads as paper, not a dialog
  const tornPage = `polygon(
    0.6% 0.5%, 12% 0%, 28% 0.8%, 45% 0.2%, 62% 0.9%, 80% 0.1%, 99% 0.6%,
    99.4% 14%, 98.8% 30%, 99.6% 46%, 98.9% 62%, 99.5% 78%, 99% 92%,
    99.4% 99.5%, 82% 99%, 64% 99.7%, 46% 99.1%, 28% 99.8%, 12% 99.2%, 0.6% 99.5%,
    0.4% 84%, 1% 68%, 0.3% 52%, 0.9% 36%, 0.4% 20%, 0.8% 6%
  )`

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(12,12,10,0.92)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-[460px] w-full mx-6"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: 'rotate(-0.8deg)' }}
      >
        {/* Drop shadow beneath the page — sits like a note on the surface */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            transform: 'translate(4px, 6px)',
            backgroundColor: 'rgba(10,8,5,0.5)',
            filter: 'blur(10px)',
            clipPath: tornPage,
          }}
        />

        {/* Paper background — torn page */}
        <div
          className="relative px-8 sm:px-12 pt-10 sm:pt-12 pb-8 sm:pb-9 overflow-y-auto max-h-[85vh]"
          style={{
            backgroundColor: '#332C22',
            clipPath: tornPage,
          }}
        >
          {/* Mottled paper texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse at 20% 30%, rgba(70,58,40,0.4) 0%, transparent 50%)',
                'radial-gradient(ellipse at 80% 70%, rgba(60,50,35,0.3) 0%, transparent 45%)',
                'radial-gradient(ellipse at 50% 90%, rgba(80,65,45,0.2) 0%, transparent 40%)',
              ].join(', '),
            }}
          />

          {/* Edge wear */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow:
                'inset 0 0 30px rgba(20,16,10,0.5), inset 0 0 6px rgba(20,16,10,0.3)',
            }}
          />

          {/* Coffee stain */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 80,
              height: 80,
              right: '15%',
              top: '20%',
              border: '2px solid rgba(120,90,50,0.08)',
              background:
                'radial-gradient(ellipse at center, rgba(100,80,45,0.04) 0%, transparent 70%)',
            }}
          />

          {/* Close hint */}
          <button
            onClick={onClose}
            className="absolute top-4 right-5 font-body text-shadow-grey text-xs tracking-wider hover:text-dust-bone transition-colors duration-300 cursor-pointer"
            aria-label="Close"
          >
            esc
          </button>

          {/* Title — small, understated */}
          <p
            className="relative mb-10 font-body font-normal text-dust-bone text-xs tracking-[0.12em] uppercase"
            style={{ opacity: 0.5 }}
          >
            {story.title}
          </p>

          {/* Story lines */}
          <div className="relative space-y-6">
            {story.lines.map((line, i) => {
              // Vary the presentation — some lines are quieter, some shift right
              const isShort = line.length < 20
              const indent = i === 3 || i === 5 ? 16 : 0

              return (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: isShort ? '1.35rem' : '1.2rem',
                    lineHeight: 1.75,
                    color: '#D4C5B0',
                    opacity: isShort ? 0.9 : 0.75,
                    marginLeft: indent,
                    transform:
                      i % 3 === 1
                        ? 'rotate(-0.3deg)'
                        : i % 3 === 2
                          ? 'rotate(0.2deg)'
                          : undefined,
                  }}
                >
                  {line}
                </p>
              )
            })}
          </div>

          {/* Bottom scribble mark — like a pen test */}
          <div
            className="mt-12"
            style={{
              width: 40,
              height: 1,
              background:
                'linear-gradient(90deg, rgba(139,126,106,0.3), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
