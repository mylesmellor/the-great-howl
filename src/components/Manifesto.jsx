import useFadeIn from './useFadeIn'
import Editable from './Editable'

export default function Manifesto() {
  const ref = useFadeIn()

  return (
    <section
      id="manifesto"
      className="relative py-24 sm:py-28 text-center"
      style={{ backgroundColor: '#3A3226' }}
    >
      {/* Background image — dirt road */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/dirt-road.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.45,
            filter: 'grayscale(30%) brightness(0.5) sepia(10%)',
          }}
        />
      </div>

      {/* Dark overlay to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(28,28,26,0.4) 0%, rgba(28,28,26,0.7) 100%)',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 py-14 border-t border-b"
        style={{ borderColor: 'rgba(92,84,73,0.3)' }}
      >
        {/* Corner marks */}
        <div className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t border-l border-dust-bone/25" />
        <div className="absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b border-r border-dust-bone/25" />

        <blockquote>
          <Editable
            as="p"
            storageKey="manifesto-quote"
            className="font-heading font-normal italic text-parchment-whisper leading-[1.65] tracking-wide"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
              textShadow: '0 0 60px rgba(162,99,59,0.07)',
            }}
          >
            This isn&rsquo;t about being good.<br />
            This is about refusing to stay silent.
          </Editable>
        </blockquote>
      </div>
    </section>
  )
}
