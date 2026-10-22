import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useCart } from '../../context/cartStore'
import { useWishlist } from '../../context/wishlistStore'
import ProductQuickView from '../products/ProductQuickView'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Navbar from './Navbar'

export default function StoreLayout() {
  const [quickView, setQuickView] = useState(null)
  const location = useLocation()
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <AnnouncementBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
          <Outlet context={{ openQuickView: setQuickView }} />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {quickView && (
          <ProductQuickView
            product={quickView}
            onClose={() => setQuickView(null)}
            onAdd={addToCart}
            onToggleWishlist={toggleWishlist}
            isWishlisted={wishlist.some((item) => item.id === quickView.id)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
