import { useEffect, useMemo, useState } from 'react'
import { readStorage } from '../utils/format'
import { WishlistContext } from './wishlistStore'

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => readStorage('odm-wishlist', []))

  useEffect(() => {
    localStorage.setItem('odm-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const actions = useMemo(() => ({
    wishlist,
    toggleWishlist(product) {
      setWishlist((current) => current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product])
    },
  }), [wishlist])

  return <WishlistContext.Provider value={actions}>{children}</WishlistContext.Provider>
}
