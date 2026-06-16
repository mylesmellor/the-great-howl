import useFadeIn from './useFadeIn'
import Editable from './Editable'
import ProductCard from './ProductCard'

const PRODUCTS = [
  {
    id: 'cassette-year-12',
    name: 'Twenty Years: Year 12/20',
    description: 'Hand-numbered cassette. Songs from 2015. Recorded in isolation. Released in defiance of fear. Edition of 100.',
    price: 18.00,
    inventory: 47,
    image: '/images/cassette.png',
    alt: 'Hand-labeled cassette tapes with canvas drawstring pouch on dark wood',
  },
  {
    id: 'lyric-journal',
    name: 'Songs I Almost Deleted',
    description: 'Kraft paper. Rope binding. Space for what you\'re not ready to share. Each journal unique. Coffee stains included.',
    price: 24.00,
    inventory: 23,
    image: '/images/journal.png',
    alt: 'Open kraft paper journal with handwritten lyrics and coffee ring stain',
  },
  {
    id: 'rope-bracelet',
    name: 'Frayed Rope Bracelet',
    description: 'Hemp rope. Metal tag stamped "Keep going." For people who understand.',
    price: 12.00,
    inventory: 150,
    image: '/images/bracelet.png',
    alt: 'Hemp rope bracelet with stamped metal tag reading Keep going',
  },
  {
    id: 'average-songs-sweatshirt',
    name: 'Average Songs Sweatshirt',
    description: 'Vintage-washed. "Average songs from an average person" printed small. Frayed rope circle on the back.',
    price: 48.00,
    inventory: 34,
    image: '/images/sweatshirt.png',
    alt: 'Dark washed sweatshirt front and back with small text and rope circle logo',
  },
  {
    id: '3am-thoughts-mug',
    name: '3am Thoughts Mug',
    description: 'Speckled enamel. "3am thoughts / 48 years late." Rope circle. Made for late nights.',
    price: 16.00,
    inventory: 0,
    image: '/images/mug.png',
    alt: 'Speckled enamel mug with steam, reading 3am thoughts 48 years late',
  },
  {
    id: 'living-ghost-bookmark',
    name: 'Living Ghost Bookmark',
    description: 'Pressed flower on parchment. "This is how the living ghost survives." Tied with twine.',
    price: 8.00,
    inventory: 15,
    image: '/images/bookmark.png',
    alt: 'Parchment bookmark with pressed flower and typewriter text tied with twine',
  },
  {
    id: 'rope-circle-hoodie',
    name: 'Rope Circle Hoodie',
    description: 'Washed olive. Rope circle emblem. Dark beanie sold separately. For disappearing into.',
    price: 55.00,
    inventory: 28,
    image: '/images/hoodie-collage.png',
    alt: 'Olive hoodie with rope circle, dark beanie, brass belt buckle, and pin on dark wood',
  },
  {
    id: 'canvas-chore-jacket',
    name: 'Canvas Chore Jacket',
    description: 'Natural canvas. Rope circle on the chest. Lyrics printed on the inner lining. Worn in before you own it.',
    price: 85.00,
    inventory: 12,
    image: '/images/chore-jacket.png',
    alt: 'Natural canvas chore jacket on wooden hanger with rope circle and printed lining',
  },
  {
    id: 'song-scraps-roll',
    name: 'Song Scraps Roll',
    description: 'Canvas tool roll with pockets. Comes with kraft notebook, wooden guitar picks, blank cassette, and hand-drawn chord chart.',
    price: 36.00,
    inventory: 20,
    image: '/images/song-scraps.png',
    alt: 'Canvas roll with song scraps notebook, wooden picks, cassette, and chord chart on dark wood',
  },
  {
    id: 'howl-matchbooks',
    name: 'Howl Matchbooks',
    description: 'Set of 4. Rope circle on the cover. Strike anywhere. For lighting the way or burning the drafts.',
    price: 10.00,
    inventory: 75,
    image: '/images/matchbooks.png',
    alt: 'Parchment matchbook with rope circle on cover, open to show matches and printed text inside',
  },
]

export default function Shop() {
  const ref = useFadeIn()

  return (
    <section
      id="shop"
      className="relative py-20 sm:py-24"
      style={{ backgroundColor: '#1C1C1A' }}
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 75% 20%, rgba(58,50,38,0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 15% 75%, rgba(74,93,84,0.06) 0%, transparent 45%)',
          ].join(', '),
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12">
        {/* Hero / Intro */}
        <div ref={ref} className="mb-12 sm:mb-16 max-w-[600px]">
          <Editable
            as="h2"
            storageKey="shop-heading"
            className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] mb-8 text-xl sm:text-2xl"
          >
            Things We Made
          </Editable>

          <Editable
            as="p"
            storageKey="shop-intro-1"
            className="font-body font-light text-dust-bone text-sm sm:text-[0.95rem] leading-[1.9] mb-4"
          >
            Not merchandise. Reminders.
          </Editable>
          <Editable
            as="p"
            storageKey="shop-intro-2"
            className="font-body font-light text-dust-bone text-sm sm:text-[0.95rem] leading-[1.9] mb-4"
          >
            Each piece made with the same imperfection as the songs. Limited. Humble. Honest.
          </Editable>
          <Editable
            as="p"
            storageKey="shop-intro-3"
            className="font-body font-light text-dust-bone text-xs sm:text-sm leading-[1.8]"
          >
            A portion of proceeds supports organizations helping people find courage to create.
          </Editable>
        </div>

        {/* Product Grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-16 sm:gap-y-20">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* About the merch */}
        <div className="mt-16 sm:mt-20 max-w-[500px]">
          <div
            className="h-px w-[30%] max-w-[120px] mb-8"
            style={{
              background: 'linear-gradient(90deg, #5C5449, transparent)',
              opacity: 0.3,
            }}
          />

          <Editable
            as="h3"
            storageKey="shop-about-heading"
            className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-5"
          >
            Made Carefully
          </Editable>
          <Editable
            as="p"
            storageKey="shop-about-p1"
            className="font-body font-light text-pale-cream/80 text-sm leading-[1.9] mb-4"
          >
            Everything is produced in small batches. Hand-numbered when possible. Packaged with care in kraft paper and twine.
          </Editable>
          <Editable
            as="p"
            storageKey="shop-about-p2"
            className="font-body font-light text-pale-cream/80 text-sm leading-[1.9]"
          >
            Each order ships with a handwritten note. We don't make things perfect. We make them honest.
          </Editable>
        </div>

        {/* Shipping & Returns */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[700px]">
          <div>
            <h4 className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-4">
              Shipping
            </h4>
            <p className="font-body font-light text-dust-bone text-xs leading-[1.8]">
              Domestic: 5–10 business days<br />
              International: 10–20 business days<br />
              Tracking provided. Imperfect packaging is intentional.
            </p>
          </div>
          <div>
            <h4 className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-4">
              Returns
            </h4>
            <p className="font-body font-light text-dust-bone text-xs leading-[1.8]">
              If something arrives damaged, let us know. We'll make it right.<br />
              Otherwise, all sales final. These are limited runs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
