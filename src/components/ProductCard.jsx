import { useCart } from './CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const soldOut = product.inventory === 0
  const limited = product.inventory > 0 && product.inventory <= 20

  return (
    <article className="group">
      {/* Image */}
      <div
        className="border border-shadow-grey/30 overflow-hidden transition-all duration-500 group-hover:border-shadow-grey/60"
      >
        <img
          src={product.image}
          alt={product.alt || product.name}
          className="w-full h-auto transition-opacity duration-500 group-hover:opacity-[0.92]"
          style={{
            filter: 'grayscale(15%) sepia(8%) brightness(0.9)',
          }}
        />
      </div>

      {/* Details */}
      <div className="mt-5">
        <h3 className="font-heading font-normal text-parchment-whisper text-lg sm:text-xl tracking-wide leading-snug">
          {product.name}
        </h3>

        <p className="font-body font-light text-dust-bone text-sm leading-relaxed mt-2 max-w-[380px]">
          {product.description}
        </p>

        <div className="flex items-center gap-5 mt-4">
          <span className="font-body font-medium text-pale-cream text-base tracking-wide">
            ${product.price.toFixed(2)}
          </span>

          {soldOut && (
            <span className="font-body text-rust text-xs tracking-[0.08em] uppercase">
              Sold out
            </span>
          )}
          {limited && !soldOut && (
            <span className="font-body text-faded-moss text-xs tracking-[0.08em] uppercase">
              Limited: {product.inventory} remaining
            </span>
          )}
          {product.preorder && (
            <span className="font-body text-faded-moss text-xs tracking-[0.08em] uppercase">
              Pre-order
            </span>
          )}
        </div>

        <button
          onClick={() => addItem(product)}
          disabled={soldOut}
          className="mt-5 bg-transparent border border-shadow-grey px-6 py-3 font-body font-normal text-dust-bone text-xs tracking-[0.08em] uppercase cursor-pointer transition-all duration-300 hover:border-rust hover:text-rust disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-shadow-grey disabled:hover:text-dust-bone"
        >
          {soldOut ? 'Sold Out' : product.preorder ? 'Pre-order' : 'Add'}
        </button>
      </div>
    </article>
  )
}
