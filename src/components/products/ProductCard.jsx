import { motion } from 'framer-motion'
import { ArrowUpRight, Heart, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { money } from '../../utils/format'
import ProductRating from './ProductRating'

export default function ProductCard({ product, index = 0, onAdd, onToggleWishlist, isWishlisted, onQuickView }) {
  const discount = Math.round((1 - product.price / product.oldPrice) * 100)
  const fallback = '/products/product-fallback.svg'

  return (
    <motion.article className="product-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: (index % 4) * 0.055, duration: 0.35 }}>
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.title}`}>
          <img className={product.imageFit === 'contain' ? 'image-contain' : ''} src={product.image} alt={product.title} loading="lazy" onError={(event) => { event.currentTarget.src = fallback }} />
        </Link>
        {product.badge && <span className={`product-badge ${product.badge === 'HOT DEAL' ? 'badge-hot' : ''}`}>{product.badge}</span>}
        <span className="discount-tag">-{discount}%</span>
        <button className={`wishlist-button ${isWishlisted ? 'is-liked' : ''}`} aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'} onClick={() => onToggleWishlist(product)}>
          <Heart size={17} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
        {onQuickView && <button className="quick-view-button" onClick={() => onQuickView(product)}>Quick peek <ArrowUpRight size={13} /></button>}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link className="product-title" to={`/product/${product.id}`}>{product.title}</Link>
        <ProductRating rating={product.rating} reviews={product.reviews} />
        <div className="product-bottom">
          <span className="product-price">{money(product.price)}<del>{money(product.oldPrice)}</del></span>
          <button className="add-button" aria-label={`Add ${product.title} to cart`} onClick={() => onAdd(product)}><Plus size={17} /></button>
        </div>
      </div>
    </motion.article>
  )
}
