import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductGrid from '../products/ProductGrid'

export default function CategoryProductSection({ category, products, onAdd, onToggleWishlist, wishlist, onQuickView, title = category.name }) {
  if (!products.length) return null
  return (
    <section className="featured-section section-shell category-products-section">
      <div className="section-heading">
        <div><div className="eyebrow"><span className="eyebrow-dot" /> {title.toUpperCase()} FINDS</div><h2>{title} <em>favourites.</em></h2></div>
        <Link className="text-link heading-link" to={`/shop?category=${encodeURIComponent(category.name)}`}>View all <ArrowRight size={16} /></Link>
      </div>
      <ProductGrid products={products} onAdd={onAdd} onToggleWishlist={onToggleWishlist} wishlist={wishlist} onQuickView={onQuickView} />
    </section>
  )
}
