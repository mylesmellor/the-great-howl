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
        className="relative z-10 max-w-[520px] w-full mx-6 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper background */}
        <div
          className="relative px-8 sm:px-12 py-10 sm:py-14"
          style={{
            backgroundColor: '#332C22',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 1px rgba(139,126,106,0.15)',
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
