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
      className="relative py-20 sm:py-24"
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
        {/* Heading + marginal fragment on one line */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 mb-8">
          <h2 className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] text-xl sm:text-2xl">
            Listen
          </h2>
          <AnecdoteFragment id="chord_1" inline onOpenStory={onOpenStory} />
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRACKS.map((track) => (
            <TrackEmbed key={track.sunoId} {...track} />
          ))}
        </div>
      </div>
    </section>
  )
}
