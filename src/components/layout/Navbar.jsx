import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartStore'
import { useWishlist } from '../../context/wishlistStore'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const closeMenu = () => {
    setMobileOpen(false)
    setSearchOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <button className="mobile-menu icon-button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link className="brand" to="/" aria-label="One Dollar Mart home">
          <span className="brand-mark">💸</span>
          <span className="brand-copy"><b>ONE DOLLAR</b><small>MART<span>.</span></small></span>
        </Link>
        <MobileMenu open={mobileOpen} onNavigate={closeMenu} />
        <div className="nav-actions">
          <button className="icon-button search-trigger" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><Search size={19} /></button>
          <Link className="icon-button wishlist-nav" to="/wishlist" aria-label="Wishlist"><Heart size={19} /><span className="nav-count">{wishlist.length}</span></Link>
          <Link className="icon-button cart-nav" to="/cart" aria-label="Shopping cart"><ShoppingBag size={19} /><span className="nav-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span></Link>
          <Link className="nav-shop-button" to="/shop">Shop now <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <AnimatePresence>{searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}</AnimatePresence>
    </header>
  )
}
