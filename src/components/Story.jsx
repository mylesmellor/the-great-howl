import useFadeIn from './useFadeIn'
import RopeCircle from './RopeCircle'
import Editable from './Editable'

export default function Story() {
  const ref = useFadeIn()

  return (
    <section
      id="story"
      className="relative py-20 sm:py-24"
      style={{ backgroundColor: '#3A3226' }}
    >
      {/* Warm texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 70% 25%, rgba(28,28,26,0.3) 0%, transparent 55%)',
            'radial-gradient(ellipse at 10% 85%, rgba(28,28,26,0.2) 0%, transparent 50%)',
            'linear-gradient(180deg, rgba(28,28,26,0.12) 0%, transparent 15%, transparent 85%, rgba(28,28,26,0.12) 100%)',
          ].join(', '),
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12 flex items-start justify-between gap-12 lg:gap-20"
      >
        {/* Text block */}
        <div className="max-w-[600px] relative">
          {/* Thin decorative line */}
          <div
            className="absolute -left-6 top-16 w-px h-[100px] hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, transparent, #5C5449, transparent)',
              opacity: 0.3,
            }}
          />

          <Editable
            as="h2"
            storageKey="story-heading"
            className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] mb-12 text-xl sm:text-2xl"
          >
            The Story
          </Editable>

          <div className="space-y-[2em]">
            <Editable
              as="p"
              storageKey="story-p1"
              className="text-pale-cream font-light leading-[2] text-[0.98rem] sm:text-[1.05rem] opacity-90"
            >
              For twenty years, someone made songs alone&mdash;never intending to
              share them, convinced they weren&rsquo;t worth hearing. Not
              masterpieces. Just quiet attempts to make sense of watching life
              happen from the edges.
            </Editable>
            <Editable
              as="p"
              storageKey="story-p2"
              className="text-pale-cream font-light leading-[2] text-[0.98rem] sm:text-[1.05rem] opacity-90"
            >
              The Great Howl is what happens when you stop waiting to be ready.
              These songs aren&rsquo;t polished. They&rsquo;re honest.
              They&rsquo;re what isolation sounds like when it finally speaks.
            </Editable>
            <Editable
              as="p"
              storageKey="story-p3"
              className="text-pale-cream font-light leading-[2] text-[0.98rem] sm:text-[1.05rem] opacity-90"
            >
              This is for everyone who&rsquo;s afraid their voice doesn&rsquo;t
              matter. For everyone who creates in private, convinced it&rsquo;s
              not enough.
            </Editable>
            <Editable
              as="p"
              storageKey="story-p4"
              className="text-parchment-whisper font-normal leading-[2] text-[0.98rem] sm:text-[1.05rem]"
            >
              You don&rsquo;t have to be great to deserve to be heard. You just
              have to stop letting fear decide.
            </Editable>
          </div>
        </div>

        {/* Guitarist under single light */}
        <div className="hidden lg:block shrink-0 mt-4 max-w-[300px] relative">
          <img
            src="/images/guitarist.png"
            alt="A man playing acoustic guitar alone under a single hanging light"
            className="w-full border border-shadow-grey/30"
            style={{
              filter: 'grayscale(20%) contrast(0.95) sepia(8%)',
              opacity: 0.8,
            }}
          />
          {/* Worn / faded corner — top right */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '35%',
              height: '30%',
              background: 'radial-gradient(ellipse at 100% 0%, rgba(58,50,38,0.85) 0%, rgba(58,50,38,0.5) 30%, transparent 70%)',
            }}
          />
          {/* Light scuff marks across the corner */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '25%',
              height: '20%',
              background: [
                'linear-gradient(205deg, rgba(139,126,106,0.3) 0%, transparent 40%)',
                'linear-gradient(215deg, rgba(139,126,106,0.15) 5%, transparent 35%)',
                'linear-gradient(195deg, rgba(139,126,106,0.2) 2%, transparent 30%)',
              ].join(', '),
            }}
          />
          {/* Worn edge fade — bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none h-[15%]"
            style={{
              background: 'linear-gradient(0deg, rgba(58,50,38,0.4) 0%, transparent 100%)',
            }}
          />
          {/* Corner crease line */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '22%',
              height: '18%',
              borderBottom: '1px solid rgba(139,126,106,0.2)',
              transform: 'rotate(-38deg)',
              transformOrigin: '100% 0%',
            }}
          />
          {/* Overall worn texture — subtle noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 20% 90%, rgba(58,50,38,0.25) 0%, transparent 50%)',
              mixBlendMode: 'multiply',
            }}
          />
        </div>
      </div>
    </section>
  )
}
