import { useEffect, useMemo, useState } from 'react'
import { readStorage } from '../utils/format'
import { CartContext } from './cartStore'

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage('odm-cart', []))

  useEffect(() => {
    localStorage.setItem('odm-cart', JSON.stringify(cart))
  }, [cart])

  const actions = useMemo(() => ({
    cart,
    addToCart(product, quantity = 1) {
      setCart((current) => {
        const found = current.find((item) => item.id === product.id)
        return found
          ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
          : [...current, { ...product, quantity }]
      })
    },
    updateQuantity(id, quantity) {
      setCart((current) => quantity <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) => item.id === id ? { ...item, quantity } : item))
    },
    clearCart() {
      setCart([])
    },
  }), [cart])

  return <CartContext.Provider value={actions}>{children}</CartContext.Provider>
}
