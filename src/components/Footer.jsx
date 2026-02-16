import AnecdoteFragment from './AnecdoteFragment'

export default function Footer({ onOpenStory }) {
  return (
    <footer className="relative px-6 sm:px-12 py-7" style={{ backgroundColor: '#1C1C1A' }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-6 right-[40%] h-px sm:left-12"
        style={{
          background: 'linear-gradient(90deg, #5C5449, transparent)',
          opacity: 0.2,
        }}
      />
      <div className="mb-5">
        <AnecdoteFragment id="kitchen_4" quiet onOpenStory={onOpenStory} />
      </div>
      <p className="font-body font-light text-shadow-grey text-xs tracking-wider">
        &copy; 2025 The Great Howl. Made in isolation.
      </p>
    </footer>
  )
}
