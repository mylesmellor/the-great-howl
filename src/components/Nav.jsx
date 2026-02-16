import { useState, useEffect } from 'react'
import { useCart } from './CartContext'

const LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Listen', href: '#listen' },
  { label: 'Shop', href: '#shop' },
  { label: 'Connect', href: '#connect' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(28,28,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(92,84,73,0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading font-semibold text-parchment-whisper text-sm tracking-[0.12em] uppercase border-none hover:border-none hover:text-parchment-whisper opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          The Great Howl
        </a>

        {/* Desktop links + cart */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body font-normal text-xs tracking-[0.1em] uppercase text-dust-bone hover:text-rust transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart button */}
          <button
            onClick={openCart}
            className="bg-transparent border-none font-body font-normal text-xs tracking-[0.1em] uppercase text-dust-bone hover:text-rust transition-colors duration-300 cursor-pointer relative"
            aria-label={`Cart, ${itemCount} items`}
          >
            Cart{itemCount > 0 && (
              <span className="text-rust ml-1">({itemCount})</span>
            )}
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="sm:hidden flex items-center gap-4">
          <button
            onClick={openCart}
            className="bg-transparent border-none font-body text-xs text-dust-bone hover:text-rust transition-colors duration-300 cursor-pointer"
            aria-label={`Cart, ${itemCount} items`}
          >
            Cart{itemCount > 0 && (
              <span className="text-rust ml-1">({itemCount})</span>
            )}
          </button>

          <button
            className="bg-transparent border-none p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <path
                d={menuOpen ? 'M2 2L18 12M2 12L18 2' : 'M0 1h20M0 7h20M0 13h20'}
                stroke="#8B7E6A"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden px-6 pb-6 pt-2"
          style={{ backgroundColor: 'rgba(28,28,26,0.96)' }}
        >
          <ul className="space-y-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body font-normal text-sm tracking-[0.08em] uppercase text-dust-bone hover:text-rust transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
