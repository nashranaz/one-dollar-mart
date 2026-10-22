import { useOutletContext } from 'react-router-dom'
import { useCart } from '../context/cartStore'
import { useWishlist } from '../context/wishlistStore'
import EmptyWishlist from '../components/wishlist/EmptyWishlist'
import WishlistGrid from '../components/wishlist/WishlistGrid'

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { openQuickView } = useOutletContext()
  return (
    <section className="wishlist-page section-shell">
      <div className="eyebrow"><span className="eyebrow-dot" /> YOUR LITTLE LOVE LIST</div>
      <h1>Things you <em>love.</em></h1>
      <p className="page-intro">Keep all your “maybe later” little favourites in one happy place.</p>
      {wishlist.length
        ? <WishlistGrid wishlist={wishlist} onAdd={addToCart} onToggleWishlist={toggleWishlist} onQuickView={openQuickView} />
        : <EmptyWishlist />}
    </section>
  )
}
