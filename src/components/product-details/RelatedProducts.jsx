import { products } from '../../data/products'
import { useCart } from '../../context/cartStore'
import { useWishlist } from '../../context/wishlistStore'
import SectionHeading from '../common/SectionHeading'
import ProductGrid from '../products/ProductGrid'

export default function RelatedProducts({ product, onQuickView }) {
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)
  if (!related.length) return null
  return (
    <section className="related-section">
      <SectionHeading kicker="MORE LITTLE FAVOURITES" title={<>You might also <em>love.</em></>} link={`/shop?category=${encodeURIComponent(product.category)}`} linkText={`More ${product.category}`} />
      <ProductGrid products={related} onAdd={addToCart} onToggleWishlist={toggleWishlist} wishlist={wishlist} onQuickView={onQuickView} />
    </section>
  )
}
