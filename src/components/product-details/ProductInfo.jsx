import { useState } from 'react'
import { ArrowRight, Check, Heart, ShoppingBag, Star, Truck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cartStore'
import { useWishlist } from '../../context/wishlistStore'
import { money } from '../../utils/format'
import QuantitySelector from '../cart/QuantitySelector'
import ProductDescription from './ProductDescription'

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()
  const navigate = useNavigate()
  const isWishlisted = wishlist.some((item) => item.id === product.id)
  const add = () => {
    addToCart(product, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="detail-copy">
      <div className="eyebrow"><span className="eyebrow-dot" /> {product.category.toUpperCase()} FIND</div>
      <h1>{product.title}</h1>
      <div className="detail-rating">
        <span><Star size={15} fill="currentColor" /> {product.rating}</span>
        <a href="#reviews">{product.reviews} happy reviews</a>
        <i>·</i>
        <span className="stock-note"><span /> Ready to ship</span>
      </div>
      <div className="detail-price">{money(product.price)} <del>{money(product.oldPrice)}</del><span>Save {Math.round((1 - product.price / product.oldPrice) * 100)}%</span></div>
      <ProductDescription product={product} />
      <div className="detail-delivery"><Truck size={17} /><span><b>Delivered with care</b><small>Delivery calculated at checkout. Ships across Pakistan.</small></span></div>
      <div className="detail-actions">
        <QuantitySelector quantity={quantity} onChange={(next) => setQuantity(Math.max(1, next))} />
        <button className={`button button-dark detail-add ${added ? 'added' : ''}`} onClick={add}>
          {added ? <><Check size={17} /> Added to your bag!</> : <><ShoppingBag size={17} /> Add to bag — {money(product.price * quantity)}</>}
        </button>
        <button className={`detail-heart ${isWishlisted ? 'is-liked' : ''}`} aria-label="Toggle wishlist" onClick={() => toggleWishlist(product)}><Heart size={19} fill={isWishlisted ? 'currentColor' : 'none'} /></button>
      </div>
      <div className="detail-assurance"><span>✳ Thoughtfully picked</span><span>✳ Happy little prices</span><span>✳ Secure checkout</span></div>
      <button className="buy-now" onClick={() => { add(); navigate('/cart') }}>Buy it now <ArrowRight size={16} /></button>
    </div>
  )
}
