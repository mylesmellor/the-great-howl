import { useEffect, useRef } from 'react'
import useFadeIn from './useFadeIn'

// A quiet film section — the written lines, set in motion. Plays (muted)
// when scrolled into view, pauses when it leaves. The MP4 is already
// authored in the Great Howl palette, so no colour filter is applied.
export default function Film() {
  const sectionRef = useFadeIn()
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.4 }
    )
    obs.observe(v)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="watch" className="relative py-20 sm:py-24" style={{ backgroundColor: '#1C1C1A' }}>
      {/* Atmospheric gradient — matches the Listen / Manifesto sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 80% 80%, rgba(58,50,38,0.22) 0%, transparent 55%)',
            'radial-gradient(ellipse at 15% 20%, rgba(162,99,59,0.05) 0%, transparent 45%)',
          ].join(', '),
        }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-8">
          <h2 className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] text-xl sm:text-2xl">
            Watch
          </h2>
          <p className="font-body text-dust-bone text-sm sm:text-base tracking-wide italic">
            The words, set in motion.
          </p>
        </div>

        <div
          className="relative border border-shadow-grey/40"
          style={{ background: 'linear-gradient(135deg, rgba(58,50,38,0.15) 0%, transparent 100%)' }}
        >
          {/* Corner mark — echoes the track embeds */}
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-shadow-grey/30 translate-x-1.5 -translate-y-1.5 z-10" />

          <video
            ref={videoRef}
            className="block w-full"
            style={{ aspectRatio: '16 / 9' }}
            src="/video/the-great-howl-lyric.mp4"
            poster="/images/the-great-howl-lyric-poster.png"
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
      </div>
    </section>
  )
}
