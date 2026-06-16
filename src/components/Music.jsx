import useFadeIn from './useFadeIn'
import AnecdoteFragment from './AnecdoteFragment'

const TRACKS = [
  {
    title: 'Hard Times',
    sunoId: 'bd7fb783-b209-468b-82eb-5d615573f3dc',
  },
  {
    title: 'Devil Dance',
    sunoId: '1c21aa03-ecfa-45c3-84b8-1910696fb614',
  },
]

const PLATFORMS = [
  { name: 'Spotify', href: '#' },
  { name: 'Apple Music', href: '#' },
  { name: 'Bandcamp', href: '#' },
  { name: 'YouTube Music', href: '#' },
  { name: 'Amazon Music', href: '#' },
]

function TrackEmbed({ title, sunoId }) {
  return (
    <div
      className="relative border border-shadow-grey/40 p-6 sm:p-8"
      style={{
        background: 'linear-gradient(135deg, rgba(58,50,38,0.15) 0%, transparent 100%)',
      }}
    >
      {/* Corner mark */}
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-shadow-grey/30 translate-x-1.5 -translate-y-1.5" />

      <p className="font-heading text-parchment-whisper text-lg tracking-wide mb-4">
        {title}
      </p>

      <iframe
        src={`https://suno.com/embed/${sunoId}`}
        width="100%"
        height="150"
        frameBorder="0"
        allow="autoplay"
        title={`${title} — The Great Howl`}
        loading="lazy"
        style={{
          border: 'none',
          filter: 'grayscale(55%) sepia(35%) saturate(0.7) brightness(0.82) contrast(1.04)',
        }}
      />
    </div>
  )
}

export default function Music({ onOpenStory }) {
  const ref = useFadeIn()

  return (
    <section
      id="listen"
      className="relative py-[140px] sm:py-[160px]"
      style={{ backgroundColor: '#1C1C1A' }}
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 20% 80%, rgba(58,50,38,0.2) 0%, transparent 55%)',
            'radial-gradient(ellipse at 85% 20%, rgba(74,93,84,0.06) 0%, transparent 45%)',
          ].join(', '),
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12">
        <h2 className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] mb-14 text-xl sm:text-2xl text-right pr-[5%]">
          Listen
        </h2>

        {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {TRACKS.map((track) => (
            <TrackEmbed key={track.sunoId} {...track} />
          ))}
        </div>

        {/* Marginal fragment — chord */}
        <div className="mb-14 flex justify-end pr-[5%]">
          <AnecdoteFragment id="chord_1" onOpenStory={onOpenStory} />
        </div>

        {/* Divider */}
        <div
          className="w-[30%] max-w-[200px] h-px mb-12"
          style={{
            background: 'linear-gradient(90deg, #5C5449, transparent)',
            opacity: 0.3,
          }}
        />

        {/* Streaming links */}
        <nav aria-label="Streaming platforms">
          <h3 className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-6">
            Find the music
          </h3>
          <ul className="space-y-4">
            {PLATFORMS.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body font-normal text-[1.02rem] tracking-wide text-dust-bone hover:text-rust pl-0 hover:pl-1.5 transition-all duration-300"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
