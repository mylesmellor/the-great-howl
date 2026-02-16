import { useCart } from './CartContext'

export default function Cart() {
  const { items, itemCount, subtotal, isOpen, closeCart, updateQty, removeItem } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9990] transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(28,28,26,0.8)' }}
          onClick={closeCart}
        />
      )}

      {/* Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[9991] w-full sm:w-[420px] transition-transform duration-400 ease-in-out overflow-y-auto"
        style={{
          backgroundColor: '#1C1C1A',
          borderLeft: '1px solid rgba(92,84,73,0.2)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6">
          <h2 className="font-heading font-semibold text-parchment-whisper text-lg tracking-[0.08em] uppercase">
            Cart
          </h2>
          <button
            onClick={closeCart}
            className="bg-transparent border-none text-dust-bone text-sm cursor-pointer hover:text-rust transition-colors duration-300 p-1"
            aria-label="Close cart"
          >
            Close
          </button>
        </div>

        {/* Divider */}
        <div className="mx-8 h-px bg-shadow-grey/20" />

        {/* Contents */}
        <div className="px-8 py-6 flex-1">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-body text-dust-bone text-sm leading-relaxed">
                Your cart is empty.
              </p>
              <p className="font-body text-shadow-grey text-xs mt-2">
                Browse what we've made.
              </p>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  {/* Thumbnail */}
                  <div
                    className="w-[60px] h-[60px] shrink-0 border border-shadow-grey/30"
                    style={{
                      backgroundColor: '#3A3226',
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-parchment-whisper text-sm tracking-wide leading-snug">
                      {item.name}
                    </p>
                    <p className="font-body text-pale-cream text-sm mt-1">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="bg-transparent border border-shadow-grey/40 w-7 h-7 flex items-center justify-center text-dust-bone text-xs cursor-pointer hover:border-rust hover:text-rust transition-colors duration-300"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        &minus;
                      </button>
                      <span className="font-body text-pale-cream text-sm w-4 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="bg-transparent border border-shadow-grey/40 w-7 h-7 flex items-center justify-center text-dust-bone text-xs cursor-pointer hover:border-rust hover:text-rust transition-colors duration-300"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-transparent border-none text-shadow-grey text-xs cursor-pointer hover:text-rust transition-colors duration-300 ml-auto"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="px-8 pb-8">
            <div className="h-px bg-shadow-grey/20 mb-6" />

            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-dust-bone text-sm tracking-wide">
                Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
              <span className="font-body font-medium text-pale-cream text-base">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="font-body text-shadow-grey text-xs mb-6">
              Shipping calculated at checkout
            </p>

            <button
              className="w-full py-4 font-body font-normal text-pale-cream text-xs tracking-[0.1em] uppercase cursor-pointer transition-all duration-300 border-none"
              style={{
                backgroundColor: '#4A5D54',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#A2633B')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#4A5D54')}
            >
              Continue to Checkout
            </button>

            <p className="font-body text-shadow-grey text-[10px] text-center mt-4 tracking-wide">
              You'll be taken to secure checkout
            </p>
          </div>
        )}
      </div>
    </>
  )
}
