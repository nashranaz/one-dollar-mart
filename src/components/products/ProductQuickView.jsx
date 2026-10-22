import { motion } from 'framer-motion'
import { ArrowRight, Heart, ShoppingBag, Star, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { money } from '../../utils/format'

export default function ProductQuickView({ product, onClose, onAdd, onToggleWishlist, isWishlisted }) {
  const fallback = '/products/product-fallback.svg'
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="quick-view-modal" initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close quick view"><X size={19} /></button>
        <div className="quick-image"><img className={product.imageFit === 'contain' ? 'image-contain' : ''} src={product.image} alt={product.title} onError={(event) => { event.currentTarget.src = fallback }} /></div>
        <div className="quick-copy">
          <span className="product-category">{product.category}</span>
          <h2>{product.title}</h2>
          <div className="product-rating"><Star size={13} fill="currentColor" /><b>{product.rating}</b><span>({product.reviews} happy reviews)</span></div>
          <p>{product.description}</p>
          <div className="quick-price">{money(product.price)} <del>{money(product.oldPrice)}</del></div>
          <button className="button button-dark" onClick={() => { onAdd(product); onClose() }}><ShoppingBag size={16} /> Add to bag</button>
          <button className={`quick-wish ${isWishlisted ? 'is-liked' : ''}`} onClick={() => onToggleWishlist(product)}><Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} /> {isWishlisted ? 'Saved to your love list' : 'Save for later'}</button>
          <Link to={`/product/${product.id}`} onClick={onClose} className="text-link">See all the details <ArrowRight size={15} /></Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
