import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { useCart } from '../../context/cartStore'
import { useWishlist } from '../../context/wishlistStore'
import SectionHeading from '../common/SectionHeading'
import ProductGrid from '../products/ProductGrid'

export default function FeaturedProducts({ onQuickView }) {
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()
  const featured = [products[5], products[16], products[12]]
  return (
    <section className="featured-section section-shell">
      <SectionHeading kicker="GOOD THINGS, GREAT PRICES" title={<>A few little <em>favourites.</em></>} link="/shop" linkText="Shop all finds" />
      <ProductGrid products={featured} onAdd={addToCart} onToggleWishlist={toggleWishlist} wishlist={wishlist} onQuickView={onQuickView} className="featured-grid">
        <div className="featured-note"><span>✳</span><p>Small joys.<br /><em>Big everyday energy.</em></p><Link to="/shop">Find your thing <ArrowRight size={15} /></Link></div>
      </ProductGrid>
    </section>
  )
}
