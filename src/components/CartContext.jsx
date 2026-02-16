import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext()

function loadCart() {
  try {
    const saved = localStorage.getItem('tgh-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('tgh-cart', JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((i) => i.id !== id))
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    )
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, isOpen, addItem, removeItem, updateQty, openCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
