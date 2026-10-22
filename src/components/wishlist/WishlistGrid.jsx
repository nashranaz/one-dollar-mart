import ProductGrid from '../products/ProductGrid'

export default function WishlistGrid({ wishlist, onAdd, onToggleWishlist, onQuickView }) {
  return <ProductGrid products={wishlist} onAdd={onAdd} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onQuickView={onQuickView} className="wishlist-grid" />
}
