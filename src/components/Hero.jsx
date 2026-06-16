import TextureCanvas from './TextureCanvas'
import Editable from './Editable'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end items-start overflow-hidden"
      style={{ backgroundColor: '#1C1C1A', filter: 'grayscale(20%)' }}
    >
      {/* Wood texture background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/wood-texture.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.5,
            filter: 'grayscale(30%) brightness(0.6) sepia(10%)',
          }}
        />
      </div>

      {/* Atmospheric color layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 12% 85%, rgba(162,99,59,0.09) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 15%, rgba(74,93,84,0.06) 0%, transparent 40%)',
            'radial-gradient(ellipse at 35% 55%, rgba(58,50,38,0.2) 0%, transparent 50%)',
            'linear-gradient(180deg, rgba(12,12,10,0.4) 0%, transparent 25%, transparent 75%, rgba(12,12,10,0.2) 100%)',
          ].join(', '),
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(12,12,10,0.5) 75%, rgba(12,12,10,0.8) 100%)',
        }}
      />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,197,176,0.4) 2px, rgba(212,197,176,0.4) 3px)',
        }}
      />

      {/* Rope circle logo — positioned upper right */}
      <div className="absolute z-[2] top-[18%] right-[8%] sm:right-[12%] pointer-events-none">
        <img
          src="/images/rope-logo.png"
          alt=""
          aria-hidden="true"
          className="w-[140px] sm:w-[200px] lg:w-[260px] opacity-[0.16] rotate-[6deg]"
          style={{
            filter: 'grayscale(40%) brightness(0.7) sepia(15%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 sm:px-12 pb-[12vh] ml-[5%] sm:ml-[8%]">
        <Editable
          as="h1"
          storageKey="hero-title"
          className="hero-title font-heading font-bold uppercase tracking-[0.14em] leading-[1.05] mb-5 text-parchment-whisper"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            transform: 'rotate(-0.4deg)',
            textShadow:
              '2px 2px 0px rgba(28,28,26,0.8), -1px -1px 0px rgba(28,28,26,0.4), 0 0 40px rgba(162,99,59,0.05)',
          }}
        >
          The Great<br />Howl
        </Editable>
        <Editable
          as="p"
          storageKey="hero-tagline"
          className="font-body font-light tracking-wide leading-relaxed max-w-[420px] text-parchment-whisper"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.12rem)', opacity: 0.7 }}
        >
          Songs written in private. Finally said out loud.
        </Editable>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[drift_3.5s_ease-in-out_infinite]">
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none" aria-hidden="true">
          <path
            d="M9 3L9 21M4 16L9 21L14 16"
            stroke="#4A5D54"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.6; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 1; letter-spacing: 0.14em; }
          50% { opacity: 0.88; letter-spacing: 0.16em; }
        }
        .hero-title {
          animation: breathe 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
